import type { BusinessCategory } from "./businesses";

interface CategoryMeta {
  hex: string;
  /** dummy artwork used as the card thumbnail / detail page banner */
  image: string;
  /** classes for the small category badge pill */
  badge: string;
  /** hover: classes applied to the card itself */
  hoverBorder: string;
  hoverShadow: string;
  /** background color class for the soft decorative blob */
  blob: string;
}

export const CATEGORY_META: Record<BusinessCategory, CategoryMeta> = {
  Healthcare: {
    hex: "#34D399",
    image: "/assets/business/healthcare.webp",
    badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    hoverBorder: "hover:border-emerald-400/40",
    hoverShadow: "hover:shadow-emerald-400/10",
    blob: "bg-emerald-400/20",
  },
  Technology: {
    hex: "#A78BFA",
    image: "/assets/business/technology.webp",
    badge: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    hoverBorder: "hover:border-violet-400/40",
    hoverShadow: "hover:shadow-violet-400/10",
    blob: "bg-violet-400/20",
  },
  Community: {
    hex: "#38BDF8",
    image: "/assets/business/community.webp",
    badge: "bg-sky-400/10 text-sky-300 border-sky-400/20",
    hoverBorder: "hover:border-sky-400/40",
    hoverShadow: "hover:shadow-sky-400/10",
    blob: "bg-sky-400/20",
  },
  Business: {
    hex: "#FBBF24",
    image: "/assets/business/business.webp",
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    hoverBorder: "hover:border-amber-400/40",
    hoverShadow: "hover:shadow-amber-400/10",
    blob: "bg-amber-400/20",
  },
  Media: {
    hex: "#FB7185",
    image: "/assets/business/media.webp",
    badge: "bg-rose-400/10 text-rose-300 border-rose-400/20",
    hoverBorder: "hover:border-rose-400/40",
    hoverShadow: "hover:shadow-rose-400/10",
    blob: "bg-rose-400/20",
  },
  Marketplace: {
    hex: "#2DD4BF",
    image: "/assets/business/marketplace.webp",
    badge: "bg-teal-400/10 text-teal-300 border-teal-400/20",
    hoverBorder: "hover:border-teal-400/40",
    hoverShadow: "hover:shadow-teal-400/10",
    blob: "bg-teal-400/20",
  },
  Corporate: {
    hex: "#FFE100",
    image: "/assets/business/corporate.webp",
    badge: "bg-[#FFE100]/10 text-[#FFE100] border-[#FFE100]/25",
    hoverBorder: "hover:border-[#FFE100]/45",
    hoverShadow: "hover:shadow-[#FFE100]/15",
    blob: "bg-[#FFE100]/20",
  },
  Websites: {
    hex: "#94A3B8",
    image: "/assets/business/websites.webp",
    badge: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    hoverBorder: "hover:border-slate-400/40",
    hoverShadow: "hover:shadow-slate-400/10",
    blob: "bg-slate-400/20",
  },
  "Mobile Apps": {
    hex: "#F97316",
    image: "/assets/business/mobile.png",
    badge: "bg-orange-400/10 text-orange-300 border-orange-400/20",
    hoverBorder: "hover:border-orange-400/40",
    hoverShadow: "hover:shadow-orange-400/10",
    blob: "bg-orange-400/20",
  },
};
