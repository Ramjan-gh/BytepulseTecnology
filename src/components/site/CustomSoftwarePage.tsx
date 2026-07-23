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
    "Enterprise Business Systems",
    "CRM & ERP Solutions",
    "Inventory & POS Systems",
    "Internal Automation Platforms",
    "Custom APIs & Backend Services",
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
        "Eliminate repetitive manual work through tailored automation and business workflows.",
    },
    {
      icon: Database,
      title: "Centralized Data",
      description:
        "Securely manage business data with scalable database architecture and reporting.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "Role-based access, encrypted data handling, and production-ready deployment.",
    },
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16">

      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-12"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
        }}
      >
        <ArrowLeft size={15} />
        Back to Services
      </button>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-6">

          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
            }}
          >
            <Settings size={28} />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bp-mono text-[11px]"
            style={{
              background: "var(--surface-2)",
              borderColor: "var(--line)",
              color: "var(--accent)",
            }}
          >
            <Sparkles size={12} />
            Custom Solutions
          </div>

        </div>

        <h1
          className="bp-display font-bold text-5xl mb-5"
          style={{ color: "var(--ink)" }}
        >
          Custom Software Development
        </h1>

        <p
          className="bp-mono max-w-3xl leading-relaxed mb-14"
          style={{ color: "var(--muted)" }}
        >
          We build tailor-made software solutions that streamline operations,
          automate workflows, improve productivity, and scale with your
          business—from startup MVPs to enterprise-grade platforms.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
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
                  className="text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className="md:col-span-2 rounded-3xl p-8 border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
            }}
          >
            <div
              className="flex items-center gap-2 mb-6 bp-mono text-xs uppercase"
              style={{ color: "var(--accent)" }}
            >
              <Layers size={14} />
              Deliverables
            </div>

            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--accent)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-8 border"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
            }}
          >
            <div
              className="flex items-center gap-2 mb-6 bp-mono text-xs uppercase"
              style={{ color: "var(--accent)" }}
            >
              <Cpu size={14} />
              Technologies
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl border text-xs"
                  style={{
                    background: "var(--surface-2)",
                    borderColor: "var(--line)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};