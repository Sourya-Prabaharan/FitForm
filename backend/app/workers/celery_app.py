from celery import Celery

from app.core.config import settings

celery_app = Celery("fitform", broker=settings.redis_url, backend=settings.redis_url)
celery_app.conf.update(
    imports=("app.workers.tasks",),
    task_track_started=True,
    worker_prefetch_multiplier=1,
    task_acks_late=True,
    broker_connection_retry_on_startup=True,
    task_soft_time_limit=840,
    task_time_limit=900,
    worker_max_tasks_per_child=10,
    result_expires=86400,
)
