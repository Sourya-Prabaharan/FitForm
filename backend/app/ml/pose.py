from __future__ import annotations

import cv2
import mediapipe as mp
import math
from app.core.config import settings

from app.ml.geometry import Point

LandmarkFrame = dict[str, Point]

LANDMARKS = {
    "left_shoulder": 11,
    "right_shoulder": 12,
    "left_elbow": 13,
    "right_elbow": 14,
    "left_wrist": 15,
    "right_wrist": 16,
    "left_hip": 23,
    "right_hip": 24,
    "left_knee": 25,
    "right_knee": 26,
    "left_ankle": 27,
    "right_ankle": 28,
}


class PoseExtractor:
    def __init__(self):
        self.overlay_frames: list[dict] = []

    def extract(self, video_path: str, max_frames: int = 1800) -> tuple[list[LandmarkFrame], float]:
        frames: list[LandmarkFrame] = []
        confidences: list[float] = []
        capture = cv2.VideoCapture(video_path)
        if not capture.isOpened():
            raise ValueError("Video could not be opened for pose analysis")
        fps = capture.get(cv2.CAP_PROP_FPS)
        if not math.isfinite(fps) or fps <= 0:
            capture.release()
            raise ValueError("Video has invalid timing")
        stride = max(1, math.ceil(fps / 15))
        sample_fps = fps / stride
        duration = capture.get(cv2.CAP_PROP_FRAME_COUNT) / fps
        if duration > settings.max_video_seconds:
            capture.release()
            raise ValueError(f"Use a clip of at most {settings.max_video_seconds} seconds")

        with mp.solutions.pose.Pose(
            static_image_mode=False,
            model_complexity=1,
            enable_segmentation=False,
            min_detection_confidence=0.55,
            min_tracking_confidence=0.55,
        ) as pose:
            frame_index = 0
            missing = 0
            while len(frames) < max_frames:
                ok, frame = capture.read()
                if not ok:
                    break
                frame_index += 1
                if (frame_index - 1) % stride:
                    continue
                height, width = frame.shape[:2]
                if max(height, width) > 960:
                    frame = cv2.resize(frame, (round(width * 960 / max(height, width)), round(height * 960 / max(height, width))))
                image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                result = pose.process(image)
                if result.pose_landmarks:
                    landmarks = result.pose_landmarks.landmark
                    frame = {
                        name: Point(
                            landmarks[index].x * width / height,
                            landmarks[index].y,
                            landmarks[index].z * width / height,
                            landmarks[index].visibility,
                        )
                        for name, index in LANDMARKS.items()
                    }
                    frames.append(frame)
                    self.overlay_frames.append({
                        "timestampMs": round((frame_index - 1) * 1000 / fps),
                        "landmarks": {name: {"x": landmarks[index].x, "y": landmarks[index].y, "visibility": landmarks[index].visibility} for name, index in LANDMARKS.items()},
                    })
                    confidences.append(sum(point.visibility for point in frame.values()) / len(frame))
                else:
                    frames.append({})
                    missing += 1
                    self.overlay_frames.append({"timestampMs": round((frame_index - 1) * 1000 / fps), "landmarks": {}})
        capture.release()
        if not frames or missing / len(frames) > 0.2 or not confidences or sum(confidences) / len(confidences) < 0.45:
            raise ValueError("Body landmarks are not visible reliably enough for analysis")
        # Fill only short tracking gaps, preserving frame indices and elapsed time.
        for index, frame in enumerate(frames):
            if frame:
                continue
            previous = next((j for j in range(index - 1, -1, -1) if frames[j]), None)
            following = next((j for j in range(index + 1, len(frames)) if frames[j]), None)
            if previous is None or following is None or following - previous > sample_fps * 0.5:
                raise ValueError("Tracking was lost. Trim the clip to a clearly visible set.")
            fraction = (index - previous) / (following - previous)
            frames[index] = {
                name: Point(a.x + (frames[following][name].x - a.x) * fraction,
                            a.y + (frames[following][name].y - a.y) * fraction,
                            a.z + (frames[following][name].z - a.z) * fraction,
                            min(a.visibility, frames[following][name].visibility))
                for name, a in frames[previous].items()
            }
        return frames, sample_fps
