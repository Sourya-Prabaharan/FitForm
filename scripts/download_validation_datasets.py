#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import ssl
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VALIDATION_DIR = ROOT / "validation-videos"

GENAI_MVS = {
    "bench": [
        "bench_press/train/1.mp4",
        "bench_press/train/2.mp4",
        "bench_press/train/3.mp4",
        "bench_press/val/10.mp4",
    ],
    "deadlift": [
        "deadlift/train/15.mp4",
        "deadlift/train/16.mp4",
        "deadlift/train/17.mp4",
        "deadlift/val/26.mp4",
    ],
}

MMFIT_SMALL = {
    "squat": [
        "w19_rgb.mp4",
    ],
}

KINETICS_700_TRAIN = "https://s3.amazonaws.com/kinetics/700_2020/annotations/train.csv"
KINETICS_LABELS = {"squat": "squat", "deadlift": "deadlifting", "bench": "bench pressing"}


def ssl_context(insecure: bool) -> ssl.SSLContext:
    if insecure:
        return ssl._create_unverified_context()
    try:
        import certifi

        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


def ssl_help() -> str:
    return (
        "Python could not verify the HTTPS certificate.\n\n"
        "Recommended fixes on macOS:\n"
        "  1. Run the bundled Python certificate installer, usually:\n"
        "     open \"/Applications/Python 3.13/Install Certificates.command\"\n"
        "  2. Or install certifi for this Python:\n"
        "     python3 -m pip install --upgrade certifi\n\n"
        "Then rerun the dataset command.\n"
        "For a one-off download only, you can also rerun with --insecure, but that disables TLS certificate verification."
    )


def download(url: str, destination: Path, force: bool = False, insecure: bool = False) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists() and not force:
        print(f"skip existing {destination}")
        return
    print(f"download {url}")
    try:
        with urllib.request.urlopen(url, timeout=60, context=ssl_context(insecure)) as response, destination.open("wb") as output:
            while chunk := response.read(1024 * 1024):
                output.write(chunk)
    except urllib.error.URLError as exc:
        if "CERTIFICATE_VERIFY_FAILED" in str(exc.reason):
            raise SystemExit(ssl_help()) from exc
        raise
    print(f"wrote {destination}")


def download_genai(limit: int, force: bool, insecure: bool) -> list[dict]:
    entries: list[dict] = []
    base = "https://huggingface.co/datasets/AvihaiNaam/GenAI-MVS/resolve/main"
    for exercise, paths in GENAI_MVS.items():
        for source_path in paths[:limit]:
            file_name = "genai_mvs_" + source_path.replace("/", "_")
            destination = VALIDATION_DIR / exercise / file_name
            download(f"{base}/{source_path}", destination, force, insecure)
            entries.append(
                {
                    "file": str(destination.relative_to(ROOT)),
                    "exercise": exercise,
                    "source": "GenAI-MVS",
                    "source_url": "https://huggingface.co/datasets/AvihaiNaam/GenAI-MVS",
                    "source_path": source_path,
                    "license": "CC-BY-4.0",
                    "usage": "Smoke test and regression validation; AI-generated video.",
                }
            )
    return entries


def download_mmfit(force: bool, insecure: bool) -> list[dict]:
    entries: list[dict] = []
    base = "https://zenodo.org/records/7672767/files"
    for exercise, files in MMFIT_SMALL.items():
        for name in files:
            destination = VALIDATION_DIR / exercise / f"mmfit_{name}"
            download(f"{base}/{name}?download=1", destination, force, insecure)
            entries.append(
                {
                    "file": str(destination.relative_to(ROOT)),
                    "exercise": exercise,
                    "source": "MM-Fit",
                    "source_url": "https://zenodo.org/records/7672767",
                    "source_path": name,
                    "license": "CC-BY-4.0",
                    "usage": "Real-human squat calibration candidate; clip manually before routine analysis.",
                }
            )
    return entries


def write_kinetics_candidates(limit: int, insecure: bool) -> list[dict]:
    csv_path = VALIDATION_DIR / "kinetics_700_train.csv"
    download(KINETICS_700_TRAIN, csv_path, insecure=insecure)
    found = {exercise: 0 for exercise in KINETICS_LABELS}
    entries: list[dict] = []
    with csv_path.open(newline="") as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            for exercise, label in KINETICS_LABELS.items():
                if row.get("label") != label or found[exercise] >= limit:
                    continue
                found[exercise] += 1
                youtube_id = row["youtube_id"]
                entries.append(
                    {
                        "exercise": exercise,
                        "source": "Kinetics 700 2020",
                        "source_url": "https://github.com/cvdfoundation/kinetics-dataset",
                        "youtube_id": youtube_id,
                        "url": f"https://www.youtube.com/watch?v={youtube_id}",
                        "start_seconds": int(row["time_start"]),
                        "end_seconds": int(row["time_end"]),
                        "license": "Source video rights vary; do not redistribute without review.",
                        "usage": "Manual review/reference only unless rights are separately cleared.",
                    }
                )
    return entries


def main() -> None:
    parser = argparse.ArgumentParser(description="Download FitForm validation datasets where redistribution is allowed.")
    parser.add_argument("--genai-limit", type=int, default=2, help="GenAI-MVS clips per exercise.")
    parser.add_argument("--include-mmfit", action="store_true", help="Download the smallest MM-Fit RGB session listed in the catalog.")
    parser.add_argument("--kinetics-limit", type=int, default=5, help="Kinetics URL candidates per exercise.")
    parser.add_argument("--force", action="store_true", help="Re-download existing files.")
    parser.add_argument("--insecure", action="store_true", help="Disable TLS certificate verification for this download run.")
    args = parser.parse_args()

    manifest = {
        "downloaded": download_genai(args.genai_limit, args.force, args.insecure),
        "online_candidates": write_kinetics_candidates(args.kinetics_limit, args.insecure),
    }
    if args.include_mmfit:
        manifest["downloaded"].extend(download_mmfit(args.force, args.insecure))

    output = VALIDATION_DIR / "downloaded_manifest.json"
    output.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"wrote {output}")


if __name__ == "__main__":
    main()
