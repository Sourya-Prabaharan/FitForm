# FitForm Dataset Options

Use this catalog to choose validation/calibration data for FitForm's squat, deadlift, and bench press analyzer.

## Best Immediate Fit

### GenAI-MVS

- URL: https://huggingface.co/datasets/AvihaiNaam/GenAI-MVS
- Access: direct Hugging Face download.
- License: CC-BY-4.0.
- FitForm coverage: bench press and deadlift are present; squat is not visible in the current dataset preview.
- Why use it: small clips, direct download, redistributable with attribution, already proven to run through FitForm locally.
- Limitation: AI-generated videos, so use for smoke tests and pipeline regression, not final human threshold calibration.

Recommended use:

- Keep as the fast CI/manual smoke-test set.
- Add more bench/deadlift clips to test FitScore and fatigue behavior.

## Best Real-Human Calibration Source

### MM-Fit

- Project: https://mmfit.github.io/
- Video record: https://zenodo.org/records/7672767
- Access: direct Zenodo downloads.
- License: Creative Commons Attribution 4.0 International.
- FitForm coverage: squats are explicitly included; also includes other full-body exercises. It does not cover powerlifting bench/deadlift as primary classes.
- Data volume: large. Zenodo lists 20 workout-session RGB videos, roughly 39.1 GB total; individual files range from hundreds of MB to multiple GB.
- Why use it: real human exercise video, multi-view RGB-D, 2D/3D pose estimates, permissive license.
- Limitation: download size and exercise set. Best for squat calibration first.

Recommended use:

- Download one smaller session first, such as `w19_rgb.mp4`, then clip out squat intervals.
- Use it to tune squat depth, stability, and rep detection against real human motion.

## Best Action-Quality Dataset

### Fitness-AQA

- URL: https://github.com/ParitoshParmar/Fitness-AQA
- Access: request-only Google Form from the repository.
- License/use: repository says dataset access requires accepting terms and is for non-commercial use only.
- FitForm coverage: BackSquat, OverheadPress, BarbellRow.
- Why use it: expert-annotated form errors and action quality assessment, highly relevant to FitScore/form feedback.
- Limitation: non-commercial and request-gated; not usable for App Store commercial calibration unless the terms allow your use case.

Recommended use:

- Request access for research/evaluation only.
- Use BackSquat labels to benchmark the rule-based FitScore and mistake detection logic.

## Best Real-World Web Candidate Source

### Kinetics

- URL: https://github.com/cvdfoundation/kinetics-dataset
- Access: public annotations with YouTube IDs and timestamps.
- FitForm coverage: labels include squat, deadlifting, and bench pressing in Kinetics 700 annotations.
- Why use it: good way to discover many real-world examples across camera angles and environments.
- Limitation: videos are YouTube-hosted, availability changes, and redistribution rights are not guaranteed. Use as manually reviewed validation references, not bundled app assets.

Recommended use:

- Keep URLs/timestamps in `validation-videos/manifest.json`.
- Manually review clips for full-body visibility and rights before downloading.

## Useful Synthetic/Classification Sources

### InfiniteForm

- Paper: https://arxiv.org/abs/2110.01330
- Access: described as open-source synthetic fitness data.
- FitForm coverage: 60k synthetic images across 15 fitness categories, not full lifting videos.
- Why use it: useful for pose robustness and keypoint stress testing.
- Limitation: images, synthetic domain, not ideal for rep-level fatigue or video-form scoring.

### Fitness AI Trainer Dataset Mix

- URL: https://github.com/RiccardoRiccio/Fitness-AI-Trainer-With-Automatic-Exercise-Recognition-and-Counting
- FitForm coverage: squat, push-up, shoulder press, bicep curl.
- Why use it: may help exercise classification and rep counting.
- Limitation: does not cover deadlift/bench and may combine data from multiple sources with separate licenses.

## Recommended FitForm Dataset Plan

1. Keep GenAI-MVS for quick bench/deadlift smoke tests.
2. Download a small MM-Fit session and extract squat clips for real-human squat calibration.
3. Use Kinetics annotations to find candidate deadlift and bench videos, but do not redistribute them.
4. Request Fitness-AQA only if research/non-commercial use is acceptable.
5. Build a local `validation-videos/labels.csv` with expected exercise, camera angle, rep count, and known form issues.

## Download And Calibration Commands

From the repo root:

```bash
python3 scripts/download_validation_datasets.py --genai-limit 2 --kinetics-limit 5
```

To also download the smallest listed MM-Fit RGB session, currently about 415 MB:

```bash
python3 scripts/download_validation_datasets.py --genai-limit 2 --kinetics-limit 5 --include-mmfit
```

After videos are downloaded and backend dependencies are installed, run the analyzer across the folder:

```bash
cd backend
python scripts/calibrate_validation_dataset.py --max-videos 10
```

The calibration script writes:

```text
validation-videos/calibration-report.json
```

This is calibration/validation for FitForm's current rule-based analyzer, not a trained neural network. Train a neural model only after you have labeled real-human videos with exercise, rep boundaries, camera angle, and form-quality labels.

## Local Folder Target

Place curated clips here:

```text
validation-videos/
  squat/
  deadlift/
  bench/
  labels.csv
```

Suggested label columns:

```csv
file,exercise,camera_angle,expected_rep_count,expected_findings,source,license
squat/mmfit_w19_clip_001.mp4,squat,side,8,good depth;stable knees,MM-Fit,CC-BY-4.0
```
