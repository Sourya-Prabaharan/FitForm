import time
from collections import defaultdict, deque
from collections.abc import Callable

from fastapi import HTTPException, Request, status

WINDOW_SECONDS = 60
ATTEMPTS: dict[str, deque[float]] = defaultdict(deque)


def rate_limiter(limit: int, namespace: str) -> Callable[[Request], None]:
    def dependency(request: Request) -> None:
        forwarded = request.headers.get("x-forwarded-for", "")
        ip = forwarded.split(",")[0].strip() or (request.client.host if request.client else "unknown")
        key = f"{namespace}:{ip}"
        now = time.monotonic()
        bucket = ATTEMPTS[key]
        while bucket and now - bucket[0] > WINDOW_SECONDS:
            bucket.popleft()
        if len(bucket) >= limit:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many requests. Please wait a minute and try again.",
            )
        bucket.append(now)

    return dependency
