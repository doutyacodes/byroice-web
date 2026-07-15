"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { SparkIcon, FlagIcon, TrendingUpIcon } from "../services/icons";
import { ShieldIcon, UsersIcon, InfinityIcon } from "./icons";

interface Value {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const VALUES: Value[] = [
  {
    title: "Integrity",
    description:
      "We do right by our clients and each other, especially when no one's watching.",
    icon: ShieldIcon,
  },
  {
    title: "Innovation",
    description: "We challenge the obvious answer until we find a better one.",
    icon: SparkIcon,
  },
  {
    title: "Ownership",
    description:
      "We treat every venture like it's ours — because in every way that matters, it is.",
    icon: FlagIcon,
  },
  {
    title: "Collaboration",
    description:
      "The best businesses are built by teams who trust each other completely.",
    icon: UsersIcon,
  },
  {
    title: "Long-Term Thinking",
    description: "We optimize for the next decade, not the next sprint.",
    icon: InfinityIcon,
  },
  {
    title: "Execution",
    description: "Ideas are cheap. We're proud of what we actually ship.",
    icon: TrendingUpIcon,
  },
];

export default function Values() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Values
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Guides Every Decision
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFE100]/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
