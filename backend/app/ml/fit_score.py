from __future__ import annotations

from statistics import mean
import math
from typing import TYPE_CHECKING, Any

from app.ml.geometry import angle, midpoint
from app.ml.schemas import FatigueAnalysis, FitScoreBreakdown, RepAnalysis, SetAnalysis
from app.ml.validation import valid_frames

if TYPE_CHECKING:
    from app.ml.pose import LandmarkFrame
else:
    LandmarkFrame = dict[str, Any]


def _clamp(value: float, low: float = 0, high: float = 100) -> float:
    return max(low, min(high, value))


def _moving_average(values: list[float], window: int = 5) -> list[float]:
    if len(values) < window:
        return values
    radius = window // 2
    return [
        sum(values[max(0, index - radius) : min(len(values), index + radius + 1)])
        / (min(len(values), index + radius + 1) - max(0, index - radius))
        for index in range(len(values))
    ]


def _percent_drop(early: float, late: float, higher_is_better: bool = True) -> float:
    if early <= 0:
        return 0
    drop = (early - late) / early if higher_is_better else (late - early) / early
    return round(_clamp(drop * 100), 1)


def _avg(values: list[float], fallback: float = 0) -> float:
    return mean(values) if values else fallback


def _frame_point(frames: list[LandmarkFrame], frame_index: int, exercise: str):
    frame = frames[frame_index]
    if exercise == "bench":
        return midpoint(frame["left_wrist"], frame["right_wrist"])
    return midpoint(frame["left_hip"], frame["right_hip"])


def _path_instability(frames: list[LandmarkFrame], start: int, end: int, exercise: str) -> float:
    if end - start < 2:
        return 0
    points = [_frame_point(frames, index, exercise) for index in range(start, end + 1)]
    smooth_x = _moving_average([point.x for point in points])
    smooth_y = _moving_average([point.y for point in points])
    # Residual wobble around a smooth trajectory, not total intentional movement.
    return _avg([((p.x - x) ** 2 + (p.y - y) ** 2) ** 0.5
                 for p, x, y in zip(points[2:-2], smooth_x[2:-2], smooth_y[2:-2])])


def _spine_angles(frames: list[LandmarkFrame]) -> list[float]:
    return [
        angle(
            midpoint(frame["left_shoulder"], frame["right_shoulder"]),
            midpoint(frame["left_hip"], frame["right_hip"]),
            midpoint(frame["left_knee"], frame["right_knee"]),
        )
        for frame in frames
    ]


def _exercise_series(frames: list[LandmarkFrame], exercise: str) -> dict[str, list[float]]:
    left_knee = [angle(frame["left_hip"], frame["left_knee"], frame["left_ankle"]) for frame in frames]
    right_knee = [angle(frame["right_hip"], frame["right_knee"], frame["right_ankle"]) for frame in frames]
    left_hip = [angle(frame["left_shoulder"], frame["left_hip"], frame["left_knee"]) for frame in frames]
    right_hip = [angle(frame["right_shoulder"], frame["right_hip"], frame["right_knee"]) for frame in frames]
    left_elbow = [angle(frame["left_shoulder"], frame["left_elbow"], frame["left_wrist"]) for frame in frames]
    right_elbow = [angle(frame["right_shoulder"], frame["right_elbow"], frame["right_wrist"]) for frame in frames]

    knee = _moving_average([(left + right) / 2 for left, right in zip(left_knee, right_knee)])
    hip = _moving_average([(left + right) / 2 for left, right in zip(left_hip, right_hip)])
    elbow = _moving_average([(left + right) / 2 for left, right in zip(left_elbow, right_elbow)])

    if exercise == "bench":
        primary = elbow
        symmetry = [abs(left - right) for left, right in zip(left_elbow, right_elbow)]
    elif exercise == "deadlift":
        primary = hip
        symmetry = [abs(left - right) for left, right in zip(left_hip, right_hip)]
    else:
        primary = knee
        symmetry = [abs(left - right) for left, right in zip(left_knee, right_knee)]

    return {
        "primary": primary,
        "knee": knee,
        "hip": hip,
        "elbow": elbow,
        "symmetry": _moving_average(symmetry),
        "spine": _moving_average(_spine_angles(frames)),
    }


