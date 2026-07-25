import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Cpu,
  Layers,
  CheckCircle2,
  Settings,
  Workflow,
  ShieldCheck,
  Database,
} from "lucide-react";

interface CustomSoftwarePageProps {
  onBack: () => void;
}

export const CustomSoftwarePage: React.FC<CustomSoftwarePageProps> = ({
  onBack,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    "Enterprise Business Systems & SaaS Platforms",
    "Tailored CRM & ERP Solutions",
    "Inventory Management & POS Systems",
    "Internal Automation & Operations Platforms",
    "Custom Scalable APIs & Backend Services",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
    "Docker",
  ];

  const features = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Eliminate repetitive manual work through tailored automation and streamlined business logic.",
    },
    {
      icon: Database,
      title: "Centralized Data Architecture",
      description:
        "Securely store and query business data with scalable database schemas, indexing, and reporting.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable Systems",
      description:
        "Role-based access control (RBAC), end-to-end data safety, and robust production-ready deployments.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description:
        "Analyzing operational bottlenecks, data flows, key user roles, and custom system architecture requirements.",
    },
    {
      step: "02",
      title: "Custom Development",
      description:
        "Building modular backend logic, secure API endpoints, and intuitive management interfaces.",
    },
    {
      step: "03",
      title: "Integration & Deployment",
      description:
        "Data migration, third-party service integration, end-to-end testing, and production deployment.",
    },
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Back Button */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-12 cursor-pointer transition-colors"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          color: "var(--ink)",
        }}
      >
        <ArrowLeft size={15} />
        <span className="text-sm font-medium">Back to Services</span>
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
            <Settings size={28} />
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
          Custom Software Development
        </h1>

        <p
          className="bp-mono text-base sm:text-lg max-w-3xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          We build tailor-made software solutions that streamline operations,
          automate workflows, improve productivity, and scale with your
          business—from startup MVPs to enterprise-grade platforms.
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

              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
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
                <span
                  className="text-sm font-medium leading-normal"
                  style={{ color: "var(--ink)" }}
                >
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
          className="rounded-3xl p-8 border flex flex-col justify-between"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
          }}
        >
          <div>
            <div
              className="flex items-center gap-2 bp-mono text-xs uppercase font-bold tracking-wider mb-6"
              style={{ color: "var(--accent)" }}
            >
              <Cpu size={14} /> Technologies
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bp-mono text-xs px-3.5 py-1.5 rounded-xl border font-medium transition-colors"
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
        <h2
          className="bp-display font-bold text-2xl mb-8"
          style={{ color: "var(--ink)" }}
        >
          Development Workflow
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {workflow.map((step) => (
            <div key={step.step} className="flex flex-col justify-between">
              <div>
                <span
                  className="bp-mono text-xs font-bold opacity-60 block mb-2"
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
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
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