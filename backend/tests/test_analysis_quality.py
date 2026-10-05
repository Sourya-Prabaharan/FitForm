from dataclasses import replace

import pytest

from app.ml.fit_score import _rep_segments, analyze_set_quality
from app.ml.geometry import Point
from app.ml.scoring import score
from app.ml.validation import REQUIRED, valid_frames
from test_fit_score import frame


def test_rep_count_does_not_depend_on_total_clip_length():
    cycle = [170] * 3 + [140, 120, 100, 80, 100, 120, 140] + [170] * 3
    assert len(_rep_segments(cycle, "squat", 15)) == 1
    assert len(_rep_segments(cycle * 60, "squat", 15)) == 60


def test_idle_time_is_not_part_of_rep_duration():
    cycle = [170, 140, 120, 100, 80, 100, 120, 140, 170]
    ordinary = _rep_segments(cycle, "bench", 15)
    delayed = _rep_segments([170] * 100 + cycle, "bench", 15)
    assert len(ordinary) == len(delayed) == 1
    assert ordinary[0][1] - ordinary[0][0] == delayed[0][1] - delayed[0][0]


def test_single_frame_tracking_spikes_do_not_count_as_reps():
    assert _rep_segments([170] * 30 + [80] + [170] * 30, "deadlift", 15) == []


@pytest.mark.parametrize("bad", [float("nan"), float("inf"), -1, 2])
def test_invalid_visibility_is_rejected(bad):
    pose = frame(0.6)
    pose["left_knee"] = replace(pose["left_knee"], visibility=bad)
    assert not valid_frames([pose], 15)


def test_invisible_and_collapsed_landmarks_are_rejected():
    assert not valid_frames([{name: Point(0, 0) for name in REQUIRED}], 15)
    invisible = {name: replace(point, visibility=0) for name, point in frame(0.6).items()}
    assert not valid_frames([invisible], 15)
    assert analyze_set_quality([invisible] * 10, 15, "squat").reps == []


@pytest.mark.parametrize("frames", [[None], [dict.fromkeys(REQUIRED)], [{}]])
def test_malformed_landmarks_fail_without_crashing(frames):
    assert not valid_frames(frames, 15)
    assert analyze_set_quality(frames, 15, "bench").reps == []


def test_unknown_exercise_cannot_silently_use_bench_rules():
    with pytest.raises(ValueError, match="Unsupported exercise"):
        score([frame(0.6)] * 10, 15, "unknown")
