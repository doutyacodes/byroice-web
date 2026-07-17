"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";

export default function ServicesCTA() {
  return (
    <section id="cta" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-24 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20 lg:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#FFE100]/20 blur-[100px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              Let&apos;s Talk
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Build Your Next Business
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
              Bring us where you&apos;re starting from — an idea, a pivot, or a legacy worth reviving. We&apos;ll bring the strategy, design, engineering and momentum to make it real.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20 sm:w-auto"
              >
                Start Your Journey
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white sm:w-auto"
              >
                Schedule a Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
