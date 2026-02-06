"use client";
import { userAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { fetchProfile, token } = userAuthStore();
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [fetchProfile, token]);
  return <div>{children}</div>;
};

export default Providers;
