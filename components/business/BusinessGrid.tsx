"use client";

import { AnimatePresence } from "framer-motion";
import { BUSINESSES } from "@/lib/businesses";
import BusinessCard from "./BusinessCard";

export default function BusinessGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
      <AnimatePresence mode="popLayout">
        {BUSINESSES.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </AnimatePresence>

      {BUSINESSES.length === 0 && (
        <div className="col-span-full mt-16 text-center text-white/60">
          No businesses found.
        </div>
      )}
    </div>
  );
}
