# Deploy FitForm Now

Use this order to move from local validation to TestFlight.

## 1. Put The Repo On GitHub

If you have not already moved the project to `/Users/sourya/Projects/fitform`, run:

```bash
cd /Users/sourya/Documents/Codex/2026-05-13/build-a-full-production-style-ios
./scripts/prepare_fitform_repo.sh
cd /Users/sourya/Projects/fitform
```

Then create a GitHub repository and push the code.

## 2. Create Free/Low-Cost Video Storage

Use Cloudflare R2 instead of AWS S3 for the cheapest TestFlight path. R2 is S3-compatible, so FitForm can keep using the same backend storage client.

Recommended settings:

- Block all public access.
- Enable server-side encryption.
- Add lifecycle cleanup for old source videos.
- Create an R2 API token scoped only to this bucket.

Save:

- `AWS_REGION=auto`
- `S3_BUCKET`
- `S3_ENDPOINT_URL=https://<cloudflare-account-id>.r2.cloudflarestorage.com`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

For a no-payment local-only demo, leave `S3_ENDPOINT_URL` blank and use local Docker storage. That will not work for TestFlight because the backend and iPhone need shared persistent cloud storage.

## 3. Deploy Backend On Render

In Render:

1. New > Blueprint.
2. Connect the GitHub repo.
3. Select `render.yaml`.
4. Fill secret values when prompted.

Use the same generated `JWT_SECRET` for both services:

```bash
openssl rand -hex 32
```

The Blueprint creates:

- `fitform-api`
- `fitform-worker`
- `fitform-postgres`
- `fitform-redis`

When Render asks for storage values, use the R2 values from step 2.

After deploy, open:

```text
https://fitform-api.onrender.com/health
```

If Render gives the API a different hostname, update `TRUSTED_HOSTS` on both Render services.

## 4. Point Mobile To The API

In `apps/mobile/.env`, set:

```env
EXPO_PUBLIC_API_URL=https://fitform-api.onrender.com/api/v1
```

Use your actual Render API URL if it differs.

## 5. Verify Locally

```bash
cd apps/mobile
npm run typecheck
npm exec -- expo-doctor
```

From the repo root:

```bash
docker compose exec api pytest -q
```

## 6. Build For TestFlight

```bash
cd apps/mobile
eas build --platform ios --profile production
```

## 7. Submit To TestFlight

Replace `replace-with-app-store-connect-app-id` in `apps/mobile/eas.json`, then run:

```bash
eas submit --platform ios --profile production --latest
```

## 8. Device Test

Install through TestFlight and run the checklist in `docs/TESTFLIGHT_DEVICE_TEST_PLAN.md`.