def _rep_segments(values: list[float], exercise: str, fps: float = 15) -> list[tuple[int, int]]:
    if len(values) < 5:
        return []

    low = min(values)
    high = max(values)
    if high - low < 12:
        return []
    travel = max(1, high - low)
    bottom_threshold = low + travel * 0.38
    top_threshold = low + travel * 0.72

    segments: list[tuple[int, int]] = []
    start = 0
    saw_bottom = False
    # A fixed time threshold must not grow when another set or idle time is appended.
    min_gap = max(2, math.ceil(fps * 0.4))

    for index, value in enumerate(values):
        if value <= bottom_threshold:
            saw_bottom = True
        if value >= top_threshold:
            if saw_bottom and index - start >= min_gap:
                segments.append((start, index))
            # Discard implausibly brief cycles and keep idle time out of rep duration.
            start = index
            saw_bottom = False

    return segments


def _tempo_score(values: list[float], start: int, end: int, fps: float) -> tuple[float, float]:
    rep_values = values[start : end + 1]
    if len(rep_values) < 3:
        return 100, 0
    deltas = [abs(b - a) for a, b in zip(rep_values, rep_values[1:])]
    duration = max((end - start) / max(fps, 1), 0.01)
    velocity = sum(deltas) / duration
    mean_delta = _avg(deltas, 0)
    if mean_delta == 0:
        return 100, velocity
    jitter = _avg([abs(delta - mean_delta) for delta in deltas]) / mean_delta
    return round(_clamp(100 - jitter * 45), 1), round(velocity, 3)


def _range_score(values: list[float], start: int, end: int, exercise: str) -> tuple[float, float]:
    rep_values = values[start : end + 1]
    if not rep_values:
        return 0, 0
    movement = max(rep_values) - min(rep_values)
    if exercise == "squat":
        depth = 180 - min(rep_values)
        return round(_clamp((depth / 80) * 100), 1), round(depth, 1)
    if exercise == "bench":
        completion = 180 - min(rep_values)
        return round(_clamp((completion / 85) * 100), 1), round(movement, 1)
    return round(_clamp((movement / 55) * 100), 1), round(movement, 1)


def _posture_score(series: dict[str, list[float]], start: int, end: int, exercise: str) -> float:
    spine = series["spine"][start : end + 1]
    if exercise == "squat":
        torso_drift = max(spine, default=0) - min(spine, default=0)
        depth_penalty = max(0, 100 - _range_score(series["knee"], start, end, exercise)[0]) * 0.35
        return round(_clamp(100 - torso_drift * 1.6 - depth_penalty), 1)
    if exercise == "deadlift":
        # The hip angle changes normally during a hinge; it cannot measure spinal curvature.
        changes = [b - a for a, b in zip(spine, spine[1:])]
        angular_jitter = _avg([abs(b - a) for a, b in zip(changes, changes[1:])])
        return round(_clamp(100 - angular_jitter * 4), 1)
    shoulder_delta = [
        abs(frame["left_shoulder"].y - frame["right_shoulder"].y)
        for frame in series.get("frames", [])[start : end + 1]
    ]
    return round(_clamp(100 - max(shoulder_delta, default=0) * 850), 1)


def analyze_set_quality(frames: list[LandmarkFrame], fps: float, exercise: str) -> SetAnalysis:
    if exercise not in {"squat", "deadlift", "bench"}:
        raise ValueError("Unsupported exercise")
    if not valid_frames(frames, fps):
        fatigue = FatigueAnalysis(
            fatigueScore=0,
            fatigueDetected=False,
            fatigueOnsetRep=None,
            velocityDropPercent=0,
            stabilityDropPercent=0,
            rangeOfMotionDropPercent=0,
            fitScoreDropPercent=0,
            summary="Not enough visible pose data to analyze fatigue.",
        )
        return SetAnalysis(reps=[], averageFitScore=0, bestRepIndex=0, worstRepIndex=0, fatigue=fatigue)

    series = _exercise_series(frames, exercise)
    series["frames"] = frames
    segments = _rep_segments(series["primary"], exercise, fps)
    reps: list[RepAnalysis] = []

    for rep_number, (start, end) in enumerate(segments, start=1):
        instability = _path_instability(frames, start, end, exercise)
        asymmetry = _avg(series["symmetry"][start : end + 1])
        stability = round(_clamp(100 - instability * 1200), 1)
        symmetry = round(_clamp(100 - asymmetry * 2.6), 1)
        range_score, range_value = _range_score(series["primary"], start, end, exercise)
        tempo_score, velocity = _tempo_score(series["primary"], start, end, fps)
        posture = _posture_score(series, start, end, exercise)
        # Rule-based MVP formula, intentionally transparent and not an ML claim.
        overall = round(
            _clamp(0.25 * stability + 0.20 * symmetry + 0.20 * range_score + 0.15 * tempo_score + 0.20 * posture),
            1,
        )
        reps.append(
            RepAnalysis(
                repIndex=rep_number,
                startTime=round(start / max(fps, 1), 2),
                endTime=round(end / max(fps, 1), 2),
                duration=round((end - start) / max(fps, 1), 2),
                fitScore=FitScoreBreakdown(
                    stability=stability,
                    symmetry=symmetry,
                    rangeOfMotion=range_score,
                    tempoControl=tempo_score,
                    posture=posture,
                    overall=overall,
                ),
                averageVelocity=velocity,
                rangeOfMotion=range_value,
                instability=round(instability, 4),
                asymmetry=round(asymmetry, 1),
            )
        )

    fit_scores = [rep.fitScore.overall for rep in reps]
    average_fit_score = round(_avg(fit_scores), 1)
    best_rep = max(reps, key=lambda rep: rep.fitScore.overall).repIndex if reps else 0
    worst_rep = min(reps, key=lambda rep: rep.fitScore.overall).repIndex if reps else 0
    fatigue = _fatigue_analysis(reps)
    return SetAnalysis(
        reps=reps,
        averageFitScore=average_fit_score,
        bestRepIndex=best_rep,
        worstRepIndex=worst_rep,
        fatigue=fatigue,
    )


