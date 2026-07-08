from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserOut(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    id: UUID
    email: EmailStr
    full_name: str = Field(alias="fullName")
    avatar_url: str | None = Field(default=None, alias="avatarUrl")
    created_at: datetime = Field(alias="createdAt")
