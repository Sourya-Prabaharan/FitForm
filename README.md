# FitForm

An in-development workout video analysis project for squat, deadlift, and bench press. The Expo mobile app submits videos to a FastAPI/Celery backend, which extracts MediaPipe landmarks and applies transparent biomechanics rules to produce scores and coaching cues. Form scoring is not a trained exercise-quality classifier.

## Demo and implementation

[Browser demo](https://fitform-demo.vercel.app) · [Demo source](demo/index.html)

The static demo plays recorded videos with predefined scores, angle series, and animated overlays from [its dataset](demo/js/dataset.js). Uploading a custom video changes playback but reuses template analytics; it does **not** run MediaPipe or the backend. Its processing screens simulate the mobile workflow. Real video extraction runs in the Python backend.

```bash
python3 -m http.server 3000 --directory demo
# Open http://localhost:3000
```

## Run the app

Prerequisites: Docker with Compose, Node.js 22/npm, and an Expo-compatible development environment. From a fresh checkout:

```bash
git clone https://github.com/Sourya-Prabaharan/FitForm.git
cd FitForm
cp backend/.env.example backend/.env
cp apps/mobile/.env.example apps/mobile/.env
docker compose up --build
```

In another terminal, seed the local demo account and start mobile:

```bash
docker compose exec api python scripts/seed_demo.py
cd apps/mobile
npm ci
npx expo start
```

Configure the mobile API URL for your device/network. Native camera functionality requires an appropriate development build and physical-device testing. The local seed account is `demo@fitform.ai` / `password123`; it is for local development only.

## Architecture and contribution

The repository brings together a typed React Native client, authenticated API, asynchronous video processing, and per-repetition reporting. See [backend source](backend/app), [mobile source](apps/mobile), and [implementation/operations details](docs/APP_AND_OPERATIONS.md).

- PostgreSQL stores users and analysis state; Celery/Redis separates video processing from HTTP requests.
- MediaPipe/OpenCV extracts pose landmarks. Exercise-specific rules score range of motion, stability, symmetry, tempo, and posture.
- Storage supports local and S3-compatible video files. Deployment configuration and release gates are documented separately.

## Verification and limits

```bash
docker build --build-arg INSTALL_DEV=true -t fitform-test backend
docker run --rm fitform-test python -m pytest -q
cd apps/mobile
npm ci
npm run typecheck
npm test
npx expo-doctor
npx expo export --platform ios
```

The [recorded validation smoke test](validation-videos/RUN_LOG.md) contains two completed API analyses, not a labeled accuracy study. [Video sources](validation-videos/SOURCES.md) include synthetic GenAI-MVS material. There is no saved evaluation supporting the former 91.4% agreement figure; no such accuracy is claimed. Thresholds require validation against labeled human lifting videos, with camera-angle and pose-estimation errors accounted for.

Recent Actions failures reported hosted-runner allocation failures; jobs that acquired runners passed. See [CI investigation](docs/CI_INVESTIGATION.md).

This project is in development, not production-ready or clinically validated. See [release verification](docs/RELEASE_VERIFICATION.md), [physical-device test plan](docs/TESTFLIGHT_DEVICE_TEST_PLAN.md), and [self-hosted setup](docs/SELF_HOST_DEPLOYMENT.md) for outstanding requirements.
