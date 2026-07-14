import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Code2,
  LayoutGrid,
  Smartphone,
  Cloud,
  ShieldCheck,
  Wrench,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Quote,
  Activity,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 *  BETAPULSE TECHNOLOGY — Marketing Website
 * ---------------------------------------------------------------------------
 *  Single-file React + TypeScript site. All copy/data below is placeholder —
 *  swap the objects in the DATA section for real content whenever ready.
 * ---------------------------------------------------------------------------
 */

/* ============================== DATA ==================================== */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: LayoutGrid,
    title: "Web Applications",
    desc: "Full-stack web apps built for speed and built to scale — from internal tools to customer-facing products.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke software that fits your process instead of forcing you to fit someone else's.",
  },
  {
    icon: Smartphone,
    title: "Websites & Storefronts",
    desc: "Marketing sites, portfolios, and stores that load fast and convert visitors into customers.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD, and deployment pipelines that keep your product shipping without drama.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    desc: "Testing, audits, and hardening so what we ship stays reliable long after launch day.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing care — monitoring, updates, and fixes — so your product keeps a steady pulse.",
  },
];

const PROJECTS = [
  {
    name: "StormyMart",
    category: "FinTech · Web App",
    desc: "STORMY MART is a dynamic online store that aims to provide a seamless and enjoyable shopping experience. We're passionate about delivering high-quality products that cater to your needs and preferences. Our mission is to make your life easier by offering a wide range of carefully curated products to enhance your everyday life. Whether you're looking for trendy fashion accessories, innovative gadgets, or unique home decor items, we've got you covered. We believe that every purchase should be an opportunity to express your style and personality.",
    tags: ["React", "TypeScript", "PostgreSQL"],
  },
  {
    name: "SplitShare",
    category: "E-commerce",
    desc: "A headless storefront for a home-goods retailer, with sub-second page loads and a custom inventory dashboard.",
    tags: ["Next.js", "Stripe", "Sanity"],
  },
  {
    name: "InVoice-Maker",
    category: "SaaS · Mobile",
    desc: "Invoice-Maker is your go-to invoicing solution for both business and personal use. Whether you're a freelancer, or small business owner, or need to manage invoices efficiently, this app has everything you need—completely ad-free and free for life!",
    tags: ["React Native", "Node.js", "Redis"],
  },
  {
    name: "Signalboard",
    category: "Internal Tooling",
    desc: "An analytics and alerting dashboard that gives an operations team a live pulse on every system they run.",
    tags: ["TypeScript", "AWS", "Docker"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We learn the problem, the users, and the constraints before a single line of code is written.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes and prototypes that get argued over early, so nobody's surprised later.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Iterative development in short cycles, with something demoable every week.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Tested, hardened, and deployed — with a plan for the first 30 days, not just the first day.",
  },
  {
    step: "05",
    title: "Support",
    desc: "We stay on after launch to monitor, maintain, and keep improving what we built.",
  },
];

const STATS = [
  { value: "40+", label: "Projects delivered" },
  { value: "18", label: "Active clients" },
  { value: "99.9%", label: "Avg. uptime shipped" },
  { value: "4.9/5", label: "Client rating" },
];

const TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Python",
  "Redis",
  "Tailwind CSS",
  "Kubernetes",
];

const TESTIMONIALS = [
  {
    quote:
      "They shipped in six weeks what our last vendor couldn't finish in six months, and it hasn't gone down once.",
    name: "Amara Chowdhury",
    role: "COO, StormyMart",
  },
  {
    quote:
      "BytePulse felt like an extension of our own team from the first call — sharp questions, clear timelines, no surprises.",
    name: "David Ferreira",
    role: "Founder, SplitShare",
  },
  {
    quote:
      "Our field team finally has software that works the way they do, offline included. Adoption was immediate.",
    name: "Priya Nair",
    role: "Ops Director, InVoice-Maker",
  },
];

