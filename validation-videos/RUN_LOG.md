# FitForm Validation Run Log

## 2026-05-14 Local API smoke test

Environment:

- FastAPI backend: `http://localhost:8000`
- Worker queue: local Docker Redis/Celery stack
- Auth user: seeded demo account

Results:

| Exercise | File | Status | Score | Confidence | Reps | Findings |
| --- | --- | --- | ---: | ---: | ---: | --- |
| Bench press | `validation-videos/bench_press/genai_mvs_bench_press_1.mp4` | completed | 60 | 0.77 | 1 | Press depth not reached; Bar path symmetry issue; Shoulder stability asymmetry |
| Deadlift | `validation-videos/deadlift/genai_mvs_deadlift_15.mp4` | completed | 94 | 0.77 | 1 | None |

Bench recommendations returned by the API:

- Lower under control to a repeatable bottom position before pressing back toward shoulder stack.
- Check grip spacing, keep wrists stacked, and pause lighter reps until both sides move together.
- Retract and depress the shoulder blades before unracking, then keep the upper back fixed.

Deadlift recommendation returned by the API:

- Keep current loading, repeat the same camera angle next session, and add a small progression.

Notes:

- These clips prove the upload, queue, MediaPipe/OpenCV extraction, scoring, and results API flow can complete against realistic lifting video.
- GenAI-MVS clips are useful for smoke testing because they are redistributable under CC-BY-4.0, but final production thresholds still need real human videos from multiple camera angles.
- The next priority is a clear side-view squat clip from a source with explicit permission or a manually reviewed Kinetics/MM-Fit candidate.
