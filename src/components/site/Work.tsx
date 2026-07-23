import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  const leftColumnY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);
  const rightColumnY = useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -60]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-15 blur-3xl pointer-events-none transform-gpu"
        style={{
          background: "var(--accent)",
          scale: glowScale,
        }}
      />

      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <FolderGit2 size={12} />
              <span>Selected Portfolio</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              A few products{" "}
              <span className="opacity-60 font-normal block sm:inline">
                we've shipped.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A sample of high-impact production platforms engineered for
            performance and scalability.
          </p>
        </Reveal>
      </div>

      {/* Interactive 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        {PROJECTS.map((p, i) => {
          const isEven = i % 2 === 0;
          const colY = isEven ? leftColumnY : rightColumnY;

          return (
            /* LAYER 1: Scroll Parallax Only */
            <motion.div
              key={p.name}
              style={{ y: colY }}
              className="h-full transform-gpu will-change-transform"
            >
              {/* LAYER 2: Viewport Reveal Transition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                {/* INNER CARD */}
                <div
                  className="group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)]"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--line)",
                    boxShadow: "var(--shadow-lift)",
                  }}
                >
                  <div>
                    {/* Category Pill & Link Icon */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span
                        className="px-2.5 py-1 rounded-full bp-mono text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--muted)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        {p.category}
                      </span>

                      <div
                        className="p-1.5 rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--ink)",
                        }}
                      >
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3
                      className="bp-display font-bold text-xl sm:text-2xl mb-3 tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.name}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div
                    className="flex flex-wrap gap-2 pt-4 mt-auto border-t"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bp-mono text-[10px] sm:text-[11px] font-medium transition-colors"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--ink)",
                          border: "1px solid var(--line)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};