"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  TargetIcon,
  SparkIcon,
  CubeIcon,
  LayoutIcon,
  CodeIcon,
  AIIcon,
  TrendingUpIcon,
  TransformIcon,
} from "./icons";

interface Expertise {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  span: "large" | "wide" | "small";
}

const EXPERTISE: Expertise[] = [
  {
    title: "Business Strategy",
    description:
      "Clear roadmaps and positioning that turn ambition into a plan for growth.",
    icon: TargetIcon,
    span: "large",
  },
  {
    title: "Brand Identity",
    description:
      "Distinct visual identities that make businesses instantly recognizable.",
    icon: SparkIcon,
    span: "small",
  },
  {
    title: "Product Design",
    description: "Products shaped around real needs, built to be used and loved.",
    icon: CubeIcon,
    span: "small",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that feel effortless, intuitive and beautifully considered.",
    icon: LayoutIcon,
    span: "small",
  },
  {
    title: "Software Engineering",
    description:
      "Robust, scalable systems engineered to perform under real demand.",
    icon: CodeIcon,
    span: "small",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-driven products built for the next decade.",
    icon: AIIcon,
    span: "wide",
  },
  {
    title: "Growth Consulting",
    description:
      "Data-informed strategies that turn early traction into sustainable growth.",
    icon: TrendingUpIcon,
    span: "small",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernizing legacy operations into agile, digital-first businesses.",
    icon: TransformIcon,
    span: "small",
  },
];

const SPAN_CLASSES: Record<Expertise["span"], string> = {
  large: "lg:col-span-2 lg:row-span-2",
  wide: "lg:col-span-2",
  small: "",
};

function ExpertiseCard({ item }: { item: Expertise }) {
  const Icon = item.icon;
  const isLarge = item.span === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5 ${SPAN_CLASSES[item.span]} ${
        isLarge ? "min-h-[220px] lg:min-h-0" : "min-h-[200px]"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
      />

      <div
        className={`relative flex items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100] ${
          isLarge ? "h-14 w-14" : "h-11 w-11"
        }`}
      >
        <Icon className={isLarge ? "h-7 w-7" : "h-5 w-5"} />
      </div>

      <div className="relative mt-6">
        <h3
          className={`font-semibold text-white ${isLarge ? "text-2xl" : "text-lg"}`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-white/55 ${isLarge ? "max-w-sm text-base" : "text-sm"}`}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Every Discipline a Business Needs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            One team, spanning strategy, design, engineering and growth —
            aligned around a single outcome.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-4 lg:gap-6">
          {EXPERTISE.map((item) => (
            <ExpertiseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
