from functools import lru_cache

from pydantic import Field
from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    environment: str = "development"
    database_url: str = "postgresql+psycopg://fitform:fitform@postgres:5432/fitform"
    redis_url: str = "redis://redis:6379/0"
    jwt_secret: str = Field(default="change-me-in-production")
    jwt_algorithm: str = "HS256"
    access_token_minutes: int = 60
    refresh_token_days: int = 30
    cors_origins: list[str] = ["http://localhost:19006", "http://localhost:8081"]
    storage_region: str = Field(default="us-east-1", validation_alias="AWS_REGION")
    storage_bucket: str = Field(default="fitform-videos-dev", validation_alias="S3_BUCKET")
    storage_endpoint_url: str | None = Field(default=None, validation_alias="S3_ENDPOINT_URL")
    local_storage_path: str = "/tmp/fitform-videos"
    trusted_hosts: list[str] = ["localhost", "127.0.0.1", "0.0.0.0"]
    max_upload_mb: int = 250
    storage_backend: str = "auto"
    max_video_seconds: int = 120
    smtp_host: str = "localhost"
    smtp_port: int = 1025
    smtp_username: str = ""
    smtp_password: str = ""
    smtp_starttls: bool = False
    email_from: str = "FitForm <noreply@localhost>"
    support_email: str = "support@localhost"

    @property
    def use_local_storage(self) -> bool:
        return self.storage_backend == "local" or (
            self.storage_backend == "auto" and self.environment == "development" and not self.storage_endpoint_url
        )

    @model_validator(mode="after")
    def validate_production_safety(self) -> "Settings":
        if self.environment != "production":
            return self
        if self.jwt_secret in {"change-me-in-production", "replace-with-a-long-random-secret"} or len(self.jwt_secret) < 32:
            raise ValueError("JWT_SECRET must be a unique production secret with at least 32 characters")
        if "*" in self.cors_origins:
            raise ValueError("CORS_ORIGINS must not contain '*' in production")
        if not self.use_local_storage and (not self.storage_bucket or self.storage_bucket == "fitform-videos-dev"):
            raise ValueError("S3_BUCKET/STORAGE_BUCKET must point to a production bucket")
        if self.smtp_host == "localhost" or not self.smtp_starttls or "localhost" in self.email_from:
            raise ValueError("Production requires SMTP_HOST, SMTP_STARTTLS=true and a verified EMAIL_FROM")
        if "@" not in self.support_email or "localhost" in self.support_email or "example.com" in self.support_email:
            raise ValueError("SUPPORT_EMAIL must be a working support address")
        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
