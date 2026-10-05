import math

REQUIRED = {f"{side}_{joint}" for side in ("left", "right") for joint in ("shoulder", "elbow", "wrist", "hip", "knee", "ankle")}
BONES = [(f"{side}_{a}", f"{side}_{b}") for side in ("left", "right")
         for a, b in (("shoulder", "elbow"), ("elbow", "wrist"),
                      ("shoulder", "hip"), ("hip", "knee"), ("knee", "ankle"))]


def valid_frames(frames, fps) -> bool:
    try:
        return bool(frames) and math.isfinite(fps) and fps > 0 and all(
            REQUIRED.issubset(frame) and all(
                all(math.isfinite(value) for value in (point.x, point.y, point.z, point.visibility))
                and 0 <= point.visibility <= 1 for point in frame.values()
            )
            and sum(frame[name].visibility for name in REQUIRED) / len(REQUIRED) >= 0.45
            # Collapsed limbs have undefined angles, not zero-degree flexion.
            and all(math.dist((frame[a].x, frame[a].y, frame[a].z),
                              (frame[b].x, frame[b].y, frame[b].z)) > 1e-6 for a, b in BONES)
            for frame in frames
        )
    except (TypeError, AttributeError, KeyError, ValueError):
        return False
