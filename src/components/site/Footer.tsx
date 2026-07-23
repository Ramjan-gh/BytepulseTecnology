import React from "react";
import { NAV_LINKS } from "./data";
import { PulseMark } from "./icons";
import { ArrowUp } from "lucide-react";

// Extended link list including the Team section
const EXTENDED_NAV_LINKS = [
  ...NAV_LINKS,
  { label: "Team", href: "#team" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-10 border-t transition-colors duration-300"
      style={{ background: "var(--bg-alt)", borderColor: "var(--line)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Top Section: Brand & Nav Links */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          {/* Brand Logo & Name */}
          <a
            href="#top"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 shrink-0"
            aria-label="Back to top"
          >
            <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
              <PulseMark className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="bp-display font-semibold text-base sm:text-lg tracking-tight">
              BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
            </span>
          </a>

          {/* Navigation Links - Responsive Grid on Mobile, Flex on Tablet/Desktop */}
          <nav className="w-full md:w-auto grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2.5 sm:gap-x-8 sm:gap-y-3">
            {EXTENDED_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium py-1 sm:py-0 transition-colors duration-200 hover:text-[var(--ink)]"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Copyright & Live Indicator */}
          <div
            className="bp-mono text-[11px] sm:text-xs flex items-center gap-2 sm:gap-2.5"
            style={{ color: "var(--muted)" }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
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

          {/* Back to Top Button */}
          <a
            href="#top"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-medium py-1 px-2 -ml-2 sm:ml-0 sm:px-0 rounded-lg transition-colors hover:text-[var(--ink)] active:scale-95"
            style={{ color: "var(--muted)" }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="shrink-0" />
          </a>
        </div>
      </div>
    </footer>
  );
};