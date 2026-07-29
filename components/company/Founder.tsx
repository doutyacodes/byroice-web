"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Founder
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg leading-relaxed text-white/70"
            >
              ByRoice was founded by Shabeer, driven by the belief that the most valuable ideas require strategy, design, technology and capital to be developed together rather than in isolation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg leading-relaxed text-[#FFE100]/90 font-medium"
            >
              Shabeer leads the venture architecture and strategic direction across the ByRoice ecosystem.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
