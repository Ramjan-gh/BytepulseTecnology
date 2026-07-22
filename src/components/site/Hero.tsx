import React from "react";
import { ArrowRight, Radio, ShieldCheck, Zap, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";
import { PulseTrace } from "./icons";
import { STATUS_LINES } from "./data";
import { useCycle } from "./hooks";

export const Hero: React.FC = () => {
  const line = useCycle(STATUS_LINES, 3200);

  return (
    <section id="top" className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
      {/* 1. Subtle Architectural Grid Background Lines */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, #000 70%, transparent 100%)'
        }}
      />

      {/* 2. Main High-Impact Centered Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bp-mono text-xs font-medium mb-8"
               style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}>
            <span className="w-2 h-2 rounded-full animate-ping" style={{ background: "var(--accent)" }} />
            <span>BYTEPULSE TECHNOLOGY · DIGITAL ENGINEERING</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="bp-display font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05]"
              style={{ color: "var(--ink)" }}>
            Software engineered with a{" "}
            <span className="inline-block relative">
              <span style={{ color: "var(--accent)" }}>living pulse.</span>
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-emerald-500 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,5 100,15" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
             style={{ color: "var(--muted)" }}>
            We design, build, and deploy custom web applications and core software platforms 
            built for teams who demand flawless execution on day one.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="bp-btn-primary px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-3 group shadow-lg"
            >
              <span>Start a project</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a 
              href="#work" 
              className="bp-btn-ghost px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2"
            >
              Explore engineering work
            </a>
          </div>
        </Reveal>
      </div>

      {/* 3. Integrated Telemetry & Studio Console (Horizontal Bento Layout) */}
      <Reveal delay={320}>
        <div 
          className="mt-16 sm:mt-20 rounded-2xl p-6 sm:p-8 relative"
          style={{ 
            background: "var(--surface)", 
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow-lift)"
          }}
        >
          {/* Top Bar Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6" style={{ borderBottom: "1px solid var(--line)" }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ background: "var(--accent-soft)", color: "var(--accent)" }}>
                <Terminal size={18} />
              </div>
              <div>
                <div className="bp-mono text-xs font-bold uppercase tracking-wider" style={{ color: "var(--ink)" }}>
                  STUDIO TELEMETRY
                </div>
                <div className="bp-mono text-[11px]" style={{ color: "var(--muted)" }}>
                  Real-time engineering metrics
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bp-mono text-xs">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}>
                <Radio size={12} className="animate-pulse" />
                Operational
              </span>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
            
            {/* Waveform Visualization (Takes 7 Cols) */}
            <div className="md:col-span-7 pr-0 md:pr-6" style={{ borderRight: "1px solid var(--line)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="bp-mono text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  Heartbeat Signal
                </span>
                <span className="bp-mono text-xs font-bold" style={{ color: "var(--pulse)" }}>
                  72 BPM
                </span>
              </div>
              <div className="py-2" style={{ color: "var(--pulse)" }}>
                <PulseTrace height={75} />
              </div>
            </div>

            {/* Quick Metrics & Live Ticker (Takes 5 Cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)", border: "1px solid var(--line)" }}>
                  <div className="flex items-center gap-1.5 bp-mono text-[11px]" style={{ color: "var(--muted)" }}>
                    <ShieldCheck size={13} style={{ color: "var(--accent)" }} />
                    <span>RELIABILITY</span>
                  </div>
                  <div className="bp-mono text-lg font-bold mt-1" style={{ color: "var(--ink)" }}>99.99%</div>
                </div>

                <div className="p-3 rounded-xl" style={{ background: "var(--surface-2)", border: "1px solid var(--line)" }}>
                  <div className="flex items-center gap-1.5 bp-mono text-[11px]" style={{ color: "var(--muted)" }}>
                    <Zap size={13} style={{ color: "var(--pulse)" }} />
                    <span>PERFORMANCE</span>
                  </div>
                  <div className="bp-mono text-lg font-bold mt-1" style={{ color: "var(--ink)" }}>&lt; 15ms</div>
                </div>
              </div>

              {/* Ticker Box */}
              <div 
                className="p-3 rounded-xl bp-mono text-xs flex items-center min-h-[2.5rem]"
                style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--muted)" }}
              >
                <span key={line} className="bp-ticker-line inline-flex items-center gap-2 truncate">
                  <span style={{ color: "var(--accent)" }}>›</span>
                  <span className="truncate">{line}</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};