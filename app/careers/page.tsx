import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import CareersHero from "@/components/careers/Hero";
import CareerPathways from "@/components/careers/CareerPathways";
import WhoBelongsHere from "@/components/careers/WhoBelongsHere";

export const metadata: Metadata = {
  title: "Careers — ByRoice",
  description:
    "Choose how you want to build. Not everyone joins ByRoice in the same way.",
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <CareersHero />
        <CareerPathways />
        <WhoBelongsHere />
      </main>

      <Footer />
    </div>
  );
}
