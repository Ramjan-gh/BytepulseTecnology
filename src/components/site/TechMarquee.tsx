import React from "react";
import { TECH } from "./data";

export const TechMarquee: React.FC = () => (
  <section className="relative z-10 border-y" style={{ borderColor: "var(--line)" }}>
    <div
      className="overflow-hidden py-5"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
    >
      <div className="bp-marquee-track">
        {[...TECH, ...TECH].map((t, i) => (
          <span key={i} className="bp-mono text-sm mx-6 whitespace-nowrap" style={{ color: "var(--muted)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);
