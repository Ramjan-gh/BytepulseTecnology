import React, { memo } from "react";
import { TECH } from "./data";

export const TechMarquee: React.FC = memo(() => {
  const marqueeItems = [...TECH, ...TECH];

  return (
    <section
      className="relative z-10 border-y py-4 md:py-6 overflow-hidden select-none"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Optimized marquee animations */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .track-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 30s linear infinite;
          will-change: transform;
        }
        .track-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 35s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Edge Gradient Masking */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, var(--bg) 0%, transparent 6%, transparent 94%, var(--bg) 100%)",
        }}
      />

      {/* --- TRACK 1 (Left Motion) --- */}
      <div className="overflow-hidden w-full flex">
        <div className="track-left flex gap-2.5 md:gap-3 items-center">
          {marqueeItems.map((tech, i) => (
            <div
              key={`t1-${i}`}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bp-mono text-[11px] md:text-xs font-medium whitespace-nowrap flex items-center gap-1.5 md:gap-2 transition-transform duration-150 active:scale-95 md:hover:scale-105"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                color: "var(--ink)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--accent)" }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- TRACK 2 (Desktop - Right Motion) --- */}
      <div className="hidden md:flex overflow-hidden w-full mt-3">
        <div className="track-right flex gap-3 items-center">
          {marqueeItems.map((tech, i) => (
            <div
              key={`t2-${i}`}
              className="px-4 py-2 rounded-full bp-mono text-xs font-medium whitespace-nowrap flex items-center gap-2 transition-transform duration-150 hover:scale-105 opacity-75 hover:opacity-100"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                color: "var(--muted)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                style={{ background: "var(--accent)" }}
              />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});