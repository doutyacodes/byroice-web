"use client";

import { motion } from "framer-motion";

function round(value: number) {
  return Math.round(value * 100) / 100;
}

const PARTICLES = Array.from({ length: 30 }, (_, i) => {
  const seed = i * 47.5;
  const x = round((Math.sin(seed) * 0.5 + 0.5) * 100);
  const y = round((Math.cos(seed * 1.3) * 0.5 + 0.5) * 100);
  const r = round(0.8 + (Math.sin(seed * 2.1) * 0.5 + 0.5) * 1.6);
  const o = round(0.25 + (Math.cos(seed * 0.7) * 0.5 + 0.5) * 0.5);
  return { x, y, r, o };
});

export default function PremiumBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black"
    >
      {/* base depth gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 6%, rgba(255,225,0,0.20), transparent 70%), " +
            "radial-gradient(50% 45% at 88% 14%, rgba(167,139,250,0.13), transparent 70%), " +
            "radial-gradient(60% 50% at 50% 100%, rgba(255,225,0,0.12), transparent 70%)",
        }}
      />

      {/* slow ambient drift */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,225,0,0.22) 0%, transparent 65%)",
          filter: "blur(30px)",
        }}
        animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* flowing gold lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="goldLineA" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE100" stopOpacity="0" />
            <stop offset="45%" stopColor="#FFE100" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFE100" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldLineB" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE100" stopOpacity="0" />
            <stop offset="55%" stopColor="#FFE100" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFE100" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M -100 220 C 320 60, 680 320, 1120 150 S 1750 40, 2020 190"
          stroke="url(#goldLineA)"
          strokeWidth="2"
        />
        <path
          d="M -100 300 C 340 160, 700 400, 1140 240 S 1760 130, 2020 280"
          stroke="url(#goldLineB)"
          strokeWidth="1.25"
        />
        <path
          d="M -100 940 C 420 1010, 780 800, 1260 920 S 1820 1000, 2040 880"
          stroke="url(#goldLineA)"
          strokeWidth="2"
        />

        {PARTICLES.map((p, i) => (
          <circle
            key={i}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.r}
            fill="#FFE100"
            opacity={p.o}
          />
        ))}
      </svg>

      {/* vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 100% at 50% 0%, transparent 45%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>
  );
}
