"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cn } from "@/lib/utils";

/**
 * Akidiva UI - Notification Toaster
 * Global feedback system for patient updates and system alerts.
 */

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      // Akidiva Custom Branding for Sonner
      toastOptions={{
        classNames: {
          toast: "group flex items-center gap-3 rounded-2xl border-2 border-gray-100 bg-white p-4 shadow-xl text-gray-900 font-medium",
          description: "group-[.toast]:text-gray-500 group-[.toast]:text-xs font-normal",
          actionButton: "group-[.toast]:bg-hospital-blue group-[.toast]:text-white group-[.toast]:rounded-xl group-[.toast]:px-4 group-[.toast]:py-2",
          cancelButton: "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-500 group-[.toast]:rounded-xl",
          success: "group-[.toast]:border-hospital-blue/20 group-[.toast]:bg-blue-50/30",
          error: "group-[.toast]:border-red-100 group-[.toast]:bg-red-50/30",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };