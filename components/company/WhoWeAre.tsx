"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] space-y-24">
        {/* Why ByRoice exists */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl">
              Why ByRoice exists
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Ideas are rarely limited by imagination alone. They become stuck between departments, disciplines and stages: strategy without design, design without engineering, research without a product, prototypes without a business and businesses without a clear next direction.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base leading-relaxed text-[#FFE100]/90 sm:text-lg font-medium"
            >
              ByRoice was built to work across those boundaries.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Instead of treating strategy, R&D, design and venture development as separate services, we organise them around a single question: what must be understood, designed and built to move this from zero to one?
            </motion.p>
          </div>
        </div>

        {/* Eighteen years of beginnings */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mt-5 max-w-md text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl">
              Eighteen years of beginnings
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base leading-relaxed text-white/65 sm:text-lg"
            >
              ByRoice is the culmination of an eighteen-year journey in ideas, products, brands, systems and business creation. Over that time, the work expanded across industries, but a consistent strength became clear: seeing possibilities early, connecting disciplines and building the foundation from which something new can emerge.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-base leading-relaxed text-[#FFE100]/90 sm:text-lg font-medium"
            >
              That strength now has a structure, a name and a company around it.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
