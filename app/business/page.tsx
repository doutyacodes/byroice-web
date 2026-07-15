import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import BusinessGrid from "@/components/business/BusinessGrid";

export const metadata: Metadata = {
  title: "Our Businesses — ByRoice",
  description: "From Concept to Company. For Our Clients. For Ourselves.",
};

export default function BusinessPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10 px-6 pb-24 pt-16 sm:px-10 sm:pt-20 lg:px-24 lg:pt-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Our Businesses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              From Concept to Company. For Our Clients. For Ourselves.
            </p>
          </div>

          <div className="mt-14 lg:mt-16">
            <BusinessGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
