import os
from pathlib import Path
from uuid import UUID, uuid4

import boto3
from fastapi import UploadFile
from starlette.concurrency import run_in_threadpool

from app.core.config import settings
from app.models.analysis import ExerciseType


class StorageService:
    def __init__(self) -> None:
        self._client = None

    @property
    def client(self):
        if self._client is None:
            self._client = boto3.client(
                "s3",
                region_name=settings.storage_region,
                endpoint_url=settings.storage_endpoint_url,
            )
        return self._client

    async def upload(self, file: UploadFile, user_id: UUID, exercise: ExerciseType) -> tuple[str, str]:
        extension = Path(file.filename or "video.mp4").suffix or ".mp4"
        key = f"users/{user_id}/{exercise.value}/{uuid4()}{extension}"
        if settings.use_local_storage:
            local_path = Path(settings.local_storage_path) / key
            local_path.parent.mkdir(parents=True, exist_ok=True)
            with local_path.open("wb") as output:
                while chunk := await file.read(1024 * 1024):
                    output.write(chunk)
            return str(local_path), f"file://{local_path}"

        await file.seek(0)
        await run_in_threadpool(self.client.upload_fileobj, file.file, settings.storage_bucket, key, ExtraArgs={"ContentType": file.content_type})
        url = self.client.generate_presigned_url(
            "get_object", Params={"Bucket": settings.storage_bucket, "Key": key}, ExpiresIn=60 * 60 * 24
        )
        return key, url

    def download_to_local(self, key: str) -> str:
        if key.startswith("/"):
            return str(self.local_path(key))
        target = Path(settings.local_storage_path) / "worker" / os.path.basename(key)
        target.parent.mkdir(parents=True, exist_ok=True)
        self.client.download_file(settings.storage_bucket, key, str(target))
        return str(target)

    def local_path(self, key: str) -> Path:
        root = Path(settings.local_storage_path).resolve()
        path = Path(key).resolve() if key.startswith("/") else (root / key).resolve()
        if not path.is_relative_to(root):
            raise ValueError("Invalid storage path")
        return path

    def delete(self, key: str) -> None:
        if key.startswith("/") or settings.use_local_storage:
            self.local_path(key).unlink(missing_ok=True)
        else:
            self.client.delete_object(Bucket=settings.storage_bucket, Key=key)

    def playback_url(self, key: str) -> str:
        return self.client.generate_presigned_url(
            "get_object", Params={"Bucket": settings.storage_bucket, "Key": key}, ExpiresIn=3600
        )


storage_service = StorageService()
