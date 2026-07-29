"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

const WHO = [
  "Entrepreneurs with an idea—or only the ambition to build",
  "Startups that need to rethink, prototype or unlock their next stage",
  "Companies seeking a new product, service, market or business model",
  "Corporations that need an independent skunkworks beyond internal bureaucracy",
  "Intrapreneurs who need a team capable of developing an internal idea",
  "Family offices seeking ventures from capital, assets, networks or operating capabilities",
  "Institutions and organisations developing new systems, programmes or initiatives",
  "Owners of dormant businesses, heritage brands, discontinued products or neglected IP"
];

const WHAT = [
  "A problem worth solving",
  "An ambition without a defined route",
  "Capital seeking a meaningful opportunity",
  "Research or intellectual property without a commercial form",
  "Technology or manufacturing capacity without the right product",
  "Distribution, expertise or market access that could support a new venture",
  "An existing business that has stopped moving",
  "A name, story or legacy worth bringing back"
];

export default function WhoShouldApproach() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-10">
              Who should approach ByRoice?
            </h2>
            <ul className="space-y-5">
              {WHO.map((item, i) => (
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
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-10">
              What you can bring
            </h2>
            <p className="text-lg text-[#FFE100]/90 mb-8 font-medium">
              An idea is welcome, but it is not compulsory. A ByRoice engagement can begin with:
            </p>
            <ul className="space-y-5">
              {WHAT.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex text-lg text-white/80"
                >
                  <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-16 flex flex-wrap gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
              >
                Tell Us What You Have
              </Link>
              <Link
                href="#how-we-work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30"
              >
                Let Us Find What It Could Become
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
