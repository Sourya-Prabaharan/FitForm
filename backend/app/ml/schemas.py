from pydantic import BaseModel


class Mistake(BaseModel):
    code: str
    label: str
    severity: str
    firstFrame: int
    confidence: float
    evidence: str
    reference: str


class AnglePoint(BaseModel):
    frame: int
    timestampMs: int
    angle: float


class JointAngleSeries(BaseModel):
    joint: str
    values: list[AnglePoint]


class MovementPathPoint(BaseModel):
    frame: int
    x: float
    y: float
    confidence: float


class FitScoreBreakdown(BaseModel):
    stability: float
    symmetry: float
    rangeOfMotion: float
    tempoControl: float
    posture: float
    overall: float


class RepAnalysis(BaseModel):
    repIndex: int
    startTime: float
    endTime: float
    duration: float
    fitScore: FitScoreBreakdown
    averageVelocity: float
    rangeOfMotion: float
    instability: float
    asymmetry: float


class FatigueAnalysis(BaseModel):
    fatigueScore: float
    fatigueDetected: bool
    fatigueOnsetRep: int | None
    velocityDropPercent: float
    stabilityDropPercent: float
    rangeOfMotionDropPercent: float
    fitScoreDropPercent: float
    summary: str


class SetAnalysis(BaseModel):
    reps: list[RepAnalysis]
    averageFitScore: float
    bestRepIndex: int
    worstRepIndex: int
    fatigue: FatigueAnalysis


class AnalysisComputation(BaseModel):
    score: int
    confidence: float
    rep_count: int
    stability_score: int
    summary: str
    mistakes: list[Mistake]
    recommendations: list[str]
    joint_angles: list[JointAngleSeries]
    movement_path: list[MovementPathPoint]
    set_analysis: SetAnalysis | None = None
