import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import ServicesHero from "@/components/services/Hero";
import OurServices from "@/components/services/OurServices";
import ExpertiseGrid from "@/components/services/ExpertiseGrid";
import WaysToWork from "@/components/services/WaysToWork";
import WhoShouldApproach from "@/components/services/WhoShouldApproach";
import ServicesCTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Services — ByRoice",
  description:
    "We build the part before the obvious. Strategy, research, R&D, design, prototyping and venture development.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <ServicesHero />
        <OurServices />
        <ExpertiseGrid />
        <WaysToWork />
        <WhoShouldApproach />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
}
