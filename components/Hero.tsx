"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";
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
            In the beginning, there is ByRoice.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#FFE100]/90 sm:text-2xl font-medium">
            We create what does not yet exist.
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            ByRoice is a 0→1 project, product and venture development company. We conceptualise, research, strategise, design, prototype and build new products, projects and businesses—for our clients and ourselves.
          </p>

          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="#start-something"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20 w-full sm:w-auto"
            >
              Start Something
            </Link>
            <Link
              href="#explore"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30 w-full sm:w-auto"
            >
              Explore ByRoice
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-16 flex justify-center w-full lg:mt-0 lg:w-auto lg:absolute lg:bottom-10 lg:right-10 z-50">
            <QuickChat />
          </div>
        </div>
      </div>
    </section>
  );
}
