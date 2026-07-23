import React, { useState, Suspense, lazy } from "react";
import "./styles.css";

import { Nav } from "./Nav";
import { Hero } from "./Hero";

// Below-the-fold sections — split into separate chunks, loaded after first paint
const TechMarquee = lazy(() => import("./TechMarquee").then(m => ({ default: m.TechMarquee })));
const Services = lazy(() => import("./Services").then(m => ({ default: m.Services })));
const Work = lazy(() => import("./Work").then(m => ({ default: m.Work })));
const Team = lazy(() => import("./Team").then(m => ({ default: m.Team })));
const Process = lazy(() => import("./Process").then(m => ({ default: m.Process })));
const AboutStats = lazy(() => import("./AboutStats").then(m => ({ default: m.AboutStats })));
const Testimonials = lazy(() => import("./Testimonials").then(m => ({ default: m.Testimonials })));
const CTA = lazy(() => import("./CTA").then(m => ({ default: m.CTA })));
const Contact = lazy(() => import("./Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./Footer").then(m => ({ default: m.Footer })));

/**
 * BytePulse Technology — marketing site.
 *
 * Design direction: a light, spacious "studio-as-status-dashboard" concept —
 * fitting, since monitoring/uptime dashboards are literally part of what this
 * studio builds (see Signalboard in Work). The signature element is a live,
 * continuously animated heartbeat/pulse trace, reused in the hero's status
 * console and echoed through blinking status dots, a real ticking clock, an
 * auto-rotating activity ticker, and an auto-rotating testimonial — so the
 * page always has something genuinely happening, not just decoration.
 *
 * Split into one small, focused component per section (see the sibling
 * files in this folder) instead of a single monolithic page.
 */
export default function BytePulseSite() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className={`bp-root ${theme === "light" ? "light" : ""}`}>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Suspense fallback={null}>
        <TechMarquee />
        <Services />
        <Work />
        <Team />
        <Process />
        <AboutStats />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}