#!/usr/bin/env bash
set -euo pipefail

SRC="/Users/sourya/Documents/Codex/2026-05-13/build-a-full-production-style-ios"
DEST="/Users/sourya/Projects/fitform"

if [ -d "$DEST/.git" ]; then
  echo "Refusing to overwrite existing git repository: $DEST"
  exit 1
fi

mkdir -p "$DEST"

rsync -a --delete \
  --exclude ".git" \
  --exclude "apps/mobile/node_modules" \
  --exclude "apps/mobile/.npm-cache" \
  --exclude "backend/.pytest_cache" \
  --exclude "backend/fitform_backend.egg-info" \
  --exclude "backend/test_synthetic.mp4" \
  --exclude "**/__pycache__" \
  --exclude "*.pyc" \
  "$SRC/" "$DEST/"

cd "$DEST"

git init

git add .gitignore README.md docker-compose.yml \
  backend/Dockerfile backend/pyproject.toml backend/alembic.ini backend/.env.example backend/.env.production.example \
  apps/mobile/package.json apps/mobile/package-lock.json apps/mobile/app.json apps/mobile/eas.json \
  apps/mobile/babel.config.js apps/mobile/tailwind.config.js apps/mobile/tsconfig.json \
  apps/mobile/nativewind-env.d.ts apps/mobile/.env.example apps/mobile/.env.production.example
git commit -m "chore: scaffold FitForm app workspace"

git add backend/app backend/alembic backend/scripts backend/tests scripts
git commit -m "feat: add backend form analysis pipeline"

git add apps/mobile/App.tsx apps/mobile/src apps/mobile/assets
git commit -m "feat: add Expo mobile app experience"

git add docs validation-videos/*.md validation-videos/manifest.json
git commit -m "docs: add validation and release guides"

echo "FitForm repository is ready at $DEST"
echo "Next:"
echo "  cd $DEST"
echo "  git status"
