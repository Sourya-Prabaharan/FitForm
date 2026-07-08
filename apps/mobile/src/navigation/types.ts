import { AnalysisResult, ExerciseType } from "@/types";

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type AppStackParamList = {
  Tabs: undefined;
  Capture: { exercise: ExerciseType };
  Processing: { analysisId: string };
  Results: { analysis: AnalysisResult } | { analysisId: string };
};

export type TabParamList = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
};
