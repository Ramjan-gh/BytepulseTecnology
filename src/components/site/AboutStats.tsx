import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { STATS } from "./data";
import { useReveal, useCountUp } from "./hooks";

const StatCard: React.FC<{ stat: (typeof STATS)[number]; index: number }> = ({ stat, index }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(stat.value, visible);
  const max = Math.max(...stat.spark);
  const display = Number.isInteger(stat.value) ? Math.round(count) : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Re-triggers animation on scroll up and down
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl p-5 sm:p-6 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "var(--surface)",
        borderColor: "var(--line)",
        boxShadow: "var(--shadow-lift)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="bp-display font-bold text-3xl sm:text-4xl tracking-tight" style={{ color: "var(--accent)" }}>
          {display}
          {stat.suffix}
        </div>
        <TrendingUp size={16} className="opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }} />
      </div>

      <div className="bp-mono text-xs font-medium mb-4" style={{ color: "var(--muted)" }}>
        {stat.label}
      </div>

      {/* Sparkline chart with dynamic height on reveal */}
      <div className="flex items-end gap-1 h-7 pt-1 border-t" style={{ borderColor: "var(--line)" }}>
        {stat.spark.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all duration-500 ease-out group-hover:opacity-100"
            style={{
              height: visible ? `${(v / max) * 100}%` : "0%",
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
              transitionDelay: `${i * 40}ms`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const AboutStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position for central atmospheric glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.25, 0.8]);

  return (
    <section
      ref={containerRef}
      id="about"
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

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>

      {/* Modernized About Spotlight Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Continuous bi-directional scroll animation
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-xl border relative overflow-hidden"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-lift)",
          }}
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Copy Column */}
            <div className="md:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <Cpu size={12} />
                <span>About BytePulse</span>
              </div>

              <h3 className="bp-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4 tracking-tight" style={{ color: "var(--ink)" }}>
                Engineered for speed. <span className="opacity-60 font-normal">Built for scale.</span>
              </h3>

              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                BytePulse Technology is a specialized digital engineering agency. We partner with ambitious tech teams 
                to architect clean, resilient web platforms and cloud backends. No unnecessary overhead—just senior-level 
                craftsmanship delivering production-ready software built to perform under heavy load.
              </p>
            </div>

            {/* Right Value Propositions Column */}
            <div className="md:col-span-5 md:border-l md:pl-8 pt-6 md:pt-0 border-t md:border-t-0" style={{ borderColor: "var(--line)" }}>
              <ul className="space-y-3.5">
                {[
                  { title: "Direct senior access", desc: "Work directly with core software architects, zero middle managers." },
                  { title: "Production-grade quality", desc: "Rigorous testing, optimized performance, and modern stacks." },
                  { title: "Transparent cadence", desc: "Continuous code delivery with weekly live working software demos." },
                  { title: "Long-term partnership", desc: "Ongoing post-launch monitoring, maintenance, and scale support." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                    <div>
                      <strong style={{ color: "var(--ink)" }}>{item.title}:</strong>{" "}
                      <span style={{ color: "var(--muted)" }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};