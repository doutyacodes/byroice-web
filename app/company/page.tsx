import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import CompanyHero from "@/components/company/Hero";
import WhoWeAre from "@/components/company/WhoWeAre";
import Stats from "@/components/company/Stats";
import WhatWeDo from "@/components/company/WhatWeDo";
import Expertise from "@/components/company/Expertise";
import Philosophy from "@/components/company/Philosophy";
import Journey from "@/components/company/Journey";
import Recognition from "@/components/company/Recognition";
import Values from "@/components/company/Values";
import GlobalPresence from "@/components/company/GlobalPresence";
import CompanyCTA from "@/components/company/CTA";

export const metadata: Metadata = {
  title: "Company — ByRoice",
  description:
    "ByRoice is a business creation ecosystem — we partner with visionaries to conceptualize, design, build and scale companies that shape industries.",
};

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <CompanyHero />
        <WhoWeAre />
        <Stats />
        <WhatWeDo />
        <Expertise />
        <Philosophy />
        <Journey />
        <Recognition />
        <Values />
        <GlobalPresence />
        <CompanyCTA />
      </main>

      <Footer />
    </div>
  );
}
