"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";

const PATHWAY_D =
  "M -40 100 C 260 20, 460 180, 760 100 S 1260 20, 1560 100 S 1960 180, 2160 100";

export default function ServicesHero() {
  return (
    <section className="px-6 pb-4 pt-16 sm:px-10 sm:pt-20 lg:px-24 lg:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#FFE100]/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              Our Approach
            </span>
            <span className="h-px w-8 bg-[#FFE100]/50" />
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            We Build Businesses,
            <br />
            <span className="text-[#FFE100]">Not Just Products.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Every business we take on starts from a different place — a blank page, a stalled brand, or a legacy worth carrying
            forward. We meet you where you are, and bring the strategy, design, engineering and momentum to take it further,
            in any industry.
          </p>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="mt-10">
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
            >
              Start Your Journey
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mt-8 lg:mt-14"
        >
          <svg
            viewBox="0 0 2120 200"
            className="h-auto w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroPathway" x1="0" y1="0" x2="2120" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFE100" stopOpacity="0" />
                <stop offset="15%" stopColor="#FFE100" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FFE100" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#FFE100" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FFE100" stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.path
              d={PATHWAY_D}
              stroke="url(#heroPathway)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />

            <circle r="4.5" fill="#FFE100">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path={PATHWAY_D}
              />
            </circle>
            <circle r="3" fill="#FFE100" opacity="0.6">
              <animateMotion
                dur="7s"
                begin="3.5s"
                repeatCount="indefinite"
                path={PATHWAY_D}
              />
            </circle>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
