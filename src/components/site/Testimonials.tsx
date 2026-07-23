import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "./data";

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking across the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  
  // Ambient background glow scale
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.25, 0.8]);

  // Card Parallax & Vertical Lift
  const cardY = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -50]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* PERFECTLY CENTERED BACKGROUND GLOW */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "var(--accent)",
          scale: glowScale,
        }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4"
              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
            >
              <MessageSquare size={12} />
              <span>Client Feedback</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Trusted by founders <span className="opacity-60 font-normal">& product leaders.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
            What teams say about our engineering velocity and code quality.
          </p>
        </Reveal>
      </div>

      {/* Main Spotlight Card with Scroll-Driven Parallax & Scale */}
      <motion.div
        style={{ y: cardY, scale: cardScale }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Re-triggers on scroll up and down
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-4xl mx-auto relative"
      >
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl border relative overflow-hidden transition-all duration-300"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          {/* Top Bar: Rating & Watermark Quote */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <Quote size={32} className="opacity-20" style={{ color: "var(--accent)" }} />
          </div>

          {/* Dynamic Quote Area */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center mb-8">
            <AnimatePresence custom={direction} mode="wait">
              <motion.p
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bp-display font-medium text-lg sm:text-2xl md:text-3xl leading-snug sm:leading-normal"
                style={{ color: "var(--ink)" }}
              >
                "{current.quote}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Author Profile & Navigation Controls */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Author Details */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base bp-mono shrink-0"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                {current.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base tracking-tight" style={{ color: "var(--ink)" }}>
                  {current.name}
                </div>
                <div className="bp-mono text-xs" style={{ color: "var(--muted)" }}>
                  {current.role}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: idx === activeIndex ? 24 : 8,
                      background: idx === activeIndex ? "var(--accent)" : "var(--line)",
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={handlePrev}
                  className="p-2 sm:p-2.5 rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface-2)",
                    color: "var(--ink)",
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 sm:p-2.5 rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--surface-2)",
                    color: "var(--ink)",
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};