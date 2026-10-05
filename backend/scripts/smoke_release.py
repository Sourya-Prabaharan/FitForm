"""Exercise a running API, PostgreSQL, Redis, Celery and storage with real videos.

Run inside the development API container. Creates and deletes its own test account.
"""
import argparse
import json
import secrets
import time
import re
from pathlib import Path

import httpx


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default="http://localhost:8000")
    parser.add_argument("--video", action="append", default=[], help="exercise=/absolute/path.mp4")
    parser.add_argument("--output", default="/validation-videos/release-smoke-report.json")
    parser.add_argument("--mailpit-url", help="Optional development inbox URL to verify SMTP and password reset")
    args = parser.parse_args()
    results = []
    with httpx.Client(base_url=args.base_url, timeout=180) as client:
        client.get("/ready").raise_for_status()
        email = f"release-{secrets.token_hex(6)}@example.com"
        password = secrets.token_urlsafe(24)
        response = client.post("/api/v1/auth/signup", json={"email": email, "password": password, "fullName": "Release Test"})
        response.raise_for_status()
        session = response.json()
        client.headers["Authorization"] = "Bearer " + session["tokens"]["accessToken"]
        try:
            client.get("/api/v1/users/me").raise_for_status()
            refreshed = client.post("/api/v1/auth/refresh", json={"refreshToken": session["tokens"]["refreshToken"]})
            refreshed.raise_for_status()
            if args.mailpit_url:
                client.post("/api/v1/auth/forgot-password", json={"email": email}).raise_for_status()
                with httpx.Client(base_url=args.mailpit_url, timeout=10) as inbox:
                    messages = inbox.get("/api/v1/messages").json()["messages"]
                    message = next(item for item in messages if any(recipient["Address"] == email for recipient in item["To"]))
                    body = inbox.get(f"/api/v1/message/{message['ID']}").json()["Text"]
                code = re.search(r"\b\d{8}\b", body).group()
                new_password = secrets.token_urlsafe(24)
                client.post("/api/v1/auth/reset-password", json={"email": email, "code": code, "password": new_password}).raise_for_status()
                assert client.get("/api/v1/users/me").status_code == 401
                session = client.post("/api/v1/auth/login", json={"email": email, "password": new_password})
                session.raise_for_status()
                client.headers["Authorization"] = "Bearer " + session.json()["tokens"]["accessToken"]
                print("PASS: SMTP delivery, password reset and old-session revocation", flush=True)
            for item in args.video:
                exercise, path = item.split("=", 1)
                with open(path, "rb") as video:
                    response = client.post("/api/v1/analyses", data={"exercise": exercise}, files={"video": (Path(path).name, video, "video/mp4")})
                response.raise_for_status()
                analysis_id = response.json()["id"]
                deadline = time.monotonic() + 300
                while time.monotonic() < deadline:
                    response = client.get(f"/api/v1/analyses/{analysis_id}")
                    response.raise_for_status()
                    analysis = response.json()
                    if analysis["status"] in {"completed", "failed"}:
                        break
                    time.sleep(2)
                else:
                    raise RuntimeError("Analysis timed out")
                results.append({"file": Path(path).name, "exercise": exercise, "status": analysis["status"],
                                "score": analysis["score"], "reps": analysis["repCount"],
                                "overlayFrames": len(analysis["poseFrames"])})
                print(json.dumps(results[-1]), flush=True)
                assert analysis["status"] == "completed", analysis.get("error")
                assert analysis["poseFrames"] and analysis["setAnalysis"]["reps"]
                video_response = client.get(analysis["videoUrl"], headers={"Range": "bytes=0-99"})
                assert video_response.status_code in {200, 206}
                assert video_response.content
            history = client.get("/api/v1/analyses")
            history.raise_for_status()
            assert len(history.json()) == len(args.video)
            progress = client.get("/api/v1/analyses/progress")
            progress.raise_for_status()
            assert progress.json()["sessions"] == len(args.video)
        finally:
            deleted = client.delete("/api/v1/users/me")
            deleted.raise_for_status()
            assert client.get("/api/v1/users/me").status_code == 401
    Path(args.output).write_text(json.dumps({"results": results, "accountDeleted": True}, indent=2) + "\n")
    print("PASS: real upload, queue, inference, playback, history, progress and deletion")


if __name__ == "__main__":
    main()
