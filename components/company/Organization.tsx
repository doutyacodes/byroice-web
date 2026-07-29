"use client";

import { motion } from "framer-motion";

export default function Organization() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-white/[0.01]">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How ByRoice is organized
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg leading-relaxed text-white/70"
            >
              ByRoice operates as a single entity with three core functions:
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="space-y-4"
            >
              <li className="flex items-start text-lg text-white/80">
                <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFE100]" />
                <span className="leading-relaxed font-semibold">Venture architecture and strategy</span>
              </li>
              <li className="flex items-start text-lg text-white/80">
                <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFE100]" />
                <span className="leading-relaxed font-semibold">Product and industrial design</span>
              </li>
              <li className="flex items-start text-lg text-white/80">
                <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFE100]" />
                <span className="leading-relaxed font-semibold">Engineering and technology</span>
              </li>
            </motion.ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg leading-relaxed text-[#FFE100]/90 font-medium"
            >
              These are not separate agencies. They are disciplines applied together to create companies.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
