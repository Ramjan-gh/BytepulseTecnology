import React from "react";
import { motion } from "framer-motion";
import { TECH } from "./data";

export const TechMarquee: React.FC = () => {
  // Triple items for seamless looping on wide screens
  const marqueeItems = [...TECH, ...TECH, ...TECH];

  return (
    <section className="relative z-10 border-y py-4 md:py-6 overflow-hidden select-none" style={{ borderColor: "var(--line)" }}>
      {/* Edge Masking (Thinner on mobile to save viewport space) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, var(--bg) 0%, transparent 6%, transparent 94%, var(--bg) 100%)",
        }}
      />

      {/* --- TRACK 1 (Mobile & Desktop) --- */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-2.5 md:gap-3 shrink-0 items-center"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 20, // Faster & punchier on mobile
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((tech, i) => (
            <div
              key={`track1-${i}`}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bp-mono text-[11px] md:text-xs font-medium whitespace-nowrap flex items-center gap-1.5 md:gap-2 transition-transform duration-200 active:scale-95 md:hover:scale-105"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--accent)" }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- TRACK 2 (Hidden on Mobile, Visible on Desktop) --- */}
      <div className="hidden md:flex overflow-hidden mt-3">
        <motion.div
          className="flex gap-3 shrink-0 items-center"
          animate={{ x: ["-33.333%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((tech, i) => (
            <div
              key={`track2-${i}`}
              className="px-4 py-2 rounded-full bp-mono text-xs font-medium whitespace-nowrap flex items-center gap-2 transition-transform duration-200 hover:scale-105 opacity-75 hover:opacity-100"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                color: "var(--muted)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                style={{ background: "var(--accent)" }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};