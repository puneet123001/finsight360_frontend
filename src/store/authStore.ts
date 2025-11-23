import { User } from "@/types/types";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setAuth: (user: User | null) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  setAuth: (user) => {
    set({ user, isLoading: false });
  },

  logout: () => {
    set({ user: null, isLoading: false });
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));
