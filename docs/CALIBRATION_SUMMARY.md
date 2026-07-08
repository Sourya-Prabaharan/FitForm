# FitForm Calibration Summary

Date: 2026-07-07

Input report: `validation-videos/calibration-report.json`

## Dataset Run

The calibration runner completed on 7 downloaded validation videos:

| Exercise | Source | Clips | Status |
| --- | --- | ---: | --- |
| Bench press | GenAI-MVS | 3 | Completed |
| Deadlift | GenAI-MVS | 3 | Completed |
| Squat | MM-Fit | 1 full session | Completed |

## Results Snapshot

| Exercise | Score range | Rep count range | Confidence range | Common findings |
| --- | ---: | ---: | ---: | --- |
| Bench press | 36-61 | 1-2 | 0.64-0.77 | range of motion, symmetry, shoulder stability |
| Deadlift | 60-63 | 1-2 | 0.68-0.77 | no major mistakes on downloaded synthetic clips |
| Squat | 69 | 2 | 0.91 | depth not reached, knees caving |

## Calibration Notes

- The pipeline now completes against every downloaded clip instead of failing on noisy pose sequences.
- GenAI-MVS is useful for repeatable bench/deadlift smoke tests, but it is AI-generated and should not be the only source for production thresholds.
- The MM-Fit file is a full workout session, not a clipped squat-only video. Rep counts and squat findings should be treated as coarse until squat intervals are clipped or labeled.
- Fatigue logic was tightened after this run so pure velocity slowdown does not get reported as form breakdown when FitScore stays stable.

## Remaining Validation Needed

- Clip MM-Fit into exercise-specific squat intervals.
- Add real human bench and deadlift videos with permission to use them for calibration.
- Add `validation-videos/labels.csv` with expected exercise, rep count, camera angle, and known form issues.
- Rerun calibration after clipping/labeling and compare actual outputs against expected labels.

## Deployment Readiness Impact

This run is enough to prove the analyzer pipeline executes on downloaded datasets. It is not enough to claim production-grade accuracy. FitForm can proceed to TestFlight with a beta disclaimer, but public App Store launch should wait for a labeled real-human validation set.
