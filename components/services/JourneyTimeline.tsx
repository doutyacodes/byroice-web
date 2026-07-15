"use client";

import { motion } from "framer-motion";
import {
  LightbulbIcon,
  ChessIcon,
  CompassIcon,
  CubeIcon,
  PhoenixIcon,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

interface Stage {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const STAGES: Stage[] = [
  {
    number: "01",
    title: "Conceptualization",
    description: "Transforming ideas into meaningful business opportunities.",
    icon: LightbulbIcon,
  },
  {
    number: "02",
    title: "Strategizing",
    description: "Creating sustainable roadmaps and competitive positioning.",
    icon: ChessIcon,
  },
  {
    number: "03",
    title: "Designing",
    description: "Crafting experiences, products and brands people remember.",
    icon: CompassIcon,
  },
  {
    number: "04",
    title: "Prototyping",
    description: "Building, validating and refining before full-scale execution.",
    icon: CubeIcon,
  },
  {
    number: "05",
    title: "Reviving",
    description:
      "Reimagining existing businesses, pivoting products and unlocking new growth.",
    icon: PhoenixIcon,
  },
];

const DESKTOP_LINE_D =
  "M100 20 C 200 5, 250 35, 300 20 S 400 5, 500 20 S 600 35, 700 20 S 800 5, 900 20";

function StageCard({ stage }: { stage: Stage }) {
  const Icon = stage.icon;
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative z-10 flex-1 px-2 text-center lg:px-3"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#FFE100]/50 group-hover:bg-[#FFE100]/5 group-hover:shadow-[0_0_30px_-6px_rgba(255,225,0,0.45)]">
        <Icon className="h-7 w-7 text-[#FFE100]" />
      </div>

      <span className="mt-5 block text-xs font-semibold tracking-widest text-[#FFE100]/70">
        {stage.number}
      </span>
      <h3 className="mt-1 text-lg font-semibold text-white">{stage.title}</h3>

      <p className="mx-auto mt-2 max-h-0 max-w-[220px] overflow-hidden text-sm leading-relaxed text-white/55 opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100">
        {stage.description}
      </p>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  return (
    <section id="process" className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Five Stages, One Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            Every business we build moves through the same disciplined path —
            from spark to sustainable company.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            viewBox="0 0 1000 40"
            className="pointer-events-none absolute left-0 top-8 h-10 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="timelineLine"
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFE100" stopOpacity="0" />
                <stop offset="10%" stopColor="#FFE100" stopOpacity="0.55" />
                <stop offset="90%" stopColor="#FFE100" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFE100" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={DESKTOP_LINE_D}
              stroke="url(#timelineLine)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>

          <div className="flex items-start">
            {STAGES.map((stage) => (
              <StageCard key={stage.title} stage={stage} />
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-16 space-y-10 lg:hidden">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFE100]/30 bg-[#FFE100]/5">
                    <Icon className="h-6 w-6 text-[#FFE100]" />
                  </div>
                  {index < STAGES.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-gradient-to-b from-[#FFE100]/40 to-transparent" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-semibold tracking-widest text-[#FFE100]/70">
                    {stage.number}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {stage.description}
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
