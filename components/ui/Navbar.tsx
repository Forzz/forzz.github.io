"use client";

import { useState, useEffect } from "react";
import { useSite, useT } from "@/context/SiteContext";
import config from "@/portfolio.config";

const { nav, personal, ui } = config;

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme, locale, toggleLocale } = useSite();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = nav.map((l) => l.href.slice(1));

    const handleScroll = () => {
      // If near bottom of page — activate last section
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollY = window.scrollY + 100;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? "bg-white/90 dark:bg-gray-950/95 backdrop-blur-md shadow-[0_1px_16px_rgba(0,0,0,0.07)] dark:shadow-[0_1px_16px_rgba(0,0,0,0.35)]"
        : ""
    }`}>
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">

        {/* Логотип */}
        <a href="#hero" onClick={closeMenu}
          className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-lg tracking-tight hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
          {t({ ru: personal.name, en: personal.nameEn }).split(" ")[0]}
          <span className="text-gray-900 dark:text-white">.</span>
        </a>

        {/* Десктоп-меню */}
        <ul className="hidden md:flex items-center gap-6">
          {nav.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  }`}
                >
                  {t(link.label)}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Контролы: язык + тема */}
        <div className="flex items-center gap-2">
          <button onClick={toggleLocale}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-md text-xs font-mono font-bold border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {locale === "ru" ? "EN" : "RU"}
          </button>
          <button onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Бургер (мобиле) */}
          <button onClick={() => setMenuOpen(v => !v)} aria-label={t(ui.menuLabel)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5">
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 px-6 pb-6 bg-white dark:bg-gray-950">
          <ul className="flex flex-col gap-1 pt-4">
            {nav.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}
                    className={`block py-3 text-base font-medium transition-colors border-b border-gray-100 dark:border-gray-800/50 last:border-0 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`}>
                    {t(link.label)}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3 pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
            <button onClick={toggleLocale}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-bold border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {locale === "ru" ? "EN" : "RU"}
            </button>
            <button onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              {theme === "dark" ? <><SunIcon /><span>{t(ui.themeLight)}</span></> : <><MoonIcon /><span>{t(ui.themeDark)}</span></>}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
