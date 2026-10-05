from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from redis import Redis
from app.db.session import engine
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

from app.api.v1.router import api_router
from app.api.legal import router as legal_router
from app.core.config import settings
from app.core.upload_limit import UploadLimitMiddleware


def create_app() -> FastAPI:
    app = FastAPI(title="FitForm API", version="1.0.0")
    app.add_middleware(UploadLimitMiddleware, max_bytes=(settings.max_upload_mb + 1) * 1024 * 1024)
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.trusted_hosts)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(api_router, prefix="/api/v1")
    app.include_router(legal_router)

    @app.middleware("http")
    async def security_headers(request, call_next):
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["Referrer-Policy"] = "no-referrer"
        if settings.environment == "production":
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response

    @app.get("/health", tags=["health"])
    def health() -> dict[str, str]:
        return {"status": "ok", "service": "fitform-api"}

    @app.get("/ready", tags=["health"])
    def ready() -> dict[str, str]:
        try:
            with engine.connect() as connection:
                connection.execute(text("SELECT 1"))
            with Redis.from_url(settings.redis_url, socket_timeout=2, socket_connect_timeout=2) as redis:
                redis.ping()
        except Exception as exc:
            raise HTTPException(503, "Dependencies unavailable") from exc
        return {"status": "ready"}

    return app


app = create_app()
