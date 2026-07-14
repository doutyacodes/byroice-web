"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuickChat from "./QuickChat";

export default function Hero() {
  return (
    <section className="bg-black px-6 pb-16 pt-10 sm:px-10 sm:pb-20 lg:px-24 lg:pb-14">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 flex flex-col items-center text-center lg:order-1 lg:shrink-0 lg:items-start lg:text-left"
        >
          <h1 className="max-w-xs text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:max-w-md sm:text-5xl lg:max-w-none lg:whitespace-nowrap lg:text-[44px] xl:text-[52px] 2xl:text-[56px]">
            We Create Businesses
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/90 sm:max-w-md sm:text-xl lg:max-w-none lg:whitespace-nowrap lg:text-[22px]">
            From Concept to Company. For Our Clients. For Ourselves.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="order-2 flex flex-1 justify-center lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]"
          >
            <Image
              src="/assets/hero-wing.png"
              alt="Winged microphone stand, the ByRoice emblem"
              width={992}
              height={1112}
              priority
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </motion.div>

        <div className="order-3 flex flex-1 justify-center lg:order-3 lg:flex-none lg:justify-end">
          <QuickChat />
        </div>
      </div>
    </section>
  );
}
