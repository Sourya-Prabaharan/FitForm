from statistics import median
from typing import TYPE_CHECKING, Any

from app.ml.fit_score import analyze_set_quality
from app.ml.geometry import angle, midpoint, normalized_variance, slope_degrees
from app.ml.references import REFERENCE_SUMMARY
from app.ml.schemas import AnglePoint, AnalysisComputation, JointAngleSeries, Mistake, MovementPathPoint

if TYPE_CHECKING:
    from app.ml.pose import LandmarkFrame
else:
    LandmarkFrame = dict[str, Any]


def _moving_average(values: list[float], window: int = 5) -> list[float]:
    if len(values) < window:
        return values
    radius = window // 2
    smoothed: list[float] = []
    for index in range(len(values)):
        start = max(0, index - radius)
        end = min(len(values), index + radius + 1)
        smoothed.append(sum(values[start:end]) / (end - start))
    return smoothed


def _series(frames: list[LandmarkFrame], fps: float, joint: str, triples: tuple[str, str, str]) -> JointAngleSeries:
    raw = [angle(frame[triples[0]], frame[triples[1]], frame[triples[2]]) for frame in frames]
    values = [
        AnglePoint(frame=index, timestampMs=round(index * 1000 / fps), angle=round(value, 1))
        for index, value in enumerate(_moving_average(raw))
    ]
    return JointAngleSeries(joint=joint, values=values)


def _movement_path(frames: list[LandmarkFrame], point: str = "hip") -> list[MovementPathPoint]:
    points: list[MovementPathPoint] = []
    for index, frame in enumerate(frames):
        if point == "wrist":
            center = midpoint(frame["left_wrist"], frame["right_wrist"])
        elif point == "shoulder":
            center = midpoint(frame["left_shoulder"], frame["right_shoulder"])
        else:
            center = midpoint(frame["left_hip"], frame["right_hip"])
        points.append(
            MovementPathPoint(frame=index, x=round(center.x, 4), y=round(center.y, 4), confidence=round(center.visibility, 3))
        )
    return points


def _reference(key: str) -> str:
    return REFERENCE_SUMMARY[key]["label"]


def _mistake(code: str, label: str, severity: str, frame: int, confidence: float, evidence: str, reference: str) -> Mistake:
    return Mistake(
        code=code,
        label=label,
        severity=severity,
        firstFrame=max(0, frame),
        confidence=round(confidence, 2),
        evidence=evidence,
        reference=_reference(reference),
    )


def _rep_count_by_troughs(values: list[float], bottom_threshold: float, top_threshold: float) -> int:
    if len(values) < 8:
        return 0
    reps = 0
    saw_bottom = False
    for value in _moving_average(values, window=7):
        if value < bottom_threshold:
            saw_bottom = True
        if saw_bottom and value > top_threshold:
            reps += 1
            saw_bottom = False
    return max(1, reps)


def _frame_of_min(values: list[float]) -> int:
    return min(range(len(values)), key=values.__getitem__)


def _frame_of_max(values: list[float]) -> int:
    return max(range(len(values)), key=values.__getitem__)


def _visibility_confidence(frames: list[LandmarkFrame]) -> float:
    values = [point.visibility for frame in frames for point in frame.values()]
    return sum(values) / len(values)


def _spine_proxy_angles(frames: list[LandmarkFrame]) -> list[float]:
    return [
        slope_degrees(midpoint(frame["left_shoulder"], frame["right_shoulder"]), midpoint(frame["left_hip"], frame["right_hip"]))
        for frame in frames
    ]


def _squat_score(
    frames: list[LandmarkFrame],
    left_knee: JointAngleSeries,
    right_knee: JointAngleSeries,
    hip_path: list[MovementPathPoint],
    torso_angles: list[float],
) -> tuple[int, list[Mistake], list[str], int]:
    mistakes: list[Mistake] = []
    recommendations: list[str] = []
    score_delta = 0
    knee_values = [(left.angle + right.angle) / 2 for left, right in zip(left_knee.values, right_knee.values)]
    bottom = _frame_of_min(knee_values)
    min_knee = knee_values[bottom]
    knee_spread = [abs(frame["left_knee"].x - frame["right_knee"].x) for frame in frames]
    ankle_spread = [abs(frame["left_ankle"].x - frame["right_ankle"].x) for frame in frames]
    hip_y = midpoint(frames[bottom]["left_hip"], frames[bottom]["right_hip"]).y
    knee_y = midpoint(frames[bottom]["left_knee"], frames[bottom]["right_knee"]).y

    if min_knee > 105 or hip_y < knee_y - 0.015:
        mistakes.append(
            _mistake(
                "depth_not_reached",
                "Depth not reached",
                "medium",
                bottom,
                0.84,
                f"Lowest knee flexion reached {round(180 - min_knee)} degrees; hip center stayed above knee line.",
                "squat_depth",
            )
        )
        recommendations.append("Use a controlled descent and aim for the hip crease to reach at least knee height before driving up.")
        score_delta -= 14

    valgus = [
        index
        for index, (knee, ankle) in enumerate(zip(knee_spread, ankle_spread))
        if ankle > 0 and knee / ankle < 0.78
    ]
    if valgus:
        worst = min(valgus, key=lambda index: knee_spread[index] / max(ankle_spread[index], 0.001))
        mistakes.append(
            _mistake(
                "knees_caving",
                "Knees caving inward",
                "high",
                worst,
                0.8,
                f"Knee-to-ankle width ratio dropped to {round(knee_spread[worst] / max(ankle_spread[worst], 0.001), 2)}.",
                "squat_depth",
            )
        )
        recommendations.append("Cue knees over mid-foot, add tempo goblet squats, and reduce load until tracking stays consistent.")
        score_delta -= 16

    torso_drift = max(torso_angles) - min(torso_angles)
    if torso_drift > 25:
        mistakes.append(
            _mistake(
                "torso_shift",
                "Torso angle changes rapidly",
                "medium",
                _frame_of_max(torso_angles),
                0.74,
                f"Torso proxy changed {round(torso_drift)} degrees across the set.",
                "mediapipe_joint_angles",
            )
        )
        recommendations.append("Brace before descent and keep ribcage stacked over pelvis through the sticking point.")
        score_delta -= 9

    return score_delta, mistakes, recommendations, _rep_count_by_troughs(knee_values, 112, 155)


