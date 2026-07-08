from app.ml.pose import PoseExtractor
from app.ml.schemas import AnalysisComputation
from app.ml.scoring import score
from app.models.analysis import ExerciseType


def analyze_video(video_path: str, exercise: ExerciseType) -> AnalysisComputation:
    frames, fps = PoseExtractor().extract(video_path)
    return score(frames, fps, exercise)
