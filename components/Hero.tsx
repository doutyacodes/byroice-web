"use client";

import { motion } from "framer-motion";
import QuickChat from "./QuickChat";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-10 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#FFE100]/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
              The 0→1 Company
            </span>
            <span className="h-px w-8 bg-[#FFE100]/50" />
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            In the beginning, there is Us.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#FFE100]/90 sm:text-2xl font-medium">
            We create what does not yet exist.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            ByRoice is a 0→1 project, product and venture development company. We conceptualise, research, strategise, design, prototype and build new products, projects and businesses—for our clients and ourselves.
          </p>
          </motion.div>

          <div className="mt-16 flex justify-center w-full lg:mt-0 lg:w-auto lg:absolute lg:bottom-10 lg:right-10 z-50">
            <QuickChat />
          </div>
        </div>
      </div>
    </section>
  );
}
