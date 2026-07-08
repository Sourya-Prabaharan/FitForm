# App Store Privacy Nutrition Label Draft

Apple requires developers to self-report privacy practices in App Store Connect. This draft reflects the current FitForm MVP. Update it before submission if analytics, ads, crash reporting, payment, support tooling, or third-party SDKs are added.

## Data Used To Track Users

None planned for MVP.

Do not enable App Tracking Transparency unless FitForm adds cross-app or cross-site tracking.

## Data Linked To The User

### Contact Info

- Email Address
- Name

Purpose:

- App Functionality
- Account Management

### User Content

- Photos or Videos: workout videos users choose to record or upload.

Purpose:

- App Functionality
- Fitness form analysis

### Health & Fitness

- Workout analysis metrics generated from user videos, including exercise type, rep count, form score, confidence, joint angles, movement path, and recommendations.

Purpose:

- App Functionality
- Progress tracking

### Identifiers

- User ID

Purpose:

- App Functionality
- Authentication

### Diagnostics

- Crash Data
- Performance Data

Purpose:

- App Functionality
- Analytics, only if production crash/performance tooling is enabled.

## Data Not Linked To The User

None planned for MVP unless anonymized aggregate analytics are added.

## Sensitive Data Notes

FitForm does not use HealthKit in the MVP. Workout videos can still reveal sensitive physical traits and health-related activity. Treat videos and analysis data as sensitive: use HTTPS, private buckets, encryption at rest, least-privilege cloud roles, and deletion/export workflows.

