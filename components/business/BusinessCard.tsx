"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Business } from "@/lib/businesses";

const MotionLink = motion.create(Link);

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <MotionLink
      href={business.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex h-64 flex-col items-center justify-between overflow-hidden rounded-3xl border bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:shadow-2xl border-white/10 hover:border-white/20"
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        {business.logo ? (
          <img 
            src={business.logo} 
            alt={business.name} 
            className="h-full max-h-32 w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105" 
          />
        ) : (
          <h3 className="text-2xl font-bold text-white">{business.name}</h3>
        )}
      </div>
      <h3 className="mt-4 text-center text-lg font-semibold tracking-wide text-white/90">
        {business.name}
      </h3>
    </MotionLink>
  );
}
