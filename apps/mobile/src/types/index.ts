export type ExerciseType = "squat" | "deadlift" | "bench";

export type User = {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type FormMistake = {
  code: string;
  label: string;
  severity: "low" | "medium" | "high";
  firstFrame: number;
  confidence: number;
  evidence?: string;
  reference?: string;
};

export type JointAngleSeries = {
  joint: string;
  values: Array<{ frame: number; timestampMs: number; angle: number }>;
};

export type MovementPathPoint = {
  frame: number;
  x: number;
  y: number;
  confidence: number;
};

export type FitScoreBreakdown = {
  stability: number;
  symmetry: number;
  rangeOfMotion: number;
  tempoControl: number;
  posture: number;
  overall: number;
};

export type RepAnalysis = {
  repIndex: number;
  startTime: number;
  endTime: number;
  duration: number;
  fitScore: FitScoreBreakdown;
  averageVelocity: number;
  rangeOfMotion: number;
  instability: number;
  asymmetry: number;
};

export type FatigueAnalysis = {
  fatigueScore: number;
  fatigueDetected: boolean;
  fatigueOnsetRep: number | null;
  velocityDropPercent: number;
  stabilityDropPercent: number;
  rangeOfMotionDropPercent: number;
  fitScoreDropPercent: number;
  summary: string;
};

export type SetAnalysis = {
  reps: RepAnalysis[];
  averageFitScore: number;
  bestRepIndex: number;
  worstRepIndex: number;
  fatigue: FatigueAnalysis;
};

export type AnalysisResult = {
  id: string;
  exercise: ExerciseType;
  status: "queued" | "processing" | "completed" | "failed";
  score: number;
  confidence: number;
  createdAt: string;
  videoUrl?: string;
  overlayUrl?: string;
  mistakes: FormMistake[];
  recommendations: string[];
  jointAngles: JointAngleSeries[];
  movementPath: MovementPathPoint[];
  repCount: number;
  stabilityScore: number;
  summary: string;
  setAnalysis?: SetAnalysis | null;
};
