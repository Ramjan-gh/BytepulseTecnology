import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOCIAL_LABELS } from "./data";
import { SOCIAL_ICONS } from "./icons";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const PROJECT_OPTIONS = [
  "Web application",
  "Custom software",
  "Website",
  "Something else",
];

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "Web application",
  message: "",
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const cardY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.25, 0.8]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectType = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mqeraazo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative z-10 max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full -z-10 opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "var(--accent)",
          scale: glowScale,
        }}
      />

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left Column: Info */}
        <Reveal>
          <div>
            <p className="bp-eyebrow mb-4">Contact</p>
            <h2 className="bp-display font-semibold text-3xl md:text-4xl mb-6" style={{ color: "var(--ink)" }}>
              Tell us about your project.
            </h2>
            <p className="text-sm leading-relaxed mb-9 max-w-md" style={{ color: "var(--muted)" }}>
              Send a few details and we'll reply within one business day with next steps — no
              obligation, no sales script.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--ink)" }}>
                <Mail size={18} style={{ color: "var(--accent)" }} />
                <span>bytepulsetech01@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--ink)" }}>
                <Phone size={18} style={{ color: "var(--accent)" }} />
                <span>+8801540140958</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--ink)" }}>
                <MapPin size={18} style={{ color: "var(--accent)" }} />
                <span>Dhaka, Bangladesh · Remote-friendly</span>
              </div>
            </div>

            <div className="flex gap-3 mt-9">
              {SOCIAL_ICONS.map((Icon: any, i: number) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--ink)] active:scale-95"
                  style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                  aria-label={SOCIAL_LABELS[i] || `Social link ${i + 1}`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right Column: Parallax Form Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            y: cardY,
            scale: cardScale,
          }}
        >
          {status === "sent" ? (
            <div className="bp-card rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center">
              <CheckCircle2 size={36} style={{ color: "var(--accent)" }} className="mb-4" />
              <h3 className="bp-display font-semibold text-xl mb-2" style={{ color: "var(--ink)" }}>
                Message sent!
              </h3>
              <p className="text-sm max-w-xs mb-6" style={{ color: "var(--muted)" }}>
                Thanks for reaching out — we'll reply to {formData.email} within one business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormData(EMPTY_FORM);
                  setStatus("idle");
                }}
                className="text-xs font-mono underline cursor-pointer"
                style={{ color: "var(--accent)" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bp-card rounded-2xl p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="bp-input rounded-lg px-4 py-3 text-sm col-span-2 sm:col-span-1"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="bp-input rounded-lg px-4 py-3 text-sm col-span-2 sm:col-span-1"
                />
              </div>

              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="bp-input rounded-lg px-4 py-3 text-sm w-full"
              />

              {/* Custom Interactive Pill Selector */}
              <div>
                <label className="block text-xs font-medium mb-2.5" style={{ color: "var(--muted)" }}>
                  What do you need built?
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_OPTIONS.map((option) => {
                    const isSelected = formData.projectType === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectType(option)}
                        className="px-3.5 py-2 rounded-lg text-xs font-medium transition-all border cursor-pointer active:scale-95"
                        style={{
                          background: isSelected ? "var(--accent-soft)" : "transparent",
                          borderColor: isSelected ? "var(--accent)" : "var(--line)",
                          color: isSelected ? "var(--accent)" : "var(--muted)",
                        }}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A few lines about your project"
                rows={4}
                className="bp-input rounded-lg px-4 py-3 text-sm w-full resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bp-btn-primary w-full rounded-lg py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer active:scale-98 transition-transform"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-xs text-center font-mono mt-2" style={{ color: "var(--pulse)" }}>
                  Something went wrong — please email us directly at bytepulsetech01@gmail.com.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};