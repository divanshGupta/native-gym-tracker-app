import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { authApi, LoginPayload, RegisterPayload } from "../api/auth.api";

interface User { id: string; email: string; username: string; }

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isRestoringSession: boolean;   // ← add this separate flag
  error: string | null;
  login: (data: LoginPayload) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  restoreSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isRestoringSession: true,   // ← starts true, flips false when done
  error: null,

  restoreSession: async () => {
    try {
      const token = await SecureStore.getItemAsync("access_token");
      if (!token) {
        set({ isRestoringSession: false });   // ← no token, go to login
        return;
      }
      const { data } = await authApi.me();
      set({ user: data, isAuthenticated: true, isRestoringSession: false });
    } catch {
      await SecureStore.deleteItemAsync("access_token");
      set({ isRestoringSession: false });     // ← failed, go to login
    }
  },

  login: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await authApi.login(payload);
      await SecureStore.setItemAsync("access_token", data.access_token);
      const me = await authApi.me();
      set({ user: me.data, isAuthenticated: true, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.detail ?? "Login failed", isLoading: false });
    }
  },

  register: async (payload) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await authApi.register(payload);
      await SecureStore.setItemAsync("access_token", data.access_token);
      const me = await authApi.me();
      set({ user: me.data, isAuthenticated: true, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.detail ?? "Registration failed", isLoading: false });
    }
  },

  logout: async () => {
    await SecureStore.deleteItemAsync("access_token");
    set({ user: null, isAuthenticated: false });
  },
}));