"use client";

import { useEffect } from "react";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

export default function GoogleOneTap() {
  const handleGoogleLogin = async (credential: string) => {
    try {
      const res = await api.post("/auth/google", { credential });

      const { user, accessToken } = res.data;
      useAuthStore.getState().setAuth(user, accessToken);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error("One Tap login failed:", err);
    }
  };

  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (res: any) => handleGoogleLogin(res.credential),
      auto_select: false,
    });

    window.google.accounts.id.prompt();
  }, []);

  return null;
}
