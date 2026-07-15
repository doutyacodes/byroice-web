"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

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

function RoadmapNode({ label, index }: { label: string; index: number }) {
  const isEven = index % 2 === 0;
  const orderContent = isEven ? "lg:order-1" : "lg:order-2";
  const orderSpacer = isEven ? "lg:order-2" : "lg:order-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-16 lg:flex lg:items-center lg:gap-16 lg:pl-0"
    >
      <span className="absolute left-6 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE100] shadow-[0_0_14px_2px_rgba(255,225,0,0.55)] lg:left-1/2" />

      <div className={`lg:flex-1 ${orderContent} ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <div className="inline-flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFE100]/35">
          <span className="text-xs font-semibold tracking-widest text-[#FFE100]/70">
            0{index + 1}
          </span>
          <span className="mt-1 text-xl font-semibold text-white">{label}</span>
        </div>
      </div>

      <div className={`hidden lg:block lg:flex-1 ${orderSpacer}`} />
    </motion.div>
  );
}

export default function JourneyRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            The Full Journey
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From Idea to Scale
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            The complete path every business takes with ByRoice — one
            deliberate step at a time.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-white/10 lg:left-1/2" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-6 top-0 h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[#FFE100] via-[#FFE100]/70 to-[#FFE100]/20 lg:left-1/2"
          />

          <div className="space-y-10 lg:space-y-16">
            {NODES.map((node, index) => (
              <RoadmapNode key={node} label={node} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
