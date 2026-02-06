'use client'
import { userAuthStore } from "@/store/authStore";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = userAuthStore();
  useEffect(() => {
    const role = user?.type === "doctor" ? "/doctor" : "/patient";
    if (!isAuthenticated) {
      redirect(`/login/${role}`);
    }
  }, [isAuthenticated, user?.type]);

  if (!isAuthenticated) return null;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-2xl font-bold text-blue-900">MediCare+</div>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
