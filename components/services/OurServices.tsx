"use client";

import { motion } from "framer-motion";
import { LightbulbIcon, TransformIcon, PhoenixIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

interface Track {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const TRACKS: Track[] = [
  {
    title: "Create something new",
    description:
      "Develop a new company, product, service, platform, technology, system, brand, programme or initiative from the ground up.",
    icon: LightbulbIcon,
  },
  {
    title: "Find the next direction",
    description:
      "Help an existing business escape stagnation through a pivot, new offering, new market, new model, new identity or redesigned customer experience.",
    icon: TransformIcon,
  },
  {
    title: "Bring something valuable back",
    description:
      "Rebuild a dormant company, heritage brand, discontinued product, neglected asset, abandoned technology or forgotten intellectual property for contemporary relevance.",
    icon: PhoenixIcon,
  },
];

function TrackCard({ track, index }: { track: Track; index: number }) {
  const Icon = track.icon;
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

      <div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-white">{track.title}</h3>
      </div>

      <div className="mt-5 flex-1">
        <p className="leading-relaxed text-white/60 text-[15px]">
          {track.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function OurServices() {
  return (
    <section id="how-we-work" className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              Your independent 0→1 department
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              For organisations without an internal innovation team—or those that need a faster, more independent unit—ByRoice can operate as a skunkworks on hire.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-10">
            <p className="text-lg leading-relaxed text-white/70">
              We bring together the capabilities normally divided between strategy firms, research teams, design studios, product labs, engineering partners and venture builders. The team changes with the problem. The objective does not: move from uncertainty to a working reality.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white mb-8">How we can help</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRACKS.map((track, index) => (
              <TrackCard key={track.title} track={track} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
