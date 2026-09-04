import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const CLE_STOCKAGE = "portfolio-theme";
type Theme = "dark" | "light";

function lireThemeInitial(): Theme {
  const stocke = localStorage.getItem(CLE_STOCKAGE);
  if (stocke === "dark" || stocke === "light") return stocke;
  return "dark"; // audience developpeurs, sombre par defaut
}

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lireThemeInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(CLE_STOCKAGE, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const contexte = useContext(ThemeContext);
  if (!contexte) throw new Error("useTheme doit etre utilise dans un ThemeProvider");
  return contexte;
}
