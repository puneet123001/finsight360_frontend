"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user]);

  if (isLoading) return <p>Loading...</p>;
  if (!user) return null;
  return <>{children}</>;
};

export default ProtectedPage;
