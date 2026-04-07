import React, { createContext, useContext, useEffect, useState } from "react";

// Types removed for .jsx compatibility
const ThemeContext = createContext(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}) {
  const [theme, setTheme] = useState(() => {
    // Check if we are in the browser before accessing localStorage
    if (typeof window !== "undefined" && switchable) {
      const stored = localStorage.getItem("theme");
      return stored || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}