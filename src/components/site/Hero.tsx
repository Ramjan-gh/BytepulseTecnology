import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { STATUS_LINES } from "./data";
import { useCycle } from "./hooks";

export const Hero: React.FC = () => {
  const line = useCycle(STATUS_LINES, 3200);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. Scroll Tracking & Smooth Spring
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
  });

  const textScale = useTransform(smoothProgress, [0, 0.6], [1, 0.95]);

  // 2. High-DPI Mobile-Optimized Canvas Physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      hue: number;
    }> = [];

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for mobile GPU efficiency
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-calculate particle density based on device class
      const isMobile = width < 768;
      const particleCount = isMobile
        ? Math.floor((width * height) / 22000)
        : Math.floor((width * height) / 10000);

      const targetCount = Math.max(particleCount, isMobile ? 25 : 70);

      particles = Array.from({ length: targetCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (isMobile ? 1.8 : 2.8) + 1,
        vx: (Math.random() - 0.5) * 1.1,
        vy: (Math.random() - 0.5) * 1.1,
        hue: Math.random() * 60 + 180,
      }));
    };

    handleResize();

    let scrollProgressVal = 0;
    let scrollVelocityVal = 0;
    let lastProgress = 0;

    const unsubscribe = smoothProgress.on("change", (latest) => {
      scrollVelocityVal = (latest - lastProgress) * 60;
      scrollProgressVal = latest;
      lastProgress = latest;
    });

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const currentHue = 180 + scrollProgressVal * 140;
      
      // Clamp velocity impact on mobile to prevent jittery leaps during fast swipes
      const velocityImpact = Math.min(Math.abs(scrollVelocityVal), isMobile ? 1.5 : 3);

      particles.forEach((p, index) => {
        p.x += p.vx * (1 + velocityImpact * 1.5);
        p.y += p.vy * (1 + velocityImpact * 1.5) + scrollVelocityVal * (isMobile ? 2 : 4);

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + velocityImpact * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${currentHue + (index % 40)}, 85%, 60%, ${0.4 + scrollProgressVal * 0.3})`;
        ctx.shadowColor = `hsla(${currentHue}, 90%, 50%, 0.8)`;
        ctx.shadowBlur = isMobile ? 6 : 14;
        ctx.fill();

        const connectionDistance = isMobile ? 80 : 130;
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${currentHue}, 80%, 55%, ${0.25 - dist / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      unsubscribe();
    };
  }, [smoothProgress]);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative z-10 w-full min-h-[90vh] sm:min-h-screen overflow-hidden flex flex-col justify-center pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 -mt-20 sm:-mt-24"
    >
      {/* 1. Full-Width Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-70 transition-opacity duration-500"
      />

      {/* 2. Full-Width Grid Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-20 sm:opacity-25"
        style={{
          backgroundImage: `linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)`,
          backgroundSize: "2.5rem 2.5rem",
          maskImage: "radial-gradient(ellipse 85% 65% at 50% 35%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 35%, #000 60%, transparent 100%)",
        }}
      />

      {/* 3. Centered Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <motion.div style={{ scale: textScale }} className="text-center max-w-3xl mx-auto">
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
              <span className="w-2 h-2 rounded-full animate-ping flex-shrink-0" style={{ background: "var(--accent)" }} />
              <span className="truncate">BYTEPULSE TECHNOLOGY · DIGITAL ENGINEERING</span>
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 animate-pulse">
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
              We design, build, and deploy custom web applications and core software platforms built for teams who demand
              flawless execution on day one.
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={240}>
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
              <a
                href="#contact"
                className="bp-btn-primary h-12 sm:h-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-3 group shadow-xl transition-all duration-200 active:scale-95 touch-manipulation"
              >
                <span>Start a project</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="bp-btn-ghost h-12 sm:h-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 text-center transition-all duration-200 active:scale-95 touch-manipulation"
              >
                Explore engineering work
              </a>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
};