import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import ServicesHero from "@/components/services/Hero";
import JourneyTimeline from "@/components/services/JourneyTimeline";
import ExpertiseGrid from "@/components/services/ExpertiseGrid";
import WhyByRoice from "@/components/services/WhyByRoice";
import JourneyRoadmap from "@/components/services/JourneyRoadmap";
import ServicesCTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Services — ByRoice",
  description:
    "We build businesses, not just products. Strategy, design, technology and execution — from idea to company.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <ServicesHero />
        <JourneyTimeline />
        <ExpertiseGrid />
        <WhyByRoice />
        <JourneyRoadmap />
        <ServicesCTA />
      </main>

      <Footer />
    </div>
  );
}
