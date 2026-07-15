"use client";

import { motion } from "framer-motion";

const STEPS = [
  "Idea",
  "Research",
  "Strategy",
  "Design",
  "Prototype",
  "Launch",
  "Growth",
  "Scale",
];

const CENTERS = STEPS.map((_, i) => 62.5 + i * 125);

function buildWavyPath(centers: number[], baseY: number, amplitude: number) {
  let d = `M${centers[0]} ${baseY}`;
  for (let i = 1; i < centers.length; i++) {
    const midX = (centers[i - 1] + centers[i]) / 2;
    const direction = i % 2 === 0 ? 1 : -1;
    const controlY = baseY + direction * amplitude;
    d += ` Q${midX} ${controlY}, ${centers[i]} ${baseY}`;
  }
  return d;
}

const LINE_D = buildWavyPath(CENTERS, 20, 16);

export default function Journey() {
  return (
    <section id="approach" className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Our Approach
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Path From Idea to Scale
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            A disciplined, repeatable journey we walk with every founder and
            every venture.
          </p>
        </div>

        {/* Desktop: horizontal flowing journey */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            viewBox="0 0 1000 40"
            className="pointer-events-none absolute left-0 top-0 h-10 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="journeyLine"
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFE100" stopOpacity="0" />
                <stop offset="8%" stopColor="#FFE100" stopOpacity="0.6" />
                <stop offset="92%" stopColor="#FFE100" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFE100" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={LINE_D}
              stroke="url(#journeyLine)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="flex items-start">
            {STEPS.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                className="flex-1 px-2 text-center"
              >
                <div className="mx-auto flex h-5 w-5 items-center justify-center">
                  <span className="h-3 w-3 rounded-full bg-[#FFE100] shadow-[0_0_12px_2px_rgba(255,225,0,0.5)]" />
                </div>
                <span className="mt-4 block text-xs font-semibold tracking-widest text-[#FFE100]/70">
                  0{index + 1}
                </span>
                <span className="mt-1 block text-base font-semibold text-white">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical journey */}
        <div className="mt-16 space-y-2 lg:hidden">
          {STEPS.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="flex flex-col items-center">
                <span className="h-3 w-3 shrink-0 rounded-full bg-[#FFE100] shadow-[0_0_12px_2px_rgba(255,225,0,0.5)]" />
                {index < STEPS.length - 1 && (
                  <span className="h-8 w-px bg-gradient-to-b from-[#FFE100]/40 to-transparent" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-xs font-semibold tracking-widest text-[#FFE100]/70">
                  0{index + 1}
                </span>
                <span className="ml-2 text-lg font-semibold text-white">
                  {step}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
