from app.ml.geometry import Point, angle


def test_angle_right_angle() -> None:
    assert round(angle(Point(0, 1), Point(0, 0), Point(1, 0))) == 90
