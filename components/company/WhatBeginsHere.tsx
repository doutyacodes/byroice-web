"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";

export default function WhatBeginsHere() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32 bg-[#FFE100]/5 border-t border-[#FFE100]/10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-6">
              What begins here
            </h2>
          </div>

          <div>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                A company may approach ByRoice with a difficult problem. An entrepreneur may arrive with an unformed ambition. A family office may bring capital and assets. An institution may need a new system. A forgotten brand may still hold a future.
              </p>
              <p className="text-[#FFE100]/90 font-medium">
                The starting points are different. The work is the same: find the possibility, give it structure and build the beginning.
              </p>
            </div>
            
            <div className="mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
              >
                Begin With ByRoice
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
