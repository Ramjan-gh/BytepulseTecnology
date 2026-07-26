import React from "react";
import { Code2, Server, ArrowUpRight, Users, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Reveal } from "./Reveal";

interface CoFounder {
  name: string;
  role: string;
  type: "frontend" | "backend";
  image: string;
  location: string;
  tagline: string;
  specialties: string[];
  stack: string[];
  github: string;
  linkedin: string;
  portfolio?: string;
}

const FOUNDERS: CoFounder[] = [
  {
    name: "Ramjan Ali",
    role: "Co-Founder & Lead Frontend Engineer",
    type: "frontend",
    image: "/team/ramjan.png",
    location: "Dhaka, BD",
    tagline: "Crafting fluid design systems & high-performance Web applications.",
    specialties: [
      "Client Architecture & Performance",
      "Interactive UI & Design Systems",
      "Responsive Web Engineering",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ramjan-gh",
    linkedin: "https://www.linkedin.com/in/ramjan-ali-581b7b341/",
    portfolio: "https://my-portfolio-ramjan.vercel.app/",
  },
  {
    name: "Rafiqul Islam Rana",
    role: "Co-Founder & Lead Backend Engineer",
    type: "backend",
    image: "/team/cofounder.png",
    location: "Dhaka, BD",
    tagline: "Building resilient microservices & high-throughput API architectures.",
    specialties: [
      "REST & Real-time API Design",
      "Database Modeling & Optimization",
      "Scalable Server Architecture",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/Rana76-u",
    linkedin: "https://www.linkedin.com/in/md-rafiqul-islam-rana",
    portfolio: "https://rana76-u.github.io/My-Portfolio/",
  },
];

export const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider mb-4 border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                borderColor: "rgba(6, 182, 212, 0.2)",
              }}
            >
              <Users size={13} />
              <span>Engineering Leadership</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="bp-display font-bold text-3xl sm:text-4xl md:text-5xl max-w-xl tracking-tight"
              style={{ color: "var(--ink)" }}
            >
              Architected <span className="opacity-60 font-normal">end-to-end.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p
            className="bp-mono text-xs sm:text-sm max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Combining product-driven client engineering with robust, scalable server systems.
          </p>
        </Reveal>
      </div>

      {/* 2-Column Founder Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {FOUNDERS.map((f, i) => {
          const isFrontend = f.type === "frontend";
          const themeColor = isFrontend ? "var(--accent)" : "#a855f7";
          const badgeBg = isFrontend ? "rgba(6, 182, 212, 0.12)" : "rgba(168, 85, 247, 0.12)";
          const badgeBorder = isFrontend ? "rgba(6, 182, 212, 0.25)" : "rgba(168, 85, 247, 0.25)";

          return (
            <Reveal key={f.name} delay={i * 100}>
              <div
                className="group relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between h-full sm:hover:shadow-2xl"
                style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                aria-label={`Profile card for ${f.name}`}
              >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-2">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out sm:group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, var(--surface) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)`,
                    }}
                  />

                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="bp-mono text-[11px] font-semibold uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 border shadow-sm backdrop-blur-md"
                      style={{
                        background: badgeBg,
                        borderColor: badgeBorder,
                        color: isFrontend ? "var(--accent)" : "#c084fc",
                      }}
                    >
                      {isFrontend ? <Code2 size={13} /> : <Server size={13} />}
                      <span>{isFrontend ? "Frontend Lead" : "Backend Lead"}</span>
                    </span>
                  </div>

                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-0 sm:group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                    style={{ background: themeColor }}
                  />
                </div>

                <div className="p-6 sm:p-8 pt-4">
                  <div>
                    <h3
                      className="bp-display font-bold text-2xl sm:text-3xl tracking-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {f.name}
                    </h3>
                    <p
                      className="bp-mono text-xs mt-1 font-semibold tracking-wide"
                      style={{ color: themeColor }}
                    >
                      {f.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                    {f.tagline}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p
                      className="bp-mono text-[10px] uppercase tracking-wider font-bold flex items-center gap-1.5"
                      style={{ color: "var(--muted)" }}
                    >
                      <Sparkles size={11} style={{ color: themeColor }} />
                      Core Ownership
                    </p>
                    <ul className="text-xs space-y-2 font-medium" style={{ color: "var(--ink)" }}>
                      {f.specialties.map((spec) => (
                        <li key={spec} className="flex items-center gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: themeColor }}
                          />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--line)" }}>
                    <p
                      className="bp-mono text-[10px] uppercase tracking-wider font-semibold mb-3"
                      style={{ color: "var(--muted)" }}
                    >
                      Tech Ecosystem
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {f.stack.map((tech) => (
                        <span
                          key={tech}
                          className="bp-mono text-[11px] px-3 py-1 rounded-xl border font-medium transition-colors duration-200"
                          style={{
                            background: "var(--surface-2)",
                            borderColor: "var(--line)",
                            color: "var(--ink)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mx-6 sm:mx-8 mb-6 sm:mb-8 pt-4 border-t flex items-center justify-between"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex items-center gap-2">
                  <a
                    href={f.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border transition-transform duration-200 sm:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    style={{ borderColor: "var(--line)", background: "var(--surface-2)", color: "var(--ink)" }}
                    aria-label={`${f.name}'s GitHub Profile`}
                  >
                    <FaGithub size={16} />
                  </a>

                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border transition-transform duration-200 sm:hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    style={{ borderColor: "var(--line)", background: "var(--surface-2)", color: "var(--ink)" }}
                    aria-label={`${f.name}'s LinkedIn Profile`}
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>

                {f.portfolio && (
                  <a
                    href={f.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bp-mono text-xs font-semibold flex items-center gap-1.5 transition-colors group/link focus-visible:outline-none"
                    style={{ color: "var(--muted)" }}
                  >
                    <span className="group-hover/link:text-[var(--ink)]">View Portfolio</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};