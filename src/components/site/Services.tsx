import React from "react";
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
  // Mapping service titles to their respective callbacks
  const actionMap: Record<string, () => void> = {
    "Web Applications": onWebApplications,
    "Custom Software": onCustomSoftware,
    "Websites & Storefronts": onWebsiteAndStorefronts,
    "Cloud & DevOps": onCloudAndDevOps,
    "Quality & Security": onQualityAndSecurity,
    "Maintenance & Support": onMaintenanceAndSupport,
  };

  return (
    <section
      id="services"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
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

          <Reveal delay={60}>
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

        <Reveal delay={120}>
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Full-stack capabilities tailored for teams moving from zero-to-one
            or scaling production infrastructure.
          </p>
        </Reveal>
      </div>

      {/* Services Grid with Fade-In */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 50}>
            <div
              className="h-full cursor-pointer"
              onClick={() => {
                const action = actionMap[s.title];
                if (action) action();
              }}
            >
              <div
                className="group relative rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between border transition-colors duration-200 hover:border-[var(--accent)]"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--shadow-lift)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                      }}
                    >
                      <s.icon size={20} />
                    </div>

                    <span
                      className="bp-mono text-xs font-bold opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--muted)" }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3
                    className="bp-display font-semibold text-xl mb-2.5 tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]"
                    style={{ color: "var(--ink)" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  className="pt-5 mt-5 border-t flex items-center justify-between bp-mono text-xs font-medium"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn scope
                  </span>
                  <div
                    className="p-1.5 rounded-lg"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--ink)",
                    }}
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-60 group-hover:opacity-100 text-[var(--accent)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};