# FitForm accuracy validation

As of October 3, 2026, no reviewed human holdout labels exist in this workspace.
The accuracy evaluator returns `unvalidated`; no accuracy percentage is established.
Successful uploads, synthetic-video tests and unit tests are not ground truth.

## Evaluate reviewed recordings

Have an appropriately qualified reviewer label consented human recordings,
including clean technique, individual issues, partial reps, occlusion, different
bodies and camera angles. Define observable issue codes and annotation rules
before labeling. Include a second independent reviewer and resolve disagreements.
Keep people and recordings in the holdout set separate from threshold tuning.
Do not label a clip by copying FitForm's own output.

The existing calibration command accepts a CSV with these columns:

| Column | Meaning |
| --- | --- |
| file | Relative video path under the dataset directory |
| exercise | squat, deadlift or bench |
| rep_count | Reviewed nonnegative integer count |
| mistakes | JSON list of all applicable issue codes; `[]` explicitly means none |
| reviewed | `true` only after review is complete |
| reviewer | Reviewer identifier, without unnecessary personal details |
| source_type | `human`; synthetic clips are excluded from accuracy evidence |
| split | `holdout`; training/tuning clips are excluded |

Use a CSV writer or spreadsheet export to quote the JSON field correctly.

```sh
docker compose exec api python scripts/calibrate_validation_dataset.py --labels /validation-videos/labels.csv
docker compose exec api python scripts/evaluate_accuracy.py /validation-videos/calibration-report.json
```

The report provides per-exercise rep-count mean absolute error, issue precision,
issue recall, and rejected/failed-clip coverage. Undefined metrics stay null,
not a misleading 100%. Rejected clips are visible separately rather than being
silently discarded. The command exits 2 when no reviewed completed samples exist.
Exit 0 means measurements were computed, not that accuracy or release gates passed.

Review errors per issue, subject and camera angle before changing thresholds.
Predefine acceptance targets and a sufficiently diverse sample size with the
reviewers; report uncertainty and keep a final untouched holdout. These metrics
do not validate the 0-100 FitScore, fatigue attribution or safety of a lift.

## Current limitations

FitForm applies rules to estimated pose landmarks, not a trained form classifier.
It does not directly measure spinal curvature or detect the bar. A changing tempo
does not prove physiological fatigue. Camera movement, perspective and occlusion
can change the measurements. No automatic loading progression is justified by
a high score alone.

MediaPipe reports image and world landmarks as distinct outputs; its visibility
field is not a probability that FitForm's technique judgment is correct. See the
[official pose guide](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker/python).