def _fatigue_analysis(reps: list[RepAnalysis]) -> FatigueAnalysis:
    if len(reps) < 2:
        return FatigueAnalysis(
            fatigueScore=0,
            fatigueDetected=False,
            fatigueOnsetRep=None,
            velocityDropPercent=0,
            stabilityDropPercent=0,
            rangeOfMotionDropPercent=0,
            fitScoreDropPercent=0,
            summary="Fatigue needs multiple reps to estimate reliably.",
        )

    baseline_count = min(3, max(1, len(reps) // 2))
    early = reps[:baseline_count]
    late = reps[-baseline_count:]

    velocity_drop = _percent_drop(_avg([rep.averageVelocity for rep in early]), _avg([rep.averageVelocity for rep in late]))
    stability_drop = _percent_drop(_avg([rep.fitScore.stability for rep in early]), _avg([rep.fitScore.stability for rep in late]))
    rom_drop = _percent_drop(_avg([rep.rangeOfMotion for rep in early]), _avg([rep.rangeOfMotion for rep in late]))
    fit_score_drop = _percent_drop(_avg([rep.fitScore.overall for rep in early]), _avg([rep.fitScore.overall for rep in late]))

    # Rule-based MVP fatigue formula: velocity decay matters most, with stability and ROM loss as secondary signals.
    fatigue_score = round(_clamp(0.40 * velocity_drop + 0.30 * stability_drop + 0.30 * rom_drop), 1)
    baseline_fit = _avg([rep.fitScore.overall for rep in early])
    fatigue_onset = next(
        (rep.repIndex for rep in reps[baseline_count:] if baseline_fit > 0 and (baseline_fit - rep.fitScore.overall) / baseline_fit >= 0.12),
        None,
    )
    quality_drop_detected = fit_score_drop >= 8 or stability_drop >= 10 or rom_drop >= 10 or fatigue_onset is not None
    velocity_only_drop = velocity_drop >= 20 and not quality_drop_detected
    fatigue_detected = quality_drop_detected or (fatigue_score >= 18 and not velocity_only_drop)

    if quality_drop_detected:
        summary = f"Movement quality dropped {fit_score_drop}% by the end of the set."
        if fatigue_onset:
            summary += f" Estimated quality first declined around rep {fatigue_onset}; fatigue is one possible cause."
        elif rom_drop >= 10 and stability_drop >= 10:
            summary += " Reduced range of motion and increased instability were the main signals."
        elif rom_drop >= 10:
            summary += " Reduced range of motion was the main signal."
        elif stability_drop >= 10:
            summary += " Increased instability was the main signal."
    elif velocity_only_drop:
        summary = f"Tempo slowed {velocity_drop}% by the end of the set, but movement quality stayed stable."
    else:
        summary = "No clear fatigue pattern detected across this set."

    return FatigueAnalysis(
        fatigueScore=fatigue_score,
        fatigueDetected=fatigue_detected,
        fatigueOnsetRep=fatigue_onset,
        velocityDropPercent=velocity_drop,
        stabilityDropPercent=stability_drop,
        rangeOfMotionDropPercent=rom_drop,
        fitScoreDropPercent=fit_score_drop,
        summary=summary,
    )
