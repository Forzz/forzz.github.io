"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect } from "react";
import config from "@/portfolio.config";
import { useT } from "@/context/SiteContext";

const { personal, hero } = config;

// Числа с суффиксом ("2+", "15+") анимируются при входе в viewport,
// любой другой текст ("Mobile", "End-to-end") отображается статично.
function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numMatch = value.match(/^(\d+)(\S*)$/); // "2+" → ["2+", "2", "+"]

  useEffect(() => {
    if (!numMatch || !inView || !ref.current) return;
    const num = parseInt(numMatch[1]);
    const suffix = numMatch[2] ?? "";
    const controls = animate(0, num, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col min-w-0">
      <span ref={ref} className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
        {value}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-500 leading-snug mt-0.5 max-w-[110px]">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const blob1X = useTransform(mouseX, [0, 1], [-10, 10]);
  const blob1Y = useTransform(mouseY, [0, 1], [-10, 10]);
  const blob2X = useTransform(mouseX, [0, 1], [8, -8]);
  const blob2Y = useTransform(mouseY, [0, 1], [5, -5]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Фоновые блобы теперь в PageBackground (fixed, на всю страницу) */}

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Левая колонка */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-indigo-500 dark:text-indigo-400 font-mono mb-3 text-sm tracking-widest uppercase"
          >
            {t(hero.greeting)}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3"
          >
            {t({ ru: personal.name, en: personal.nameEn })}
          </motion.h1>

          {/* Open to work badge */}
          {hero.openToWork && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-medium mb-4 border border-green-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t(hero.openToWorkLabel)}
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400 mb-5"
          >
            {t(personal.title)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            className="text-gray-600 dark:text-gray-400 text-base mb-7 leading-relaxed"
          >
            {t(personal.bio)}
          </motion.p>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.38, ease: "easeOut" }}
            className="flex gap-6 flex-wrap mb-8"
          >
            {hero.counters.map((c, i) => (
              <StatItem key={i} value={c.value} label={t(c.label)} />
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.46, ease: "easeOut" }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href={hero.cta.href}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
            >
              {t(hero.cta.label)}
            </a>
            <a
              href={hero.secondary.href}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
            >
              {t(hero.secondary.label)}
            </a>
          </motion.div>
        </div>

        {/* Правая колонка — карточка экспертизы */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, delay: 0.28, ease: "easeOut" },
          }}
          whileHover={{
            boxShadow: "0 0 0 1px rgba(99,102,241,0.28), 0 0 28px rgba(99,102,241,0.12)",
            transition: { duration: 0.2 },
          }}
          className="hidden md:block rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 p-10 shadow-md dark:shadow-none backdrop-blur-sm"
        >
          {/* Заголовок карточки */}
          <p className="text-gray-400 dark:text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">
            {t(hero.specializationLabel)}
          </p>

          {/* Три домена экспертизы */}
          <div>
            {hero.expertise.map((item, i) => (
              <div key={item.title.ru}>
                {i > 0 && (
                  <div className="h-px bg-gray-900/8 dark:bg-white/8 my-7" />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                >
                  <p className="text-gray-900 dark:text-white font-semibold text-[18px] leading-snug">
                    {t(item.title)}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-1.5 leading-snug">
                    {t(item.sub)}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
