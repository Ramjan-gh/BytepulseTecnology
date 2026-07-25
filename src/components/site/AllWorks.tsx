import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ArrowUpRight, Search, Layout, FolderGit2, X } from "lucide-react";
import { PROJECTS } from "./data";

export const AllWorks: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects purely by search query
  const filteredProjects = PROJECTS.filter((p) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(searchLower) ||
      p.desc.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower) ||
      p.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Top Navigation */}
      <div className="mb-8">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer text-xs font-semibold bp-mono transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            color: "var(--ink)",
          }}
        >
          <ArrowLeft size={15} />
                  <span className="text-sm font-medium">Back to Services</span>
        </button>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
          style={{
            background: "var(--accent-soft)",
            color: "var(--accent)",
            borderColor: "rgba(6, 182, 212, 0.2)",
          }}
        >
          <FolderGit2 size={12} />
          <span>Complete Archive</span>
        </div>

        <h1
          className="bp-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4"
          style={{ color: "var(--ink)" }}
        >
          All Crafted Products
        </h1>
        <p
          className="bp-mono text-sm max-w-xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          An extensive list of production web applications, headless platforms, APIs, and custom software systems built for scale.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative w-full max-w-lg">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
          <input
            type="text"
            placeholder="Search products by title, description, or stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border text-sm transition-colors outline-none focus:border-[var(--accent)]"
            style={{
              background: "var(--surface)",
              color: "var(--ink)",
              borderColor: "var(--line)",
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div
          className="p-12 text-center rounded-2xl border flex flex-col items-center justify-center"
          style={{ background: "var(--surface)", borderColor: "var(--line)" }}
        >
          <p className="bp-mono text-sm mb-4" style={{ color: "var(--muted)" }}>
            No projects found matching your search.
          </p>
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 rounded-xl border bp-mono text-xs font-semibold cursor-pointer transition-colors duration-150"
            style={{
              background: "var(--surface-2)",
              borderColor: "var(--line)",
              color: "var(--ink)",
            }}
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => {
              const projectLink = p.link || p.url || "#";

              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl p-5 flex flex-col justify-between h-full border transition-all duration-200 hover:shadow-lg block cursor-pointer"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--line)",
                      boxShadow: "var(--shadow-lift)",
                    }}
                  >
                    <div>
                      {/* Category & Demo Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className="px-2.5 py-1 rounded-full bp-mono text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            background: "var(--surface-2)",
                            color: "var(--muted)",
                            border: "1px solid var(--line)",
                          }}
                        >
                          {p.category}
                        </span>

                        <div
                          className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent)",
                          }}
                        >
                          <span className="bp-mono text-[9px] uppercase font-semibold">Demo</span>
                          <ExternalLink size={10} />
                        </div>
                      </div>

                      {/* Image / Thumbnail Glimpse */}
                      <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)]">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover object-top transition-opacity duration-200"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                            <Layout size={24} className="mb-1 text-[var(--accent)] opacity-60" />
                            <span className="bp-mono text-[10px] text-[var(--muted)]">Preview</span>
                          </div>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h2
                        className="bp-display font-bold text-lg mb-2 flex items-center justify-between group-hover:text-[var(--accent)] transition-colors duration-150"
                        style={{ color: "var(--ink)" }}
                      >
                        <span>{p.name}</span>
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[var(--accent)]" />
                      </h2>

                      <p
                        className="text-xs leading-relaxed mb-4 line-clamp-3"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--line)]">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bp-mono text-[10px]"
                          style={{
                            background: "var(--surface-2)",
                            color: "var(--ink)",
                            border: "1px solid var(--line)",
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
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};