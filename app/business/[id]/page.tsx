import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBackground from "@/components/PremiumBackground";
import { BUSINESSES } from "@/lib/businesses";
import { CATEGORY_META } from "@/lib/categoryMeta";
import { CATEGORY_HIGHLIGHTS, getLongDescription } from "@/lib/businessContent";

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" strokeWidth={1.75} {...props}>
      <path
        d="M15 10H5M9 5l-5 5 5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function generateStaticParams() {
  return BUSINESSES.map((business) => ({ id: business.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const business = BUSINESSES.find((item) => item.id === id);
  if (!business) return {};
  return {
    title: `${business.name} — ByRoice`,
    description: business.description,
  };
}

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const business = BUSINESSES.find((item) => item.id === id);
  if (!business) notFound();

  const meta = CATEGORY_META[business.category];
  const image = business.backgroundImage ?? meta.image;
  const highlights = CATEGORY_HIGHLIGHTS[business.category];

  return (
    <div className="relative min-h-screen bg-black">
      <PremiumBackground />
      <Navbar />

      <main className="relative z-10 px-6 pb-24 pt-12 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/business"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All Businesses
          </Link>

          <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium ${meta.badge}`}
            >
              {business.category}
            </span>
            {business.featured && (
              <span className="rounded-full border border-[#FFE100]/30 bg-[#FFE100]/10 px-3 py-1 text-xs font-medium text-[#FFE100]">
                Featured
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {business.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {business.description}
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              About
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              {getLongDescription(business)}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-medium text-white/85">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-lg font-semibold text-white">
                Interested in {business.name}?
              </p>
              <p className="mt-1 text-sm text-white/60">
                Get in touch and we&apos;ll point you in the right direction.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/business"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:text-white"
              >
                All Businesses
              </Link>
              <button
                type="button"
                className="rounded-full bg-[#FFE100] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
