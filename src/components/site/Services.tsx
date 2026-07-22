import React from "react";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";

export const Services: React.FC = () => (
  <section id="services" className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
    <Reveal>
      <p className="bp-eyebrow mb-4">What we do</p>
      <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
        End-to-end product work, not just one slice of it.
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-6 mt-14">
      {SERVICES.map((s, i) => (
        <Reveal key={s.title} delay={i * 70}>
          <div className="bp-card rounded-2xl p-7 h-full group">
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "var(--accent-soft)" }}
            >
              <s.icon size={20} color="var(--accent)" />
            </div>
            <h3 className="bp-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {s.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
