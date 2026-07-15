"use client";

import { motion } from "framer-motion";

const PARAGRAPHS = [
  "ByRoice was founded on a simple belief: the best businesses are built, not assembled. We work alongside founders and enterprises to turn early ideas into companies with real market presence — combining strategy, design, engineering and capital discipline under one roof.",
  "We are not a studio that ships projects and moves on. We are long-term partners who stay invested in the outcome — from the first prototype to the moment a business stands on its own.",
  "Today, ByRoice operates across healthcare, technology, community platforms, media and beyond — a growing family of ventures united by the same standard of craft and the same appetite for ambitious ideas.",
];

export default function WhoWeAre() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Who We Are
          </span>
          <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
            A business creation ecosystem, not a services shop.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {PARAGRAPHS.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
              className="text-base leading-relaxed text-white/65 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
