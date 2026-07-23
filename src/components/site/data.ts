import {
  LayoutGrid,
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Project {
  id?: string;
  name: string;
  category: string;
  desc: string;
  tags: string[];
  link?: string;
  url?: string;
  image?: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  spark: number[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
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

export const PROJECTS: Project[] = [
  {
    name: "StormyMart",
    category: "FinTech · Web App",
    desc: "A dynamic online store built for a fast, enjoyable shopping experience — curated product lines, quick checkout, and a storefront that stays fast under real traffic.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: "https://stormymart.com",
    image: "/images/projects/stormymart.png",
  },
  {
    name: "SplitShare",
    category: "E-commerce",
    desc: "A headless storefront for a home-goods retailer, with sub-second page loads and a custom inventory dashboard.",
    tags: ["Next.js", "Stripe", "Sanity"],
    link: "https://splitshare.com",
    image: "/images/projects/splitshare.png",
  },
  {
    name: "Invoice-Maker",
    category: "SaaS · Mobile",
    desc: "A go-to invoicing app for freelancers and small businesses — ad-free, free for life, and built for people who'd rather bill clients than fight software.",
    tags: ["React Native", "Node.js", "Redis"],
    link: "https://invoice-maker.com",
    image: "/images/projects/invoice-maker.png",
  },
  {
    name: "Signalboard",
    category: "Internal Tooling",
    desc: "An analytics and alerting dashboard that gives an operations team a live pulse on every system they run.",
    tags: ["TypeScript", "AWS", "Docker"],
    link: "https://signalboard.com",
    image: "/images/projects/signalboard.png",
  },
  // NEW DEMO PROJECT 1
  {
    name: "AuraHealth",
    category: "Healthcare · AI",
    desc: "An AI-powered patient triage and scheduling platform that connects clinic EMRs with real-time patient queue management.",
    tags: ["Next.js", "Python", "FastAPI", "Tailwind CSS"],
    link: "https://aurahealth-demo.com",
    image: "/images/projects/aurahealth.png",
  },
  // NEW DEMO PROJECT 2
  {
    name: "VelocePay",
    category: "FinTech · API",
    desc: "A unified cross-border payment gateway API handling instant multi-currency payouts with automated fraud verification.",
    tags: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    link: "https://velocepay-demo.com",
    image: "/images/projects/velocepay.png",
  },
];

export const PROCESS: ProcessStep[] = [
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

export const STATS: Stat[] = [
  { value: 40, suffix: "+", label: "Projects delivered", spark: [3, 5, 4, 7, 6, 8, 9] },
  { value: 18, suffix: "", label: "Active clients", spark: [2, 2, 3, 3, 4, 4, 5] },
  { value: 99.9, suffix: "%", label: "Avg. uptime shipped", spark: [8, 9, 9, 8, 9, 9, 9] },
  { value: 4.9, suffix: "/5", label: "Client rating", spark: [4, 5, 4, 5, 5, 5, 5] },
];

export const TECH: string[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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
    role: "Ops Director, Invoice-Maker",
  },
];

export const STATUS_LINES: string[] = [
  "Signalboard v2 — deployed to production",
  "StormyMart checkout — 40% faster this sprint",
  "Weekly demo with SplitShare — complete",
  "Uptime shipped this month — 99.97%",
  "New retainer client — onboarding started",
  "Invoice-Maker — App Store review passed",
];

export const SOCIAL_LABELS = ["GitHub", "LinkedIn", "Twitter"] as const;