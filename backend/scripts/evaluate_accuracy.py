#!/usr/bin/env python3
import argparse
import json
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from app.ml.evaluation import evaluate_accuracy  # noqa: E402


def main():
    parser = argparse.ArgumentParser(description="Evaluate reviewed holdout labels in a calibration report.")
    parser.add_argument("report", type=Path)
    args = parser.parse_args()
    result = evaluate_accuracy(json.loads(args.report.read_text())["videos"])
    print(json.dumps(result, indent=2, allow_nan=False))
    return 2 if result["status"] == "unvalidated" else 0


if __name__ == "__main__":
    raise SystemExit(main())
