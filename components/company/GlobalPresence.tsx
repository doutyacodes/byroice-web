"use client";

import { motion } from "framer-motion";
import { GlobeIcon } from "./icons";

const LOCATIONS = ["Mumbai", "Dubai", "London", "Singapore", "New York"];

const NODES = [
  { x: 300, y: 130 },
  { x: 460, y: 220 },
  { x: 180, y: 250 },
  { x: 380, y: 380 },
  { x: 220, y: 420 },
  { x: 300, y: 300 },
];

const CONNECTIONS: Array<[number, number]> = [
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [0, 1],
  [2, 4],
];

function NetworkIllustration() {
  return (
    <svg viewBox="0 0 600 550" className="h-auto w-full" aria-hidden="true">
      <circle cx="300" cy="300" r="260" stroke="#FFE100" strokeOpacity="0.08" fill="none" />
      <circle cx="300" cy="300" r="260" stroke="#FFE100" strokeOpacity="0.12" fill="none" strokeDasharray="2 10" />

      {[110, 170, 230].map((ry) => (
        <ellipse
          key={ry}
          cx="300"
          cy="300"
          rx="260"
          ry={ry}
          stroke="#FFE100"
          strokeOpacity="0.06"
          fill="none"
        />
      ))}

      {CONNECTIONS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="#FFE100"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {NODES.map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="14"
            fill="#FFE100"
            fillOpacity="0.12"
            animate={{ r: [14, 22, 14], opacity: [0.5, 0.1, 0.5] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
          <circle cx={node.x} cy={node.y} r="5" fill="#FFE100" />
        </motion.g>
      ))}
    </svg>
  );
}

export default function GlobalPresence() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            Global Presence
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built Everywhere Ambition Lives
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto w-full max-w-[440px] lg:order-1"
          >
            <NetworkIllustration />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10 lg:order-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFE100]/25 bg-[#FFE100]/5 text-[#FFE100]">
              <GlobeIcon className="h-6 w-6" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
              ByRoice ventures reach founders, partners and users well beyond
              a single market. As the family of companies grows, so does our
              footprint across the regions where ambitious businesses are
              being built.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {LOCATIONS.map((location) => (
                <li
                  key={location}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFE100]" />
                  {location}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
