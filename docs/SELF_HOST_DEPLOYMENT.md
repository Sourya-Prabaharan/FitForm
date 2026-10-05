# Deploy FitForm on existing hardware

Current deployment status: no server or domain has been supplied. This guide is
a deployment option, not a provisioned service. No hosting subscription has been
purchased. Complete the remaining [release gates](RELEASE_VERIFICATION.md) before
publishing; successful local builds alone do not establish public-release readiness.

This path uses private disk storage, PostgreSQL, Redis and Caddy HTTPS. No S3 or
R2 subscription is required. The machine must remain online, have public inbound
ports 80/443, and a hostname pointing to it. Hardware, power, internet and domain
costs are outside this repository. A sleeping laptop is not reliable public hosting.

## Configuration

Copy `.env.deploy.example` to `.env.deploy` on your server. Supply the real hostname,
two distinct random secrets, and working SMTP credentials with a verified sender.
Generate secrets with `openssl rand -hex 32`. Keep the file private (`chmod 600`).
The app uses SMTP STARTTLS on port 587; use credentials for a sender you control.

From the repository root:

```sh
docker compose --env-file .env.deploy -f compose.production.yml config --quiet
docker compose --env-file .env.deploy -f compose.production.yml up -d --build
curl --fail https://YOUR_HOST/ready
```

Database migrations finish before the API and worker start. Only Caddy exposes
public ports. Local videos are shared between API and worker using a Docker volume;
the API serves them with expiring signed links. Never make that volume a public directory.

Check the queue using:

```sh
docker compose --env-file .env.deploy -f compose.production.yml exec worker celery -A app.workers.celery_app.celery_app inspect ping
```

## Mobile release

Host the finalized privacy policy and terms at stable HTTPS URLs. Set
`EXPO_PUBLIC_API_URL` (ending `/api/v1`), `EXPO_PUBLIC_PRIVACY_URL`, and
`EXPO_PUBLIC_TERMS_URL` in the Expo project's production environment. Public builds
are intentionally blocked when those values are absent or use localhost/example hosts.

```sh
cd apps/mobile
eas build --platform ios --profile production
eas submit --platform ios --profile production --latest
```

EAS prompts for the App Store Connect app during submission. Apple Developer
membership and signing credentials are still necessary. A simulator build does
not test camera capture, real-device permissions or App Store signing.

## Backups and operations

Back up PostgreSQL with `pg_dump -Fc` and the `videos` volume together. Encrypt
backups, copy them off-machine, and test restores before inviting users. Define
backup retention and account-deletion handling in your privacy policy. Monitor
free disk space, `/ready`, worker availability and processing errors. Never use
`docker compose down -v` on a deployment whose data you want to retain.

The included storage design is a single-server deployment. To run workers on
multiple hosts, use the existing S3-compatible backend with a private R2/S3 bucket.
`render.yaml` is an optional paid alternative, not a free deployment.

## Local verification

```sh
docker compose up -d --build
docker compose exec api python -m pytest -q
docker compose exec api python scripts/smoke_release.py --video bench=/validation-videos/bench/genai_mvs_bench_press_train_2.mp4 --video deadlift=/validation-videos/deadlift/genai_mvs_deadlift_train_15.mp4
```

Local reset emails appear in Mailpit at http://localhost:8025. Mailpit is only in
the development compose file and never delivers external email.
