from app.ml.fit_score import analyze_set_quality
from app.ml.geometry import Point
from app.ml.scoring import score


def frame(knee_y: float, knee_x_scale: float = 1.0, hip_x: float = 0.5) -> dict[str, Point]:
    return {
        "left_shoulder": Point(hip_x - 0.08, 0.2, visibility=0.9),
        "right_shoulder": Point(hip_x + 0.08, 0.2, visibility=0.9),
        "left_elbow": Point(hip_x - 0.12, 0.36, visibility=0.9),
        "right_elbow": Point(hip_x + 0.12, 0.36, visibility=0.9),
        "left_wrist": Point(hip_x - 0.14, 0.52, visibility=0.9),
        "right_wrist": Point(hip_x + 0.14, 0.52, visibility=0.9),
        "left_hip": Point(hip_x - 0.06, 0.48, visibility=0.9),
        "right_hip": Point(hip_x + 0.06, 0.48, visibility=0.9),
        "left_knee": Point(hip_x - 0.06 - 0.08 * knee_x_scale, knee_y, visibility=0.9),
        "right_knee": Point(hip_x + 0.06 + 0.08 * knee_x_scale, knee_y, visibility=0.9),
        "left_ankle": Point(hip_x - 0.17, 0.9, visibility=0.9),
        "right_ankle": Point(hip_x + 0.17, 0.9, visibility=0.9),
    }


def squat_rep(knee_x_scale: float = 1.0, hip_offset: float = 0) -> list[dict[str, Point]]:
    return [
        frame(0.55, knee_x_scale, 0.5 + hip_offset),
        frame(0.64, knee_x_scale, 0.5 + hip_offset),
        frame(0.73, knee_x_scale, 0.5 + hip_offset),
        frame(0.64, knee_x_scale, 0.5 + hip_offset),
        frame(0.55, knee_x_scale, 0.5 + hip_offset),
    ]


def test_set_quality_returns_rep_scores() -> None:
    frames = squat_rep() + squat_rep() + squat_rep()
    result = analyze_set_quality(frames, 30, "squat")
    assert result.reps
    assert 0 <= result.averageFitScore <= 100
    assert result.bestRepIndex >= 1
    assert result.reps[0].fitScore.overall >= 0
    assert result.fatigue.fatigueScore >= 0


def test_score_includes_set_analysis() -> None:
    frames = squat_rep() + squat_rep(0.7, 0.02) + squat_rep(0.45, 0.04)
    result = score(frames, 30, "squat")
    assert result.set_analysis is not None
    assert result.rep_count == len(result.set_analysis.reps)
    assert result.score == round(result.set_analysis.averageFitScore)
