# FitForm Production Deployment Checklist

## Backend

Required production environment:

- `ENVIRONMENT=production`
- `DATABASE_URL`: managed PostgreSQL with backups and TLS.
- `REDIS_URL`: managed Redis with auth/TLS where available.
- `JWT_SECRET`: unique random secret, at least 32 characters.
- `CORS_ORIGINS`: exact allowed app/web origins, never `*`.
- `TRUSTED_HOSTS`: exact API hostnames.
- `AWS_REGION`
- `S3_BUCKET`: private production bucket.
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `MAX_UPLOAD_MB`

## Cloud Storage

- Private S3 bucket.
- Block public access enabled.
- Server-side encryption enabled.
- Lifecycle rules for temporary uploads and old source videos.
- Least-privilege IAM role limited to the production bucket.
- Signed URLs for any future user-facing video playback.

## API Edge

- HTTPS only.
- HSTS enabled.
- Request size limits at load balancer and API.
- Access logs with sensitive headers redacted.
- Health checks on `/health`.
- Separate staging and production databases/buckets.

## Worker

- Celery worker autoscaling or separate worker pool.
- Queue monitoring and dead-letter handling.
- Alerts for failed analyses, long queue depth, and processor crashes.

## Email

Before public launch, connect `POST /api/v1/auth/forgot-password` to a transactional email provider and add a reset-password completion endpoint in the app.

## Observability

- API error monitoring.
- Mobile crash reporting.
- Worker task metrics.
- Database backup restore test.
- S3 deletion/export audit trail.

## Release Gate

Do not submit for public App Review until:

- TestFlight build passes the device test plan.
- Production API is reachable from TestFlight over HTTPS.
- Privacy policy and terms are hosted at final URLs.
- App Privacy answers match actual SDKs and production services.
- Real human calibration videos have been reviewed.