def _deadlift_score(
    frames: list[LandmarkFrame],
    left_knee: JointAngleSeries,
    right_knee: JointAngleSeries,
    hip_path: list[MovementPathPoint],
    torso_angles: list[float],
) -> tuple[int, list[Mistake], list[str], int]:
    mistakes: list[Mistake] = []
    recommendations: list[str] = []
    score_delta = 0
    knee_values = [(left.angle + right.angle) / 2 for left, right in zip(left_knee.values, right_knee.values)]
    hip_angles = [
        angle(midpoint(frame["left_shoulder"], frame["right_shoulder"]), midpoint(frame["left_hip"], frame["right_hip"]), midpoint(frame["left_knee"], frame["right_knee"]))
        for frame in frames
    ]
    hip_rom = max(hip_angles) - min(hip_angles)
    knee_rom = max(knee_values) - min(knee_values)
    torso_drift = max(torso_angles) - min(torso_angles)

    if torso_drift > 28:
        mistakes.append(
            _mistake(
                "back_rounding",
                "Back rounding detected",
                "high",
                _frame_of_max(torso_angles),
                0.82,
                f"Torso-spine proxy drifted {round(torso_drift)} degrees during the pull.",
                "deadlift_spine",
            )
        )
        recommendations.append("Set lats, brace before the pull, and stop the set when torso position can no longer be maintained.")
        score_delta -= 18

    if hip_rom < knee_rom * 0.75:
        mistakes.append(
            _mistake(
                "hip_hinge",
                "Hip hinge quality needs work",
                "medium",
                _frame_of_min(hip_angles),
                0.76,
                f"Hip ROM was {round(hip_rom)} degrees versus knee ROM {round(knee_rom)} degrees.",
                "deadlift_kinematics",
            )
        )
        recommendations.append("Start with hips back and shins closer to vertical so the lift is a hinge, not a squat.")
        score_delta -= 12

    horizontal_drift = normalized_variance([point.x for point in hip_path])
    if horizontal_drift > 0.035:
        mistakes.append(
            _mistake(
                "bar_path",
                "Uneven bar path",
                "medium",
                0,
                0.72,
                f"Hip-center horizontal variance was {round(horizontal_drift, 3)}, suggesting the bar-lifter system drifted.",
                "deadlift_kinematics",
            )
        )
        recommendations.append("Keep the bar close and pull vertically over the mid-foot rather than letting the system drift forward.")
        score_delta -= 10

    return score_delta, mistakes, recommendations, _rep_count_by_troughs(hip_angles, median(hip_angles), max(hip_angles) - 8)


def _bench_score(
    frames: list[LandmarkFrame],
    left_elbow: JointAngleSeries,
    right_elbow: JointAngleSeries,
    wrist_path: list[MovementPathPoint],
) -> tuple[int, list[Mistake], list[str], int]:
    mistakes: list[Mistake] = []
    recommendations: list[str] = []
    score_delta = 0
    elbow_values = [(left.angle + right.angle) / 2 for left, right in zip(left_elbow.values, right_elbow.values)]
    elbow_delta = [abs(left.angle - right.angle) for left, right in zip(left_elbow.values, right_elbow.values)]
    wrist_height_delta = [abs(frame["left_wrist"].y - frame["right_wrist"].y) for frame in frames]
    shoulder_height_delta = [abs(frame["left_shoulder"].y - frame["right_shoulder"].y) for frame in frames]
    bottom = _frame_of_min(elbow_values)

    if min(elbow_values) > 95:
        mistakes.append(
            _mistake(
                "range_of_motion",
                "Press depth not reached",
                "medium",
                bottom,
                0.78,
                f"Minimum elbow angle was {round(min(elbow_values))} degrees.",
                "bench_symmetry",
            )
        )
        recommendations.append("Lower under control to a repeatable bottom position before pressing back toward shoulder stack.")
        score_delta -= 12

    if max(elbow_delta) > 18 or max(wrist_height_delta) > 0.045:
        frame = _frame_of_max(elbow_delta)
        mistakes.append(
            _mistake(
                "bar_symmetry",
                "Bar path symmetry issue",
                "medium",
                frame,
                0.77,
                f"Left-right elbow difference peaked at {round(max(elbow_delta))} degrees.",
                "bench_symmetry",
            )
        )
        recommendations.append("Check grip spacing, keep wrists stacked, and pause lighter reps until both sides move together.")
        score_delta -= 12

    if max(shoulder_height_delta) > 0.05:
        mistakes.append(
            _mistake(
                "shoulder_stability",
                "Shoulder stability asymmetry",
                "medium",
                _frame_of_max(shoulder_height_delta),
                0.72,
                f"Shoulder height difference peaked at {round(max(shoulder_height_delta), 3)} normalized units.",
                "bench_symmetry",
            )
        )
        recommendations.append("Retract and depress the shoulder blades before unracking, then keep the upper back fixed.")
        score_delta -= 9

    return score_delta, mistakes, recommendations, _rep_count_by_troughs(elbow_values, 105, 158)


