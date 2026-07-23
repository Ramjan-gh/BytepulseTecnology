import React from "react";
import { ArrowLeft, Globe, Store, Zap } from "lucide-react";

interface WebsiteAndStorefrontsPageProps {
  onBack: () => void;
}

export const WebsiteAndStorefrontsPage: React.FC<WebsiteAndStorefrontsPageProps> = ({
  onBack,
}) => {
  const services = [
    "Business Websites",
    "Landing Pages",
    "Portfolio Websites",
    "E-commerce Stores",
    "CMS Integration",
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shopify",
    "WordPress",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-10 text-sm font-medium hover:text-cyan-500"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="mb-12">
        <Store size={48} className="text-cyan-500 mb-4" />

        <h1 className="text-5xl font-bold mb-4">
          Websites & Storefronts
        </h1>

        <p className="text-gray-400 max-w-3xl">
          We create fast, modern, and responsive websites and online stores
          that help businesses build credibility, attract customers, and
          increase sales.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl border">
          <Globe className="text-cyan-500 mb-3" />
          <h3 className="font-semibold mb-2">Professional Websites</h3>
          <p className="text-sm text-gray-400">
            Modern websites designed for businesses and brands.
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <Store className="text-cyan-500 mb-3" />
          <h3 className="font-semibold mb-2">Online Stores</h3>
          <p className="text-sm text-gray-400">
            Secure e-commerce solutions with payment integration.
          </p>
        </div>

        <div className="p-6 rounded-xl border">
          <Zap className="text-cyan-500 mb-3" />
          <h3 className="font-semibold mb-2">SEO & Performance</h3>
          <p className="text-sm text-gray-400">
            Optimized for speed, search engines, and user experience.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Services</h2>

          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};