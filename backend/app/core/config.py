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
    aws_region: str = "us-east-1"
    s3_bucket: str = "fitform-videos-dev"
    s3_endpoint_url: str | None = None
    local_storage_path: str = "/tmp/fitform-videos"
    trusted_hosts: list[str] = ["localhost", "127.0.0.1", "0.0.0.0"]
    max_upload_mb: int = 250

    @model_validator(mode="after")
    def validate_production_safety(self) -> "Settings":
        if self.environment != "production":
            return self
        if self.jwt_secret in {"change-me-in-production", "replace-with-a-long-random-secret"} or len(self.jwt_secret) < 32:
            raise ValueError("JWT_SECRET must be a unique production secret with at least 32 characters")
        if "*" in self.cors_origins:
            raise ValueError("CORS_ORIGINS must not contain '*' in production")
        if not self.s3_bucket or self.s3_bucket == "fitform-videos-dev":
            raise ValueError("S3_BUCKET must point to a production bucket")
        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
