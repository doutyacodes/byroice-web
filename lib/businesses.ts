export type BusinessCategory =
  | "Healthcare"
  | "Technology"
  | "Community"
  | "Business"
  | "Media"
  | "Marketplace"
  | "Corporate"
  | "Websites"
  | "Mobile Apps";

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
  "Marketplace",
  "Corporate",
  "Websites",
  "Mobile Apps",
];

export const BUSINESSES: Business[] = [
  // ==================================================
  // Healthcare
  // ==================================================
  {
    id: "healway",
    name: "Hospital Token",
    category: "Healthcare",
    description:
      "Complete hospital management platform for healthcare providers.",
  },
  {
    id: "knockster-hospitals",
    name: "Knockster Hospitals",
    category: "Healthcare",
    description:
      "Digital patient queue, appointment booking, and hospital visitor management platform.",
  },
  {
    id: "clinic",
    name: "Hospital Token Admin",
    category: "Healthcare",
    description:
      "Clinic appointment booking and patient management solution.",
  },

  // ==================================================
  // Community
  // ==================================================
  {
    id: "knockster-org",
    name: "Knockster Org",
    category: "Community",
    description:
      "Organization management platform for the Knockster ecosystem.",
  },
  {
    id: "knockster-super",
    name: "Knockster Super",
    category: "Community",
    description:
      "Central super administrator portal for all Knockster deployments.",
  },
  {
    id: "knockster-safety",
    name: "Knockster Safety",
    category: "Community",
    description:
      "Safety and incident management platform for organizations.",
  },
  {
    id: "knockster-company",
    name: "Knockster Company",
    category: "Community",
    description:
      "Enterprise visitor, employee, and access management platform.",
  },
  {
    id: "knockster-page",
    name: "Knockster Page",
    category: "Community",
    description:
      "Public information and onboarding portal for organizations.",
  },
  {
    id: "knockster-website",
    name: "Knockster Website",
    category: "Community",
    description:
      "Official website for the Knockster ecosystem.",
  },
  {
    id: "gatewise",
    name: "Hommunity Admin",
    category: "Community",
    description:
      "Smart gate entry and visitor management solution.",
  },
  {
    id: "hommunity-web",
    name: "Hommunity Web",
    category: "Community",
    description:
      "Modern apartment and residential community management platform.",
  },
  {
    id: "safety-monitor",
    name: "Safety Monitor",
    category: "Community",
    description:
      "Real-time monitoring and security dashboard for organizations.",
  },

  // ==================================================
  // Technology
  // ==================================================
  {
    id: "mapogram-challenge",
    name: "Mapogram Challenge",
    category: "Technology",
    description:
      "Interactive mapping challenge platform.",
  },
  {
    id: "doutya-ai",
    name: "Doutya AI",
    category: "Technology",
    description:
      "AI-powered productivity and automation platform.",
  },

  {
    id: "xortcut",
    name: "Xortcut",
    category: "Technology",
    description:
      "Smart productivity shortcuts for faster everyday workflows.",
  },
  {
    id: "persanalytics",
    name: "PersAnalytics",
    category: "Technology",
    description:
      "Advanced analytics platform delivering personalized business insights.",
  },
  {
    id: "persanalytics-landing",
    name: "PersAnalytics Landing",
    category: "Technology",
    description:
      "Landing website for the PersAnalytics platform.",
  },
  {
    id: "analytics",
    name: "Analytics",
    category: "Technology",
    description:
      "Business intelligence and real-time analytics platform.",
  },
  {
    id: "wowfy-site",
    name: "Wowfy Site",
    category: "Technology",
    description:
      "Official website for the Wowfy platform.",
  },
  {
    id: "wowfy-admin",
    name: "Wowfy Admin",
    category: "Technology",
    description:
      "Administrative dashboard for managing the Wowfy platform.",
  },

  // ==================================================
  // Business
  // ==================================================
  {
    id: "doutya-ambition",
    name: "Doutya Ambition",
    category: "Business",
    description:
      "Goal planning and achievement platform for individuals and teams.",
  },
  {
    id: "doutya-recruit",
    name: "Doutya Recruit",
    category: "Business",
    description:
      "AI-powered recruitment and hiring management solution.",
  },
  {
    id: "doutya-certification",
    name: "Doutya Certification",
    category: "Business",
    description:
      "Digital certification and credential verification platform.",
  },
  {
    id: "axara-admin",
    name: "Axara Admin",
    category: "Business",
    description:
      "Administration dashboard for the Axara platform.",
  },
  {
    id: "axara-api",
    name: "Axara API",
    category: "Business",
    description:
      "Backend APIs powering the Axara ecosystem.",
  },
  {
    id: "axara-co",
    name: "Axara Co",
    category: "Business",
    description:
      "Corporate business platform under the Axara brand.",
  },
  {
    id: "axara-website",
    name: "Axara Website",
    category: "Business",
    description:
      "Official website for Axara products and services.",
  },
  {
    id: "qoupled-ai",
    name: "Qoupled AI",
    category: "Business",
    description:
      "AI-powered relationship and matchmaking platform.",
  },
  {
    id: "homedel",
    name: "Homedel",
    category: "Business",
    description:
      "Complete restaurant ordering and home delivery management platform.",
  },
  {
    id: "homedel-merchant",
    name: "Homedel Merchant",
    category: "Business",
    description:
      "Restaurant dashboard for managing menus, orders, and deliveries.",
  },
  {
    id: "hourloom",
    name: "Hourloom",
    category: "Business",
    description:
      "Scheduling and workforce management platform.",
  },

  // ==================================================
  // Media
  // ==================================================
  {
    id: "ping-tales",
    name: "Ping Tales",
    category: "Media",
    description:
      "Digital storytelling and publishing platform.",
  },
  {
    id: "bombay-chronicle",
    name: "The Bombay Chronicle",
    category: "Media",
    description:
      "Independent digital news publication.",
  },
  {
    id: "news-prep",
    name: "News Prep",
    category: "Media",
    description:
      "Curated news preparation and briefing platform.",
  },
  {
    id: "newsonmap",
    name: "NewsOnMap",
    category: "Media",
    description:
      "Location-based news discovery platform.",
  },
  {
    id: "caf",
    name: "Citizen Attachment Framework (CAF)",
    category: "Media",
    description:
      "Citizen engagement and civic information framework.",
  },

  // ==================================================
  // Marketplace
  // ==================================================
  {
    id: "game-trade-app",
    name: "Game Trade App",
    category: "Marketplace",
    description:
      "Marketplace for buying, selling, and trading video games.",
  },

  // ==================================================
  // Corporate
  // ==================================================


  // ==================================================
  // Websites
  // ==================================================
  {
    id: "roice-interactive-website",
    name: "Roice Interactive Website",
    category: "Websites",
    description:
      "Official website for Roice Interactive.",
  },
  {
    id: "roice-strategies-website",
    name: "Roice Strategies Website",
    category: "Websites",
    description:
      "Official website for Roice Strategies.",
  },
  {
    id: "kiranroice",
    name: "KiranRoice.com",
    category: "Websites",
    description:
      "Official website of Kiran Roice.",
  },
  {
    id: "kiranroice-admin",
    name: "KiranRoice Web Admin",
    category: "Websites",
    description:
      "Administrative dashboard for KiranRoice.com.",
  },
  {
    id: "roice-groups-website",
    name: "Roice Groups Website",
    category: "Websites",
    description:
      "Official corporate website for Roice Groups.",
  },
  {
    id: "cds-web-page",
    name: "CDS Web Page",
    category: "Websites",
    description:
      "Official website for CDS.",
  },
  {
    id: "tenman-web-page",
    name: "Tenman Web Page",
    category: "Websites",
    description:
      "Official website for Tenman.",
  },
  {
    id: "ghats-restaurant-website",
    name: "Ghats Restaurant Website",
    category: "Websites",
    description:
      "Official restaurant website with online brand presence.",
  },

  // ==================================================
  // Mobile Apps
  // ==================================================
  {
    id: "knockster-safety-flutter",
    name: "Knockster Safety Flutter",
    category: "Mobile Apps",
    description:
      "Flutter mobile application for enterprise safety and emergency management.",
  },
  {
    id: "knockster-mobile-nurse",
    name: "Knockster Mobile Nurse",
    category: "Mobile Apps",
    description:
      "Healthcare mobile application for nurses and hospital staff.",
  },
  {
    id: "doutya-prep-mobile",
    name: "Doutya Prep WebView Mobile",
    category: "Mobile Apps",
    description:
      "Mobile application for accessing Doutya Prep through WebView.",
  },
  {
    id: "knockster-mobile",
    name: "Knockster",
    category: "Mobile Apps",
    description:
      "Enterprise visitor, employee, and gate access management mobile application.",
  },
  {
    id: "knockster-user",
    name: "Knockster User",
    category: "Mobile Apps",
    description:
      "Resident and employee mobile application for visitor approvals and access.",
  },
  {
    id: "knockster-security",
    name: "Knockster Security",
    category: "Mobile Apps",
    description:
      "Security guard application for visitor verification and gate operations.",
  },
  {
    id: "wowfy-mobile",
    name: "Wowfy",
    category: "Mobile Apps",
    description:
      "Official Wowfy mobile application.",
  },
  {
    id: "wowfy-lite",
    name: "Wowfy Lite",
    category: "Mobile Apps",
    description:
      "Lightweight version of the Wowfy mobile application.",
  },
  {
    id: "wowfy-team",
    name: "Wowfy Team",
    category: "Mobile Apps",
    description:
      "Team collaboration and management application for Wowfy.",
  },
  {
    id: "hommunity-mobile",
    name: "Hommunity",
    category: "Mobile Apps",
    description:
      "Apartment and residential community management mobile application.",
  },
  {
    id: "engage-mobile",
    name: "Engage",
    category: "Mobile Apps",
    description:
      "Customer engagement and communication mobile platform.",
  },
  {
    id: "xortcut-mobile",
    name: "Xortcut",
    category: "Mobile Apps",
    description:
      "Productivity and smart shortcuts mobile application.",
  },
  {
    id: "xortcut-institute-admin",
    name: "Xortcut Institute Admin",
    category: "Mobile Apps",
    description:
      "Administrative mobile application for educational institutions.",
  },
  {
    id: "xortlist-parent",
    name: "Xortlist Parent",
    category: "Mobile Apps",
    description:
      "Parent companion application for the Xortlist platform.",
  },
  {
    id: "ai-prayer-assistant",
    name: "AI Prayer Assistant",
    category: "Mobile Apps",
    description:
      "AI-powered guided prayer and spiritual companion.",
  },
  {
    id: "game-trade-mobile",
    name: "Game Trade Mobile App",
    category: "Mobile Apps",
    description:
      "Marketplace mobile application for buying, selling, and trading games.",
  },
  {
    id: "ping-tales-mobile",
    name: "Ping Tales",
    category: "Mobile Apps",
    description:
      "Digital storytelling and reading mobile application.",
  },
  {
    id: "qoupled-mobile",
    name: "Qoupled",
    category: "Mobile Apps",
    description:
      "Relationship and matchmaking mobile application.",
  },
  {
    id: "doutya-certification-mobile",
    name: "Doutya Certification",
    category: "Mobile Apps",
    description:
      "Digital certification verification mobile application.",
  },
  {
    id: "bombay-chronicle-mobile",
    name: "The Bombay Chronicle",
    category: "Mobile Apps",
    description:
      "Digital news reading application.",
  },
  {
    id: "news-prep-mobile",
    name: "News Prep",
    category: "Mobile Apps",
    description:
      "Curated news briefing mobile application.",
  },
  {
    id: "wowfy-admin-mobile",
    name: "Wowfy Admin",
    category: "Mobile Apps",
    description:
      "Administrative mobile application for the Wowfy platform.",
  },
  {
    id: "newsonmap-mobile",
    name: "NewsOnMap",
    category: "Mobile Apps",
    description:
      "Location-based news discovery mobile application.",
  },
  {
    id: "newsonmap-admin",
    name: "NewsOnMap Admin",
    category: "Mobile Apps",
    description:
      "Administration application for the NewsOnMap platform.",
  },
  {
    id: "mapogram-mobile",
    name: "Mapogram",
    category: "Mobile Apps",
    description:
      "Interactive mapping and geospatial mobile platform.",
  },
  {
    id: "mapogram-complaints",
    name: "Mapogram Complaints",
    category: "Mobile Apps",
    description:
      "Complaint reporting and issue tracking application.",
  },
  {
    id: "mapogram-admin-panel",
    name: "Mapogram Admin Panel",
    category: "Mobile Apps",
    description:
      "Administrative dashboard for Mapogram services.",
  },
  {
    id: "mapogram-xortlist",
    name: "Mapogram Xortlist",
    category: "Mobile Apps",
    description:
      "Mapogram integration for the Xortlist platform.",
  },
  {
    id: "mapogram-opsmap",
    name: "Mapogram OpsMap",
    category: "Mobile Apps",
    description:
      "Operational mapping and field management application.",
  },
  {
    id: "mapogram-asset-map",
    name: "Mapogram Asset Map",
    category: "Mobile Apps",
    description:
      "Asset tracking and geospatial management application.",
  },
  {
    id: "mapogram-customer-map",
    name: "Mapogram Customer Map",
    category: "Mobile Apps",
    description:
      "Customer location and service mapping application.",
  },
  {
    id: "homedel-customer",
    name: "Homedel Customer",
    category: "Mobile Apps",
    description:
      "Customer application for ordering food and tracking home deliveries.",
  },
  {
    id: "homedel-merchant-mobile",
    name: "Homedel Merchant",
    category: "Mobile Apps",
    description:
      "Restaurant application for managing orders, menus, and deliveries.",
  },
  {
    id: "caf-mobile",
    name: "Citizen Attachment Framework (CAF)",
    category: "Mobile Apps",
    description:
      "Citizen engagement and civic information mobile application.",
  },
  {
    id: "ai-lawyer",
    name: "AI Lawyer",
    category: "Mobile Apps",
    description:
      "AI-powered legal assistant for legal guidance and document analysis.",
  },
  {
    id: "ai-judge",
    name: "AI Judge",
    category: "Mobile Apps",
    description:
      "AI-assisted dispute resolution and legal decision support platform.",
  },
];