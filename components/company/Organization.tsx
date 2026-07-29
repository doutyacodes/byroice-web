"use client";

import { motion } from "framer-motion";

const ORGANIZATIONS = [
  {
    title: "The ByRoice Engine",
    description: "The multidisciplinary centre for strategy, research, R&D, design, prototyping and venture architecture. It serves both external assignments and ByRoice’s own businesses."
  },
  {
    title: "The Businesses of ByRoice",
    description: "New ventures and revived enterprises developed within the ecosystem, each following the technical, commercial and organisational path appropriate to it."
  },
  {
    title: "Independent companies",
    description: "As a venture matures beyond ByRoice’s core 0→1 strength, it can gain its own leadership, team, capital and operating identity. ByRoice may remain a shareholder, strategic creator or long-term partner while the company grows independently."
  }
];

export default function Organization() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            How ByRoice is organised
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ORGANIZATIONS.map((org, index) => (
            <motion.div
              key={org.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5 min-h-[300px]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#FFE100]/10 opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
              />

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                {org.title}
              </h3>
              
              <p className="text-base leading-relaxed text-white/70 relative z-10 flex-1">
                {org.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
