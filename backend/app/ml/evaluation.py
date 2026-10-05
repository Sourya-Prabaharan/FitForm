"""Evaluation of held-out, human-reviewed labels; never infer truth from predictions."""
import json
from statistics import mean


def evaluate_accuracy(videos: list[dict]) -> dict:
    groups = {}
    for exercise in ("squat", "deadlift", "bench"):
        reviewed = []
        for video in videos:
            label = video.get("expected", {})
            if video.get("exercise") != exercise or not (
                label.get("reviewed") == "true" and label.get("split") == "holdout"
                and label.get("source_type") == "human" and label.get("reviewer", "").strip()
            ):
                continue
            try:
                count = int(label["rep_count"])
                mistakes = json.loads(label["mistakes"])
                if count < 0 or not isinstance(mistakes, list) or not all(isinstance(x, str) for x in mistakes):
                    raise ValueError("Invalid labels")
            except (KeyError, ValueError, TypeError) as exc:
                raise ValueError(f"Invalid reviewed labels for {video.get('file')}") from exc
            reviewed.append((video, count, set(mistakes)))

        errors = []
        true_positive = false_positive = false_negative = 0
        completed = 0
        for video, count, expected in reviewed:
            if video.get("status") != "completed":
                continue
            completed += 1
            errors.append(abs(video["rep_count"] - count))
            predicted = {item["code"] for item in video["mistakes"]}
            true_positive += len(predicted & expected)
            false_positive += len(predicted - expected)
            false_negative += len(expected - predicted)
        groups[exercise] = {
            "reviewedClips": len(reviewed),
            "completedClips": completed,
            "rejectedOrFailedClips": len(reviewed) - completed,
            "coverage": completed / len(reviewed) if reviewed else None,
            "repCountMeanAbsoluteError": mean(errors) if errors else None,
            "truePositives": true_positive,
            "falsePositives": false_positive,
            "falseNegatives": false_negative,
            "issuePrecision": true_positive / (true_positive + false_positive) if true_positive + false_positive else None,
            "issueRecall": true_positive / (true_positive + false_negative) if true_positive + false_negative else None,
        }
    return {
        "status": "measured_not_certified" if any(g["completedClips"] for g in groups.values()) else "unvalidated",
        "exercises": groups,
        "limitations": "Metrics cover completed clips only; review coverage and rejected clips separately. "
                        "No validated FitScore, fatigue or safety accuracy is established by this report.",
    }
