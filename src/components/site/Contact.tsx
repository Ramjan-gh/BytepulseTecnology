import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
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

const EMPTY_FORM: FormState = { name: "", email: "", company: "", projectType: "", message: "" };

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
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
            {SOCIAL_ICONS.map((Icon: any, i: number) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                style={{ borderColor: "var(--line)", color: "var(--muted)" }}
                aria-label={SOCIAL_LABELS[i]}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          {status === "sent" ? (
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
              <div className="relative w-full">
                <select
                  required
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="bp-input rounded-lg pl-4 pr-10 py-3 text-sm w-full appearance-none"
                >
                  <option value="" disabled>What do you need built?</option>
                  <option>Web application</option>
                  <option>Custom software</option>
                  <option>Website</option>
                  <option>Something else</option>
                </select>
                <ChevronDown size={16} color="var(--muted)" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
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
                className="bp-btn-primary w-full rounded-lg py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                {status !== "sending" && <ArrowRight size={16} />}
              </button>

              {status === "error" && (
                <p className="text-sm text-center" style={{ color: "var(--pulse)" }}>
                  Something went wrong — please email us directly at bytepulsetech01@gmail.com.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
