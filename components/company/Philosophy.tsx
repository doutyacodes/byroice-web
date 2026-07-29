"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";

const PHILOSOPHIES = [
  "The client does not need to arrive with an idea.",
  "Research should reduce uncertainty before scale multiplies it.",
  "A prototype can answer questions that a presentation cannot.",
  "Newness is useful only when it creates real value.",
  "The product, experience, brand, business model and operating system must be designed as one whole.",
  "ByRoice should remain strongest where ambiguity is greatest: the journey from zero to one.",
  "When a venture needs a 1→100 operator, the right leader should take it forward."
];

export default function Philosophy() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-10">
              Our operating philosophy
            </h2>
            <ul className="space-y-6">
              {PHILOSOPHIES.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start text-lg text-white/80"
                >
                  <CheckCircleIcon className="mr-4 mt-0.5 h-6 w-6 shrink-0 text-[#FFE100]" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-10">
              Across industries, not confined by them
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                ByRoice works across digital platforms, enterprise systems, consumer products, industrial design, mobility, horology, media, education, civic systems, institutional intelligence, experiences, sport and advanced engineering.
              </p>
              <p>
                This range is not a claim to know every industry in advance. It reflects a method: learn the system deeply, find the hidden opportunity, assemble the necessary expertise and create the first working answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
