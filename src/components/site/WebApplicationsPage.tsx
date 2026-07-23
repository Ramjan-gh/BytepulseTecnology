import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Globe,
  Zap,
  ShieldCheck,
  Code2,
} from "lucide-react";

interface WebApplicationsPageProps {
  onBack: () => void;
}

export const WebApplicationsPage: React.FC<WebApplicationsPageProps> = ({
  onBack,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    "Single Page Applications (SPAs) & Server-Side Rendered (SSR) Web Apps",
    "Real-time Dashboards & Interactive Analytics Portals",
    "Custom CMS, Admin Controls & Role-Based Access Systems",
    "Progressive Web Apps (PWAs) with Offline Support & Caching",
    "API-driven Full-Stack Web Platforms",
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "REST & GraphQL",
    "Vercel / AWS",
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Optimized client-side rendering, intelligent asset streaming, and Core Web Vitals tuning for near-instant load times.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description:
        "Robust authentication flows (OAuth, JWT), CSRF/XSS protection, and strict API access controls built in by default.",
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description:
        "Clean, modular codebases structured to scale gracefully from initial MVP to hundreds of thousands of daily active users.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Discovery & Architecture",
      description:
        "Mapping user journeys, state management requirements, API integrations, and database schemas.",
    },
    {
      step: "02",
      title: "Iterative Engineering",
      description:
        "Building scalable, type-safe frontend components and backend logic with continuous staging previews.",
    },
    {
      step: "03",
      title: "Optimization & Deployment",
      description:
        "Lighthouse audits, load testing, automated CI/CD pipeline setup, and zero-downtime production deployment.",
    },
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bp-mono text-xs font-semibold mb-12 border transition-all hover:-translate-x-1 cursor-pointer"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          color: "var(--ink)",
        }}
      >
        <ArrowLeft size={14} /> Back to Services
      </motion.button>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm"
            style={{
              background: "var(--accent-soft)",
              borderColor: "rgba(6, 182, 212, 0.2)",
              color: "var(--accent)",
            }}
          >
            <Globe size={28} />
          </div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bp-mono text-[11px] font-semibold uppercase tracking-wider border"
            style={{
              background: "var(--surface-2)",
              borderColor: "var(--line)",
              color: "var(--accent)",
            }}
          >
            <Sparkles size={12} />
            <span>Capability Scope</span>
          </div>
        </div>

        <h1
          className="bp-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6"
          style={{ color: "var(--ink)" }}
        >
          Web Applications
        </h1>

        <p
          className="bp-mono text-base sm:text-lg max-w-3xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Building fast, responsive, and resilient web applications designed
          to deliver seamless user experiences and scale effortlessly under heavy traffic.
        </p>
      </motion.div>

      {/* Feature Highlights Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl p-6 border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                className="bp-display font-semibold text-lg mb-2"
                style={{ color: "var(--ink)" }}
              >
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Deliverables & Tech Stack */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Core Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="md:col-span-2 rounded-3xl p-8 border"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
          }}
        >
          <div
            className="flex items-center gap-2 bp-mono text-xs uppercase font-bold tracking-wider mb-6"
            style={{ color: "var(--accent)" }}
          >
            <Layers size={14} /> Core Deliverables
          </div>
          <ul className="space-y-4">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--accent)" }}
                />
                <span className="text-sm font-medium leading-normal" style={{ color: "var(--ink)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-3xl p-8 border"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
          }}
        >
          <div
            className="flex items-center gap-2 bp-mono text-xs uppercase font-bold tracking-wider mb-6"
            style={{ color: "var(--accent)" }}
          >
            <Cpu size={14} /> Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bp-mono text-xs px-3.5 py-1.5 rounded-xl border font-medium"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Execution Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="rounded-3xl p-8 sm:p-10 border mb-16"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
        }}
      >
        <h2 className="bp-display font-bold text-2xl mb-8" style={{ color: "var(--ink)" }}>
          Development Workflow
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {workflow.map((step) => (
            <div key={step.step} className="flex flex-col justify-between">
              <div>
                <span
                  className="bp-mono text-xs font-bold opacity-40 block mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  PHASE {step.step}
                </span>
                <h3
                  className="bp-display font-semibold text-lg mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};