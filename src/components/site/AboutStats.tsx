import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { STATS } from "./data";
import { useReveal, useCountUp } from "./hooks";

const StatCard: React.FC<{ stat: (typeof STATS)[number]; delay: number }> = ({ stat, delay }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const count = useCountUp(stat.value, visible);
  const max = Math.max(...stat.spark);
  const display = Number.isInteger(stat.value) ? Math.round(count) : count.toFixed(1);

  return (
    <div
      ref={ref}
      className="bp-card rounded-2xl p-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="bp-display font-semibold text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
        {display}
        {stat.suffix}
      </div>
      <div className="text-sm mt-2 mb-4" style={{ color: "var(--muted)" }}>
        {stat.label}
      </div>
      <div className="flex items-end gap-1 h-8">
        {stat.spark.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${(v / max) * 100}%`,
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-border)",
              transitionDelay: `${delay + i * 60}ms`,
              transition: "height 0.5s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const AboutStats: React.FC = () => (
  <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {STATS.map((s, i) => (
        <StatCard key={s.label} stat={s} delay={i * 90} />
      ))}
    </div>

    <Reveal delay={140}>
      <div className="bp-card rounded-3xl p-8 md:p-10 mt-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="bp-eyebrow mb-4">About BytePulse</p>
          <h3 className="bp-display font-semibold text-2xl mb-4">
            A small studio, built to move like one.
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            BytePulse Technology is a software studio building web apps, custom software, and
            websites for founders and teams who need a partner that ships — not just a vendor
            that estimates. We stay small on purpose, so every project gets senior attention
            from day one.
          </p>
        </div>
        <ul className="space-y-3">
          {[
            "Senior engineers on every project",
            "Fixed-scope or ongoing retainer options",
            "Weekly demos, not monthly updates",
            "Support that continues after launch",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <CheckCircle2 size={18} color="var(--accent)" className="mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);
