from pydantic import BaseModel, EmailStr, Field, field_validator, ConfigDict
from app.schemas.analysis import to_camel

from app.schemas.user import UserOut


class SignupRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8, max_length=72)
    full_name: str = Field(min_length=2, alias="fullName")

    @field_validator("password")
    @classmethod
    def password_bytes(cls, value: str) -> str:
        if len(value.encode("utf-8")) > 72:
            raise ValueError("Password must be at most 72 UTF-8 bytes")
        return value


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(SignupRequest):
    full_name: str = Field(default="Reset", alias="fullName")
    code: str = Field(pattern=r"^\d{8}$")


class RefreshRequest(BaseModel):
    refresh_token: str = Field(alias="refreshToken")


class TokenPair(BaseModel):
    model_config = ConfigDict(populate_by_name=True, alias_generator=to_camel)
    access_token: str
    refresh_token: str

class AuthResponse(BaseModel):
    user: UserOut
    tokens: TokenPair
