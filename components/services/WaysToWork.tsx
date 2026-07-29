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
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ways to work with ByRoice
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WAYS.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5 min-h-[220px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
              />
              <h3 className="text-2xl font-bold text-white relative z-10">{way.title}</h3>
              <p className="mt-4 text-[17px] text-white/70 leading-relaxed relative z-10">{way.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
