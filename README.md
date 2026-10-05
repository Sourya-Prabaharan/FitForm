# FitForm

FitForm is a production-style iOS-ready mobile app for AI-powered workout form analysis. Users create an account, upload or record videos for squat, deadlift, and bench press, then receive pose-based scoring, joint angle tracking, movement path visualization, detected mistakes, and improvement cues.

## Architecture

- `apps/mobile`: Expo React Native app written in TypeScript with React Navigation, Zustand, NativeWind, Vision Camera, and Reanimated.
- `backend`: FastAPI service with JWT auth, SQLAlchemy models, Alembic migrations, PostgreSQL, Redis, Celery, S3-compatible storage, MediaPipe Pose, OpenCV, NumPy, and PyTorch-ready dependencies.
- `docker-compose.yml`: local production-like stack for API, worker, Postgres, and Redis.

## Mobile Features

- Onboarding, sign up, login, forgot password, and persistent JWT sessions.
- Bottom tab navigation for dashboard, workout history, and profile/settings.
- Exercise selection for squat, deadlift, and bench press.
- Video upload and camera-ready capture screen using Vision Camera.
- Processing screen with async polling.
- Results screen with score, confidence, rep count, stability, mistakes, recommendations, and movement path chart.
- Dark mode visual system with reusable components and typed navigation.

## Backend Features

- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/forgot-password`
- `GET /api/v1/users/me`
- `POST /api/v1/analyses`
- `GET /api/v1/analyses`
- `GET /api/v1/analyses/progress`
- `GET /api/v1/analyses/{analysis_id}`

Videos are accepted by the API, saved through the storage service, queued in Celery, processed with MediaPipe Pose, and persisted as analysis JSON in PostgreSQL.

## Form Detection Model

The MVP analyzer is a transparent biomechanics rules engine on top of MediaPipe landmarks. It smooths joint-angle series, detects repetition phases from angle troughs/peaks, and scores form from exercise-specific signals:

- Squat: knee flexion depth, hip-vs-knee depth line, knee-to-ankle width ratio for valgus, torso angle drift, and hip path stability.
- Deadlift: torso/spine proxy drift, hip hinge ROM versus knee ROM, and horizontal path drift.
- Bench press: elbow ROM, left/right elbow symmetry, wrist height symmetry, shoulder stability, and wrist path stability.

The analyzer also calculates a per-rep and set-level FitScore from transparent rule-based submetrics:

- Stability: frame-to-frame movement jitter.
- Symmetry: left/right joint-angle differences.
- Range of Motion: exercise-specific movement completion.
- Tempo Control: consistency of eccentric/concentric speed.
- Posture / Form: torso, knee tracking, shoulder, or exercise-specific position checks.

Fatigue detection compares early reps against later reps for velocity decay, stability drop, range-of-motion loss, and FitScore decline. This is rule-based coaching analytics, not a fake ML classifier.

The scoring rules are informed by published work on MediaPipe range-of-motion estimation, exercise feedback pipelines, squat depth biomechanics, deadlift hip/knee/trunk kinematics, deadlift spinal alignment, and bench press shoulder symmetry. The current engine is coaching-grade and should be validated against labeled real lifting videos before being marketed as a clinical or injury-prevention system.

References used in the implementation:

- MediaPipe/monocular ROM feasibility: https://pubmed.ncbi.nlm.nih.gov/38203068/
- Real-time exercise recommendations using MediaPipe and peak detection: https://arxiv.org/abs/2310.07221
- Squat depth knee-flexion ranges: https://www.sciencedirect.com/science/article/pii/S0268003301000171
- Deadlift knee, hip, and trunk kinematics: https://link.springer.com/article/10.1186/2052-1847-5-27
- Deadlift spinal alignment: https://pmc.ncbi.nlm.nih.gov/articles/PMC9528690/
- Bench press shoulder symmetry: https://www.mdpi.com/2073-8994/13/10/1859

## Database Schema

Core tables:

- `users`: id, email, full_name, hashed_password, avatar_url, created_at.
- `analyses`: id, user_id, exercise, status, video_key, video_url, overlay_url, score, confidence, rep_count, stability_score, summary, mistakes, recommendations, joint_angles, movement_path, error, timestamps.

## Local Setup

1. Copy environment files:

   ```bash
   cp backend/.env.example backend/.env
   cp apps/mobile/.env.example apps/mobile/.env
   ```

2. Start backend infrastructure:

   ```bash
   docker compose up --build
   ```

3. Seed the demo user:

   ```bash
   docker compose exec api python scripts/seed_demo.py
   ```

4. Start the mobile app:

   ```bash
   cd apps/mobile
   npm install
   npx expo start
   ```

Demo credentials:

- Email: `demo@fitform.ai`
- Password: `password123`

## Production Configuration

Set these in your deployment environment:

- `ENVIRONMENT=production`
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `CORS_ORIGINS`
- `AWS_REGION`
- `S3_BUCKET`
- `S3_ENDPOINT_URL`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `TRUSTED_HOSTS`
- `MAX_UPLOAD_MB`

In production, use managed PostgreSQL, managed Redis, private S3-compatible object storage with lifecycle policies, HTTPS-only API access, and a transactional email provider for password reset tokens. Cloudflare R2 is the recommended no/low-cost object storage option for TestFlight because it is S3-compatible.

Detailed production, TestFlight, privacy, and store-submission materials are in:

- `docs/PRODUCTION_DEPLOYMENT.md`
- `docs/TESTFLIGHT_DEVICE_TEST_PLAN.md`
- `docs/APP_STORE_LISTING.md`
- `docs/APP_PRIVACY_NUTRITION_LABEL.md`
- `docs/PRIVACY_POLICY.md`
- `docs/TERMS_OF_SERVICE.md`

## iOS TestFlight Build

1. Create an Expo/EAS project and replace `extra.eas.projectId` in `apps/mobile/app.json`.
2. Update `ios.bundleIdentifier`.
3. Configure Apple credentials:

   ```bash
   cd apps/mobile
   npx eas login
   npx eas build:configure
   ```

4. Build for internal TestFlight:

   ```bash
   npx eas build --platform ios --profile production
   ```

5. Submit to App Store Connect:

   ```bash
   npx eas submit --platform ios --profile production
   ```

## App Store Readiness Checklist

- Replace the included starter icon and splash with final brand assets before release.
- Add privacy policy and terms URLs.
- Complete App Privacy nutrition labels for video upload, account data, and analytics.
- Provide camera, microphone, and photo library permission copy.
- Confirm backend is reachable over HTTPS from the production app.
- Add human-readable disclaimers that FitForm is coaching assistance, not medical advice.
- Test on physical iPhone devices with real lifting footage from multiple camera angles.

## Future Scaling

- Add live inference with Vision Camera frame processors.
- Store generated overlay videos in S3 and attach `overlay_url`.
- Add model registry for PyTorch exercise classifiers.
- Add coach/team accounts and shared athlete libraries.
- Add signed reset-password flow and email delivery.
# Release verification

See [self-hosted deployment](docs/SELF_HOST_DEPLOYMENT.md) for the deployment path
that does not require S3/R2 or paid Render services, and
[release verification](docs/RELEASE_VERIFICATION.md) for checks and remaining gates.
Production mobile builds require real HTTPS API, privacy and terms URLs in EAS.
The backend serves privacy and terms at `/privacy` and `/terms`; review these with
your real operator contact and backup retention before launch.
