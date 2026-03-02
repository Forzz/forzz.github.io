"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.005,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 origin-left z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
