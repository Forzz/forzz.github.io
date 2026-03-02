"use client";

import config from "@/portfolio.config";
import { useT } from "@/context/SiteContext";

const { footer } = config;

// Год по московскому времени (UTC+3)
function getMoscowYear(): number {
  return new Date(Date.now() + 3 * 60 * 60 * 1000).getUTCFullYear();
}

export default function Footer() {
  const t = useT();

  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-gray-500 text-sm font-mono">
        {t(footer.name)} · {getMoscowYear()}
      </p>
    </footer>
  );
}
