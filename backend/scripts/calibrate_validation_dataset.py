#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = BACKEND_ROOT.parent
VALIDATION_ROOT = Path("/validation-videos") if Path("/validation-videos").exists() else PROJECT_ROOT / "validation-videos"
sys.path.insert(0, str(BACKEND_ROOT))

VIDEO_EXTENSIONS = {".mp4", ".mov", ".m4v", ".avi", ".webm"}
EXERCISES = {"squat", "deadlift", "bench", "bench_press"}


def exercise_from_path(path: Path) -> str | None:
    for part in path.parts:
        normalized = part.lower().replace("-", "_")
        if normalized in EXERCISES:
            return "bench" if normalized == "bench_press" else normalized
    return None


def read_labels(label_path: Path) -> dict[str, dict]:
    if not label_path.exists():
        return {}
    with label_path.open(newline="") as handle:
        return {row["file"]: row for row in csv.DictReader(handle)}


def iter_videos(dataset_dir: Path, max_videos: int | None) -> list[Path]:
    videos = [path for path in dataset_dir.rglob("*") if path.suffix.lower() in VIDEO_EXTENSIONS]
    return sorted(videos)[:max_videos] if max_videos else sorted(videos)


def main() -> None:
    parser = argparse.ArgumentParser(description="Run FitForm analyzer over a validation video folder.")
    parser.add_argument("--dataset-dir", default=str(VALIDATION_ROOT))
    parser.add_argument("--labels", default=str(VALIDATION_ROOT / "labels.csv"))
    parser.add_argument("--output", default=str(VALIDATION_ROOT / "calibration-report.json"))
    parser.add_argument("--max-videos", type=int, default=None)
    args = parser.parse_args()

    dataset_dir = Path(args.dataset_dir)
    labels = read_labels(Path(args.labels))
    reports: list[dict] = []
    try:
        from app.ml.analyzer import analyze_video
    except ModuleNotFoundError as exc:
        missing = exc.name or "a backend dependency"
        raise SystemExit(
            f"Missing backend dependency: {missing}\n\n"
            "Run this calibration inside the backend Docker container:\n"
            "  cd /Users/sourya/Documents/Codex/2026-05-13/build-a-full-production-style-ios\n"
            "  docker compose up --build\n"
            "  docker compose exec api python scripts/calibrate_validation_dataset.py --max-videos 10\n\n"
            "Or install backend dependencies locally from the backend folder:\n"
            "  python3 -m pip install -e .\n"
            "  python3 scripts/calibrate_validation_dataset.py --max-videos 10\n"
        ) from exc

    for video in iter_videos(dataset_dir, args.max_videos):
        relative = str(video.relative_to(dataset_dir))
        label = labels.get(relative, {})
        exercise = label.get("exercise") or exercise_from_path(video)
        if not exercise:
            reports.append({"file": relative, "status": "skipped", "reason": "exercise could not be inferred"})
            continue
        try:
            result = analyze_video(str(video), exercise)
            set_analysis = result.set_analysis.model_dump() if result.set_analysis else None
            reports.append(
                {
                    "file": relative,
                    "exercise": exercise,
                    "status": "completed",
                    "expected": label,
                    "score": result.score,
                    "confidence": result.confidence,
                    "rep_count": result.rep_count,
                    "mistakes": [mistake.model_dump() for mistake in result.mistakes],
                    "recommendations": result.recommendations,
                    "set_analysis": set_analysis,
                }
            )
        except Exception as exc:
            reports.append({"file": relative, "exercise": exercise, "status": "failed", "error": str(exc)})

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps({"videos": reports}, indent=2) + "\n")
    print(f"wrote {output}")


if __name__ == "__main__":
    main()
