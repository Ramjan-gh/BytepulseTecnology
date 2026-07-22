import React from "react";
import { ArrowRight, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTA: React.FC = () => (
  <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
    <Reveal>
      <div
        className="bp-card rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "var(--accent-soft)" }}
          >
            <Activity size={22} color="var(--accent)" />
          </div>
          <h3 className="bp-display font-semibold text-2xl md:text-3xl max-w-md">
            Have a product in mind? Let's give it a pulse.
          </h3>
        </div>
        <a href="#contact" className="bp-btn-primary px-6 py-3 rounded-full text-sm flex items-center gap-2 shrink-0">
          Get in touch <ArrowRight size={16} />
        </a>
      </div>
    </Reveal>
  </section>
);
