"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { HandshakeIcon, FlagIcon, ScaleIcon, AtomIcon, DiamondIcon } from "./icons";

interface Feature {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const FEATURES: Feature[] = [
  {
    title: "End-to-End Partnership",
    description: "From idea to launch.",
    icon: HandshakeIcon,
  },
  {
    title: "Business First",
    description: "We think like founders.",
    icon: FlagIcon,
  },
  {
    title: "Built for Scale",
    description: "Everything prepared for growth.",
    icon: ScaleIcon,
  },
  {
    title: "Innovation Driven",
    description: "Modern technologies and AI.",
    icon: AtomIcon,
  },
  {
    title: "Premium Design",
    description: "Luxury digital experiences.",
    icon: DiamondIcon,
  },
];

export default function WhyByRoice() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Why ByRoice
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Not a Vendor. A Partner.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col gap-4 border-t border-white/10 pt-6 transition-colors duration-300 hover:border-[#FFE100]/40 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
              >
                <Icon className="h-6 w-6 text-[#FFE100] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,225,0,0.7)]" />
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
