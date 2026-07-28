import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { STATUS_LINES } from "./data";
import { useCycle } from "./hooks";

interface HeroProps {
  onNavigate?: (hash: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const line = useCycle(STATUS_LINES, 3200);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Optimized particle animation - reduced particles for performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 35; // Reduced count for mobile
    // Enable on mobile with fewer particles

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let running = true;

    const connectionDist = 110;
    const maxDistSq = connectionDist * connectionDist;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || window.innerHeight;

      // Cap DPR to 1.5 max to avoid massive rendering pixels on Retina displays
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1,
      }));
    };

    initParticles();

    // Pause canvas when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleResize = () => initParticles();
    window.addEventListener("resize", handleResize);

    // Frame Loop Optimization
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      // Single style batch for nodes
      ctx.fillStyle = "rgba(100, 255, 218, 0.6)";

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Optimized Line Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - distSq / maxDistSq) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative z-10 w-full min-h-[85vh] sm:min-h-screen overflow-hidden flex flex-col justify-center pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 -mt-20 sm:-mt-24"
    >
      {/* 1. Fast Canvas Particle Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-70"
      />

      {/* 2. Grid Background Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-20 sm:opacity-25"
        style={{
          backgroundImage: `linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)`,
          backgroundSize: "2.5rem 2.5rem",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 60%, transparent 100%)",
        }}
      />

      {/* 3. Centered Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bp-mono text-[11px] sm:text-xs font-medium mb-5 sm:mb-8 backdrop-blur-md max-w-full"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                border: "1px solid var(--accent-border)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-ping flex-shrink-0"
                style={{ background: "var(--accent)" }}
              />
              <span className="truncate">
                BYTEPULSE TECHNOLOGY · DIGITAL ENGINEERING
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={80}>
            <h1
              className="bp-display font-semibold text-3xl sm:text-5xl md:text-7xl tracking-tight leading-[1.15] sm:leading-[1.1]"
              style={{ color: "var(--ink)" }}
            >
              Software engineered with a{" "}
              <span className="inline-block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">
                  living pulse.
                </span>
              </span>
            </h1>
          </Reveal>

          {/* Body Paragraph */}
          <Reveal delay={160}>
            <p
              className="mt-4 sm:mt-8 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal px-2 sm:px-0"
              style={{ color: "var(--muted)" }}
            >
              We design, build, and deploy custom web applications and core
              software platforms built for teams who demand flawless execution on
              day one.
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={240}>
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
              <button
                onClick={() => onNavigate?.("#contact")}
                className="bp-btn-primary h-12 sm:h-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-3 group shadow-xl transition-transform duration-200 active:scale-95 touch-manipulation"
              >
                <span>Start a project</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => onNavigate?.("#work")}
                className="bp-btn-ghost h-12 sm:h-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 text-center transition-transform duration-200 active:scale-95 touch-manipulation"
              >
                Explore engineering work
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

