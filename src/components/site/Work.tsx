import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, ExternalLink, ArrowRight, Layout } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROJECTS } from "./data";

export const Work: React.FC<{ onSeeAllWorks: () => void }> = ({ onSeeAllWorks }) => {
  // Show only the first 4 projects on the home page
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section
      id="work"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 overflow-hidden"
    >
      {/* Header Area */}
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
              <FolderGit2 size={12} />
              <span>Selected Portfolio</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              A few products{" "}
              <span className="opacity-60 font-normal block sm:inline">
                we've shipped.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A sample of high-impact production platforms engineered for
            performance and scalability. Click any card to view the live demo.
          </p>
        </Reveal>
      </div>

      {/* Grid (2 columns on md+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {featuredProjects.map((p, i) => {
          const projectLink = p.link || p.url || "#";

          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="h-full"
            >
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between border transition-all duration-300 hover:shadow-xl hover:border-[var(--accent)] hover:-translate-y-1 block"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                  boxShadow: "var(--shadow-lift)",
                }}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
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
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent)",
                        border: "1px solid rgba(6, 182, 212, 0.3)",
                      }}
                    >
                      <span className="bp-mono text-[10px] uppercase tracking-wider font-semibold">
                        Live Demo
                      </span>
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Image / Preview */}
                  <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)]">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] opacity-80">
                        <Layout size={32} className="mb-2 text-[var(--accent)] opacity-60" />
                        <span className="bp-mono text-xs text-[var(--muted)]">
                          Interface Preview
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="bp-display font-semibold text-xl sm:text-2xl mb-3 tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)] flex items-center justify-between"
                    style={{ color: "var(--ink)" }}
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[var(--accent)]"
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
                  className="flex flex-wrap gap-2 pt-6 mt-auto border-t"
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
            </motion.div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <Reveal delay={200}>
          <button
            onClick={onSeeAllWorks}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg cursor-pointer"
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
              className="p-1 rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[var(--accent)] group-hover:text-white"
              style={{
                background: "var(--surface-2)",
                color: "var(--ink)",
              }}
            >
              <ArrowRight size={14} />
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
};