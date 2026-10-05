import enum
import uuid
from datetime import UTC, datetime

from sqlalchemy import DateTime, Enum, Float, ForeignKey, Integer, JSON, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.session import Base


class ExerciseType(str, enum.Enum):
    squat = "squat"
    deadlift = "deadlift"
    bench = "bench"


class AnalysisStatus(str, enum.Enum):
    queued = "queued"
    processing = "processing"
    completed = "completed"
    failed = "failed"


class Analysis(Base):
    __tablename__ = "analyses"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False, index=True)
    exercise: Mapped[ExerciseType] = mapped_column(Enum(ExerciseType), nullable=False)
    status: Mapped[AnalysisStatus] = mapped_column(Enum(AnalysisStatus), default=AnalysisStatus.queued, index=True)
    video_key: Mapped[str] = mapped_column(String(700), nullable=False)
    video_url: Mapped[str | None] = mapped_column(String(1000))
    overlay_url: Mapped[str | None] = mapped_column(String(1000))
    score: Mapped[int] = mapped_column(Integer, default=0)
    confidence: Mapped[float] = mapped_column(Float, default=0)
    rep_count: Mapped[int] = mapped_column(Integer, default=0)
    stability_score: Mapped[int] = mapped_column(Integer, default=0)
    summary: Mapped[str] = mapped_column(String(1000), default="")
    mistakes: Mapped[list] = mapped_column(JSON, default=list)
    recommendations: Mapped[list] = mapped_column(JSON, default=list)
    joint_angles: Mapped[list] = mapped_column(JSON, default=list)
    movement_path: Mapped[list] = mapped_column(JSON, default=list)
    set_analysis: Mapped[dict | None] = mapped_column(JSON)
    pose_frames: Mapped[list] = mapped_column(JSON, default=list)
    error: Mapped[str | None] = mapped_column(String(1000))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=lambda: datetime.now(UTC), index=True)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(UTC), onupdate=lambda: datetime.now(UTC)
    )

    user = relationship("User", back_populates="analyses")
