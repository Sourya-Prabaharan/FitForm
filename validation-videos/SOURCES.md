# FitForm Validation Video Sources

This folder tracks external video sources for validating FitForm's pose extraction,
rep counting, and form-scoring thresholds against real or realistic lifting motion.

## Downloaded local clips

These files are already present in this workspace and can be uploaded to the local
backend for analysis smoke tests.

| Exercise | Local file | Source | License / usage |
| --- | --- | --- | --- |
| Bench press | `validation-videos/bench_press/genai_mvs_bench_press_1.mp4` | [GenAI-MVS, `bench_press/train/1.mp4`](https://huggingface.co/datasets/AvihaiNaam/GenAI-MVS) | CC-BY-4.0. AI-generated multi-view exercise dataset. Useful for repeatable smoke tests, not a substitute for human-recorded calibration. |
| Deadlift | `validation-videos/deadlift/genai_mvs_deadlift_15.mp4` | [GenAI-MVS, `deadlift/train/15.mp4`](https://huggingface.co/datasets/AvihaiNaam/GenAI-MVS) | CC-BY-4.0. AI-generated multi-view exercise dataset. Useful for repeatable smoke tests, not a substitute for human-recorded calibration. |

## Online validation candidates

These are online candidates discovered from the public Kinetics 700 2020 training
annotations. Kinetics provides YouTube IDs and clip timestamps; videos should be
reviewed for availability, visibility, camera angle, and rights before downloading
or redistributing. Use them as internal validation references unless separately
licensed.

### Squat

| YouTube URL | Clip window |
| --- | --- |
| https://www.youtube.com/watch?v=2gy0I3ND5Jc | 24s-34s |
| https://www.youtube.com/watch?v=QpV1gJZmgDE | 16s-26s |
| https://www.youtube.com/watch?v=QCAtQwaXq2Q | 43s-53s |
| https://www.youtube.com/watch?v=uTsP-4YDpmM | 6s-16s |
| https://www.youtube.com/watch?v=OuxCVWRLu_k | 25s-35s |

### Deadlift

| YouTube URL | Clip window |
| --- | --- |
| https://www.youtube.com/watch?v=U1DE1x8XjvI | 1s-11s |
| https://www.youtube.com/watch?v=LAZPJF4De9U | 27s-37s |
| https://www.youtube.com/watch?v=77hwfx_-zYQ | 94s-104s |
| https://www.youtube.com/watch?v=c5_HmO4c9EA | 2s-12s |
| https://www.youtube.com/watch?v=f8fSaeclK8A | 2s-12s |

### Bench press

| YouTube URL | Clip window |
| --- | --- |
| https://www.youtube.com/watch?v=wJdjTwkbNtA | 2s-12s |
| https://www.youtube.com/watch?v=JLbAce56NI0 | 173s-183s |
| https://www.youtube.com/watch?v=MCpaVd9pK-c | 3s-13s |
| https://www.youtube.com/watch?v=NbcRkowabg4 | 15s-25s |
| https://www.youtube.com/watch?v=1zD7hu7hlWg | 46s-56s |

## Larger dataset options

| Dataset | Exercises / value | Notes |
| --- | --- | --- |
| [MM-Fit](https://mmfit.github.io/) | Human exercise recordings with time-synchronized modalities and labels, including squat-style movements. | Best candidate for real human calibration, but downloads are large and should be pulled selectively. |
| [Kinetics dataset](https://github.com/cvdfoundation/kinetics-dataset) | Public action-recognition annotations for classes including squat, deadlifting, and bench pressing. | Good for finding real-world web videos. Rights and availability are inherited from source videos. |
| [InfiniteRep](https://papersgraph.com/datasets/infiniterep) | Synthetic exercise clips with camera variation. | Useful for coverage and stress testing, less useful for final thresholds because bodies and motion are synthetic. |

## Recommended validation order

1. Run the local GenAI-MVS clips through the API to confirm the pipeline accepts realistic lifting videos.
2. Manually review the Kinetics candidates and keep only clips with clear full-body or bar-path visibility.
3. Pull a small real-human squat subset from MM-Fit or another explicitly licensed source.
4. Calibrate thresholds separately for side view, front view, and oblique camera angles.
5. Keep every accepted clip in `manifest.json` with source, license, camera angle, and known expected findings.
