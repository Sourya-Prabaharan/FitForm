from app.ml.pose import PoseExtractor
from app.ml.schemas import AnalysisComputation
from app.ml.scoring import score
from app.models.analysis import ExerciseType


def analyze_video(video_path: str, exercise: ExerciseType) -> AnalysisComputation:
    extractor = PoseExtractor()
    frames, fps = extractor.extract(video_path)
    result = score(frames, fps, exercise)
    result.pose_frames = extractor.overlay_frames
    return result
