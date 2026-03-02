"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "@/portfolio.config";
import { useT, useSite } from "@/context/SiteContext";

const { experience } = config;

type Locale = "ru" | "en";
type I18n   = { ru: string; en: string };

interface ExperienceItemShape {
  type:     string;
  current?: boolean;
  title:    string | I18n;
  company:  string | I18n;
  period:   I18n;
  summary?: I18n;
  bullets?: { ru: readonly string[]; en: readonly string[] };
}

function TimelineFill({ timelineRef }: { timelineRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 70%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div
      className="absolute left-0 top-0 w-px bg-indigo-500/65 dark:bg-indigo-400/60 origin-top hidden md:block"
      style={{ height: lineHeight }}
    />
  );
}

export default function Experience() {
  const t = useT();
  const { locale } = useSite();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Helper: renders a plain string or a {ru,en} object
  const tx = (val: string | I18n): string =>
    typeof val === "string" ? val : t(val);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-14"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-xl mr-3">
            {experience.sectionIndex}.
          </span>
          {t(experience.sectionTitle)}
        </motion.h2>

        <div ref={timelineRef} className="relative ml-3">
          {/* Track line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          {/* Animated fill line — desktop only */}
          <TimelineFill timelineRef={timelineRef} />

          {experience.items.map((item, i) => {
            const it = item as ExperienceItemShape;
            const isCurrent  = it.current === true;
            const isWork     = it.type === "work";
            const isEdu      = it.type === "education";
            const isFirstEdu = isEdu && experience.items[i - 1]?.type === "work";
            const isLast     = i === experience.items.length - 1;

            const bullets = it.bullets ? it.bullets[locale as Locale] : null;
            const summary  = it.summary ? t(it.summary) : null;

            /* ── Spacing ── */
            const bottomPad = isLast ? "pb-0" : isWork ? "pb-16" : "pb-12";
            const topPad    = isFirstEdu ? "pt-8" : "";

            /* ── Whole-item opacity (visual hierarchy) ── */
            const itemOpacity = isCurrent
              ? ""
              : isWork
                ? "opacity-[0.82]"
                : "opacity-[0.72]";

            /* ── Typography ── */
            const titleClass = isCurrent
              ? "text-gray-900 dark:text-white"
              : isWork
                ? "text-gray-800 dark:text-gray-200"
                : "text-gray-600 dark:text-gray-400";

            const companyClass = isCurrent
              ? "text-indigo-500 dark:text-indigo-400"
              : isWork
                ? "text-indigo-400/75 dark:text-indigo-500/75"
                : "text-gray-400 dark:text-gray-600";

            const periodClass = isCurrent
              ? "text-indigo-500 dark:text-indigo-400"
              : isWork
                ? "text-gray-500 dark:text-gray-500"
                : "text-gray-400 dark:text-gray-600";

            // Summary gets elevated contrast — it's the product positioning line
            const summaryClass = "text-gray-700 dark:text-gray-200 font-medium";

            const bulletClass = isCurrent
              ? "text-gray-600 dark:text-gray-400"
              : "text-gray-500 dark:text-gray-500";

            const bulletDotClass = isCurrent
              ? "bg-indigo-400 dark:bg-indigo-500"
              : isWork
                ? "bg-gray-400 dark:bg-gray-600"
                : "bg-gray-300 dark:bg-gray-700";

            /* ── Dot: current is ~15% larger + subtle glow ── */
            // left offset = dot_width / 2 (so dot center aligns with the 1px line)
            const dotSize = isCurrent
              ? "w-[22px] h-[22px] -left-[11px]"
              : isWork
                ? "w-4 h-4 -left-[8px]"
                : "w-3 h-3 -left-[6px]";

            const dotColor = isCurrent
              ? "bg-indigo-500 border-indigo-400 dot-current shadow-[0_0_10px_2px_rgba(99,102,241,0.38)]"
              : isWork
                ? "bg-indigo-400 border-indigo-300 dark:bg-indigo-600 dark:border-indigo-500"
                : "bg-gray-300 border-gray-200 dark:bg-gray-700 dark:border-gray-600";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className={`relative pl-8 ${bottomPad} ${topPad} ${itemOpacity}`}
              >
                {/* Dot */}
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.25,
                    delay: i * 0.08 + 0.08,
                    type: "spring",
                    stiffness: 350,
                  }}
                  className={`absolute top-1.5 rounded-full border-2 ${dotSize} ${dotColor}`}
                />

                {/* Period */}
                <p className={`text-xs font-mono mb-1 ${periodClass}`}>
                  {t(it.period)}
                </p>

                {/* Title + company */}
                <h3
                  className={`font-semibold leading-snug ${titleClass} ${
                    isCurrent ? "text-lg" : isWork ? "text-base" : "text-sm"
                  }`}
                >
                  {tx(it.title)}
                  <span className={companyClass}> @ {tx(it.company)}</span>
                </h3>

                {/* Summary — positioning line, elevated contrast */}
                {summary && (
                  <p className={`text-sm mt-1.5 ${summaryClass}`}>{summary}</p>
                )}

                {/* Bullets — capped at ~70 ch to keep lines readable */}
                {bullets && bullets.length > 0 && (
                  <ul className="mt-3 space-y-2 max-w-[65ch]">
                    {bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed ${bulletClass}`}
                      >
                        <span
                          className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${bulletDotClass}`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
