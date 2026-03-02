"use client";

import { motion } from "framer-motion";
import config from "@/portfolio.config";
import { useT } from "@/context/SiteContext";

const { skills } = config;

const chipVariants = {
  hidden:  { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 22 } },
};

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-14"
        >
          <span className="text-indigo-500 dark:text-indigo-400 font-mono text-xl mr-3">
            {skills.sectionIndex}.
          </span>
          {t(skills.sectionTitle)}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={cat.title.ru}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {/* Заголовок категории */}
              <div className="mb-5">
                <p className="text-gray-600 dark:text-gray-400 text-xs font-mono uppercase tracking-widest mb-3">
                  {t(cat.title)}
                </p>
                <div className="h-px bg-gray-200/70 dark:bg-gray-700/50" />
              </div>

              {/* Чипсы */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.035, delayChildren: 0.06 + i * 0.05 }}
              >
                {cat.items.map((item) => (
                  <motion.span
                    key={item.name.ru}
                    variants={chipVariants}
                    whileHover={{
                      y: -2,
                      transition: { type: "spring", stiffness: 400, damping: 20 },
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium cursor-default select-none ${item.color}`}
                  >
                    {t(item.name)}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
