import React, { memo } from "react";
import { CheckCircle2, TrendingUp, Cpu } from "lucide-react";
import { STATS } from "./data";
import { useReveal, useCountUp } from "./hooks";

const StatCard: React.FC<{ stat: (typeof STATS)[number]; index: number }> = memo(
  ({ stat, index }) => {
    const { ref, visible } = useReveal<HTMLDivElement>();
    const count = useCountUp(stat.value, visible);
    const max = Math.max(...stat.spark);
    const display = Number.isInteger(stat.value)
      ? Math.round(count)
      : count.toFixed(1);

    return (
      <div
        ref={ref}
        className={`group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-lift)",
          transitionDelay: `${index * 80}ms`,
          willChange: visible ? "auto" : "opacity, transform",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            className="bp-display font-bold text-3xl sm:text-4xl tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            {display}
            {stat.suffix}
          </div>
          <TrendingUp
            size={16}
            className="opacity-30"
            style={{ color: "var(--accent)" }}
          />
        </div>

        <div
          className="bp-mono text-xs font-medium mb-4"
          style={{ color: "var(--muted)" }}
        >
          {stat.label}
        </div>

        {/* Sparkline chart - no transitions for performance */}
        <div
          className="flex items-end gap-1 h-7 pt-1 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          {stat.spark.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: visible ? `${(v / max) * 100}%` : "0%",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);

export const AboutStats: React.FC = memo(() => {
  const { ref: bannerRef, visible: bannerVisible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Glow — Rendered cleanly on GPU layer without blur repaint cascades */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-15 blur-3xl pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          background: "var(--accent)",
          transform: "translate3d(-50%, -50%, 0)",
        }}
      />

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>

      {/* About Spotlight Banner */}
      <div
        ref={bannerRef}
        className={`transition-all duration-700 ease-out ${
          bannerVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ willChange: bannerVisible ? "auto" : "opacity, transform" }}
      >
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-12 border relative overflow-hidden"
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
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                <Cpu size={12} />
                <span>About BytePulse</span>
              </div>

              <h3
                className="bp-display font-bold text-2xl sm:text-3xl md:text-4xl mb-4 tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                Engineered for speed.{" "}
                <span className="opacity-60 font-normal">
                  Built for scale.
                </span>
              </h3>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                BytePulse Technology is a specialized digital engineering
                agency. We partner with ambitious tech teams to architect clean,
                resilient web platforms and cloud backends. No unnecessary
                overhead—just senior-level craftsmanship delivering
                production-ready software built to perform under heavy load.
              </p>
            </div>

            {/* Right Value Propositions Column */}
            <div
              className="md:col-span-5 md:border-l md:pl-8 pt-6 md:pt-0 border-t md:border-t-0"
              style={{ borderColor: "var(--line)" }}
            >
              <ul className="space-y-3.5">
                {[
                  {
                    title: "Direct senior access",
                    desc: "Work directly with core software architects, zero middle managers.",
                  },
                  {
                    title: "Production-grade quality",
                    desc: "Rigorous testing, optimized performance, and modern stacks.",
                  },
                  {
                    title: "Transparent cadence",
                    desc: "Continuous code delivery with weekly live working software demos.",
                  },
                  {
                    title: "Long-term partnership",
                    desc: "Ongoing post-launch monitoring, maintenance, and scale support.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-xs sm:text-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                    <div>
                      <strong style={{ color: "var(--ink)" }}>
                        {item.title}:
                      </strong>{" "}
                      <span style={{ color: "var(--muted)" }}>
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});