import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";
import { TESTIMONIALS } from "./data";

const SWIPE_THRESHOLD = 50;
const AUTOPLAY_INTERVAL = 3000; // 3 seconds (Faster transition)

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleNext = () => {
    resetTimer();
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    resetTimer();
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleDotClick = (index: number) => {
    resetTimer();
    setActiveIndex(index);
  };

  // Setup Autoplay Timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, AUTOPLAY_INTERVAL);
    }

    return () => {
      resetTimer();
    };
  }, [isPaused]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <MessageSquare size={12} />
              <span>Client Feedback</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Trusted by founders{" "}
              <span className="opacity-60 font-normal block sm:inline">
                & product leaders.
              </span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            What teams say about our engineering velocity and code quality.
          </p>
        </motion.div>
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-12 border relative overflow-hidden transition-colors duration-200 select-none cursor-grab active:cursor-grabbing"
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
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center mb-8 relative touch-pan-y">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(_, info) => {
                  setIsPaused(false);
                  if (info.offset.x < -SWIPE_THRESHOLD) {
                    handleNext();
                  } else if (info.offset.x > SWIPE_THRESHOLD) {
                    handlePrev();
                  }
                }}
                className="bp-display font-medium text-lg sm:text-2xl md:text-3xl leading-snug sm:leading-normal"
                style={{ color: "var(--ink)" }}
              >
                "{current.quote}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom Bar: Author Profile & Controls */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Author Details */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base bp-mono shrink-0 border"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  borderColor: "rgba(6, 182, 212, 0.3)",
                }}
              >
                {current.name.charAt(0)}
              </div>
              <div>
                <div
                  className="font-bold text-sm sm:text-base tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
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
                    onClick={() => handleDotClick(idx)}
                    className="h-2 rounded-full transition-all duration-200 cursor-pointer"
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
                  className="p-2 sm:p-2.5 rounded-xl border transition-colors duration-200 cursor-pointer hover:border-[var(--accent)]"
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
                  className="p-2 sm:p-2.5 rounded-xl border transition-colors duration-200 cursor-pointer hover:border-[var(--accent)]"
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