"use client";

import { motion } from "framer-motion";
import { CATEGORY_FILTERS, type BusinessCategory } from "@/lib/businesses";

interface BusinessFiltersProps {
  active: "All" | BusinessCategory;
  onChange: (category: "All" | BusinessCategory) => void;
}

export default function BusinessFilters({
  active,
  onChange,
}: BusinessFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter businesses by category"
      className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm"
    >
      {CATEGORY_FILTERS.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive ? "text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-full bg-[#FFE100]"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
