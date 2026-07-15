"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { AtomIcon, CodeIcon } from "../services/icons";
import { AwardIcon, GlobeIcon } from "./icons";

interface Recognition {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const RECOGNITIONS: Recognition[] = [
  {
    title: "Industry Recognition",
    description:
      "Noted among a new generation of business-creation platforms reshaping how companies get built.",
    icon: AwardIcon,
  },
  {
    title: "Innovation Excellence",
    description:
      "Recognized for applying modern engineering and AI across an unusually broad portfolio of ventures.",
    icon: AtomIcon,
  },
  {
    title: "Technology Leadership",
    description:
      "Cited for technical craftsmanship spanning healthcare, community and consumer platforms.",
    icon: CodeIcon,
  },
  {
    title: "Global Partnerships",
    description:
      "Acknowledged for partnerships extending ByRoice ventures into new markets and industries.",
    icon: GlobeIcon,
  },
];

export default function Recognition() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Recognition
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Standards We Hold Ourselves To
          </h2>
        </div>

        <div className="mt-16 space-y-5">
          {RECOGNITIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFE100]/35 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
