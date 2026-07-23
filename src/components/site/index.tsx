import React, { useState, Suspense, lazy } from "react";
import "./styles.css";

import { Nav } from "./Nav";
import { Hero } from "./Hero";

const TechMarquee = lazy(() =>
  import("./TechMarquee").then((m) => ({ default: m.TechMarquee }))
);
const Services = lazy(() =>
  import("./Services").then((m) => ({ default: m.Services }))
);
const Work = lazy(() =>
  import("./Work").then((m) => ({ default: m.Work }))
);
const Team = lazy(() =>
  import("./Team").then((m) => ({ default: m.Team }))
);
const Process = lazy(() =>
  import("./Process").then((m) => ({ default: m.Process }))
);
const AboutStats = lazy(() =>
  import("./AboutStats").then((m) => ({ default: m.AboutStats }))
);
const Testimonials = lazy(() =>
  import("./Testimonials").then((m) => ({ default: m.Testimonials }))
);
const CTA = lazy(() =>
  import("./CTA").then((m) => ({ default: m.CTA }))
);
const Contact = lazy(() =>
  import("./Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("./Footer").then((m) => ({ default: m.Footer }))
);
const AllWorks = lazy(() =>
  import("./AllWorks").then((m) => ({ default: m.AllWorks }))
);

const WebApplicationsPage = lazy(() =>
  import("./WebApplicationsPage").then((m) => ({
    default: m.WebApplicationsPage,
  }))
);

const CustomSoftwarePage = lazy(() =>
  import("./CustomSoftwarePage").then((m) => ({
    default: m.CustomSoftwarePage,
  }))
);

const WebsiteAndStorefrontsPage = lazy(() =>
  import("./WebsiteAndStorefrontsPage").then((m) => ({
    default: m.WebsiteAndStorefrontsPage,
  }))
);


export default function BytePulseSite() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const [page, setPage] = useState<
    "home" | "allworks" | "webapplications" | "customsoftware" | "websites&storefronts" | "cloud&devOps" | "quality&security" | "maintenance&support"
  >("home");

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  const goHome = () => {
    setPage("home");
    window.scrollTo(0, 0);
  };

  const goToAllWorks = () => {
    setPage("allworks");
    window.scrollTo(0, 0);
  };

  const goToWebApplications = () => {
    setPage("webapplications");
    window.scrollTo(0, 0);
  };

  const goToCustomSoftware = () => {
    setPage("customsoftware");
    window.scrollTo(0, 0);
  };

  const goToWebsiteAndStorefronts = () => {
    console.log("Navigating to Websites & Storefronts page");
    setPage("websites&storefronts");
    window.scrollTo(0, 0);
  };

  const goToCloudAndDevOps = () => {
    setPage("cloud&devOps");
    window.scrollTo(0, 0);
  };

  const goToQualityAndSecurity = () => {
    setPage("quality&security");
    window.scrollTo(0, 0);
  };

  const goToMaintenanceAndSupport = () => {
    setPage("maintenance&support");
    window.scrollTo(0, 0);
  };


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
      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={goToSection}
      />

      <Suspense fallback={null}>
        {page === "allworks" ? (
          <AllWorks onBack={goHome} />
        ) : page === "webapplications" ? (
          <WebApplicationsPage onBack={goHome} />
        ) : page === "customsoftware" ? (
          <CustomSoftwarePage onBack={goHome} />
        ) : page === "websites&storefronts" ? (
          <WebsiteAndStorefrontsPage onBack={goHome} />
        ) : (
          <>
            <Hero />
            <TechMarquee />
            <Services
              onWebApplications={goToWebApplications}
              onCustomSoftware={goToCustomSoftware}
              onWebsiteAndStorefronts={goToWebsiteAndStorefronts}
              onCloudAndDevOps={goToCloudAndDevOps}
              onQualityAndSecurity={goToQualityAndSecurity}
              onMaintenanceAndSupport={goToMaintenanceAndSupport}
            />
            <Work onSeeAllWorks={goToAllWorks} />
            <Team />
            <Process />
            <AboutStats />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  );
}