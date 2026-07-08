from app.ml.geometry import Point
from app.ml.scoring import score


def frame(knee_y: float, knee_x_scale: float = 1.0) -> dict[str, Point]:
    return {
        "left_shoulder": Point(0.42, 0.2, visibility=0.9),
        "right_shoulder": Point(0.58, 0.2, visibility=0.9),
        "left_elbow": Point(0.38, 0.36, visibility=0.9),
        "right_elbow": Point(0.62, 0.36, visibility=0.9),
        "left_wrist": Point(0.36, 0.52, visibility=0.9),
        "right_wrist": Point(0.64, 0.52, visibility=0.9),
        "left_hip": Point(0.44, 0.48, visibility=0.9),
        "right_hip": Point(0.56, 0.48, visibility=0.9),
        "left_knee": Point(0.44 - 0.08 * knee_x_scale, knee_y, visibility=0.9),
        "right_knee": Point(0.56 + 0.08 * knee_x_scale, knee_y, visibility=0.9),
        "left_ankle": Point(0.33, 0.9, visibility=0.9),
        "right_ankle": Point(0.67, 0.9, visibility=0.9),
    }


def test_squat_flags_knee_valgus() -> None:
    frames = [frame(0.62), frame(0.7, knee_x_scale=0.2), frame(0.62), frame(0.58), frame(0.55)] * 3
    result = score(frames, 30, "squat")
    assert any(mistake.code == "knees_caving" for mistake in result.mistakes)
    assert result.rep_count >= 1
