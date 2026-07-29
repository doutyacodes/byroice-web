"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { LightbulbIcon, TransformIcon, PhoenixIcon } from "../services/icons";

interface Discipline {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const DISCIPLINES: Discipline[] = [
  {
    title: "Create",
    description: "Build what does not yet exist.",
    icon: LightbulbIcon,
  },
  {
    title: "Transform",
    description: "Find the next form of something that already does.",
    icon: TransformIcon,
  },
  {
    title: "Revive",
    description: "Recover the value in something the world has left behind.",
    icon: PhoenixIcon,
  },
];

function DisciplineCard({ item, index }: { item: Discipline, index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className="group relative flex flex-col justify-center items-center text-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5 min-h-[260px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
      />

      <div className="relative flex items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100] h-16 w-16 mb-6">
        <Icon className="h-8 w-8" />
      </div>

      <div className="relative">
        <h3 className="font-bold text-white text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 leading-relaxed text-white/60 text-lg">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-[#FFE100]/5 border-y border-[#FFE100]/10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DISCIPLINES.map((item, index) => (
            <DisciplineCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
