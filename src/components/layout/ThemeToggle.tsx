"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const current = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
      if (current === "dark" || current === "light") {
        setTheme(current);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      }
    } catch {
      // Fallback to light
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try {
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("latexguard-theme", nextTheme);
    } catch {
      // LocalStorage access denied or restricted
    }
  };

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-lg bg-[var(--wash)] p-2" aria-hidden="true" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] transition-colors hover:bg-[var(--wash)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-deep)]"
    >
      {theme === "light" ? (
        <Moon className="h-4.5 w-4.5 text-[var(--ink)]" />
      ) : (
        <Sun className="h-4.5 w-4.5 text-amber-400" />
      )}
    </button>
  );
}
