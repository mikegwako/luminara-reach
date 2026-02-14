import { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "system",
  resolvedTheme: "light",
  cycleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("luminara-theme-mode") as ThemeMode) || "system";
    }
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    typeof window !== "undefined"
      ? mode === "system" ? getSystemTheme() : mode
      : "light"
  );

  useEffect(() => {
    const resolve = () => {
      const resolved = mode === "system" ? getSystemTheme() : mode;
      setResolvedTheme(resolved);
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    };

    resolve();
    localStorage.setItem("luminara-theme-mode", mode);

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => resolve();
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [mode]);

  const cycleTheme = () =>
    setMode((prev) => (prev === "system" ? "light" : prev === "light" ? "dark" : "system"));

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
