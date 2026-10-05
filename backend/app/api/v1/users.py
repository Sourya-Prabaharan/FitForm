from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.analysis import AnalysisStatus
from app.services.storage import storage_service

from app.api.v1.deps import get_current_user
from app.models.user import User
from app.schemas.user import UserOut

router = APIRouter()


@router.get("/me", response_model=UserOut)
def me(user: User = Depends(get_current_user)) -> User:
    return user


@router.delete("/me")
def delete_account(user: User = Depends(get_current_user), db: Session = Depends(get_db)) -> dict[str, bool]:
    if any(item.status in {AnalysisStatus.queued, AnalysisStatus.processing} for item in user.analyses):
        raise HTTPException(409, "Wait for your current analysis to finish, then delete your account.")
    for item in user.analyses:
        storage_service.delete(item.video_key)
    db.delete(user)
    db.commit()
    return {"ok": True}
