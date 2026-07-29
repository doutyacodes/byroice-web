"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";

export default function CareersHero() {
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
              Careers
            </span>
            <span className="h-px w-8 bg-[#FFE100]/50" />
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            Choose how you want to build.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#FFE100]/90 sm:text-xl font-medium">
            Not everyone joins ByRoice in the same way.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Some people want to work across industries and solve a different 0→1 problem every day. Some want to dedicate themselves to one business. Others are ready to take ownership of a venture and lead it into independence.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg font-medium">
            ByRoice is designed to make room for all three.
          </p>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="mt-10">
            <Link
              href="#pathways"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
            >
              Explore Your Path
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
