import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";

export const metadata: Metadata = {
  title: "Industries — ByRoice",
  description: "Built for Any Industry. We don't specialize in a category — we specialize in taking ideas from zero to company, whatever the category.",
};

const INDUSTRIES = [
  "Software",
  "Electronics",
  "Automotive",
  "Horology",
  "Food & Beverage",
  "Sports",
  "Events",
  "Defence",
  "Media",
  "News",
  "Tourism",
  "Marine",
];

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10 px-6 pb-24 pt-16 sm:px-10 sm:pt-20 lg:px-24 lg:pt-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#FFE100]/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
                Industries
              </span>
              <span className="h-px w-8 bg-[#FFE100]/50" />
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Built for <span className="text-[#FFE100]">Any Industry.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              We don&apos;t specialize in a category — we specialize in taking ideas from zero to company, whatever the category.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry}
                  className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FFE100]/10 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#FFE100] transition-colors">
                    {industry}
                  </h3>
                </div>
              ))}
              <div
                className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-medium text-white/40">
                  and beyond...
                </h3>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <Link
              href="/services#cta"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFE100] px-8 py-4 text-base font-semibold text-black shadow-lg shadow-[#FFE100]/10 transition-shadow hover:shadow-xl hover:shadow-[#FFE100]/20"
            >
              Start Your Journey
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
