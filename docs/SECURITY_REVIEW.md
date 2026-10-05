# Dependency and session security review

Updated October 3, 2026. This is a targeted engineering review, not a
penetration test or a certification of security.

## Changes

- Updated python-multipart from 0.0.22 to 0.0.31 for published parser denial-of-service issues.
- Replaced python-jose with PyJWT 2.14.0, removing its transitive ecdsa dependency.
  FitForm used HMAC JWTs, not the affected ECDSA signing operation. Existing signed
  tokens retain their format. Decoding now requires subject, purpose, issued-at and
  expiration claims and accepts only the configured signing algorithm.
- Updated setuptools to 83.0.0 in the image and the package build requirements.
- Updated the development-only pytest runner to 9.0.3 following its audit finding.
- Serialized mobile credential storage and made refresh conditional on the
  original session still being current. Logout and a new login cannot be undone
  by an older refresh response. Refresh requests have a 30-second timeout.
- Added token-validation and mobile session-concurrency regression tests.

## Remaining advisories

After the updates, the isolated Python audit reported only protobuf (the same
advisory appeared twice). All 18 backend tests passed with pytest 9.0.3. The local
three-exercise smoke test also passed after the authentication/parser changes,
including SMTP reset, revoked sessions, upload, inference, playback and deletion.

MediaPipe 0.10.14 requires protobuf <5. The pinned protobuf 4.25.9 has
CVE-2026-0994 / GHSA-7gcm-g887-7qv7 affecting recursive `json_format.ParseDict`
with nested Any messages. FitForm does not expose protobuf JSON parsing: requests
use Pydantic and video frames go to MediaPipe. No application call to ParseDict
was found. This reduces apparent exposure but does not establish that all
transitive paths are safe. Do not force protobuf 5 into this dependency set;
migrate and validate the pose engine before removing this audit finding.

The Expo 53 tree still reports image-size, decode-uri-component, braces and
node-forge advisories. October updates patched the xcode UUID dependency and
compatible transitive dependencies. Xcode project parsing, UUID generation and
serialization passed with the override. Expo's native-module versions are now
pinned where caret ranges previously allowed incompatible drift. The final npm
audit still fails (50 affected dependency entries, including transitive effects);
this is explicitly not a clean security audit.
Some affect build tooling, but the report must not be globally ignored. A
coordinated Expo/React Native/navigation upgrade, followed by native builds and
device tests, remains a public-release gate. Avoid `npm audit fix --force`, which
can select incompatible Expo versions. The patched URI decoder is ESM whereas
this navigation stack expects a CommonJS dependency.

## Repeat the checks

```sh
docker build --build-arg INSTALL_DEV=true -t fitform-security-check backend
docker run --rm fitform-security-check python -m pytest -q
docker run --rm fitform-security-check python -m pip check
docker run --rm fitform-security-check sh -c 'pip install --user pip-audit && python -m pip_audit'
cd apps/mobile
npm test
npm run typecheck
npm audit
npx expo-doctor
npx expo export --platform ios
```

The disposable audit container installs its auditing tool; the deployed image
does not. Audit failures must be investigated, not hidden. These audits do not
scan OS libraries, review business logic or establish form-analysis accuracy.

Sources: [multipart header advisory](https://github.com/Kludex/python-multipart/security/advisories/GHSA-pp6c-gr5w-3c5g),
[PyJWT usage](https://pyjwt.readthedocs.io/en/stable/usage.html).
