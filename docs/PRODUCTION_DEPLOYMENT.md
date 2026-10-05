# FitForm Production Deployment Checklist

## Backend

This repo includes a Render Blueprint at `render.yaml` for a fast TestFlight staging deployment. Render's current Blueprint format uses `runtime: docker` for Docker services and `type: keyvalue` for Redis-compatible storage.

Required production environment:

- `ENVIRONMENT=production`
- `DATABASE_URL`: managed PostgreSQL with backups and TLS.
- `REDIS_URL`: managed Redis with auth/TLS where available.
- `JWT_SECRET`: unique random secret, at least 32 characters.
- `CORS_ORIGINS`: exact allowed app/web origins, never `*`.
- `TRUSTED_HOSTS`: exact API hostnames.
- `AWS_REGION`: use `auto` for Cloudflare R2.
- `S3_BUCKET`: private production bucket.
- `S3_ENDPOINT_URL`: S3-compatible endpoint. Recommended for TestFlight: Cloudflare R2.
- `AWS_ACCESS_KEY_ID`: R2 or S3-compatible access key.
- `AWS_SECRET_ACCESS_KEY`: R2 or S3-compatible secret key.
- `MAX_UPLOAD_MB`

For the Render Blueprint, enter the same `JWT_SECRET` value for both `fitform-api` and `fitform-worker` when Render prompts for synced secrets. Generate one with:

```bash
openssl rand -hex 32
```

After Render creates the API service, update these values if the generated host differs from `fitform-api.onrender.com`:

- `TRUSTED_HOSTS`
- mobile `EXPO_PUBLIC_API_URL`

## Cloud Storage

Recommended no/low-cost TestFlight option: Cloudflare R2.

Why R2:

- S3-compatible API, so the backend code stays simple.
- No egress fees on standard storage.
- Current free tier includes 10 GB-month of standard storage, 1 million Class A operations, and 10 million Class B operations per month.

Alternatives:

- Backblaze B2: also S3-compatible and currently lists 10 GB free storage, but set caps/alerts to avoid surprise usage.
- Supabase Storage: easier dashboard, but the free plan has a 1 GB quota and 50 MB max file size, which is tight for workout videos.
- Firebase Storage: no-payment Spark plan can be useful for prototypes, but it is a bigger backend rewrite than R2.

Production storage checklist:

- Private object bucket.
- Block public access enabled.
- Server-side encryption enabled.
- Lifecycle rules for temporary uploads and old source videos.
- Least-privilege API credentials limited to the production bucket.
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
