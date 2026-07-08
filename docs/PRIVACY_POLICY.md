# FitForm Privacy Policy

Effective date: 2026-05-14

FitForm helps users analyze workout form from videos they choose to record or upload. This policy explains what data the app collects, how it is used, and the controls users have.

## Data We Collect

- Account information: name, email address, password hash, account identifiers, and authentication tokens.
- Workout videos: videos users record in the app or select from their device library for analysis.
- Analysis data: exercise type, form score, detected movement issues, joint-angle metrics, movement path data, recommendations, timestamps, and processing status.
- Device and diagnostics data: app version, request metadata, crash or error logs, and performance diagnostics if enabled in production.

FitForm does not require HealthKit access for the MVP and does not read Apple Health data.

## How We Use Data

- Create and secure user accounts.
- Upload and process workout videos.
- Generate exercise form feedback, scoring, and progress history.
- Improve reliability, prevent abuse, and troubleshoot the service.
- Respond to support, privacy, and account requests.

## Video Processing

Videos are uploaded to FitForm storage and processed by backend computer-vision services. Pose landmarks, joint angles, form findings, and recommendations are stored with the user's account. Production deployments should use private object storage, encryption at rest, HTTPS in transit, and lifecycle policies for video retention.

## Sharing

FitForm does not sell personal data. Data may be processed by service providers used to operate the app, such as cloud hosting, object storage, databases, email delivery, logging, and analytics. These providers may process data only for FitForm operations.

## Retention

Account data is retained while the account is active. Workout videos and analysis records are retained until the user deletes them or requests account deletion, subject to backups and legal obligations. Production deployments should define an explicit video retention window before public launch.

## User Choices

Users can:

- Choose whether to grant camera, microphone, or photo-library access.
- Upload only videos they choose.
- Request account deletion or data export.
- Request deletion of stored workout videos and analyses.

## Children

FitForm is intended for users 13 and older. The app is not directed to children under 13.

## Fitness And Medical Disclaimer

FitForm provides general fitness feedback. It is not medical advice, injury diagnosis, or a replacement for a qualified coach, clinician, or medical professional.

## Contact

Privacy requests: privacy@fitform.example.com

Support: support@fitform.example.com

