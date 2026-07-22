import React from "react";
import { Reveal } from "./Reveal";
import { PROCESS } from "./data";

export const Process: React.FC = () => (
  <section id="process" className="relative z-10" style={{ background: "var(--bg-alt)" }}>
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <Reveal>
        <p className="bp-eyebrow mb-4">How we work</p>
        <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
          Five steps, in order, every time.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col">
        {PROCESS.map((step, i) => (
          <Reveal key={step.step} delay={i * 70}>
            <div className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <span
                  className="bp-mono text-sm font-semibold w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  {step.step}
                </span>
                {i < PROCESS.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(180deg, var(--accent-border), transparent)" }} />
                )}
              </div>
              <div className={i < PROCESS.length - 1 ? "pb-10" : ""}>
                <h3 className="bp-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
