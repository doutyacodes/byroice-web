"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";

const TRAITS = [
  "You can work without waiting for every answer.",
  "You move comfortably between imagination and execution.",
  "You are curious beyond the boundaries of one industry.",
  "You care about how something works, not only how it appears.",
  "You can challenge an idea without losing the ambition behind it.",
  "You take ownership of outcomes, not only assigned tasks.",
  "You are willing to build the first version before optimising the hundredth."
];

export default function WhoBelongsHere() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-[#FFE100]/5 border-t border-[#FFE100]/10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              Who belongs here?
            </h2>
            <p className="text-lg text-[#FFE100] mb-8 font-medium">
              ByRoice is for people who are energised by unfinished things.
            </p>
            <ul className="space-y-5">
              {TRAITS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex text-lg text-white/80"
                >
                  <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFE100]" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              A career without a predetermined shape
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Roles at ByRoice may be full-time, project-based, fractional, advisory, entrepreneurial or venture-specific. Exceptional collaborators may begin on one assignment and eventually lead an entire business.
              </p>
              <p>
                If your discipline is unusual, your experience crosses categories or your best role does not yet have a conventional title, that may be precisely why we should speak.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="mailto:careers@byroice.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
              >
                Introduce Yourself
              </Link>
              <Link
                href="mailto:ventures@byroice.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFE100]/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#FFE100]/5 hover:border-[#FFE100]/50"
              >
                Tell Us What You Want to Build
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
