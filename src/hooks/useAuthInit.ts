"use client";
import { useEffect } from "react";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

export default function useAuthInit() {
  const { setAuth, setLoading } = useAuthStore();

  useEffect(() => {
    setLoading(true);

    api
      .get("/auth/me")
      .then((res) => {
        setAuth(res.data.user);
      })
      .catch(() => {
        setAuth(null); // IMPORTANT
      })
      .finally(() => {
        setLoading(false); // VERY IMPORTANT
      });
  }, []);
}
