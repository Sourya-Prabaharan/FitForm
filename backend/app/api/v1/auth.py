from fastapi import APIRouter, Depends, HTTPException, status
from jose import JWTError
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.api.v1.rate_limit import rate_limiter
from app.core.security import create_access_token, create_refresh_token, decode_token, hash_password, verify_password
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import AuthResponse, ForgotPasswordRequest, LoginRequest, RefreshRequest, SignupRequest, TokenPair

router = APIRouter()


def token_pair(user: User) -> TokenPair:
    return TokenPair(access_token=create_access_token(user.id), refresh_token=create_refresh_token(user.id))


@router.post("/signup", response_model=AuthResponse, dependencies=[Depends(rate_limiter(8, "signup"))])
def signup(payload: SignupRequest, db: Session = Depends(get_db)) -> AuthResponse:
    existing = db.scalar(select(User).where(User.email == payload.email.lower()))
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email is already registered")
    user = User(email=payload.email.lower(), full_name=payload.full_name, hashed_password=hash_password(payload.password))
    db.add(user)
    db.commit()
    db.refresh(user)
    return AuthResponse(user=user, tokens=token_pair(user))


@router.post("/login", response_model=AuthResponse, dependencies=[Depends(rate_limiter(10, "login"))])
def login(payload: LoginRequest, db: Session = Depends(get_db)) -> AuthResponse:
    user = db.scalar(select(User).where(User.email == payload.email.lower()))
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")
    return AuthResponse(user=user, tokens=token_pair(user))


@router.post("/refresh", response_model=TokenPair, dependencies=[Depends(rate_limiter(30, "refresh"))])
def refresh(payload: RefreshRequest, db: Session = Depends(get_db)) -> TokenPair:
    try:
        user_id = decode_token(payload.refresh_token, "refresh")
    except (JWTError, KeyError, ValueError) as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token") from exc
    user = db.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
    return token_pair(user)


@router.post("/forgot-password", dependencies=[Depends(rate_limiter(5, "forgot-password"))])
def forgot_password(payload: ForgotPasswordRequest) -> dict[str, bool]:
    # Production deployment should enqueue a transactional email with a signed one-time reset token.
    _ = payload.email
    return {"ok": True}
