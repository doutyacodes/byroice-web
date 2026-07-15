import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Businesses", href: "/business" },
  { label: "Careers", href: "#careers" },
  { label: "Media", href: "#media" },
  { label: "Company", href: "/company" },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-24 lg:py-16">
        <div className="max-w-sm">
          <Image
            src="/assets/logo-white.png"
            alt="ByRoice"
            width={669}
            height={237}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            From Concept to Company. For Our Clients. For Ourselves.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 px-6 py-6 sm:px-10 lg:px-24">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} ByRoice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
