import React from "react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";

export const Work: React.FC = () => (
  <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
    <Reveal>
      <p className="bp-eyebrow mb-4">Selected work</p>
      <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
        A few products we've shipped.
      </h2>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-6 mt-14">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.name} delay={i * 80}>
          <div className="bp-card rounded-2xl p-8 flex flex-col h-full">
            <span className="bp-mono text-xs mb-6 block" style={{ color: "var(--muted)" }}>
              {p.category}
            </span>
            <h3 className="bp-display font-semibold text-2xl mb-3">{p.name}</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((t) => (
                <span key={t} className="bp-tag px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
