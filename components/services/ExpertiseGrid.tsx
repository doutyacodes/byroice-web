"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  TargetIcon,
  SparkIcon,
  CubeIcon,
  CodeIcon,
  AIIcon,
  TransformIcon,
} from "./icons";

interface Pillar {
  title: string;
  description: string;
  bullets: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const PILLARS: Pillar[] = [
  {
    title: "Opportunity discovery",
    description: "We study the assets, constraints, capabilities and ambitions already present—and identify what they could become.",
    bullets: [
      "Opportunity mapping and problem discovery",
      "Asset, capability and intellectual-property exploration",
      "New venture, product and service concepts",
      "Category creation and future-direction exercises"
    ],
    icon: SparkIcon,
  },
  {
    title: "Strategy and venture architecture",
    description: "We define how the idea creates value, for whom it exists and how the pieces fit together.",
    bullets: [
      "Business models and commercial architecture",
      "Product, service and platform strategy",
      "Positioning, differentiation and market-entry direction",
      "Venture structure, roadmap and ecosystem design"
    ],
    icon: TargetIcon,
  },
  {
    title: "Research and validation",
    description: "We replace attractive assumptions with evidence before expensive commitments are made.",
    bullets: [
      "Market, user, competitor and cultural research",
      "Technology and feasibility studies",
      "Concept evaluation and risk identification",
      "Pilot design, testing and validation"
    ],
    icon: AIIcon,
  },
  {
    title: "Design",
    description: "We give the idea a form people can understand, use, experience and believe in.",
    bullets: [
      "Product and industrial design",
      "Digital interfaces and service design",
      "Brand identity and communication systems",
      "Experience, packaging and system design"
    ],
    icon: CubeIcon,
  },
  {
    title: "R&D and prototyping",
    description: "We experiment, engineer and build to answer the questions that cannot be solved in a presentation.",
    bullets: [
      "Proofs of concept and experimental builds",
      "Physical, digital and hybrid prototypes",
      "Technical exploration and mechanism development",
      "MVPs, demonstrators and pilot systems"
    ],
    icon: CodeIcon,
  },
  {
    title: "Venture development",
    description: "Where the brief extends beyond the product, we build the foundations of the enterprise around it.",
    bullets: [
      "Venture identity and operating foundations",
      "Initial team and partner architecture",
      "Launch-readiness and handover",
      "Spin-out, partnership or continued build pathways"
    ],
    icon: TransformIcon,
  },
];

function PillarCard({ item, index }: { item: Pillar; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
      />

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/70">
        {item.description}
      </p>

      <div className="mt-8 flex-1">
        <ul className="space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start text-sm text-white/55">
              <span className="mr-3 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#FFE100]/50" />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What we do
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PILLARS.map((item, index) => (
            <PillarCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
