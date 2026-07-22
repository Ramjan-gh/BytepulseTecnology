import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "./data";
import { PulseMark } from "./icons";
import { useScrolled, useLiveClock } from "./hooks";

export const Nav: React.FC<{
  theme: "light" | "dark";
  onToggleTheme: () => void;
}> = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const time = useLiveClock();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur transition-colors duration-300"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        <a href="#top" className="flex items-center gap-3">
          <PulseMark size={30} />
          <span className="bp-display font-semibold text-lg tracking-tight">
            BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium transition-colors" style={{ color: "var(--muted)" }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div
            className="bp-mono flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
            style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: "var(--accent)" }}
            title="We're online and working right now"
          >
            <span className="w-1.5 h-1.5 rounded-full bp-blink-dot" style={{ background: "var(--accent)" }} />
            Dhaka {time}
          </div>
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
            style={{ borderColor: "var(--line)" }}
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="bp-btn-primary px-5 py-2.5 rounded-full text-sm">
            Start a project
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center border"
            style={{ borderColor: "var(--line)" }}
            aria-label="Toggle light/dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: "var(--ink)" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 relative z-10">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "var(--muted)" }} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <div
            className="bp-mono flex items-center gap-2 text-xs px-3 py-1.5 rounded-full w-fit"
            style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: "var(--accent)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bp-blink-dot" style={{ background: "var(--accent)" }} />
            Dhaka {time}
          </div>
          <a href="#contact" className="bp-btn-primary px-5 py-2.5 rounded-full text-sm text-center" onClick={() => setMenuOpen(false)}>
            Start a project
          </a>
        </div>
      )}
    </header>
  );
};
