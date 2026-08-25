import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import LeadPositions from "@/components/careers/LeadPositions";

export default function LeadCareersPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10">
        <section className="px-6 pb-4 pt-16 sm:px-10 sm:pt-20 lg:px-24 lg:pt-28">
          <div className="mx-auto max-w-[1600px] text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-[#FFE100]/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFE100]/80">
                Careers
              </span>
              <span className="h-px w-8 bg-[#FFE100]/50" />
            </div>

            <h1 className="mt-8 max-w-4xl mx-auto text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Lead a ByRoice Business
            </h1>

            <p className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-[#FFE100]/90 sm:text-xl font-medium">
              Take responsibility for a venture and build it beyond the 0→1 stage.
            </p>
          </div>
        </section>

        <LeadPositions />
      </main>

      <Footer />
    </div>
  );
}
