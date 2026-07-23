import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-lift)",
        }}
        className="rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border transition-all duration-300 relative overflow-hidden group"
      >
        {/* Ambient Glow — static, no per-frame scroll spring */}
        <motion.div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
          style={{ background: "var(--accent)" }}
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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

        {/* Action CTA */}
        <a
          href="#contact"
          className="bp-btn-primary px-6 py-3.5 rounded-full text-sm font-medium flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 w-full sm:w-auto group/btn z-10"
          style={{
            background: "var(--accent)",
            color: "#ffffff",
          }}
        >
          <span>Get in touch</span>
          <ArrowRight size={16} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};