from __future__ import annotations

import cv2
import mediapipe as mp

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
    def extract(self, video_path: str, max_frames: int = 900) -> tuple[list[LandmarkFrame], float]:
        frames: list[LandmarkFrame] = []
        confidences: list[float] = []
        capture = cv2.VideoCapture(video_path)
        if not capture.isOpened():
            raise ValueError("Video could not be opened for pose analysis")
        fps = capture.get(cv2.CAP_PROP_FPS) or 30

        with mp.solutions.pose.Pose(
            static_image_mode=False,
            model_complexity=2,
            enable_segmentation=False,
            min_detection_confidence=0.55,
            min_tracking_confidence=0.55,
        ) as pose:
            frame_index = 0
            while frame_index < max_frames:
                ok, frame = capture.read()
                if not ok:
                    break
                image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                result = pose.process(image)
                if result.pose_landmarks:
                    landmarks = result.pose_landmarks.landmark
                    frame = {
                        name: Point(
                            landmarks[index].x,
                            landmarks[index].y,
                            landmarks[index].z,
                            landmarks[index].visibility,
                        )
                        for name, index in LANDMARKS.items()
                    }
                    frames.append(frame)
                    confidences.append(sum(point.visibility for point in frame.values()) / len(frame))
                frame_index += 1
        capture.release()
        return frames, fps
