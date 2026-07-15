"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import QuickChat from "./QuickChat";

const WING_IMAGES = [
  {
    src: "/assets/hero-wing.png",
    alt: "Winged microphone stand, the ByRoice emblem",
  },
  {
    src: "/assets/hero-wing-2.png",
    alt: "Four-winged microphone stand, the ByRoice emblem",
  },
];

const HERO_TAGLINES = [
  {
    heading: "We Create Businesses",
    subtitle: "From Concept to Company. For Our Clients. For Ourselves.",
  },
  {
    heading: "We Build Brands",
    subtitle: "From Idea to Identity. Crafted with Purpose.",
  },
  {
    heading: "We Grow Ventures",
    subtitle: "From Vision to Value. For Every Business We Touch.",
  },
  {
    heading: "We Shape Futures",
    subtitle: "From Passion to Platform. Built to Last.",
  },
];

export default function Hero() {
  const [wingIndex, setWingIndex] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWingIndex((index) => (index + 1) % WING_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((index) => (index + 1) % HERO_TAGLINES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-black px-6 pb-16 pt-10 sm:px-10 sm:pb-20 lg:px-24 lg:pb-14">
      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center gap-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:min-h-[480px] xl:min-h-[550px] 2xl:min-h-[610px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 flex min-h-[110px] flex-col items-center text-center sm:min-h-[130px] lg:order-1 lg:min-h-[145px] lg:shrink-0 lg:items-start lg:text-left"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={taglineIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start"
            >
              <h1 className="max-w-xs text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:max-w-md sm:text-4xl lg:max-w-xl lg:text-[38px] xl:max-w-2xl xl:text-[44px] 2xl:text-[48px]">
                {HERO_TAGLINES[taglineIndex].heading}
              </h1>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-white/90 sm:max-w-md sm:text-lg lg:max-w-xl lg:text-[18px]">
                {HERO_TAGLINES[taglineIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="order-2 mx-auto w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:order-none lg:absolute lg:inset-y-0 lg:left-1/2 lg:flex lg:max-w-[420px] lg:-translate-x-1/2 lg:items-end xl:max-w-[480px] 2xl:max-w-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="w-full"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[992/1112] w-full"
            >
              {WING_IMAGES.map((wing, index) => (
                <motion.div
                  key={wing.src}
                  className="absolute inset-0"
                  initial={false}
                  animate={{ opacity: index === wingIndex ? 1 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <Image
                    src={wing.src}
                    alt={wing.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1536px) 520px, (min-width: 1280px) 480px, (min-width: 1024px) 420px, (min-width: 768px) 400px, (min-width: 640px) 340px, 260px"
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="order-3 flex justify-center lg:order-2 lg:flex-none lg:justify-end">
          <QuickChat />
        </div>
      </div>
    </section>
  );
}
