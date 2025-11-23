"use client";

import { useAuthStore } from "@/store/authStore";
import { Menu } from "lucide-react";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Menu className="md:hidden" />
        <h2 className="text-lg font-semibold text-slate-700">Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-slate-600">{user?.name}</span>
        <img
          src={`https://ui-avatars.com/api/?name=${user?.name}`}
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
