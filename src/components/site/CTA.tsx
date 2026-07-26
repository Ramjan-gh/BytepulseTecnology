import React, { memo } from "react";
import { ArrowRight, Activity } from "lucide-react";

interface CTAProps {
  onContactClick?: () => void;
}

export const CTA: React.FC<CTAProps> = memo(({ onContactClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onContactClick) {
      // Direct callback navigation (modal / state trigger)
      onContactClick();
    } else {
      // Fallback programmatic smooth scroll if relying on section ref/id
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-24 md:pb-32">
      <div
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-lift)",
        }}
        className="rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border transition-all duration-300 relative overflow-hidden group"
      >
        {/* Ambient Glow */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: "var(--accent)" }}
        />

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-xl z-10">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "var(--accent-soft)",
              borderColor: "var(--accent-border)",
            }}
          >
            <Activity size={22} style={{ color: "var(--accent)" }} />
          </div>

          <div>
            <h3
              className="bp-display font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight"
              style={{ color: "var(--ink)" }}
            >
              Have a product in mind? Let's give it a pulse.
            </h3>
            <p className="bp-mono text-xs sm:text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>
              Available for full-stack projects, architecture consults, and technical advisory.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleClick}
          className="bp-btn-primary px-6 py-3.5 rounded-full text-xs bp-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 w-full sm:w-auto group/btn z-10 cursor-pointer"
          style={{
            background: "var(--accent)",
            color: "#000000",
          }}
        >
          <span>Get in touch</span>
          <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </section>
  );
});