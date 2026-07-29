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
  {
    id: "chancetrade",
    name: "ChanceTrade",
    category: "Marketplace",
    description: "A probability of an event happening based share market, where people buy and trade the share. Purely skill based.",
  },
  {
    id: "gigstar",
    name: "Gigstar",
    category: "Marketplace",
    description: "A gig application for small jobs and requirements. Gig workers and job givers have profiles and ratings.",
  },
  {
    id: "homedel",
    name: "Homedel",
    category: "Business",
    description: "A delivery app for hotels and restaurants, bypassing conventional food delivery apps with embedded logistics tech.",
  },
  {
    id: "hommunity",
    name: "Hommunity",
    category: "Community",
    description: "Apartment / Society management app with app-based security.",
  },
  {
    id: "tenman-app",
    name: "Tenman App",
    category: "Business",
    description: "Tenant management app with monitored transactions and a double approval system.",
  },
  {
    id: "hourloom",
    name: "Hourloom",
    category: "Marketplace",
    description: "Bespoke watch company with an additional creator marketplace where designers can sell or showcase their watch designs.",
    logo: "/assets/logos/hourloom.png",
  },
  {
    id: "judge",
    name: "Judge",
    category: "Technology",
    description: "Zero Court; an AI-powered judge provided with full conditions to give a judgement, including appeals.",
  },
  {
    id: "knockster",
    name: "Knockster",
    category: "Business",
    description: "Visitor management app for industries, tech parks, hospitals, schools, and high-security areas with 4-layer security.",
    logo: "/assets/logos/knockster.png",
  },
  {
    id: "lawyer",
    name: "Lawyer",
    category: "Technology",
    description: "AI-powered FriendInLaw that provides legal strategies. Intended to be a law first responder.",
  },
  {
    id: "mapogram",
    name: "Mapogram",
    category: "Technology",
    description: "A suite of map-based applications including Mapogram Social, SalesOnMap, OpsOnMap, AssetsOnMap, and ComplaintsOnMap.",
    logo: "/assets/logos/mapogram.png",
  },
  {
    id: "newsome-news-group",
    name: "Newsome News Group",
    category: "Media",
    description: "A comprehensive news ecosystem featuring Multi Perspective News, NewsOnMap, NewsPrep, and NewsTech.",
  },
  {
    id: "persanalytics",
    name: "PersAnalytics",
    category: "Technology",
    description: "A personality testing platform for individuals, companies, and doctors. Includes most known personality tests.",
  },
  {
    id: "pingtales",
    name: "PingTales",
    category: "Media",
    description: "A mobile chat-based storytelling platform where stories are presented as chats. Users can read and create stories.",
    logo: "/assets/logos/pingtales.png",
  },
  {
    id: "keekkoos",
    name: "Keekkoos",
    category: "Media",
    description: "Media platform for children aged 3-12 featuring chat/image-based stories, daily news, and kids' contests.",
  },
  {
    id: "silent-prayer",
    name: "Silent Prayer",
    category: "Community",
    description: "Religious app to find places of worship, featuring an AI-powered prayer helper and digital pooja support.",
  },
  {
    id: "qoupled",
    name: "Qoupled",
    category: "Community",
    description: "Matrimony and matchmaker app based on personality matching and interests, powered by an AI assistant.",
  },
  {
    id: "womsafe",
    name: "WomSafe",
    category: "Community",
    description: "Safety app for women and kids that checks in at designated times with safe and unsafe PIN systems.",
  },
  {
    id: "wowfy",
    name: "Wowfy",
    category: "Corporate",
    description: "A challenge-based engagement platform for brands, celebrities, schools, colleges, and offices.",
    logo: "/assets/logos/wowfy.png",
  },
  {
    id: "xortcut",
    name: "Xortcut",
    category: "Technology",
    description: "Career guidance app recommending suitable sectors, clusters, and careers based on personality from Class 5 onwards.",
    logo: "/assets/logos/xortcut.png",
  },
  {
    id: "xertify",
    name: "Xertify",
    category: "Technology",
    description: "AI-powered self-testing and certification platform for random topics.",
  },
  {
    id: "xortlist",
    name: "Xortlist",
    category: "Corporate",
    description: "Career pipeline platform where people follow dream jobs, complete challenges, and earn rewards while companies identify talent.",
  },
  {
    id: "ecior",
    name: "ECIOR",
    category: "Corporate",
    description: "Luxury watch company.",
  },
  {
    id: "jb-beha",
    name: "JB Beha",
    category: "Corporate",
    description: "Luxury clock company -- revived 19th-century brand.",
  },
  {
    id: "dua-2-wheelers",
    name: "Dua 2 Wheelers",
    category: "Corporate",
    description: "Electric two-wheelers.",
  },
  {
    id: "tritwa-trikes",
    name: "Tritwa Trikes",
    category: "Corporate",
    description: "Electric and non-electric reverse trikes.",
  },
  {
    id: "roice-manta",
    name: "Roice Manta",
    category: "Corporate",
    description: "Wing-in-Ground effect drones for military and personal use.",
  },
  {
    id: "bluebox",
    name: "BlueBox",
    category: "Technology",
    description: "Bolt-on conversion kit for 2 and 3 wheelers from ICE to electric/hybrid.",
  },
  {
    id: "oarwars",
    name: "OarWars",
    category: "Corporate",
    description: "A revolutionary new boat-based sport.",
  },
  {
    id: "atheleto",
    name: "Atheleto",
    category: "Corporate",
    description: "A completely new approach to track and field games.",
  },
  {
    id: "spellbee",
    name: "SpellBee",
    category: "Community",
    description: "Spelling Bee competition for schools.",
  },
  {
    id: "raindrops-xp",
    name: "RainDrops XP",
    category: "Business",
    description: "AI-powered curated tours, expeditions, and experiences.",
  },
  {
    id: "imhof-mukle",
    name: "Imhof & Mukle",
    category: "Corporate",
    description: "High-end audio -- revived 19th-century brand.",
  },
  {
    id: "roice-ratings",
    name: "Roice Ratings",
    category: "Business",
    description: "Proprietary rating systems and rankings such as hotel compatibility, tourism viability, and language power.",
  },
  {
    id: "zuppdate",
    name: "Zuppdate",
    category: "Healthcare",
    description: "Live updates and interaction panels for bookings and services, supporting tokens for hospitals and queue-based systems.",
  }
];