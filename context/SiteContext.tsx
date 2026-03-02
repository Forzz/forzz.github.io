"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme  = "dark" | "light";
export type Locale = "ru" | "en";

interface SiteContextType {
  theme:        Theme;
  toggleTheme:  () => void;
  locale:       Locale;
  toggleLocale: () => void;
}

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme,  setTheme]  = useState<Theme>("dark");
  const [locale, setLocale] = useState<Locale>("ru");

  /* читаем сохранённые настройки; при первом визите определяем язык по браузеру */
  useEffect(() => {
    const savedTheme  = localStorage.getItem("theme")  as Theme  | null;
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedTheme)  setTheme(savedTheme);
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      const detected: Locale = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
      setLocale(detected);
    }
  }, []);

  /* применяем тему к <html> */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme  = () => setTheme(t  => t  === "dark"  ? "light" : "dark");
  const toggleLocale = () => {
    const next = locale === "ru" ? "en" : "ru";
    setLocale(next);
    localStorage.setItem("locale", next);
  };

  return (
    <SiteContext.Provider value={{ theme, toggleTheme, locale, toggleLocale }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

/** Хелпер: возвращает строку для текущей локали */
export function useT() {
  const { locale } = useSite();
  return function t(val: { ru: string; en: string }): string {
    return val[locale];
  };
}
