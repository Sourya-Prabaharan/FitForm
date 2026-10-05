# Free/Low-Cost Deployment Options

FitForm can avoid AWS S3 costs by using Cloudflare R2, but a completely free public production app is hard because the backend needs CPU-heavy video processing, Postgres, Redis, object storage, and Apple distribution.

## Recommended Storage: Cloudflare R2

Use R2 for uploaded workout videos.

Current free tier:

- 10 GB-month standard storage per month.
- 1 million Class A operations per month.
- 10 million Class B operations per month.
- Free egress for standard storage.

FitForm already supports this through:

```env
AWS_REGION=auto
S3_BUCKET=<your-r2-bucket>
S3_ENDPOINT_URL=https://<account-id>.r2.cloudflarestorage.com
AWS_ACCESS_KEY_ID=<r2-access-key-id>
AWS_SECRET_ACCESS_KEY=<r2-secret-access-key>
```

## Why Not Supabase Storage Free

Supabase is nice, but its free Storage quota is currently 1 GB and the free file size limit is 50 MB. Workout videos can exceed that quickly.

## Why Not Firebase Storage

Firebase has a no-cost Spark plan, but switching FitForm to Firebase Storage would require a storage service rewrite. R2 works with the current S3-compatible backend.

## Backend Hosting Reality

Even if storage is free, the backend still needs:

- FastAPI web service.
- Celery worker.
- PostgreSQL.
- Redis.

Render/Railway/Fly free options change often and may sleep, limit workers, or require payment details. For TestFlight, sleeping services can cause upload and processing failures.

## Apple Reality

Publishing to TestFlight or the App Store still requires Apple Developer Program membership. That part is not avoidable for iOS distribution through Apple.
