"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { TargetIcon, AtomIcon } from "../services/icons";
import { EyeIcon, QuoteIcon } from "./icons";

interface Pillar {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const PILLARS: Pillar[] = [
  {
    title: "Vision",
    description:
      "Seeing the business a good idea can become, long before the market does.",
    icon: EyeIcon,
  },
  {
    title: "Innovation",
    description:
      "Challenging convention with technology and design that move first.",
    icon: AtomIcon,
  },
  {
    title: "Execution",
    description:
      "Turning ambition into shipped products, real revenue and lasting companies.",
    icon: TargetIcon,
  },
];

export default function Philosophy() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <QuoteIcon className="mx-auto h-9 w-9 text-[#FFE100]/60" />
          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            &ldquo;We don&apos;t simply build products. We create businesses
            that shape industries.&rdquo;
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFE100]/35"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
