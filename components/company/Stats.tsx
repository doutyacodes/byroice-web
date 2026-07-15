"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 35, suffix: "+", label: "Businesses" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries" },
  { value: 5, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 2022, suffix: "", label: "Founded" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
            ByRoice in Numbers
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Growing Family of Ventures
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center shadow-lg shadow-black/40 backdrop-blur-sm transition-colors duration-300 hover:border-[#FFE100]/35 sm:p-7"
            >
              <p className="text-3xl font-extrabold tracking-tight text-[#FFE100] sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/55 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