/* ============================ CUSTOM SVG BRAND ICONS ===================== */

const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 17 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 17 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const SOCIALS = [
  { Icon: GithubIcon, label: "GitHub" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: TwitterIcon, label: "Twitter" }
];

/* ============================ UTILITIES ================================== */

/** Fades + rises children into view the first time they cross the viewport. */
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/** The recurring pulse-line motif used as a divider / brand signature. */
const PulseDivider: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <div className="bp-pulse-divider" aria-hidden="true">
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        d="M0,30 L260,30 L288,30 L302,6 L318,54 L334,18 L348,30 L1200,30"
        fill="none"
        strokeWidth="2"
        className="bp-pulse-path"
      />
    </svg>
  </div>
);

const PulseMark: React.FC<{ size?: number }> = ({ size = 34 }) => (
  <div className="bp-logo-mark" style={{ width: size, height: size }} aria-hidden="true">
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <circle cx="20" cy="20" r="19" className="bp-logo-ring" fill="none" strokeWidth="1.4" />
      <path
        d="M6,21 L14,21 L17,12 L21,29 L24,21 L34,21"
        fill="none"
        strokeWidth="2"
        className="bp-logo-line"
      />
    </svg>
  </div>
);

/* =============================== APP ====================================== */

export default function BytePulseSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mqeraazo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus("sent");
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className={`bp-root ${theme === "light" ? "light" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .bp-root {
          --bg: #0a0f1c;
          --bg-alt: #0d1424;
          --surface: #121a2c;
          --surface-2: #17223a;
          --line: rgba(232, 238, 245, 0.09);
          --text: #e9eef5;
          --muted: #8b96ac;
          --accent: #49e6d1;
          --accent-soft: rgba(73, 230, 209, 0.14);
          --accent-2: #ff6a49;
          --nav-bg: rgba(10, 15, 28, 0.72);
          --nav-bg-scrolled: rgba(10, 15, 28, 0.92);
          --glow: rgba(73, 230, 209, 0.10);
          --accent-border: rgba(73, 230, 209, 0.35);
          --accent-border-soft: rgba(73, 230, 209, 0.25);
          --btn-primary-text: #05201c;
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .bp-root.light {
          --bg: #f6f8fb;
          --bg-alt: #eef1f6;
          --surface: #ffffff;
          --surface-2: #f2f5f9;
          --line: rgba(16, 23, 38, 0.10);
          --text: #101726;
          --muted: #5b6478;
          --accent: #0e9c8c;
          --accent-soft: rgba(14, 156, 140, 0.12);
          --accent-2: #d9502c;
          --nav-bg: rgba(246, 248, 251, 0.75);
          --nav-bg-scrolled: rgba(246, 248, 251, 0.94);
          --glow: rgba(14, 156, 140, 0.10);
          --accent-border: rgba(14, 156, 140, 0.35);
          --accent-border-soft: rgba(14, 156, 140, 0.28);
          --btn-primary-text: #ffffff;
        }
        .bp-root * { box-sizing: border-box; }
        .bp-display { font-family: 'Space Grotesk', sans-serif; }
        .bp-mono { font-family: 'IBM Plex Mono', monospace; }

        .bp-bg-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, var(--glow) 0%, rgba(73,230,209,0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .bp-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: var(--nav-bg);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .bp-nav.scrolled {
          border-bottom: 1px solid var(--line);
          background: var(--nav-bg-scrolled);
        }
        .bp-logo-ring { stroke: var(--line); }
        .bp-logo-line { stroke: var(--accent); filter: drop-shadow(0 0 4px rgba(73,230,209,0.6)); }
        .bp-nav-link {
          color: var(--muted);
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .bp-nav-link:hover { color: var(--text); }

        .bp-btn-primary {
          background: var(--accent);
          color: var(--btn-primary-text);
          font-weight: 600;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.2s ease, color 0.2s ease;
          box-shadow: 0 0 0 rgba(73,230,209,0);
        }
        .bp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(73,230,209,0.28);
        }
        .bp-btn-ghost {
          border: 1px solid var(--line);
          color: var(--text);
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .bp-btn-ghost:hover { border-color: rgba(232,238,245,0.35); background: rgba(255,255,255,0.03); }

        .bp-eyebrow {
          color: var(--accent);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 0.72rem;
          font-weight: 600;
        }

        .bp-hero-wave { width: 100%; height: 140px; }
        .bp-hero-wave path { stroke: var(--accent); }
        .bp-wave-anim {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: bp-draw 2.6s ease forwards 0.4s, bp-glow 2.4s ease-in-out infinite 3s;
        }
        @keyframes bp-draw { to { stroke-dashoffset: 0; } }
        @keyframes bp-glow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(73,230,209,0.35)); }
          50% { filter: drop-shadow(0 0 10px rgba(73,230,209,0.75)); }
        }

        .bp-pulse-divider { width: 100%; height: 44px; opacity: 0.9; }
        .bp-pulse-path {
          stroke: var(--accent-border);
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: bp-draw 2.2s ease forwards;
        }

        .bp-card {
          background: var(--surface);
          border: 1px solid var(--line);
          transition: border-color 0.25s ease, transform 0.25s ease, background 0.25s ease;
        }
        .bp-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-4px);
          background: var(--surface-2);
        }

        .bp-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--accent-soft);
          border: 1px solid var(--accent-border-soft);
        }

        .bp-marquee-track {
          display: flex;
          width: max-content;
          animation: bp-scroll 26s linear infinite;
        }
        @keyframes bp-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .bp-step-num {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--accent);
          opacity: 0.55;
        }
        .bp-step-line {
          background: linear-gradient(180deg, var(--accent-border), rgba(73,230,209,0));
        }

        .bp-input {
          background: var(--surface);
          border: 1px solid var(--line);
          color: var(--text);
          transition: border-color 0.2s ease;
        }
        .bp-input:focus { outline: none; border-color: var(--accent); }
        .bp-input::placeholder { color: var(--muted); }

        .bp-footer { background: var(--bg-alt); border-top: 1px solid var(--line); }

        .bp-social {
          color: var(--muted);
          border: 1px solid var(--line);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .bp-social:hover { color: var(--accent); border-color: var(--accent-border); }

        .bp-theme-toggle {
          border: 1px solid var(--line);
          color: var(--text);
          background: transparent;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .bp-theme-toggle:hover { border-color: var(--accent-border); color: var(--accent); }

        a, button { cursor: pointer; }

        @media (prefers-reduced-motion: reduce) {
          .bp-wave-anim, .bp-pulse-path, .bp-marquee-track { animation: none !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>

      <div className="bp-bg-glow" />

      {/* ---------------------------------- NAV ---------------------------------- */}
      <header className={`bp-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <a href="#top" className="flex items-center gap-3">
            <PulseMark size={30} />
            <span className="bp-display font-semibold text-lg tracking-tight">
              BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="bp-nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="bp-theme-toggle w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Toggle light/dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="bp-btn-primary px-5 py-2.5 rounded-full text-sm">
              Start a project
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="bp-theme-toggle w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Toggle light/dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-[var(--text)]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 relative z-10">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="bp-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bp-btn-primary px-5 py-2.5 rounded-full text-sm text-center"
              onClick={() => setMenuOpen(false)}
            >
              Start a project
            </a>
          </div>
        )}
      </header>

      {/* ---------------------------------- HERO ---------------------------------- */}
      <section id="top" className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-6 md:pt-28">
        <Reveal>
          <p className="bp-eyebrow mb-5">Software · Web Apps · Websites</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="bp-display font-semibold text-4xl md:text-6xl leading-[1.08] max-w-3xl">
            We build software with a pulse.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-lg max-w-xl" style={{ color: "var(--muted)" }}>
            BytePulse Technology designs and builds web apps, custom software, and websites for
            teams who need something that works on day one and holds up a year later.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="bp-btn-primary px-6 py-3 rounded-full text-sm flex items-center gap-2">
              Start a project <ArrowRight size={16} />
            </a>
            <a href="#work" className="bp-btn-ghost px-6 py-3 rounded-full text-sm flex items-center gap-2">
              See our work
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <svg className="bp-hero-wave mt-14" viewBox="0 0 1400 140" preserveAspectRatio="none">
            <path
              className="bp-wave-anim"
              d="M0,70 L520,70 L560,70 L588,20 L612,120 L636,45 L660,70 L1400,70"
              fill="none"
              strokeWidth="2.5"
            />
          </svg>
        </Reveal>
      </section>

      {/* ------------------------------- TECH MARQUEE ------------------------------ */}
      <section className="relative z-10 border-y" style={{ borderColor: "var(--line)" }}>
        <div className="overflow-hidden py-5" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
          <div className="bp-marquee-track">
            {[...TECH, ...TECH].map((t, i) => (
              <span
                key={i}
                className="bp-mono text-sm mx-6 whitespace-nowrap"
                style={{ color: "var(--muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------- SERVICES -------------------------------- */}
      <section id="services" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="bp-eyebrow mb-4">What we do</p>
          <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
            End-to-end product work, not just one slice of it.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="bp-card rounded-2xl p-7 h-full">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <s.icon size={20} color="var(--accent)" />
                </div>
                <h3 className="bp-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PulseDivider />

      {/* ---------------------------------- WORK ----------------------------------- */}
      <section id="work" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="bp-eyebrow mb-4">Selected work</p>
          <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
            A few products we've shipped.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="bp-card rounded-2xl p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <span className="bp-mono text-xs" style={{ color: "var(--muted)" }}>
                    {p.category}
                  </span>
                </div>
                <h3 className="bp-display font-semibold text-2xl mb-3">{p.name}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="bp-tag px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------------------- PROCESS ---------------------------------- */}
      <section id="process" className="relative z-10 bg-[var(--bg-alt)]" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal>
            <p className="bp-eyebrow mb-4">How we work</p>
            <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
              Five steps. No surprises.
            </h2>
          </Reveal>

          <div className="mt-14 flex flex-col">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <div className="flex gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <span className="bp-step-num bp-display text-sm font-semibold">{step.step}</span>
                    {i < PROCESS.length - 1 && <div className="bp-step-line w-px flex-1 mt-3" />}
                  </div>
                  <div className={i < PROCESS.length - 1 ? "pb-10" : ""}>
                    <h3 className="bp-display font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------- STATS ----------------------------------- */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div>
                <div className="bp-display font-semibold text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
                  {s.value}
                </div>
                <div className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="bp-card rounded-2xl p-8 md:p-10 mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="bp-eyebrow mb-4">About BytePulse</p>
              <h3 className="bp-display font-semibold text-2xl mb-4">
                A small studio, built to move like one.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                BytePulse Technology is a software studio building web apps, custom software, and
                websites for founders and teams who need a partner that ships — not just a
                vendor that estimates. We stay small on purpose, so every project gets senior
                attention from day one.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Senior engineers on every project",
                "Fixed-scope or ongoing retainer options",
                "Weekly demos, not monthly updates",
                "Support that continues after launch",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={18} color="var(--accent)" className="mt-0.5 shrink-0" />
                  <span style={{ color: "var(--text)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <PulseDivider flip />

      {/* ------------------------------- TESTIMONIALS -------------------------------- */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <p className="bp-eyebrow mb-4">Client feedback</p>
          <h2 className="bp-display font-semibold text-3xl md:text-4xl max-w-xl">
            What it's like to work with us.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="bp-card rounded-2xl p-7 h-full flex flex-col">
                <Quote size={22} color="var(--accent)" className="mb-4 opacity-70" />
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text)" }}>
                  "{t.quote}"
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------------- CTA ------------------------------------ */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <Reveal>
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
          >
            <div className="flex items-center gap-4">
              <Activity size={28} color="var(--accent)" />
              <h3 className="bp-display font-semibold text-2xl md:text-3xl max-w-md">
                Have a product in mind? Let's give it a pulse.
              </h3>
            </div>
            <a href="#contact" className="bp-btn-primary px-6 py-3 rounded-full text-sm flex items-center gap-2 shrink-0">
              Get in touch <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>

      {/* --------------------------------- CONTACT ----------------------------------- */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14">
          <Reveal>
            <p className="bp-eyebrow mb-4">Contact</p>
            <h2 className="bp-display font-semibold text-3xl md:text-4xl mb-6">
              Tell us about your project.
            </h2>
            <p className="text-sm leading-relaxed mb-9 max-w-md" style={{ color: "var(--muted)" }}>
              Send a few details and we'll reply within one business day with next steps — no
              obligation, no sales script.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} color="var(--accent)" />
                <span>bytepulsetech01@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} color="var(--accent)" />
                <span>+8801540140958</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={18} color="var(--accent)" />
                <span>Dhaka, Bangladesh · Remote-friendly</span>
              </div>
            </div>

            <div className="flex gap-3 mt-9">
              {SOCIALS.map((soc, i) => (
                <a
                  key={i}
                  href="#"
                  className="bp-social w-10 h-10 rounded-full flex items-center justify-center"
                  aria-label={soc.label}
                >
                  <soc.Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            {formStatus === "sent" ? (
              <div className="bp-card rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={36} color="var(--accent)" className="mb-4" />
                <h3 className="bp-display font-semibold text-xl mb-2">Message sent!</h3>
                <p className="text-sm max-w-xs" style={{ color: "var(--muted)" }}>
                  Thanks for reaching out — we'll reply to {formData.email} within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bp-card rounded-2xl p-8 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder="Full name"
                    className="bp-input rounded-lg px-4 py-3 text-sm col-span-2 sm:col-span-1"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    placeholder="Email address"
                    className="bp-input rounded-lg px-4 py-3 text-sm col-span-2 sm:col-span-1"
                  />
                </div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleFieldChange}
                  placeholder="Company (optional)"
                  className="bp-input rounded-lg px-4 py-3 text-sm w-full"
                />
                <div className="relative w-full">
                  <select
                    required
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFieldChange}
                    className="bp-input rounded-lg pl-4 pr-10 py-3 text-sm w-full appearance-none"
                  >
                    <option value="" disabled>What do you need built?</option>
                    <option>Web application</option>
                    <option>Custom software</option>
                    <option>Website</option>
                    <option>Something else</option>
                  </select>
                  <ChevronDown
                    size={16}
                    color="var(--muted)"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleFieldChange}
                  placeholder="A few lines about your project"
                  rows={4}
                  className="bp-input rounded-lg px-4 py-3 text-sm w-full resize-none"
                />
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="bp-btn-primary w-full rounded-lg py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {formStatus === "sending" ? "Sending..." : "Send message"}
                  {formStatus !== "sending" && <ArrowRight size={16} />}
                </button>

                {formStatus === "error" && (
                  <p className="text-sm text-center" style={{ color: "var(--accent-2)" }}>
                    Something went wrong — please email us directly at bytepulsetech01@gmail.com.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------- FOOTER ------------------------------------ */}
      <footer className="bp-footer relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <PulseMark size={26} />
            <span className="bp-display font-semibold">
              BytePulse <span style={{ color: "var(--accent)" }}>Technology</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="bp-nav-link text-sm">
                {l.label}
              </a>
            ))}
          </nav>

          <span className="bp-mono text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} BytePulse Technology. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}