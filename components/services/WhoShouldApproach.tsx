"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

const STARTING_POINTS = [
  "A problem worth solving",
  "An ambition without a defined route",
  "An existing business that has stopped moving",
  "A technology or manufacturing capability without the right product",
  "Research or intellectual property without a practical application",
  "Capital, distribution, expertise or market access that could support something new",
  "A dormant company, product, brand, name or legacy worth bringing back"
];

export default function WhoShouldApproach() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-[900px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
            You do not need to begin with an idea.
          </h2>
          <p className="text-lg text-white/70 mb-12">
            ByRoice works with entrepreneurs, startups, established companies, corporations, intrapreneurs, family offices, institutions and owners of valuable but underused assets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 shadow-lg shadow-black/40 backdrop-blur-sm text-left"
        >
          <p className="text-xl text-[#FFE100]/90 mb-8 font-medium">
            A ByRoice engagement can begin with:
          </p>
          <ul className="space-y-6">
            {STARTING_POINTS.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start text-lg text-white/80"
              >
                <span className="mr-5 mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FFE100]" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20 w-full sm:w-auto"
          >
            Tell Us What You Have
          </Link>
          <Link
            href="#how-we-work"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30 w-full sm:w-auto"
          >
            Let Us Find What It Could Become
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
