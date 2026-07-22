import React, { useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "./data";
import { useCycle } from "./hooks";

export const Testimonials: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const active = useCycle(TESTIMONIALS, paused ? 999999 : 5000);
  const activeIndex = TESTIMONIALS.indexOf(active);

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
      <Reveal>
        <p className="bp-eyebrow mb-4">Client feedback</p>
        <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
          What it's like to work with us.
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="bp-card rounded-3xl p-8 md:p-12 mt-14 max-w-2xl mx-auto text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote size={26} color="var(--accent)" className="mx-auto mb-5 opacity-70" />
          <p key={active.name} className="bp-ticker-line bp-display text-xl md:text-2xl leading-snug mb-6">
            "{active.quote}"
          </p>
          <div className="text-sm font-semibold">{active.name}</div>
          <div className="text-xs mb-6" style={{ color: "var(--muted)" }}>
            {active.role}
          </div>

          <div className="flex items-center justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <span
                key={t.name}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 20 : 6,
                  height: 6,
                  background: i === activeIndex ? "var(--accent)" : "var(--line)",
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
