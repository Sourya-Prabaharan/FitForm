from pydantic import BaseModel, EmailStr, Field

from app.schemas.user import UserOut


class SignupRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)
    full_name: str = Field(min_length=2, alias="fullName")


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class RefreshRequest(BaseModel):
    refresh_token: str = Field(alias="refreshToken")


class TokenPair(BaseModel):
    access_token: str
    refresh_token: str

    class Config:
        populate_by_name = True
        alias_generator = lambda value: "".join(
            word.capitalize() if index else word for index, word in enumerate(value.split("_"))
        )


class AuthResponse(BaseModel):
    user: UserOut
    tokens: TokenPair
