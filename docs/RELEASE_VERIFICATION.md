# FitForm release verification

Updated October 3, 2026. This report supersedes earlier readiness claims.
The app is not published, and no production backend has been provisioned.

## Implemented in this pass

- Real SMTP reset codes with expiration, one-time use, and revocation of old sessions.
- SecureStore session storage with migration from AsyncStorage; serialized refresh.
- Account deletion removes active account records, analyses and stored videos.
- Private playback links are regenerated when analyses are retrieved; local and
  S3-compatible storage both work without publishing buckets.
- Redis rate limiting, body-size limits, queue submission failure handling,
  worker time limits and cleanup of downloaded worker files.
- Timestamped pose overlays, video playback, frame stepping and joint-angle charts.
- Correct set-average breakdown, real dashboard data, error states and history routing.
- Missing/invalid pose handling, static-clip rejection, preserved timing through
  short detection gaps, and more cautious labels for unmeasured bar/spine behavior.
- NativeWind Metro/CSS setup, compatible dependency pins, and EAS release URL guards.
- Self-hosted production Compose with private storage volumes, Caddy HTTPS,
  migrations, dependency health checks and a non-root backend image.
- Dependency constraints, CI checks, reusable live-service smoke tests and hosted
  `/privacy` and `/terms` routes with configurable support contact.

## Verification evidence

- Backend: 34 pytest tests passed after analysis-input, rep-timing and evaluation fixes. Ruff and
  `pip check` passed in the rebuilt non-root test image.
- Mobile: 6 credential-storage regression tests passed, including refresh/logout
  races and invalid persisted data. These tests now run in CI.
- Mobile: TypeScript passed; Expo Doctor passed 18/18 checks. The final iOS
  JavaScript/Hermes export completed successfully (1,338 modules).
- Native iOS: Xcode Release simulator compilation succeeded. Automatic Expo launch
  timed out, but direct launch succeeded and a screenshot confirmed onboarding
  renders with styling. Interactive UI automation timed out, so navigation,
  recording and permissions remain unverified on a physical device.
- Production Docker image built successfully; `pip check` found no broken requirements.
  Its non-root process imported the API and connected to PostgreSQL and Redis.
- Production Compose parsed successfully using the example environment, without
  launching public services or incurring hosting fees.
- Live local API tests exercised PostgreSQL, Redis, Celery, actual MediaPipe/OpenCV
  inference, playback, history, progress, SMTP delivery, reset, session revocation
  and account deletion. Tests create and remove their own account.

Selected live-pipeline video fixtures:

| Exercise | Fixture | Origin |
| --- | --- | --- |
| Bench | `bench/genai_mvs_bench_press_train_2.mp4` | GenAI-MVS synthetic video |
| Deadlift | `deadlift/genai_mvs_deadlift_train_15.mp4` | GenAI-MVS synthetic video |
| Squat | `squat/mmfit_w19_squats_70_100.mp4` | MM-Fit human recording, seconds 70-100; visually checked |

Reports are local generated files in `validation-videos/release-*.json`. They are
not committed with private/raw video assets. The earlier untrimmed MM-Fit input
is 29 minutes long and contains multiple activities, not just squats. It is no
longer accepted as a short uploaded set. Other clips with unreliable tracking
are rejected rather than assigned an apparently trustworthy score.

These are pipeline smoke tests, not validation against expert-labeled form or
rep counts. No custom model was trained. FitScore and fatigue remain heuristics;
camera-angle bias and false positives require more human-reviewed validation.

The October 3 live smoke test passed all three fixtures again, including account
reset/revocation and deletion. Rep timing now uses a fixed time threshold instead
of a threshold that grows with clip length, and excludes top-position idle time.
Invalid, invisible and collapsed landmarks are rejected. The new accuracy evaluator
reported zero reviewed human holdout clips and status `unvalidated`; see
[accuracy validation](ACCURACY_VALIDATION.md). Result wording no longer presents
high scores as proof of safe technique or recommends increasing load automatically.

## Remaining release gates

1. An always-on server and real HTTPS hostname, or an explicitly funded host.
   The existing Render blueprint is paid. Local hardware avoids that subscription
   but still requires connectivity, uptime, storage and backups.
2. Production SMTP credentials and verified sender/support address.
3. Final operator/privacy/backup-retention details and published legal URLs.
4. EAS production `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_PRIVACY_URL` and
   `EXPO_PUBLIC_TERMS_URL`. Expo authentication works, but this environment was empty.
5. Apple Developer membership, App Store Connect app and signing credentials,
   followed by a real TestFlight build and physical iPhone tests.
6. Dependency security advisories remain in the Expo 53/Metro/navigation tree
   (`image-size`, `decode-uri-component`, `braces`, `node-forge`). The xcode
   UUID dependency was patched, and compatible npm audit fixes were
   applied, but forced SDK upgrades were not used. Resolve or formally assess the
   remaining advisories before a public launch; clean typechecks are not a security audit.
   MediaPipe also pins an affected protobuf version; see
   [security review](SECURITY_REVIEW.md) for exposure analysis and fixes already applied.
7. Screenshots, App Store privacy answers and actual-device camera, permissions,
   interrupted uploads and session persistence tests.

EAS production is configured for Xcode 26.2 to meet Apple's current SDK minimum.
Compatibility of this app's Expo 53 dependencies with that remote image still
requires an actual EAS build. The local simulator compilation used Xcode 16.

Sources: [Apple SDK requirement](https://developer.apple.com/news/upcoming-requirements/?id=04282026a),
[Expo build-image guidance](https://expo.dev/blog/app-store-connect-minimum-sdk-26),
[Apple account deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app).

## Reproduce

```sh
docker compose up -d --build
docker compose exec api python -m pytest -q
docker compose exec api python scripts/smoke_release.py --mailpit-url http://mailpit:8025 --video bench=/validation-videos/bench/genai_mvs_bench_press_train_2.mp4 --video deadlift=/validation-videos/deadlift/genai_mvs_deadlift_train_15.mp4 --video squat=/validation-videos/squat/mmfit_w19_squats_70_100.mp4
cd apps/mobile
npm ci
npm run typecheck
npm test
npx expo-doctor
```

See [self-host deployment](SELF_HOST_DEPLOYMENT.md) for the deployment commands.
