import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, FolderGit2, ExternalLink, ArrowRight, Layout } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";

export const Work: React.FC<{ onSeeAllWorks: () => void }> = ({ onSeeAllWorks }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Show only the first 4 projects on the home page
  const featuredProjects = PROJECTS.slice(0, 4);

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-20 blur-3xl pointer-events-none transform-gpu"
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
            performance and scalability. Click any card to view the live demo.
          </p>
        </Reveal>
      </div>

      {/* Interactive 2-Column Grid (Shows 4 items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        {featuredProjects.map((p, i) => {
          const isEven = i % 2 === 0;
          const colY = isEven ? leftColumnY : rightColumnY;
          const projectLink = p.link || p.url || "#";

          return (
            <motion.div
              key={p.name}
              style={{ y: colY }}
              className="h-full transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block cursor-pointer overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--line)",
                    boxShadow: "var(--shadow-lift)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[var(--accent)] pointer-events-none z-20" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
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
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: "var(--accent-soft)",
                          color: "var(--accent)",
                          border: "1px solid rgba(6, 182, 212, 0.3)",
                        }}
                      >
                        <span className="bp-mono text-[10px] uppercase tracking-wider font-semibold">Live Demo</span>
                        <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Image / Glimpse Wrapper */}
                    <div className="relative w-full h-48 sm:h-56 mb-5 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)]">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={`${p.name} preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] opacity-80">
                          <Layout size={32} className="mb-2 text-[var(--accent)] opacity-60" />
                          <span className="bp-mono text-xs text-[var(--muted)]">Interface Preview</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <h3
                      className="bp-display font-bold text-xl sm:text-2xl mb-2 tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)] flex items-center justify-between"
                      style={{ color: "var(--ink)" }}
                    >
                      <span>{p.name}</span>
                      <ArrowUpRight size={18} className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--accent)]" />
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.desc}
                    </p>
                  </div>

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
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* See All Works Button */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <Reveal delay={200}>

          <button
            onClick={onSeeAllWorks}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full ..."
            style={{
              background: "var(--surface)",
              color: "var(--ink)",
              borderColor: "var(--line)",
            }}
          >


            <span>See All Works ({PROJECTS.length})</span>
            <div
              className="p-1 rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--accent)] group-hover:text-white"
              style={{
                background: "var(--surface-2)",
                color: "var(--ink)",
              }}
            >
              <ArrowRight size={14} />
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
};