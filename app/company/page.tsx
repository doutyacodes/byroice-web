import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import CompanyHero from "@/components/company/Hero";
import WhoWeAre from "@/components/company/WhoWeAre";
import WhatWeDo from "@/components/company/WhatWeDo";
import Organization from "@/components/company/Organization";
import Philosophy from "@/components/company/Philosophy";
import Founder from "@/components/company/Founder";
import WhatBeginsHere from "@/components/company/WhatBeginsHere";

export const metadata: Metadata = {
  title: "Company — ByRoice",
  description:
    "The company behind the companies. We are a venture architecture and 0→1 development company.",
};

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <CompanyHero />
        <WhoWeAre />
        <WhatWeDo />
        <Organization />
        <Philosophy />
        <Founder />
        <WhatBeginsHere />
      </main>

      <Footer />
    </div>
  );
}
