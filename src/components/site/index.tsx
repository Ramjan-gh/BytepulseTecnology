import React, { useState, useEffect, Suspense, lazy } from "react";
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

const CloudAndDevOpsPage = lazy(() =>
  import("./CloudAndDevOpsPage").then((m) => ({
    default: m.CloudAndDevOpsPage,
  }))
);

const QualityAndSecurityPage = lazy(() =>
  import("./QualityAndSecurityPage").then((m) => ({
    default: m.QualityAndSecurityPage,
  }))
);

const MaintenanceAndSupportPage = lazy(() =>
  import("./MaintenanceAndSupportPage").then((m) => ({
    default: m.MaintenanceAndSupportPage,
  }))
);

type PageState =
  | "home"
  | "allworks"
  | "webapplications"
  | "customsoftware"
  | "websites&storefronts"
  | "cloud&devOps"
  | "quality&security"
  | "maintenance&support";

const VALID_PAGES: PageState[] = [
  "allworks",
  "webapplications",
  "customsoftware",
  "websites&storefronts",
  "cloud&devOps",
  "quality&security",
  "maintenance&support",
];

// Helper to determine initial page state based on window.location.hash
const getPageFromHash = (): PageState => {
  const hash = window.location.hash.replace("#", "");
  if (VALID_PAGES.includes(hash as PageState)) {
    return hash as PageState;
  }
  return "home";
};

export default function BytePulseSite() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [page, setPage] = useState<PageState>(getPageFromHash);

  // Sync state on browser Back / Forward buttons & initial page loads
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const targetPage = getPageFromHash();
      setPage(targetPage);

      if (targetPage === "home") {
        const savedY = event.state?.scrollY ?? 0;
        // Small delay to allow home components to re-render before scrolling
        setTimeout(() => {
          window.scrollTo({ top: savedY, behavior: "instant" });
        }, 10);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Centralized Navigation Helper
  const navigateTo = (nextPage: PageState) => {
    const currentY = window.scrollY;

    // Save current scroll position on the home history state
    window.history.replaceState(
      { page: "home", scrollY: currentY },
      "",
      window.location.pathname + (window.location.search || "")
    );

    // Push new sub-page hash state
    window.history.pushState(
      { page: nextPage, scrollY: 0 },
      "",
      `#${nextPage}`
    );

    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  // Back button handler inside sub-pages ("Back to Services")
  const goHome = () => {
    if (window.location.hash) {
      window.history.back();
    } else {
      setPage("home");
      window.scrollTo(0, 0);
    }
  };

  // Anchor scroll or section jump handler from Nav
  const goToSection = (hash: string) => {
    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (page !== "home") {
      // Clear hash and switch back to home
      window.history.pushState({ page: "home" }, "", window.location.pathname);
      setPage("home");
      requestAnimationFrame(() => {
        setTimeout(scrollToHash, 100);
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
        ) : page === "cloud&devOps" ? (
          <CloudAndDevOpsPage onBack={goHome} />
        ) : page === "quality&security" ? (
          <QualityAndSecurityPage onBack={goHome} />
        ) : page === "maintenance&support" ? (
          <MaintenanceAndSupportPage onBack={goHome} />
        ) : (
          <>
            <Hero onNavigate={goToSection} />
            <TechMarquee />
            <Services
              onWebApplications={() => navigateTo("webapplications")}
              onCustomSoftware={() => navigateTo("customsoftware")}
              onWebsiteAndStorefronts={() => navigateTo("websites&storefronts")}
              onCloudAndDevOps={() => navigateTo("cloud&devOps")}
              onQualityAndSecurity={() => navigateTo("quality&security")}
              onMaintenanceAndSupport={() => navigateTo("maintenance&support")}
            />
            <Work onSeeAllWorks={() => navigateTo("allworks")} />
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