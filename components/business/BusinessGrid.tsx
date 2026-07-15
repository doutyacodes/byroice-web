"use client";

import { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { BUSINESSES, type Business } from "@/lib/businesses";
import BusinessCard from "./BusinessCard";

function getGroupName(name: string): string {
  if (name.includes("Hospital Token")) return "Hospital Token";
  if (name.includes("Hommunity") || name.includes("Tenman")) return "Hommunity";
  if (name.includes("KiranRoice")) return "KiranRoice";
  if (name.includes("Roice")) return "Roice";
  if (name.includes("Wowfy")) return "Wowfy";
  if (name.includes("Doutya")) return "Doutya";
  if (name.includes("Axara")) return "Axara";
  if (name.includes("Knockster")) return "Knockster";
  if (name.includes("Mapogram")) return "Mapogram";
  if (name.includes("Homedel")) return "Homedel";
  if (name.includes("PersAnalytics")) return "PersAnalytics";
  if (name.includes("Game Trade")) return "Game Trade";
  if (name.includes("AI Prayer") || name.includes("AI Lawyer") || name.includes("AI Judge")) return "AI Tools";
  
  return name.split(" ")[0];
}

export default function BusinessGrid() {
  const groupedBusinesses = useMemo(() => {
    const groups: Record<string, Business[]> = {};
    for (const business of BUSINESSES) {
      const group = getGroupName(business.name);
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(business);
    }

    return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  return (
    <div className="space-y-16">
      {groupedBusinesses.map(([groupName, businesses]) => (
        <div key={groupName}>
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white/90">
            {groupName}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {BUSINESSES.length === 0 && (
        <p className="mt-16 text-center text-white/60">
          No businesses found.
        </p>
      )}
    </div>
  );
}
