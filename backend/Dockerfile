FROM python:3.11-slim AS base
ARG INSTALL_DEV=false

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PYTHONPATH=/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    ffmpeg \
    libgl1 \
    libglib2.0-0 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY pyproject.toml ./
COPY requirements.lock ./
COPY app ./app
RUN pip install --upgrade pip setuptools==83.0.0 \
  && if [ "$INSTALL_DEV" = "true" ]; then pip install -c requirements.lock ".[dev]"; else pip install -c requirements.lock .; fi
COPY . .
RUN useradd --create-home --uid 10001 fitform \
  && mkdir -p /var/lib/fitform/videos /tmp/fitform-videos \
  && chown -R fitform:fitform /var/lib/fitform /tmp/fitform-videos /app
USER fitform

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
