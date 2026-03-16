"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "chchai-theme";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount: read stored preference and apply class
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored === "light" || stored === "dark" ? stored : "dark";

    setTheme(initial);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(initial === "light" ? "theme-light" : "theme-dark");

    if (!stored) {
      window.localStorage.setItem(STORAGE_KEY, initial);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(next === "light" ? "theme-light" : "theme-dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-3 py-1 rounded-full text-xs border transition-all hover:opacity-90"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-muted)",
        background: "var(--muted)",
      }}
      aria-label="Toggle light/dark mode"
   >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
