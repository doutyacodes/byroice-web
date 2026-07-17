"use client";

import { motion } from "framer-motion";

interface Legacy {
  name: string;
  description: string;
}

const LEGACIES: Legacy[] = [
  {
    name: "Imhof & Mukle",
    description:
      "19th-century orchestrion makers, reborn as a modern HiFi and acoustics brand.",
  },
  {
    name: "J.B. Beha",
    description: "Legendary Black Forest clockmaker, reawakening.",
  },
];

export default function ReviveInPractice() {
  return (
    <section className="px-6 pb-24 sm:px-10 sm:pb-28 lg:px-24 lg:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#FFE100]/[0.02] p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
            <div className="lg:w-1/3">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
                Revive, In Practice
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                We Don&apos;t Just Rename the Past. We Reinterpret It.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/60">
                Before we rebuild a legacy brand, we ask what it actually stood
                for — not just what it made. A 19th-century maker of
                punched-card orchestrions could point toward robotics or
                computing just as easily as toward music. We look for the soul
                behind the mechanism, and build from there.
              </p>
            </div>

            <div className="flex-1 space-y-6">
              {LEGACIES.map((legacy, index) => (
                <motion.div
                  key={legacy.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#FFE100]/30 sm:flex-row sm:items-center sm:p-8"
                >
                  <div className="flex-shrink-0">
                    <h3 className="text-xl font-semibold text-white">
                      {legacy.name}
                    </h3>
                  </div>
                  <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                  <div className="sm:max-w-[280px] lg:max-w-[360px]">
                    <p className="text-sm leading-relaxed text-white/70">
                      {legacy.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