def score(frames: list[LandmarkFrame], fps: float, exercise: Any) -> AnalysisComputation:
    if len(frames) < 5:
        raise ValueError("Not enough visible body landmarks were detected")

    left_knee = _series(frames, fps, "leftKnee", ("left_hip", "left_knee", "left_ankle"))
    right_knee = _series(frames, fps, "rightKnee", ("right_hip", "right_knee", "right_ankle"))
    left_hip = _series(frames, fps, "leftHip", ("left_shoulder", "left_hip", "left_knee"))
    right_hip = _series(frames, fps, "rightHip", ("right_shoulder", "right_hip", "right_knee"))
    left_elbow = _series(frames, fps, "leftElbow", ("left_shoulder", "left_elbow", "left_wrist"))
    right_elbow = _series(frames, fps, "rightElbow", ("right_shoulder", "right_elbow", "right_wrist"))
    hip_path = _movement_path(frames, "hip")
    wrist_path = _movement_path(frames, "wrist")
    torso_angles = _moving_average(_spine_proxy_angles(frames))
    confidence = _visibility_confidence(frames)
    stability = max(45, min(100, round(100 - normalized_variance([point.x for point in hip_path]) * 380)))

    exercise_value = getattr(exercise, "value", exercise)
    if exercise_value == "squat":
        score_delta, mistakes, recommendations, reps = _squat_score(frames, left_knee, right_knee, hip_path, torso_angles)
        path = hip_path
    elif exercise_value == "deadlift":
        score_delta, mistakes, recommendations, reps = _deadlift_score(frames, left_knee, right_knee, hip_path, torso_angles)
        path = hip_path
    else:
        score_delta, mistakes, recommendations, reps = _bench_score(frames, left_elbow, right_elbow, wrist_path)
        path = wrist_path

    if confidence < 0.62:
        mistakes.append(
            _mistake(
                "low_visibility",
                "Pose confidence is limited",
                "low",
                0,
                confidence,
                f"Average landmark visibility was {round(confidence, 2)}.",
                "mediapipe_joint_angles",
            )
        )
        recommendations.append("Film from a fixed side or three-quarter angle with the whole body visible.")
        score_delta -= 6

    if stability < 75:
        mistakes.append(
            _mistake(
                "movement_stability",
                "Movement stability needs work",
                "low",
                0,
                0.68,
                f"Hip/wrist path stability score was {stability}.",
                "exercise_peak_detection",
            )
        )
        recommendations.append("Use a slower eccentric and keep the camera fixed so path deviations are easier to measure.")
        score_delta -= 6

    if not recommendations:
        recommendations.append("Keep current loading, repeat the same camera angle next session, and add a small progression.")

    set_analysis = analyze_set_quality(frames, fps, exercise_value)
    if set_analysis.reps:
        reps = len(set_analysis.reps)
        stability = round(sum(rep.fitScore.stability for rep in set_analysis.reps) / len(set_analysis.reps))
        recommendations.append(f"Your best rep was rep {set_analysis.bestRepIndex} with a FitScore of {round(max(rep.fitScore.overall for rep in set_analysis.reps))}.")
        if set_analysis.fatigue.fatigueDetected:
            recommendations.append(set_analysis.fatigue.summary)

    legacy_score = max(45, min(99, round(92 + score_delta + (stability - 85) * 0.18 + (confidence - 0.75) * 8)))
    final_score = round(set_analysis.averageFitScore) if set_analysis.reps else legacy_score
    summary = (
        "Strong movement quality with research-informed movement checks passing."
        if final_score >= 85
        else "Technique issues detected from rep quality, joint-angle, path, and symmetry checks."
    )
    return AnalysisComputation(
        score=final_score,
        confidence=round(confidence, 2),
        rep_count=reps,
        stability_score=stability,
        summary=summary,
        mistakes=mistakes,
        recommendations=recommendations,
        joint_angles=[left_knee, right_knee, left_hip, right_hip, left_elbow, right_elbow],
        movement_path=path,
        set_analysis=set_analysis,
    )
