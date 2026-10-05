from fastapi import HTTPException
from starlette.responses import JSONResponse


class UploadLimitMiddleware:
    """Bound request bodies before multipart parsing writes them to disk."""

    def __init__(self, app, max_bytes: int):
        self.app = app
        self.max_bytes = max_bytes

    async def __call__(self, scope, receive, send):
        if scope["type"] != "http":
            return await self.app(scope, receive, send)
        headers = dict(scope.get("headers", []))
        try:
            length = int(headers.get(b"content-length", b"0"))
        except ValueError:
            return await JSONResponse({"detail": "Invalid content length"}, status_code=400)(scope, receive, send)
        if length > self.max_bytes:
            return await JSONResponse({"detail": "Video is too large"}, status_code=413)(scope, receive, send)
        size = 0

        async def limited_receive():
            nonlocal size
            message = await receive()
            size += len(message.get("body", b""))
            if size > self.max_bytes:
                raise HTTPException(413, "Video is too large")
            return message

        await self.app(scope, limited_receive, send)
