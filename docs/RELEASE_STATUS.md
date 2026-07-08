# FitForm Release Status

Status: TestFlight-prep package is ready. Public App Store submission still requires account-specific setup and physical-device validation.

## Completed In This Workspace

- Production safety guards for backend config.
- Trusted host middleware and security headers.
- Basic rate limiting for sign up, login, refresh, forgot password, and uploads.
- Refresh-token endpoint and mobile automatic access-token refresh.
- Upload size guard.
- In-app fitness/medical disclaimers on onboarding, results, and profile.
- iOS permission copy tightened for camera, microphone, and photo-library access.
- EAS submit/build placeholders added.
- Privacy policy draft.
- Terms of service draft.
- App Store listing draft.
- App Privacy nutrition label draft.
- Production deployment checklist.
- TestFlight and real-device test plan.
- Validation video source catalog and local bench/deadlift smoke-test log.

## Blocked Until Account Or Device Access Exists

- Real iPhone camera/upload testing.
- TestFlight build and submit through the owner's Apple Developer and Expo accounts.
- Final support and privacy URLs.
- Final App Store Connect app ID and EAS project ID.
- Production AWS/PostgreSQL/Redis resources and secrets.
- Transactional email provider for password reset delivery.
- Real human squat/deadlift/bench calibration set with usage rights.

## Verification Run

- Mobile TypeScript: passed.
- JSON config validation: passed.
- Backend Python syntax compilation: passed.
- Backend Docker test suite: blocked by local Docker socket permission in the Codex sandbox.
- Expo Doctor: blocked by network access to the npm registry in the Codex sandbox.

## Submission Gate

Submit to TestFlight after replacing placeholders in:

- `apps/mobile/app.json`
- `apps/mobile/eas.json`
- `apps/mobile/.env.production.example`
- `backend/.env.production.example`

Submit to public App Review only after the TestFlight device test plan passes and the production backend is live over HTTPS.
