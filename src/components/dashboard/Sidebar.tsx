"use client";

import { Home, Wallet, LineChart, Bell, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import api from "@/lib/axios";

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menu = [
    { title: "Dashboard", icon: <Home size={18} />, href: "/dashboard" },
    {
      title: "Stocks",
      icon: <LineChart size={18} />,
      href: "/dashboard/stocks",
    },
    {
      title: "Expenses",
      icon: <Wallet size={18} />,
      href: "/dashboard/expenses",
    },
    { title: "Alerts", icon: <Bell size={18} />, href: "/dashboard/alerts" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4 hidden md:block">
      <h1 className="text-xl font-bold mb-8">Finsight360</h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {item.icon} <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 mt-10 px-3 py-2 w-full text-red-600 hover:bg-red-100 rounded-lg"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
