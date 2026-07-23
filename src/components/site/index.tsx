import React, { useState, Suspense, lazy } from "react";
import "./styles.css";

import { Nav } from "./Nav";
import { Hero } from "./Hero";

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
const AllWorks = lazy(() => import("./AllWorks").then(m => ({ default: m.AllWorks })));

export default function BytePulseSite() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [page, setPage] = useState<"home" | "allworks">("home");

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const goToAllWorks = () => {
    setPage("allworks");
    window.scrollTo(0, 0);
  };
  const goHome = () => {
    setPage("home");
    window.scrollTo(0, 0);
  };

  // Nav links use "#services", "#work", "#contact", etc.
  // Those sections only exist on the home page, so if we're on AllWorks,
  // switch home first, then scroll once the sections have mounted.
  const goToSection = (hash: string) => {
    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (page !== "home") {
      setPage("home");
      requestAnimationFrame(() => {
        setTimeout(scrollToHash, 50);
      });
    } else {
      scrollToHash();
    }
  };

  return (
    <div className={`bp-root ${theme === "light" ? "light" : ""}`}>
      <Nav theme={theme} onToggleTheme={toggleTheme} onNavigate={goToSection} />

      {page === "allworks" ? (
        <Suspense fallback={null}>
          <AllWorks onBack={goHome} />
        </Suspense>
      ) : (
        <>
          <Hero />
          <Suspense fallback={null}>
            <TechMarquee />
            <Services />
            <Work onSeeAllWorks={goToAllWorks} />
            <Team />
            <Process />
            <AboutStats />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}