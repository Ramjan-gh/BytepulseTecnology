import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES } from "./data";

interface ServicesProps {
  onWebApplications: () => void;
  onCustomSoftware: () => void;
  onWebsiteAndStorefronts: () => void;
  onCloudAndDevOps: () => void;
  onQualityAndSecurity: () => void;
  onMaintenanceAndSupport: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onWebApplications,
  onCustomSoftware,
  onWebsiteAndStorefronts,
  onCloudAndDevOps,
  onQualityAndSecurity,
  onMaintenanceAndSupport,
}) => {
  return (
    <section
      id="services"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <Sparkles size={12} />
              <span>Capabilities & Expertise</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              End-to-end product work,{" "}
              <span className="opacity-60 font-normal block sm:inline">
                not just one slice.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Full-stack capabilities tailored for teams moving from zero-to-one
            or scaling production infrastructure.
          </p>
        </Reveal>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="h-full cursor-pointer"
            onClick={() => {
              console.log(`Clicked on ${s.title}`);
              if (s.title === "Web Applications") {
                onWebApplications();
              }
              if (s.title === "Custom Software") {
                onCustomSoftware();
              }
              if (s.title === "Websites & Storefronts") {
                onWebsiteAndStorefronts();
              }
              if (s.title === "Cloud & DevOps") {
                onCloudAndDevOps();
              }
              if (s.title === "Quality & Security") {
                onQualityAndSecurity();
              }
              if (s.title === "Maintenance & Support") {
                onMaintenanceAndSupport();
              }
            }}
          >
            <div
              className="group relative rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
                boxShadow: "var(--shadow-lift)",
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <s.icon size={22} />
                  </div>

                  <span
                    className="bp-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--muted)" }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <h3
                  className="bp-display font-semibold text-xl mb-3 tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </div>

              <div
                className="pt-6 mt-6 border-t flex items-center justify-between bp-mono text-xs font-medium"
                style={{ borderColor: "var(--line)" }}
              >
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--accent)" }}
                >
                  Learn scope
                </span>
                <div
                  className="p-1.5 rounded-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{
                    background: "var(--surface-2)",
                    color: "var(--ink)",
                  }}
                >
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};