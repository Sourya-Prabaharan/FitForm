from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

from app.models.analysis import AnalysisStatus, ExerciseType


def to_camel(value: str) -> str:
    return "".join(word.capitalize() if index else word for index, word in enumerate(value.split("_")))


class AnalysisOut(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True, alias_generator=to_camel)

    id: UUID
    exercise: ExerciseType
    status: AnalysisStatus
    score: int
    confidence: float
    created_at: datetime
    video_url: str | None = None
    overlay_url: str | None = None
    mistakes: list[dict] = Field(default_factory=list)
    recommendations: list[str] = Field(default_factory=list)
    joint_angles: list[dict] = Field(default_factory=list)
    movement_path: list[dict] = Field(default_factory=list)
    set_analysis: dict | None = None
    rep_count: int
    stability_score: int
    summary: str


class ProgressOut(BaseModel):
    average_score: int = Field(alias="averageScore")
    sessions: int
    best_lift: str = Field(alias="bestLift")
    trend: list[dict]
