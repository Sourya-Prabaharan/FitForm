import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnalysisResult, AuthTokens, ExerciseType, User } from "@/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

type ApiError = { detail?: string };

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = await AsyncStorage.getItem("fitform.refreshToken");
  if (!refreshToken) return null;
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken })
  });
  if (!response.ok) return null;
  const tokens = (await response.json()) as AuthTokens;
  await AsyncStorage.multiSet([
    ["fitform.accessToken", tokens.accessToken],
    ["fitform.refreshToken", tokens.refreshToken]
  ]);
  return tokens.accessToken;
}

async function request<T>(path: string, init: RequestInit = {}, didRefresh = false): Promise<T> {
  const token = await AsyncStorage.getItem("fitform.accessToken");
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, { ...init, headers });
  if (response.status === 401 && !didRefresh && !path.startsWith("/auth/")) {
    const refreshedToken = await refreshAccessToken();
    if (refreshedToken) return request<T>(path, init, true);
  }
  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as ApiError;
    throw new Error(body.detail ?? `Request failed with ${response.status}`);
  }
  return (await response.json()) as T;
}

export const api = {
  async signUp(payload: { email: string; password: string; fullName: string }) {
    return request<{ user: User; tokens: AuthTokens }>("/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  },
  async login(payload: { email: string; password: string }) {
    return request<{ user: User; tokens: AuthTokens }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  },
  async forgotPassword(email: string) {
    return request<{ ok: boolean }>("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email })
    });
  },
  async me() {
    return request<User>("/users/me");
  },
  async uploadVideo(params: { exercise: ExerciseType; uri: string; fileName: string; mimeType: string }) {
    const data = new FormData();
    data.append("exercise", params.exercise);
    data.append("video", {
      uri: params.uri,
      name: params.fileName,
      type: params.mimeType
    } as unknown as Blob);
    return request<AnalysisResult>("/analyses", { method: "POST", body: data });
  },
  async getAnalysis(id: string) {
    return request<AnalysisResult>(`/analyses/${id}`);
  },
  async listAnalyses() {
    return request<AnalysisResult[]>("/analyses");
  },
  async getProgress() {
    return request<{ averageScore: number; sessions: number; bestLift: string; trend: Array<{ label: string; score: number }> }>(
      "/analyses/progress"
    );
  }
};
