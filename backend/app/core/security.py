from datetime import UTC, datetime, timedelta
from uuid import UUID
import hashlib
import hmac

import jwt
import bcrypt

from app.core.config import settings

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()


def verify_password(password: str, hashed: str) -> bool:
    if len(password.encode()) > 72:
        return False
    try:
        return bcrypt.checkpw(password.encode(), hashed.encode())
    except ValueError:
        return False


def password_stamp(hashed_password: str) -> str:
    return hmac.new(settings.jwt_secret.encode(), hashed_password.encode(), hashlib.sha256).hexdigest()


def create_token(subject: UUID, token_type: str, expires_delta: timedelta, password_hash: str = "") -> str:
    now = datetime.now(UTC)
    payload = {
        "sub": str(subject),
        "type": token_type,
        "pwd": password_stamp(password_hash),
        "iat": int(now.timestamp()),
        "exp": int((now + expires_delta).timestamp()),
    }
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def create_access_token(subject: UUID, password_hash: str = "") -> str:
    return create_token(subject, "access", timedelta(minutes=settings.access_token_minutes), password_hash)


def create_refresh_token(subject: UUID, password_hash: str = "") -> str:
    return create_token(subject, "refresh", timedelta(days=settings.refresh_token_days), password_hash)


def session_is_current(token: str, hashed_password: str) -> bool:
    payload = _decode(token)
    stamp = payload.get("pwd")
    return isinstance(stamp, str) and hmac.compare_digest(stamp, password_stamp(hashed_password))


def _decode(token: str) -> dict:
    return jwt.decode(
        token, settings.jwt_secret, algorithms=[settings.jwt_algorithm],
        options={"require": ["sub", "type", "iat", "exp"]},
    )


def decode_token(token: str, expected_type: str) -> UUID:
    payload = _decode(token)
    if payload.get("type") != expected_type:
        raise ValueError("Invalid token type")
    return UUID(payload["sub"])
