import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { api } from "@/services/api";
import { AuthTokens, User } from "@/types";

type AuthState = {
  user: User | null;
  isHydrating: boolean;
  isAuthenticated: boolean;
  hydrate: () => Promise<void>;
  setSession: (user: User, tokens: AuthTokens) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => Promise<void>;
};

async function persistTokens(tokens: AuthTokens) {
  await AsyncStorage.multiSet([
    ["fitform.accessToken", tokens.accessToken],
    ["fitform.refreshToken", tokens.refreshToken]
  ]);
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isHydrating: true,
  isAuthenticated: false,
  hydrate: async () => {
    try {
      const token = await AsyncStorage.getItem("fitform.accessToken");
      if (!token) {
        set({ isHydrating: false, isAuthenticated: false });
        return;
      }
      const user = await api.me();
      set({ user, isHydrating: false, isAuthenticated: true });
    } catch {
      await get().logout();
      set({ isHydrating: false });
    }
  },
  setSession: async (user, tokens) => {
    await persistTokens(tokens);
    set({ user, isAuthenticated: true });
  },
  login: async (email, password) => {
    const session = await api.login({ email, password });
    await get().setSession(session.user, session.tokens);
  },
  signUp: async (email, password, fullName) => {
    const session = await api.signUp({ email, password, fullName });
    await get().setSession(session.user, session.tokens);
  },
  logout: async () => {
    await AsyncStorage.multiRemove(["fitform.accessToken", "fitform.refreshToken"]);
    set({ user: null, isAuthenticated: false });
  }
}));
