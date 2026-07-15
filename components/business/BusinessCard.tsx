"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Business } from "@/lib/businesses";
import { CATEGORY_META } from "@/lib/categoryMeta";

const MotionLink = motion.create(Link);

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" strokeWidth={1.75} {...props}>
      <path
        d="M5 10h10M11 5l5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BusinessCard({ business }: { business: Business }) {
  const meta = CATEGORY_META[business.category];
  const image = business.backgroundImage ?? meta.image;

  return (
    <MotionLink
      href={`/business/${business.id}`}
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/[0.03] p-6 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:shadow-2xl ${
        business.featured ? "border-[#FFE100]/30" : "border-white/10"
      } ${meta.hoverBorder} ${meta.hoverShadow}`}
    >
      {/* decorative layered glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 opacity-40 group-hover:opacity-70 ${meta.blob}`}
      />

      <div className="relative flex h-full flex-col">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10">
          <Image src={image} alt="" fill sizes="44px" className="object-cover" />
        </div>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
          {business.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 line-clamp-2">
          {business.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${meta.badge}`}
          >
            {business.category}
          </span>

          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/85 transition-colors group-hover:text-white">
            Explore
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
