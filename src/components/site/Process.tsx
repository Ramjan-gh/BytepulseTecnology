import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GitCommit, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROCESS } from "./data";

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track progress as user scrolls through the process list (drives the real timeline fill — kept)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.25, 0.8]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative z-10 overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Background Glow — reuses the existing scroll progress, no extra tracker */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "var(--accent)",
          scale: glowScale,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <Workflow size={12} />
                <span>Execution Methodology</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Five steps, in order,{" "}
                <span className="opacity-60 font-normal block sm:inline">every single time.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Structured, predictable execution designed to eliminate friction and launch on time.
            </p>
          </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto md:ml-12">
          {/* Static Background Line */}
          <div
            className="absolute left-[17px] sm:left-[19px] top-6 bottom-6 w-0.5 rounded-full pointer-events-none"
            style={{ background: "var(--line)" }}
          />

          {/* Scroll-Driven Animated Active Line */}
          <motion.div
            className="absolute left-[17px] sm:left-[19px] top-6 bottom-6 w-0.5 rounded-full origin-top pointer-events-none"
            style={{
              background: "var(--accent)",
              scaleY,
            }}
          />

          {/* Process Steps */}
          <div className="flex flex-col space-y-8 sm:space-y-12">
            {PROCESS.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="group relative flex gap-5 sm:gap-8 items-start"
              >
                {/* Step Circle Marker */}
                <div className="relative z-10 flex items-center justify-center shrink-0">
                  <span
                    className="bp-mono text-xs font-bold w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      background: "var(--surface)",
                      color: "var(--accent)",
                      border: "2px solid var(--accent-border)",
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Step Content Card */}
                <div
                  className="flex-1 rounded-2xl p-5 sm:p-7 backdrop-blur-xl border transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--line)",
                    boxShadow: "var(--shadow-lift)",
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="bp-display font-semibold text-lg sm:text-xl tracking-tight" style={{ color: "var(--ink)" }}>
                      {step.title}
                    </h3>
                    <GitCommit size={16} className="opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }} />
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};