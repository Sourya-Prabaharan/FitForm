from datetime import UTC, datetime, timedelta
import hashlib
from unittest.mock import Mock

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.pool import StaticPool

from app.api.v1 import auth, analyses, rate_limit
from app.db.session import Base, get_db
from app.main import app
from app.models.user import User
from app.models.analysis import Analysis, AnalysisStatus
from app.core.config import settings
from app.ml.fit_score import analyze_set_quality, _rep_segments
from app.services.storage import storage_service


@pytest.fixture
def client(monkeypatch, tmp_path):
    engine = create_engine("sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool)
    Base.metadata.create_all(engine)
    monkeypatch.setattr(settings, "local_storage_path", str(tmp_path))
    monkeypatch.setattr(settings, "storage_backend", "local")
    monkeypatch.setattr(rate_limit.client, "eval", Mock(return_value=1))
    monkeypatch.setattr(auth, "send_reset_code", Mock())
    with Session(engine, expire_on_commit=False) as db:
        app.dependency_overrides[get_db] = lambda: db
        with TestClient(app, base_url="http://localhost") as test_client:
            yield test_client, db
    app.dependency_overrides.clear()
    engine.dispose()


def signup(client, email="tester@example.com"):
    response = client.post("/api/v1/auth/signup", json={"email": email, "password": "long-password-123", "fullName": "Test Lifter"})
    assert response.status_code == 200
    session = response.json()
    return session, {"Authorization": f"Bearer {session['tokens']['accessToken']}"}


def test_password_reset_one_use_and_revokes_sessions(client):
    http, db = client
    session, headers = signup(http)
    assert http.post("/api/v1/auth/forgot-password", json={"email": "tester@example.com"}).status_code == 200
    code = auth.send_reset_code.call_args.args[1]
    payload = {"email": "tester@example.com", "code": code, "password": "new-password-123"}
    assert http.post("/api/v1/auth/reset-password", json=payload).status_code == 200
    assert http.post("/api/v1/auth/reset-password", json=payload).status_code == 400
    assert http.get("/api/v1/users/me", headers=headers).status_code == 401
    assert http.post("/api/v1/auth/refresh", json={"refreshToken": session["tokens"]["refreshToken"]}).status_code == 401
    assert http.post("/api/v1/auth/login", json={"email": "tester@example.com", "password": "new-password-123"}).status_code == 200


def test_expired_reset_rejected(client):
    http, db = client
    signup(http)
    user = db.query(User).first()
    user.reset_code_hash = hashlib.sha256(b"12345678").hexdigest()
    user.reset_expires_at = datetime.now(UTC) - timedelta(seconds=1)
    db.commit()
    assert http.post("/api/v1/auth/reset-password", json={"email": user.email, "code": "12345678", "password": "new-password"}).status_code == 400


def test_upload_ownership_playback_delete(client, monkeypatch):
    http, db = client
    _, headers = signup(http)
    monkeypatch.setattr(analyses.process_analysis, "delay", Mock())
    response = http.post("/api/v1/analyses", headers=headers, data={"exercise": "squat"}, files={"video": ("clip.mp4", b"test-video", "video/mp4")})
    assert response.status_code == 202
    item = response.json()
    assert http.get(item["videoUrl"]).content == b"test-video"
    assert http.get(item["videoUrl"].split("?")[0] + "?token=invalid").status_code == 401
    _, other = signup(http, "other@example.com")
    assert http.get(f"/api/v1/analyses/{item['id']}", headers=other).status_code == 404
    assert http.delete("/api/v1/users/me", headers=headers).status_code == 409
    record = db.query(Analysis).first()
    path = storage_service.local_path(record.video_key)
    record.status = AnalysisStatus.completed
    db.commit()
    assert http.delete("/api/v1/users/me", headers=headers).status_code == 200
    assert not path.exists()
    assert http.get(item["videoUrl"]).status_code == 404
    assert http.get("/api/v1/users/me", headers=headers).status_code == 401


def test_queue_failure_does_not_leave_queued_record(client, monkeypatch):
    http, db = client
    _, headers = signup(http)
    monkeypatch.setattr(analyses.process_analysis, "delay", Mock(side_effect=ConnectionError))
    response = http.post("/api/v1/analyses", headers=headers, data={"exercise": "bench"}, files={"video": ("clip.mp4", b"video", "video/mp4")})
    assert response.status_code == 503
    assert db.query(Analysis).first().status == AnalysisStatus.failed


def test_static_video_has_no_reps():
    assert _rep_segments([160.0] * 100, "squat") == []
    assert _rep_segments([160, 159, 158, 159, 160] * 20, "bench") == []
    assert analyze_set_quality([], 30, "squat").reps == []
    assert analyze_set_quality([{}] * 30, 30, "squat").reps == []
    assert analyze_set_quality([{}], float("nan"), "bench").reps == []


def test_oversized_upload_rejected_before_parsing(client):
    http, _ = client
    response = http.post("/api/v1/analyses", content=b"x", headers={"Content-Length": str(300 * 1024 * 1024)})
    assert response.status_code == 413


def test_storage_rejects_path_escape():
    with pytest.raises(ValueError):
        storage_service.local_path("/etc/passwd")
