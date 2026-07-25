import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GitCommit, Workflow } from "lucide-react";
import { PROCESS } from "./data";

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track progress as user scrolls through the process list
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  // Optimized spring values for smooth performance
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative z-10 overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <Workflow size={12} />
              <span>Execution Methodology</span>
            </div>

            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Five steps, in order,{" "}
              <span className="opacity-60 font-normal block sm:inline">every single time.</span>
            </h2>
          </div>

          <p className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            Structured, predictable execution designed to eliminate friction and launch on time.
          </p>
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
              <div
                key={step.step}
                className="group relative flex gap-5 sm:gap-8 items-start"
              >
                {/* Step Circle Marker */}
                <div className="relative z-10 flex items-center justify-center shrink-0">
                  <span
                    className="bp-mono text-xs font-bold w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm"
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
                  className="flex-1 rounded-2xl p-5 sm:p-7 border transition-colors duration-200"
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
                    <GitCommit size={16} className="opacity-30 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--accent)" }} />
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};