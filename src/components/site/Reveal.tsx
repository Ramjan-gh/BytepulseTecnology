import React from "react";
import { useReveal } from "./hooks";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized animations for both mobile and desktop
  const duration = isMobile ? 200 : 300;
  const translateY = isMobile ? 2 : 3;
  const mobileDelay = isMobile ? Math.min(delay || 0, 50) : delay || 0;

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 pointer-events-none"
      } ${className}`}
      style={{
        transform: visible ? "none" : `translate3d(0, ${translateY}px, 0)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${mobileDelay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};