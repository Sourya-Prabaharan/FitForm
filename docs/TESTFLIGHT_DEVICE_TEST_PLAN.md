# TestFlight And Real iPhone Test Plan

Use this plan before submitting FitForm for App Review.

## Required Devices

- iPhone with current iOS release.
- One older supported iPhone model.
- At least one device on cellular data and one on Wi-Fi.

## Build

1. Replace `extra.eas.projectId` in `apps/mobile/app.json`.
2. Replace `submit.production.ios.ascAppId` in `apps/mobile/eas.json`.
3. Set `EXPO_PUBLIC_API_URL` to the production or staging HTTPS API.
4. Build:

   ```bash
   cd apps/mobile
   npx eas build --platform ios --profile production
   ```

5. Submit:

   ```bash
   npx eas submit --platform ios --profile production --latest
   ```

Expo's current iOS production flow requires an Apple Developer account and uses App Store Connect/TestFlight for distribution.

## Test Matrix

| Area | Expected result |
| --- | --- |
| Fresh install | Splash loads, onboarding appears, no crash. |
| Sign up | New account is created, session persists after app restart. |
| Login | Existing account signs in, invalid password shows clear error. |
| Token refresh | App remains signed in after access token expiry. |
| Forgot password | Request completes without revealing whether email exists. |
| Camera permission | Native permission text is specific and understandable. |
| Microphone permission | Native permission text is specific and understandable. |
| Record video | 10-30 second clip records, saves locally, uploads, and queues analysis. |
| Upload video | Library video uploads over Wi-Fi and cellular. |
| Large upload | Oversized file receives a clear error. |
| Processing | Polling screen handles queued, processing, completed, and failed states. |
| Results | Score, confidence, reps, mistakes, recommendations, and movement path render cleanly. |
| History | Completed analyses persist and open. |
| Logout | Tokens clear and protected screens are unavailable. |
| Offline | Network failures produce clear retryable errors. |

## Video Calibration Set

Minimum before App Review:

- 5 squat videos: side view and front view.
- 5 deadlift videos: side view and oblique view.
- 5 bench videos: side view and foot-end/head-end angles.
- Include varied lighting, body sizes, clothing contrast, and camera distances.

Each accepted calibration clip should be logged in `validation-videos/manifest.json` with source, license, camera angle, and expected findings.

