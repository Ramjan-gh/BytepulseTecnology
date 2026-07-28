import React, { memo } from "react";
import { ArrowUpRight, FolderGit2, ExternalLink, ArrowRight, Layout } from "lucide-react";
import { PROJECTS } from "./data";
import { Reveal } from "./Reveal";

export const Work: React.FC<{ onSeeAllWorks: () => void }> = memo(({ onSeeAllWorks }) => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section
      id="work"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28"
    >
      {/* Header Area */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <FolderGit2 size={12} />
              <span>Selected Portfolio</span>
            </div>

            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              A few products{" "}
              <span className="opacity-60 font-normal block sm:inline">
                we've shipped.
              </span>
            </h2>
          </div>

          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A sample of high-impact production platforms engineered for
            performance and scalability. Click any card to view the live demo.
          </p>
        </div>
      </Reveal>

      {/* High-Performance 60fps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((p, i) => {
          const projectLink = p.link || p.url || "#";

          return (
            <Reveal key={p.name} delay={i * 75}>
              <div
                className="h-full"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "0 420px", // Pre-reserves vertical space to prevent layout shifts
                }}
              >
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block cursor-pointer"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--line)",
                    transform: "translateZ(0)", // Force GPU layer creation
                    willChange: "transform",
                  }}
                >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className="px-2.5 py-1 rounded-full bp-mono text-[10px] font-semibold uppercase tracking-wider border"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                        borderColor: "var(--line)",
                      }}
                    >
                      {p.category}
                    </span>

                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        borderColor: "rgba(6, 182, 212, 0.2)",
                      }}
                    >
                      <span className="bp-mono text-[10px] uppercase tracking-wider font-semibold">
                        Live Demo
                      </span>
                      <ExternalLink size={12} />
                    </div>
                  </div>

                  {/* Image / Preview */}
                  <div className="relative w-full h-48 sm:h-56 mb-5 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)]">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        className="w-full h-full object-cover object-top opacity-95 transition-opacity duration-150 group-hover:opacity-100"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="350"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[var(--surface-2)]">
                        <Layout size={28} className="mb-2 text-[var(--accent)] opacity-60" />
                        <span className="bp-mono text-xs text-[var(--muted)]">
                          Interface Preview
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="bp-display font-semibold text-xl sm:text-2xl mb-2.5 tracking-tight transition-colors duration-150 group-hover:text-[var(--accent)] flex items-center justify-between"
                    style={{ color: "var(--ink)" }}
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-50 transition-opacity duration-150 group-hover:opacity-100 text-[var(--accent)]"
                    />
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Tags Footer */}
                <div
                  className="flex flex-wrap gap-2 pt-5 mt-auto border-t"
                  style={{ borderColor: "var(--line)" }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bp-mono text-[10px] sm:text-[11px] font-medium border"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--ink)",
                        borderColor: "var(--line)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Action Footer */}
      <Reveal>
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={onSeeAllWorks}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            style={{
              background: "var(--surface)",
              color: "var(--ink)",
              borderColor: "var(--line)",
            }}
          >
            <span className="bp-mono text-xs font-semibold uppercase tracking-wider">
              See All Works ({PROJECTS.length})
            </span>
            <div
              className="p-1 rounded-full transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110"
              style={{
                background: "var(--surface-2)",
                color: "var(--ink)",
              }}
            >
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </Reveal>
    </section>
  );
});