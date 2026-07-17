"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";

const NODES = [
  "Idea",
  "Research",
  "Strategy",
  "Brand",
  "Prototype",
  "Development",
  "Launch",
  "Growth",
  "Scale",
];

export default function JourneyRoadmap() {
  return (
    <section className="overflow-hidden px-6 pb-24 sm:px-10 sm:pb-28 lg:px-24 lg:pb-32 pt-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Same Rigor, Wherever You Enter.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/60 sm:text-lg">
            Every track runs through the same nine-stage discipline. Where you
            enter depends on where you&apos;re starting from — a new idea begins
            further back, a legacy brand or existing product usually starts
            further along. The path is the same either way.
          </p>
        </div>

        <div className="relative mx-auto mt-24">
          {/* Entry markers */}
          <div className="absolute -top-12 left-0 right-0 hidden sm:block">
            <div className="relative h-full w-full">
              {/* Early marker */}
              <div className="absolute left-[5%] flex flex-col items-center">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FFE100]/70">
                  New Idea
                </span>
                <div className="h-6 w-px bg-gradient-to-b from-[#FFE100]/50 to-transparent" />
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FFE100] shadow-[0_0_10px_rgba(255,225,0,0.8)]" />
              </div>
              {/* Mid marker */}
              <div className="absolute left-[38%] flex flex-col items-center">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FFE100]/70">
                  Pivot / Reposition
                </span>
                <div className="h-6 w-px bg-gradient-to-b from-[#FFE100]/50 to-transparent" />
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FFE100] shadow-[0_0_10px_rgba(255,225,0,0.8)]" />
              </div>
              {/* Late marker */}
              <div className="absolute left-[70%] flex flex-col items-center">
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FFE100]/70">
                  Revive Legacy
                </span>
                <div className="h-6 w-px bg-gradient-to-b from-[#FFE100]/50 to-transparent" />
                <div className="mt-1 h-2 w-2 rounded-full bg-[#FFE100] shadow-[0_0_10px_rgba(255,225,0,0.8)]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:overflow-x-auto sm:pb-8 sm:pt-4 no-scrollbar">
            {NODES.map((node, index) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 sm:shrink-0 sm:flex-col sm:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-semibold text-[#FFE100]/80">
                  0{index + 1}
                </div>
                {index < NODES.length - 1 && (
                  <div className="hidden h-px w-8 bg-white/10 sm:block lg:w-12 xl:w-16" />
                )}
                <span className="text-base font-semibold text-white sm:text-sm">
                  {node}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
