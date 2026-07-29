"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              Founder
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Kiran Roice
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
              Kiran Roice is an author, researcher and entrepreneur specialising in the creation of conceptual frameworks, analytical indices, products and ventures that make complex cultural, social, behavioural and institutional systems more understandable and usable.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg leading-relaxed text-white/70"
            >
              He is the creator of the Cultural Distance Spectrum and the author of The Language Hierarchy, Kiss the Damn Frog and Between Missions.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg leading-relaxed text-[#FFE100]/90 font-medium"
            >
              Through ByRoice, he brings together eighteen years of cross-industry concept development, research, design and business creation under one venture architecture ecosystem.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
