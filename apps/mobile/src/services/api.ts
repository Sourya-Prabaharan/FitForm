import { readSession, replaceSession } from "./session";
import { AnalysisResult, AuthTokens, ExerciseType, User } from "@/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

type ApiError = { detail?: string | Array<{ msg: string }> };
let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = (await readSession())?.refreshToken;
  if (!refreshToken) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  let response: Response;
  try {
    response = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) return null;
  const tokens = (await response.json()) as AuthTokens;
  return await replaceSession(refreshToken, tokens) ? tokens.accessToken : null;
}

async function request<T>(path: string, init: RequestInit = {}, didRefresh = false): Promise<T> {
  const token = (await readSession())?.accessToken;
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (!(init.body instanceof FormData)) headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), init.body instanceof FormData ? 180000 : 30000);
  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, { ...init, headers, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
  if (response.status === 401 && !didRefresh && !path.startsWith("/auth/")) {
    refreshPromise ??= refreshAccessToken().finally(() => { refreshPromise = null; });
    const refreshedToken = await refreshPromise;
    if (refreshedToken) return request<T>(path, init, true);
  }
  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as ApiError;
    const message = Array.isArray(body.detail) ? body.detail.map((item) => item.msg).join(". ") : body.detail;
    throw new Error(message ?? `Request failed with ${response.status}`);
  }
  return (await response.json()) as T;
}

export const api = {
  async resetPassword(email: string, code: string, password: string) {
    return request<{ ok: boolean }>("/auth/reset-password", {
      method: "POST", body: JSON.stringify({ email, code, password })
    });
  },
  async deleteAccount() {
    return request<{ ok: boolean }>("/users/me", { method: "DELETE" });
  },
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
