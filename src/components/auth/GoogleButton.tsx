"use client";

import { useEffect, useRef } from "react";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

export default function GoogleButton() {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleLogin = async (credential: string) => {
    try {
      const res = await api.post("/auth/google", { credential });

      const { user, accessToken } = res.data;
      useAuthStore.getState().setAuth(user, accessToken);

      // redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (res: any) => handleLogin(res.credential),
    });

    window.google.accounts.id.renderButton(btnRef.current!, {
      theme: "filled_blue",
      size: "large",
      width: 300,
    });
  }, []);

  return <div ref={btnRef}></div>;
}
