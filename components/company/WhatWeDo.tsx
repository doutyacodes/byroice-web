"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import {
  CodeIcon,
  AIIcon,
  ChessIcon,
  LayoutIcon,
  SparkIcon,
} from "../services/icons";
import { BuildingIcon, HeartPulseIcon, RocketIcon } from "./icons";

interface Discipline {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  span: "large" | "wide" | "small";
}

const DISCIPLINES: Discipline[] = [
  {
    title: "Business Creation",
    description:
      "Turning early-stage ideas into fully formed companies, from strategy to launch.",
    icon: BuildingIcon,
    span: "large",
  },
  {
    title: "Technology",
    description:
      "Engineering the systems and platforms that let businesses run and scale.",
    icon: CodeIcon,
    span: "small",
  },
  {
    title: "Healthcare",
    description: "Building digital health platforms that improve care and access.",
    icon: HeartPulseIcon,
    span: "small",
  },
  {
    title: "AI",
    description: "Embedding intelligent automation into every product we ship.",
    icon: AIIcon,
    span: "small",
  },
  {
    title: "Consulting",
    description:
      "Strategic guidance for founders and enterprises navigating growth.",
    icon: ChessIcon,
    span: "small",
  },
  {
    title: "Digital Products",
    description: "Software and experiences designed around real user needs.",
    icon: LayoutIcon,
    span: "wide",
  },
  {
    title: "Brand Building",
    description:
      "Identities and stories that make new businesses unforgettable.",
    icon: SparkIcon,
    span: "small",
  },
  {
    title: "Innovation",
    description: "A dedicated practice for exploring what comes next.",
    icon: RocketIcon,
    span: "small",
  },
];

const SPAN_CLASSES: Record<Discipline["span"], string> = {
  large: "lg:col-span-2 lg:row-span-2",
  wide: "lg:col-span-2",
  small: "",
};

function DisciplineCard({ item }: { item: Discipline }) {
  const Icon = item.icon;
  const isLarge = item.span === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ scale: 1.03 }}
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

export default function WhatWeDo() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One Ecosystem, Every Discipline
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            The full range of capability it takes to conceive, build and
            grow a company — held under one roof.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-4 lg:gap-6">
          {DISCIPLINES.map((item) => (
            <DisciplineCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
