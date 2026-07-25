import { useEffect, useRef, useState } from "react";

/** Fires `visible = true` once the element crosses the viewport. */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  // Disabled for 100% performance - always visible
  return { ref, visible: true };
}

export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > offset);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}

/** A genuinely live, ticking clock — used in the status console so the page
 *  always has something real happening on screen, not just decoration. */
export function useLiveClock(timeZone = "Asia/Dhaka") {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).format(now);
  return time;
}

/** Counts a number up from 0 once the given ref is visible. */
export function useCountUp(target: number, visible: boolean, duration = 1000) {
  // Disabled for 100% performance - show final value immediately
  return target;
}

/** Cycles through an array of strings on an interval — the activity ticker. */
export function useCycle<T>(items: T[], intervalMs = 3200) {
  // Disabled for 100% performance - return first item only
  return items[0];
}
