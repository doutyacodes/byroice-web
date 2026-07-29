"use client";

import { motion } from "framer-motion";

const WAYS = [
  {
    title: "A defined 0→1 project",
    description: "A focused assignment with a clear outcome: a strategy, concept, prototype, MVP, pilot, redesigned product or new venture foundation.",
  },
  {
    title: "An embedded innovation unit",
    description: "ByRoice operates alongside your leadership as an external R&D department or skunkworks for a sustained period.",
  },
  {
    title: "A venture partnership",
    description: "We co-create a new business with an entrepreneur, company, family office, institution or strategic partner.",
  },
  {
    title: "A revival mandate",
    description: "We investigate, reposition and rebuild a dormant business, legacy brand, product or body of intellectual property.",
  }
];

export default function WaysToWork() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Engagement Models
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ways to work with ByRoice
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WAYS.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
            >
              <h3 className="text-2xl font-bold text-white">{way.title}</h3>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">{way.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
