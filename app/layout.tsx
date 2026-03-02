import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteProvider } from "@/context/SiteContext";
import config from "@/portfolio.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: config.seo.url ? new URL(config.seo.url) : undefined,
  title:       config.seo.title.ru,
  description: config.seo.description.ru,
  openGraph: {
    title:       config.seo.title.ru,
    description: config.seo.description.ru,
    url:         config.seo.url,
    type:        "website",
    images:      [{ url: config.seo.ogImage }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Предотвращаем вспышку неправильной темы */}
        <script dangerouslySetInnerHTML={{ __html:
          `(function(){var t=localStorage.getItem('theme');` +
          `if(t==='light'){document.documentElement.classList.remove('dark')}` +
          `else{document.documentElement.classList.add('dark')}})()` }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300`}>
        <SiteProvider>
          {children}
        </SiteProvider>
      </body>
    </html>
  );
}
