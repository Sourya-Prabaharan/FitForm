from datetime import timedelta
from uuid import uuid4

import jwt
import pytest

from app.core.config import settings
from app.core.security import (
    create_access_token, create_refresh_token, create_token, decode_token,
    session_is_current,
)


def test_access_and_refresh_are_not_interchangeable():
    user = uuid4()
    access = create_access_token(user, "password-hash")
    refresh = create_refresh_token(user, "password-hash")
    assert decode_token(access, "access") == user
    assert decode_token(refresh, "refresh") == user
    with pytest.raises(ValueError):
        decode_token(refresh, "access")
    with pytest.raises(ValueError):
        decode_token(access, "refresh")
    assert session_is_current(access, "password-hash")
    assert not session_is_current(access, "changed-hash")


def test_expired_token_is_rejected():
    token = create_token(uuid4(), "access", timedelta(seconds=-1))
    with pytest.raises(jwt.ExpiredSignatureError):
        decode_token(token, "access")


def test_tokens_must_expire():
    token = jwt.encode({"sub": str(uuid4()), "type": "access", "iat": 1},
                       settings.jwt_secret, algorithm=settings.jwt_algorithm)
    with pytest.raises(jwt.MissingRequiredClaimError):
        decode_token(token, "access")


@pytest.mark.parametrize("token", ["invalid", "", "a.b.c"])
def test_malformed_tokens_are_rejected(token):
    with pytest.raises(jwt.InvalidTokenError):
        decode_token(token, "access")


def test_invalid_signature_is_rejected():
    token = jwt.encode({"sub": str(uuid4()), "type": "access", "iat": 1, "exp": 9999999999},
                       "different-signing-secret-at-least-32-chars", algorithm=settings.jwt_algorithm)
    with pytest.raises(jwt.InvalidSignatureError):
        decode_token(token, "access")
