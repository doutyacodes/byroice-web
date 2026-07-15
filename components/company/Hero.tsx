"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "../services/icons";

const RING_1 = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2;
  return { x: 300 + Math.cos(angle) * 130, y: 300 + Math.sin(angle) * 130 };
});

const RING_2 = Array.from({ length: 9 }, (_, i) => {
  const angle = (i / 9) * Math.PI * 2;
  return { x: 300 + Math.cos(angle) * 220, y: 300 + Math.sin(angle) * 220 };
});

function OrbitIllustration() {
  return (
    <svg viewBox="0 0 600 600" className="h-auto w-full" aria-hidden="true">
      <circle cx="300" cy="300" r="130" stroke="#FFE100" strokeOpacity="0.12" fill="none" />
      <circle cx="300" cy="300" r="220" stroke="#FFE100" strokeOpacity="0.08" fill="none" />

      <g className="animate-orbit-spin">
        {RING_1.map((node, i) => (
          <line
            key={i}
            x1="300"
            y1="300"
            x2={node.x}
            y2={node.y}
            stroke="#FFE100"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        ))}
        {RING_1.map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="5" fill="#FFE100" fillOpacity="0.85" />
        ))}
      </g>

      <g className="animate-orbit-spin-reverse">
        {RING_2.map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="3" fill="#FFE100" fillOpacity="0.45" />
        ))}
      </g>

      <motion.circle
        cx="300"
        cy="300"
        r="22"
        fill="#FFE100"
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="300" cy="300" r="34" stroke="#FFE100" strokeOpacity="0.3" fill="none" />
    </svg>
  );
}

export default function CompanyHero() {
  return (
    <section className="px-6 pb-4 pt-16 sm:px-10 sm:pt-20 lg:px-24 lg:pt-28">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#FFE100]/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              About ByRoice
            </span>
          </div>

          <h1 className="mt-8 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Building the Businesses of Tomorrow
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70 sm:text-xl">
            ByRoice is a business creation ecosystem — we partner with
            visionaries to conceptualize, design, build and scale companies
            that shape industries. From the first idea to global growth, we
            operate as founders, not vendors.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
              >
                Explore Our Companies
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="mx-auto w-full max-w-[420px] lg:max-w-[560px]"
        >
          <OrbitIllustration />
        </motion.div>
      </div>
    </section>
  );
}
