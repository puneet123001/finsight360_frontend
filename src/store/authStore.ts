import { create } from "zustand";
import { setAccessToken } from "@/lib/axios";

interface AuthState {
  user: unknown | null;
  token: string | null;
  setAuth: (user: unknown, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    setAccessToken(token);
    set({ user, token });
  },

  logout: () => {
    setAccessToken(null);
    set({ user: null, token: null });
  },
}));
