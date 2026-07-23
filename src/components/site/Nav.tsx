import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "./data";
import { PulseMark } from "./icons";
import { useScrolled, useLiveClock } from "./hooks";

const EXTENDED_NAV_LINKS = [
  ...NAV_LINKS,
  { label: "Team", href: "#team" },
];

export const Nav: React.FC<{
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onNavigate?: (href: string) => void;
}> = ({ theme, onToggleTheme, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const scrolled = useScrolled();
  const time = useLiveClock();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");

      if (targetId === "top" || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = href;
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 py-2 sm:py-3 md:py-4">
      {/* Floating HUD Container with adaptive max-width */}
      <div
        className={`w-full mx-auto px-3 sm:px-6 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between transition-all duration-300 relative backdrop-blur-xl ${
            scrolled ? "shadow-2xl border" : "border border-transparent"
          }`}
          style={{
            background: scrolled ? "var(--surface)" : "transparent",
            borderColor: scrolled ? "var(--line)" : "transparent",
            boxShadow: scrolled ? "var(--shadow-lift)" : "none",
          }}
        >
          {/* Brand Logo - Scaled for smaller phones */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center gap-2 sm:gap-3 group relative z-10 shrink-0"
          >
            <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
              <PulseMark className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <span className="bp-display font-semibold text-sm sm:text-base md:text-lg tracking-tight flex items-center gap-1">
              <span style={{ color: "var(--ink)" }}>BytePulse</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold">
                Tech
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links (Large Desktop & Up) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 relative z-10">
            {EXTENDED_NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                onMouseEnter={() => setHoveredLink(l.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-medium uppercase tracking-wider bp-mono transition-colors duration-200 whitespace-nowrap"
                style={{
                  color: hoveredLink === l.href ? "var(--ink)" : "var(--muted)",
                }}
              >
                {hoveredLink === l.href && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ background: "var(--surface-2)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar (Tablet/Desktop) */}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 relative z-10 shrink-0">
            {/* Live Clock HUD Badge (Hidden on medium, visible on large) */}
            <div
              className="hidden lg:flex bp-mono items-center gap-1.5 xl:gap-2 text-[10px] xl:text-[11px] font-medium px-2.5 xl:px-3 py-1.5 rounded-full backdrop-blur-md whitespace-nowrap"
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
              }}
              title="BytePulse Engineering HQ is Live"
            >
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
              <span>DHAKA</span>
              <span className="opacity-40">|</span>
              <span className="font-semibold">{time}</span>
            </div>

            {/* Light/Dark Mode Switcher */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={onToggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-all duration-200 cursor-pointer shrink-0"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-2)",
                color: "var(--ink)",
              }}
              aria-label="Toggle light/dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bp-btn-primary px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] xl:text-xs font-semibold bp-mono uppercase tracking-wider flex items-center gap-1.5 shadow-lg active:scale-95 transition-transform whitespace-nowrap"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile & Tablet Toggle Controls */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 relative z-10 shrink-0">
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border active:scale-95 transition-transform cursor-pointer"
              style={{
                borderColor: "var(--line)",
                background: "var(--surface-2)",
                color: "var(--ink)",
              }}
              aria-label="Toggle light/dark mode"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
              style={{
                borderColor: "var(--line)",
                color: "var(--ink)",
                background: "var(--surface-2)",
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile & Tablet Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden mt-2 p-4 sm:p-6 rounded-2xl backdrop-blur-2xl border flex flex-col gap-4 shadow-2xl overflow-y-auto max-h-[80dvh]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {EXTENDED_NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => {
                      setMenuOpen(false);
                      handleNavClick(e, l.href);
                    }}
                    className="px-4 py-3 rounded-xl bp-mono text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-between active:scale-[0.99] transition-all"
                    style={{
                      color: "var(--ink)",
                      background: "var(--surface-2)",
                    }}
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-60 shrink-0"
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.a>
                ))}
              </div>

              <div
                className="pt-3 border-t flex flex-col gap-3"
                style={{ borderColor: "var(--line)" }}
              >
                {/* Mobile Clock Badge */}
                <div
                  className="bp-mono flex items-center justify-between text-xs px-3.5 py-2.5 rounded-xl"
                  style={{
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--accent)",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    DHAKA HQ
                  </span>
                  <span className="font-bold">{time}</span>
                </div>

                <a
                  href="#contact"
                  className="bp-btn-primary px-5 py-3 rounded-xl text-xs font-semibold bp-mono uppercase tracking-wider text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
                  onClick={(e) => {
                    setMenuOpen(false);
                    handleNavClick(e, "#contact");
                  }}
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};