import React, { useState } from "react";
import "./styles.css";

import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { TechMarquee } from "./TechMarquee";
import { Services } from "./Services";
import { Work } from "./Work";
import { Process } from "./Process";
import { AboutStats } from "./AboutStats";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Team } from "./Team";

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
    </div>
  );
}
