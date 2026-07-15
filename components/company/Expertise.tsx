"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Practice {
  label: string;
  description: string;
  focus: [string, string, string];
}

const PRACTICES: Practice[] = [
  {
    label: "Technology",
    description:
      "We design and engineer the technical backbone of every business we build — resilient, scalable and ready for what's next.",
    focus: ["Platform Engineering", "Cloud Architecture", "AI & Automation"],
  },
  {
    label: "Healthcare",
    description:
      "We build technology that makes healthcare more accessible, efficient and human — for providers, patients and everyone between.",
    focus: ["Patient Platforms", "Hospital Systems", "Care Coordination"],
  },
  {
    label: "Business",
    description:
      "From first-time founders to established enterprises, we bring the structure and discipline needed to grow with confidence.",
    focus: ["Strategy & Planning", "Operations", "Workforce Tools"],
  },
  {
    label: "Media",
    description:
      "We help stories reach the people who need them — building platforms for publishers, creators and communities.",
    focus: ["Publishing Platforms", "Content Discovery", "Audience Growth"],
  },
  {
    label: "Marketplace",
    description:
      "We design marketplaces that connect buyers and sellers with trust, speed and simplicity at the core.",
    focus: ["Trust & Safety", "Transactions", "Discovery"],
  },
  {
    label: "Community",
    description:
      "Technology that brings neighborhoods, residents and organizations closer together, securely.",
    focus: ["Access & Security", "Communication", "Management Tools"],
  },
  {
    label: "Corporate",
    description:
      "The ByRoice operating model itself — the standards, systems and culture that hold every venture together.",
    focus: ["Governance", "Shared Services", "Brand Standards"],
  },
];

export default function Expertise() {
  const [active, setActive] = useState(0);
  const practice = PRACTICES[active];

  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Practice Areas Across the Ecosystem
          </h2>
        </div>

        <div className="mt-14 flex justify-center">
          <div
            role="tablist"
            aria-label="Expertise areas"
            className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm"
          >
            {PRACTICES.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-black" : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="expertise-active-pill"
                      className="absolute inset-0 rounded-full bg-[#FFE100]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={practice.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm sm:p-10"
            >
              <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
                {practice.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {practice.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#FFE100]/20 bg-[#FFE100]/5 px-4 py-1.5 text-sm font-medium text-[#FFE100]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
