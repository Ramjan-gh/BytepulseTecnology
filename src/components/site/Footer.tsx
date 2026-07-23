import React from "react";
import { NAV_LINKS } from "./data";
import { PulseMark } from "./icons";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t transition-colors duration-300"
      style={{ background: "var(--bg-alt)", borderColor: "var(--line)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b" style={{ borderColor: "var(--line)" }}>
          {/* Brand Logo & Name */}
          <a
            href="#top"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Back to top"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <PulseMark size={28} />
            </div>
            <span className="bp-display font-semibold text-lg tracking-tight">
              BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--ink)]"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar: Status, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="bp-mono text-xs flex items-center gap-2.5" style={{ color: "var(--muted)" }}>
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "var(--accent)" }}
              />
            </span>
            <span>© {currentYear} BytePulse Technology. All rights reserved.</span>
          </div>

          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--ink)]"
            style={{ color: "var(--muted)" }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};