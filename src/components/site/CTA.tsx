import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the CTA section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Reduced vertical movement slightly to fit comfortably within view bounds
  const cardY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]);

  return (
    <section
      ref={containerRef}
      /* Added top padding (pt-12 md:pt-16) and removed overflow-hidden */
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-24 md:pb-32"
    >
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border transition-all duration-300 relative overflow-hidden group"
          style={{
            y: cardY,
            scale: cardScale,
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          {/* Reactive Background Accent Glow */}
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
            style={{
              background: "var(--accent)",
              scale: glowScale,
            }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-xl">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "var(--accent-soft)",
                borderColor: "var(--accent-border)",
              }}
            >
              <Activity size={22} style={{ color: "var(--accent)" }} />
            </div>

            <div>
              <h3
                className="bp-display font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight"
                style={{ color: "var(--ink)" }}
              >
                Have a product in mind? Let's give it a pulse.
              </h3>
              <p className="bp-mono text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
                Available for full-stack projects, architecture consults, and technical advisory.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="bp-btn-primary px-6 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 w-full sm:w-auto group/btn"
            style={{
              background: "var(--accent)",
              color: "#ffffff",
            }}
          >
            <span>Get in touch</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        </motion.div>
      </Reveal>
    </section>
  );
};