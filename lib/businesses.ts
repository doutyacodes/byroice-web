export type BusinessCategory =
  | "Healthcare"
  | "Technology"
  | "Community"
  | "Business"
  | "Media"
  | "Marketplace"
  | "Corporate"
  | "Websites";

export interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
  description: string;
  logo?: string;
  backgroundImage?: string;
  url?: string;
  featured?: boolean;
}

export const CATEGORY_FILTERS: Array<"All" | BusinessCategory> = [
  "All",
  "Healthcare",
  "Technology",
  "Community",
  "Business",
  "Media",
  "Websites",
  "Corporate",
  "Marketplace",
];

export const BUSINESSES: Business[] = [
  // Healthcare
  {
    id: "healway",
    name: "Healway",
    category: "Healthcare",
    description: "Modern healthcare platform connecting patients with better care.",
  },
  {
    id: "hospitals",
    name: "Hospitals",
    category: "Healthcare",
    description: "Streamlined hospital management and patient care coordination.",
  },
  {
    id: "clinic",
    name: "Clinic",
    category: "Healthcare",
    description: "Simplified scheduling and records management for clinics.",
  },

  // Community & Security
  {
    id: "knockster",
    name: "Knockster",
    category: "Community",
    description: "Smart visitor and community security solution.",
  },
  {
    id: "gatewise",
    name: "Gatewise",
    category: "Community",
    description: "Intelligent access control for gated communities.",
  },
  {
    id: "hommunity",
    name: "Hommunity",
    category: "Community",
    description: "Connecting neighbors and communities in one place.",
  },
  {
    id: "safety-monitor",
    name: "Safety Monitor",
    category: "Community",
    description: "Real-time safety monitoring for homes and communities.",
  },

  // Technology
  {
    id: "mapogram",
    name: "Mapogram",
    category: "Technology",
    description: "Interactive mapping and location intelligence platform.",
  },
  {
    id: "doutya-ai",
    name: "Doutya AI",
    category: "Technology",
    description: "AI-powered productivity and automation platform.",
  },
  {
    id: "doutya",
    name: "Doutya",
    category: "Technology",
    description: "The core platform powering the Doutya ecosystem.",
  },
  {
    id: "xortcut",
    name: "Xortcut",
    category: "Technology",
    description: "Smart shortcuts for faster everyday workflows.",
  },
  {
    id: "xortlist",
    name: "Xortlist",
    category: "Technology",
    description: "Organized lists and tasks, simplified.",
  },
  {
    id: "persanalytics",
    name: "PersAnalytics",
    category: "Technology",
    description: "Personalized analytics for smarter decisions.",
  },
  {
    id: "analytics",
    name: "Analytics",
    category: "Technology",
    description: "Actionable insights from your data, in real time.",
  },
  {
    id: "wowfy",
    name: "Wowfy",
    category: "Technology",
    description: "Engaging experiences that keep users coming back.",
  },
  {
    id: "engage",
    name: "Engage",
    category: "Technology",
    description: "Tools built to boost engagement and retention.",
  },
  {
    id: "ai-prayer-assistant",
    name: "AI Prayer Assistant",
    category: "Technology",
    description: "AI companion for mindful, guided prayer.",
  },
  {
    id: "ai-lawyer",
    name: "AI Lawyer",
    category: "Technology",
    description: "AI-driven legal guidance and document support.",
  },
  {
    id: "ai-judge",
    name: "AI Judge",
    category: "Technology",
    description: "AI-assisted dispute resolution and case analysis.",
  },

  // Business Platforms
  {
    id: "doutya-ambition",
    name: "Doutya Ambition",
    category: "Business",
    description: "Goal setting and achievement platform for professionals.",
  },
  {
    id: "doutya-recruit",
    name: "Doutya Recruit",
    category: "Business",
    description: "Smarter hiring with AI-driven recruitment tools.",
  },
  {
    id: "doutya-certification",
    name: "Doutya Certification",
    category: "Business",
    description: "Verified certifications for skills that matter.",
  },
  {
    id: "axara",
    name: "Axara",
    category: "Business",
    description: "Enterprise solutions built for scale and speed.",
  },
  {
    id: "qoupled",
    name: "Qoupled",
    category: "Business",
    description: "Bringing people and partners together, seamlessly.",
  },
  {
    id: "homedel",
    name: "Homedel",
    category: "Business",
    description: "Real estate deals made simple and transparent.",
  },
  {
    id: "hourloom",
    name: "Hourloom",
    category: "Business",
    description: "Flexible scheduling and time management for teams.",
  },

  // Media & Content
  {
    id: "ping-tales",
    name: "Ping Tales",
    category: "Media",
    description: "Bite-sized stories delivered the moment they happen.",
  },
  {
    id: "bombay-chronicle",
    name: "The Bombay Chronicle",
    category: "Media",
    description: "Independent journalism covering the stories that matter.",
  },
  {
    id: "news-prep",
    name: "News Prep",
    category: "Media",
    description: "Curated news briefings for busy professionals.",
  },
  {
    id: "newsonmap",
    name: "NewsOnMap",
    category: "Media",
    description: "Local news, mapped to where it happens.",
  },
  {
    id: "caf",
    name: "Citizen Attachment Framework (CAF)",
    category: "Media",
    description: "A framework connecting citizens to civic information.",
  },

  // Trading & Marketplace
  {
    id: "game-trade-app",
    name: "Game Trade App",
    category: "Marketplace",
    description: "A marketplace to buy, sell, and trade games securely.",
  },

  // Corporate
  {
    id: "byroice",
    name: "ByRoice",
    category: "Corporate",
    description: "The parent company driving innovation across all ventures.",
    featured: true,
  },

  // Websites
  {
    id: "roice-interactive-website",
    name: "Roice Interactive Website",
    category: "Websites",
    description: "The interactive digital home of Roice Interactive.",
  },
  {
    id: "roice-strategies-website",
    name: "Roice Strategies Website",
    category: "Websites",
    description: "Strategic consulting, showcased online.",
  },
  {
    id: "kiranroice-com",
    name: "KiranRoice.com",
    category: "Websites",
    description: "The official web presence for KiranRoice.",
  },
  {
    id: "kiranroice-web-admin",
    name: "KiranRoice Web Admin",
    category: "Websites",
    description: "Admin dashboard powering KiranRoice.com.",
  },
  {
    id: "roice-groups-website",
    name: "Roice Groups Website",
    category: "Websites",
    description: "The digital front door for Roice Groups.",
  },
  {
    id: "cds-web-page",
    name: "CDS Web Page",
    category: "Websites",
    description: "Informational web page for CDS.",
  },
  {
    id: "tenman-web-page",
    name: "Tenman Web Page",
    category: "Websites",
    description: "The official web page for Tenman.",
  },
  {
    id: "ghats-restaurant-website",
    name: "Ghats Restaurant Website",
    category: "Websites",
    description: "A refined online presence for Ghats Restaurant.",
  },
];
