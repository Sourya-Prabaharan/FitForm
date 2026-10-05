from collections.abc import Callable

from fastapi import HTTPException, Request, status
from redis import Redis, RedisError
from app.core.config import settings

WINDOW_SECONDS = 60
client = Redis.from_url(settings.redis_url, socket_connect_timeout=2, socket_timeout=2)
LIMIT_SCRIPT = """
local count = redis.call('INCR', KEYS[1])
if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
return count
"""


def rate_limiter(limit: int, namespace: str) -> Callable[[Request], None]:
    def dependency(request: Request) -> None:
        # Uvicorn resolves the client address only from configured trusted proxies.
        ip = request.client.host if request.client else "unknown"
        key = f"rate:{namespace}:{ip}"
        try:
            count = client.eval(LIMIT_SCRIPT, 1, key, WINDOW_SECONDS)
        except RedisError as exc:
            raise HTTPException(503, "Service temporarily unavailable") from exc
        if count > limit:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many requests. Please wait a minute and try again.",
                headers={"Retry-After": "60"},
            )

    return dependency
