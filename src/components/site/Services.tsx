import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track Scroll Position and Velocity specifically for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out raw scroll progress for silky physics
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  // 2. Parallax and Scale transforms driven continuously by scrolling
  const headerY = useTransform(smoothProgress, [0, 1], [-30, 30]);
  const centerCardY = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40]);
  const sideCardsY = useTransform(smoothProgress, [0, 0.5, 1], [80, 0, -80]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 overflow-hidden"
    >
      {/* Dynamic Background Glow reacting to Scroll */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full -z-10 opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "var(--accent)",
          scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]),
        }}
      />

      {/* Header with Subtle Parallax Shift */}
      <motion.div style={{ y: headerY }} className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <Sparkles size={12} />
              <span>Capabilities & Expertise</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl tracking-tight" style={{ color: "var(--ink)" }}>
              End-to-end product work,{" "}
              <span className="opacity-60 font-normal block sm:inline">not just one slice.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            Full-stack capabilities tailored for teams moving from zero-to-one or scaling production infrastructure.
          </p>
        </Reveal>
      </motion.div>

      {/* Interactive Scroll-Driven Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((s, i) => {
          // Assign different continuous motion paths to center vs side cards
          const cardY = i === 1 ? centerCardY : sideCardsY;

          return (
            <motion.div
              key={s.title}
              style={{ y: cardY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }} // once: false ensures re-triggering on scroll up/down!
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <div
                className="group relative rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl border"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--shadow-lift)",
                }}
              >
                {/* Top Row: Icon + Card Index */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      <s.icon size={22} />
                    </div>

                    <span
                      className="bp-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--muted)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="bp-display font-semibold text-xl mb-3 tracking-tight" style={{ color: "var(--ink)" }}>
                    {s.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Action Indicator */}
                <div
                  className="pt-6 mt-6 border-t flex items-center justify-between bp-mono text-xs font-medium"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn scope
                  </span>
                  <div
                    className="p-1.5 rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ background: "var(--surface-2)", color: "var(--ink)" }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};