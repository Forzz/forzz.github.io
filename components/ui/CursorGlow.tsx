"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none select-none hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(99,102,241,0.055) 0%, transparent 70%)",
        zIndex: -1,
        willChange: "transform",
      }}
    />
  );
}
