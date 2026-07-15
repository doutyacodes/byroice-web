"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BUSINESSES, type BusinessCategory } from "@/lib/businesses";
import BusinessFilters from "./BusinessFilters";
import BusinessCard from "./BusinessCard";

export default function BusinessGrid() {
  const [active, setActive] = useState<"All" | BusinessCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? BUSINESSES
        : BUSINESSES.filter((business) => business.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex justify-center">
        <BusinessFilters active={active} onChange={setActive} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        <AnimatePresence mode="popLayout">
          {filtered.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-white/60">
          No businesses found in this category yet.
        </p>
      )}
    </div>
  );
}
