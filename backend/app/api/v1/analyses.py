from uuid import UUID

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from app.api.v1.deps import get_current_user
from app.api.v1.rate_limit import rate_limiter
from app.core.config import settings
from app.db.session import get_db
from app.models.analysis import Analysis, ExerciseType
from app.models.user import User
from app.schemas.analysis import AnalysisOut, ProgressOut
from app.services.storage import storage_service
from app.workers.tasks import process_analysis

router = APIRouter()


@router.post("", response_model=AnalysisOut, status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(rate_limiter(20, "upload"))])
async def create_analysis(
    exercise: ExerciseType = Form(...),
    video: UploadFile = File(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
) -> Analysis:
    if not video.content_type or not video.content_type.startswith("video/"):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="A video file is required")
    size = video.size or 0
    if size > settings.max_upload_mb * 1024 * 1024:
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail="Video is too large")
    key, url = await storage_service.upload(video, user_id=user.id, exercise=exercise)
    analysis = Analysis(user_id=user.id, exercise=exercise, video_key=key, video_url=url)
    db.add(analysis)
    db.commit()
    db.refresh(analysis)
    process_analysis.delay(str(analysis.id))
    return analysis


@router.get("", response_model=list[AnalysisOut])
def list_analyses(user: User = Depends(get_current_user), db: Session = Depends(get_db)) -> list[Analysis]:
    return list(db.scalars(select(Analysis).where(Analysis.user_id == user.id).order_by(desc(Analysis.created_at))).all())


@router.get("/progress", response_model=ProgressOut)
def progress(user: User = Depends(get_current_user), db: Session = Depends(get_db)) -> dict:
    analyses = list(db.scalars(select(Analysis).where(Analysis.user_id == user.id, Analysis.score > 0)).all())
    if not analyses:
        return {"averageScore": 0, "sessions": 0, "bestLift": "None", "trend": []}
    average = round(sum(item.score for item in analyses) / len(analyses))
    best = max(analyses, key=lambda item: item.score)
    trend = [{"label": item.created_at.strftime("%b %d"), "score": item.score} for item in analyses[-8:]]
    return {"averageScore": average, "sessions": len(analyses), "bestLift": best.exercise.value, "trend": trend}


@router.get("/{analysis_id}", response_model=AnalysisOut)
def get_analysis(
    analysis_id: UUID, user: User = Depends(get_current_user), db: Session = Depends(get_db)
) -> Analysis:
    analysis = db.get(Analysis, analysis_id)
    if not analysis or analysis.user_id != user.id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analysis not found")
    return analysis
