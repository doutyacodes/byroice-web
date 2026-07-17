"use client";

import { motion } from "framer-motion";
import { LightbulbIcon, TransformIcon, PhoenixIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

interface Track {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const TRACKS: Track[] = [
  {
    number: "01",
    title: "New",
    subtitle: "Building from zero to one.",
    description:
      "No existing asset — idea, market, brand and product, all built from the ground up.",
    bestFor: "founders and enterprises starting fresh.",
    icon: LightbulbIcon,
  },
  {
    number: "02",
    title: "Pivot",
    subtitle: "Radical redirection for changing times.",
    description:
      "An existing product or business, redirected toward a new thesis when the market, technology, or original direction no longer holds.",
    bestFor: "businesses that need to adapt to survive and grow.",
    icon: TransformIcon,
  },
  {
    number: "03",
    title: "Revive",
    subtitle: "Legacy, carried forward.",
    description:
      "An existing legacy — a name, a reputation, a history customers already trust — carried into a new product. The product itself may be built entirely from scratch; what makes it Revive is the legacy behind it, not how much work remains.",
    bestFor: "dormant or heritage brands with equity worth reawakening.",
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
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
      />

      <div>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#FFE100]/70">
              {track.number}
            </span>
            <h3 className="text-2xl font-semibold text-white">{track.title}</h3>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-lg font-medium text-white/90">
            {track.subtitle}
          </p>
          <p className="mt-3 leading-relaxed text-white/60 text-sm">
            {track.description}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="text-sm text-white/50">
          <strong className="font-semibold text-white/70">Best for:</strong>{" "}
          {track.bestFor}
        </p>
      </div>
    </motion.div>
  );
}

export default function OurServices() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Wherever You&apos;re Starting From, We Have a Path.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            Every business we take on begins in one of three places. We built a distinct track for each — same discipline, same team, different starting point.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TRACKS.map((track, index) => (
            <TrackCard key={track.title} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
