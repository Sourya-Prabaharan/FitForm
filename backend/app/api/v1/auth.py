import hashlib
import hmac
import secrets
from datetime import UTC, datetime, timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from jwt import InvalidTokenError as JWTError
from sqlalchemy import select
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.api.v1.rate_limit import rate_limiter
from app.core.security import create_access_token, create_refresh_token, decode_token, hash_password, verify_password
from app.db.session import get_db
from app.models.user import User
from app.schemas.auth import AuthResponse, ForgotPasswordRequest, LoginRequest, RefreshRequest, SignupRequest, TokenPair
from app.schemas.auth import ResetPasswordRequest
from app.core.security import session_is_current
from app.services.email import send_reset_code

router = APIRouter()


def token_pair(user: User) -> TokenPair:
    return TokenPair(access_token=create_access_token(user.id, user.hashed_password), refresh_token=create_refresh_token(user.id, user.hashed_password))


@router.post("/signup", response_model=AuthResponse, dependencies=[Depends(rate_limiter(8, "signup"))])
def signup(payload: SignupRequest, db: Session = Depends(get_db)) -> AuthResponse:
    existing = db.scalar(select(User).where(User.email == payload.email.lower()))
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email is already registered")
    user = User(email=payload.email.lower(), full_name=payload.full_name, hashed_password=hash_password(payload.password))
    db.add(user)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(409, "Email is already registered") from exc
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
    if user is None or not session_is_current(payload.refresh_token, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
    return token_pair(user)


@router.post("/forgot-password", dependencies=[Depends(rate_limiter(5, "forgot-password"))])
def forgot_password(payload: ForgotPasswordRequest, db: Session = Depends(get_db)) -> dict[str, bool]:
    user = db.scalar(select(User).where(User.email == payload.email.lower()).with_for_update())
    if user:
        code = f"{secrets.randbelow(100_000_000):08d}"
        user.reset_code_hash = hashlib.sha256(code.encode()).hexdigest()
        user.reset_expires_at = datetime.now(UTC) + timedelta(minutes=15)
        try:
            send_reset_code(user.email, code)
        except Exception as exc:
            db.rollback()
            raise HTTPException(503, "Email delivery is unavailable. Please try again later.") from exc
        db.commit()
    return {"ok": True}


@router.post("/reset-password", dependencies=[Depends(rate_limiter(5, "reset-password"))])
def reset_password(payload: ResetPasswordRequest, db: Session = Depends(get_db)) -> dict[str, bool]:
    user = db.scalar(select(User).where(User.email == payload.email.lower()).with_for_update())
    if (not user or not user.reset_code_hash or not user.reset_expires_at
        or user.reset_expires_at.replace(tzinfo=UTC) <= datetime.now(UTC)
        or not hmac.compare_digest(user.reset_code_hash, hashlib.sha256(payload.code.encode()).hexdigest())):
        raise HTTPException(400, "Invalid or expired reset code")
    user.hashed_password = hash_password(payload.password)
    user.reset_code_hash = None
    user.reset_expires_at = None
    db.commit()
    return {"ok": True}
