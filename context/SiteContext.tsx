"use client";

import { createContext, useContext, useState, useEffect, useLayoutEffect, ReactNode } from "react";

export type Theme  = "dark" | "light";
export type Locale = "ru" | "en";

interface SiteContextType {
  theme:        Theme;
  toggleTheme:  () => void;
  locale:       Locale;
  toggleLocale: () => void;
}

const SiteContext = createContext<SiteContextType | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "ru";
  const savedLocale = localStorage.getItem("locale");
  if (savedLocale === "ru" || savedLocale === "en") return savedLocale;
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  /* применяем тему к <html> до paint */
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));
  const toggleLocale = () => {
    const next = locale === "ru" ? "en" : "ru";
    setLocale(next);
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
