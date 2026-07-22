import React from "react";
import { NAV_LINKS } from "./data";
import { PulseMark } from "./icons";

export const Footer: React.FC = () => (
  <footer className="relative z-10 border-t" style={{ background: "var(--bg-alt)", borderColor: "var(--line)" }}>
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <a href="#top" className="flex items-center gap-3">
        <PulseMark size={26} />
        <span className="bp-display font-semibold">
          BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
        </span>
      </a>

      <nav className="flex flex-wrap gap-6">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-sm" style={{ color: "var(--muted)" }}>
            {l.label}
          </a>
        ))}
      </nav>

      <span className="bp-mono text-xs flex items-center gap-2" style={{ color: "var(--muted)" }}>
        <span className="w-1.5 h-1.5 rounded-full bp-blink-dot" style={{ background: "var(--accent)" }} />
        © {new Date().getFullYear()} BytePulse Technology. All rights reserved.
      </span>
    </div>
  </footer>
);
