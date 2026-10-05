from uuid import UUID

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status, Request, Query
from fastapi.responses import FileResponse, RedirectResponse
from datetime import timedelta
from jwt import InvalidTokenError as JWTError
from sqlalchemy import desc, select
from sqlalchemy.orm import Session

from app.api.v1.deps import get_current_user
from app.api.v1.rate_limit import rate_limiter
from app.core.config import settings
from app.db.session import get_db
from app.models.analysis import Analysis, ExerciseType, AnalysisStatus
from app.core.security import create_token, decode_token
from app.models.user import User
from app.schemas.analysis import AnalysisOut, ProgressOut
from app.services.storage import storage_service
from app.workers.tasks import process_analysis

router = APIRouter()


def output(analysis: Analysis, request: Request) -> AnalysisOut:
    result = AnalysisOut.model_validate(analysis)
    token = create_token(analysis.id, "video", timedelta(hours=1))
    result.video_url = str(request.url_for("analysis_video", analysis_id=analysis.id).include_query_params(token=token))
    return result


@router.post("", response_model=AnalysisOut, status_code=status.HTTP_202_ACCEPTED, dependencies=[Depends(rate_limiter(20, "upload"))])
async def create_analysis(
    request: Request,
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
    try:
        process_analysis.delay(str(analysis.id))
    except Exception as exc:
        analysis.status = AnalysisStatus.failed
        analysis.error = "Processing service unavailable. Please upload again later."
        db.commit()
        raise HTTPException(503, analysis.error) from exc
    return output(analysis, request)


@router.get("", response_model=list[AnalysisOut])
def list_analyses(request: Request, limit: int = Query(50, ge=1, le=100), offset: int = Query(0, ge=0), user: User = Depends(get_current_user), db: Session = Depends(get_db)) -> list[AnalysisOut]:
    items = db.scalars(select(Analysis).where(Analysis.user_id == user.id).order_by(desc(Analysis.created_at)).offset(offset).limit(limit)).all()
    return [output(item, request) for item in items]


@router.get("/progress", response_model=ProgressOut)
def progress(user: User = Depends(get_current_user), db: Session = Depends(get_db)) -> dict:
    analyses = list(db.scalars(select(Analysis).where(Analysis.user_id == user.id, Analysis.status == AnalysisStatus.completed).order_by(Analysis.created_at)).all())
    if not analyses:
        return {"averageScore": 0, "sessions": 0, "bestLift": "None", "trend": []}
    average = round(sum(item.score for item in analyses) / len(analyses))
    best = max(analyses, key=lambda item: item.score)
    trend = [{"label": item.created_at.strftime("%b %d"), "score": item.score} for item in analyses[-8:]]
    return {"averageScore": average, "sessions": len(analyses), "bestLift": best.exercise.value, "trend": trend}


@router.get("/{analysis_id}", response_model=AnalysisOut)
def get_analysis(
    analysis_id: UUID, request: Request, user: User = Depends(get_current_user), db: Session = Depends(get_db)
) -> Analysis:
    analysis = db.get(Analysis, analysis_id)
    if not analysis or analysis.user_id != user.id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analysis not found")
    return output(analysis, request)


@router.get("/{analysis_id}/video", name="analysis_video")
def analysis_video(analysis_id: UUID, token: str, db: Session = Depends(get_db)):
    try:
        if decode_token(token, "video") != analysis_id:
            raise ValueError("Wrong video")
    except (JWTError, ValueError, KeyError) as exc:
        raise HTTPException(401, "Video link expired. Reopen the analysis.") from exc
    analysis = db.get(Analysis, analysis_id)
    if not analysis:
        raise HTTPException(404, "Analysis not found")
    if analysis.video_key.startswith("/") or settings.use_local_storage:
        path = storage_service.local_path(analysis.video_key)
        if not path.is_file():
            raise HTTPException(404, "Video not found")
        return FileResponse(path, headers={"Cache-Control": "private, no-store"})
    return RedirectResponse(storage_service.playback_url(analysis.video_key))
