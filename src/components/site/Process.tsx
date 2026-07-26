import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { GitCommit, Workflow, CheckCircle2, ChevronDown } from "lucide-react";
import { PROCESS } from "./data";

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Accept string or number to safely handle any data model definition
  const [expandedStep, setExpandedStep] = useState<string | number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  const toggleStep = (stepNumber: string | number) => {
    setExpandedStep((prev) => (String(prev) === String(stepNumber) ? null : stepNumber));
  };

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <Workflow size={12} />
              <span>Execution Methodology</span>
            </div>

            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Five steps, in order,{" "}
              <span className="opacity-60 font-normal block sm:inline">
                every single time.
              </span>
            </h2>
          </div>

          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Structured, predictable execution designed to eliminate friction and launch on time.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto md:ml-12">
          {/* Static Line */}
          <div
            className="absolute left-[17px] sm:left-[19px] top-6 bottom-6 w-0.5 rounded-full pointer-events-none"
            style={{ background: "var(--line)" }}
          />

          {/* Animated Scroll Line */}
          <motion.div
            className="absolute left-[17px] sm:left-[19px] top-6 bottom-6 w-0.5 rounded-full origin-top pointer-events-none"
            style={{
              background: "var(--accent)",
              scaleY,
            }}
          />

          {/* Steps List */}
          <div className="flex flex-col space-y-8 sm:space-y-12">
            {PROCESS.map((step) => {
              // Safe type-agnostic string comparison
              const isOpen = String(expandedStep) === String(step.step);

              return (
                <div
                  key={step.step}
                  className="group relative flex gap-5 sm:gap-8 items-start"
                >
                  {/* Step Circle Marker */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <span
                      className="bp-mono text-xs font-bold w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-105"
                      style={{
                        background: "var(--surface)",
                        color: "var(--accent)",
                        border: "2px solid var(--accent-border)",
                      }}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Expandable Step Card */}
                  <div
                    onClick={() => toggleStep(step.step)}
                    className="flex-1 rounded-2xl p-5 sm:p-7 border cursor-pointer transition-all duration-200 hover:border-[var(--accent)]"
                    style={{
                      background: "var(--surface)",
                      borderColor: isOpen ? "var(--accent)" : "var(--line)",
                      boxShadow: "var(--shadow-lift)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3
                        className="bp-display font-semibold text-lg sm:text-xl tracking-tight"
                        style={{ color: "var(--ink)" }}
                      >
                        {step.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <GitCommit size={16} className="opacity-30" style={{ color: "var(--accent)" }} />
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={18} style={{ color: "var(--accent)" }} />
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {step.desc}
                    </p>

                    {/* Expandable Content Area */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="mt-5 pt-5 border-t space-y-3"
                            style={{ borderColor: "var(--line)" }}
                          >
                            <h4
                              className="bp-mono text-xs font-semibold uppercase tracking-wider"
                              style={{ color: "var(--ink)" }}
                            >
                              Deliverables & Scope
                            </h4>

                            {[
                              "Requirement mapping & technical specifications",
                              "Iterative milestone validation and client feedback loops",
                              "Comprehensive testing & production deployment support",
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                <CheckCircle2
                                  size={16}
                                  className="mt-0.5 shrink-0"
                                  style={{ color: "var(--accent)" }}
                                />
                                <span style={{ color: "var(--ink)" }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};