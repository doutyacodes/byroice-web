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
    id: "assetsonmap",
    name: "AssetsOnMap",
    category: "Technology",
    description: "A live, map-based dashboard that lets businesses track physical assets and monitor their condition in real time. Built for asset-heavy industries like real estate, logistics, and manufacturing, it turns scattered spreadsheets into one visual, always-current view.",
  },
  {
    id: "atheleto",
    name: "Atheleto",
    category: "Corporate",
    description: "A reimagined approach to track and field competition, built to bring fresh energy and formats to a traditional sport. Atheleto is designed to make athletics more engaging for both competitors and spectators alike.",
  },
  {
    id: "bespoke-footwear",
    name: "Bespoke Footwear",
    category: "Marketplace",
    description: "A made-to-order footwear line for women and men, crafted around individual fit and personal style rather than mass production. Every pair is built to order, blending traditional craftsmanship with a modern, direct-to-customer experience.",
  },
  {
    id: "bespoke-men-s-formal-wear",
    name: "Bespoke Men's Formal Wear",
    category: "Marketplace",
    description: "A website-based custom formal wear service for men, offering made-to-measure precision without ever stepping into a store. From fabric to fit, every garment is built around the individual customer, delivered directly to their door.",
  },
  {
    id: "bluebox",
    name: "BlueBox",
    category: "Technology",
    description: "A bolt-on kit that converts existing petrol two- and three-wheelers into electric or hybrid vehicles. BlueBox makes going electric more accessible and affordable, without the cost of buying an entirely new vehicle.",
  },
  {
    id: "chancetrade",
    name: "ChanceTrade",
    category: "Marketplace",
    description: "A skill-based probability exchange where people trade shares priced like real-time probabilities, ranging from 0 to 100%, on sports and other events. ChanceTrade brings the mechanics of a share market to the world of predictions and outcomes.",
  },
  {
    id: "coleus",
    name: "Coleus",
    category: "Healthcare",
    description: "A herbal concentrate derived from the Coleus barbatus plant, traditionally used for steaming and as a natural remedy for the common cold. Rooted in traditional wellness practices, it's crafted for everyday, at-home use.",
  },
  {
    id: "complaintsonmap",
    name: "ComplaintsOnMap",
    category: "Technology",
    description: "A geolocation-based customer service tool that lets customers log issues along with their exact location. Businesses gain a live, visual picture of where problems are happening, helping them respond faster and spot patterns over time.",
  },
  {
    id: "dua-2-wheelers",
    name: "Dua 2 Wheelers",
    category: "Corporate",
    description: "An electric two-wheeler company built for the next generation of everyday mobility. Dua is designed around efficiency, affordability, and a cleaner way to get around the city.",
  },
  {
    id: "ecior",
    name: "ECIOR",
    category: "Corporate",
    description: "A luxury watch company crafted for those who value precision, heritage, and timeless design. ECIOR brings old-world watchmaking sensibility to a modern audience.",
  },
  {
    id: "gigstar",
    name: "Gigstar",
    category: "Marketplace",
    description: "A gig marketplace where workers and job-givers connect directly, each building their own profile and reputation over time. Gigstar makes it simple to post small jobs and requirements, and just as simple for skilled workers to find and accept them.",
  },
  {
    id: "homedel",
    name: "Homedel",
    category: "Business",
    description: "A dedicated delivery platform for hotels and restaurants that bypasses conventional food delivery aggregators. With logistics tech built in-house, Homedel gives hospitality businesses full control over their delivery experience.",
  },
  {
    id: "hommunity",
    name: "Hommunity",
    category: "Community",
    description: "An apartment and society management app with app-based security built in. Hommunity brings modern, connected living to residential communities, simplifying everything from approvals to access.",
  },
  {
    id: "hourloom",
    name: "Hourloom",
    category: "Marketplace",
    description: "A bespoke watch company paired with a creator marketplace, where independent designers can showcase and sell their own watch designs. Hourloom brings together fine craftsmanship and a platform for emerging design talent.",
    logo: "/assets/logos/hourloom.png",
  },
  {
    id: "imhof-mukle",
    name: "Imhof & Mukle",
    category: "Corporate",
    description: "A revived nineteenth-century high-end audio brand, bringing a storied name in sound back to a new generation of listeners. Imhof & Mukle blends heritage engineering with contemporary audio craftsmanship.",
  },
  {
    id: "infused-botanicals",
    name: "Infused Botanicals",
    category: "Corporate",
    description: "A line of non-alcoholic, botanically infused drinks crafted for those who want flavor and ritual without the alcohol. Infused Botanicals is built for a new generation of mindful drinking.",
  },
  {
    id: "jb-beha",
    name: "JB Beha",
    category: "Corporate",
    description: "A revived nineteenth-century luxury clock brand, restoring a piece of horological history for today's collectors. JB Beha combines heritage design with meticulous, modern craftsmanship.",
  },
  {
    id: "judge-zero-court",
    name: "Judge (Zero Court)",
    category: "Technology",
    description: "An AI-powered judgment platform where the full facts and conditions of a dispute are reviewed to deliver a structured ruling, with up to ten rounds of appeal as new facts emerge. Designed for use at police stations during FIR filing, Judge offers a faster, more accessible first layer of resolution.",
  },
  {
    id: "keekkoos",
    name: "Keekkoos",
    category: "Media",
    description: "A media platform built for kids aged three to twelve, offering chat- and image-based stories, age-appropriate daily news, and contests. Keekkoos is designed to give young audiences safe, engaging content made just for them.",
  },
  {
    id: "knockster",
    name: "Knockster",
    category: "Business",
    description: "A visitor management app for industries, tech parks, hospitals, schools, and high-security areas, offering four layers of security that clients can choose from based on their needs. Knockster makes access control simple, flexible, and secure.",
    logo: "/assets/logos/knockster.png",
  },
  {
    id: "lawyer-friendinlaw",
    name: "Lawyer (FriendInLaw)",
    category: "Technology",
    description: "An AI-powered legal companion where anyone can upload their issue and receive help with strategy and next steps. Built to act as a first responder for legal questions, FriendInLaw makes legal guidance more approachable and accessible.",
  },
  {
    id: "mapogram-social",
    name: "Mapogram Social",
    category: "Media",
    description: "A social media platform built around a map interface, designed to bring people together around place rather than an endless feed. Mapogram Social offers a fresh alternative to traditional doomscrolling.",
  },
  {
    id: "multi-perspective-news",
    name: "Multi Perspective News",
    category: "Media",
    description: "A news format that presents every story through the perspectives of all parties involved. Multi Perspective News is built for readers who want the fuller picture, not just one side of the story.",
  },
  {
    id: "near-expiry-discount-marketplace",
    name: "Near-Expiry Discount Marketplace",
    category: "Marketplace",
    description: "A marketplace connecting shoppers with retailers and brands offering genuine discounts on products nearing their expiry date. It's a smarter way to shop, saving money while helping cut down on unnecessary waste.",
  },
  {
    id: "newsonmap",
    name: "NewsOnMap",
    category: "Media",
    description: "A news platform that shows stories plotted on a map, right at the location where each event happened. NewsOnMap brings a visual, spatial dimension to how people explore the news.",
  },
  {
    id: "newsprep",
    name: "NewsPrep",
    category: "Technology",
    description: "An AI-powered current-affairs test prep app that brings in perspectives, debates, and structured practice. NewsPrep is built for students preparing for exams that demand a strong grasp of the news.",
  },
  {
    id: "newstech",
    name: "NewsTech",
    category: "Technology",
    description: "AI-powered technology built specifically for newspapers and news companies, helping them work smarter and faster. NewsTech brings modern AI capability to the newsroom.",
  },
  {
    id: "oarwars",
    name: "OarWars",
    category: "Corporate",
    description: "A revolutionary new boat-based sport, built from the ground up for a new generation of competitors and fans. OarWars brings fresh energy to competitive water sports.",
  },
  {
    id: "opsonmap",
    name: "OpsOnMap",
    category: "Technology",
    description: "A live, map-based dashboard that shows businesses exactly where their staff and operational issues are at any given moment. OpsOnMap turns scattered field operations into one clear, visual picture.",
  },
  {
    id: "persanalytics",
    name: "PersAnalytics",
    category: "Technology",
    description: "A personality testing platform for individuals, companies and organisations, and doctors, bringing together most of the world's known personality assessment frameworks in one place. PersAnalytics is designed to serve personal, professional, and clinical needs alike.",
  },
  {
    id: "petrichor-xp",
    name: "Petrichor XP",
    category: "Community",
    description: "A curated lifestyle platform offering hands-on, ticketed recreational workshops and immersive group experiences. Petrichor XP is built for people who want to spend their time doing something memorable, not just scrolling through it.",
  },
  {
    id: "pingtales",
    name: "PingTales",
    category: "Media",
    description: "A mobile storytelling app told entirely through text and chat-style conversations, with a browsing experience inspired by Netflix. PingTales lets people read stories in an entirely new format, and create their own as well.",
    logo: "/assets/logos/pingtales.png",
  },
  {
    id: "qoupled",
    name: "Qoupled",
    category: "Community",
    description: "A matrimony, matchmaking, and dating platform built around personality compatibility and shared interests, fully supported by an AI assistant that acts like a trusted friend throughout the journey. Qoupled is designed to make finding the right match feel personal, not transactional.",
  },
  {
    id: "roice-manta-w-i-g-craft",
    name: "Roice Manta / W-I-G Craft",
    category: "Corporate",
    description: "Wing-in-ground-effect craft engineered for both military and personal or manned use. Roice Manta represents a bold step into next-generation aviation and transport technology.",
  },
  {
    id: "roice-ratings",
    name: "Roice Ratings",
    category: "Business",
    description: "A proprietary ratings and ranking system offering services like hotel compatibility scores, tourism viability indices, and language power rankings to institutions worldwide. Roice Ratings is built to bring clarity and credibility to complex comparisons.",
  },
  {
    id: "salesonmap",
    name: "SalesOnMap",
    category: "Technology",
    description: "A live, map-based dashboard that shows sales teams exactly where their potential customers are. SalesOnMap turns a list of leads into a clear, visual territory to work.",
  },
  {
    id: "silent-prayer",
    name: "Silent Prayer",
    category: "Community",
    description: "A religious and spiritual app that helps people find their place of worship and other details on a map, alongside an AI-powered prayer helper that guides users on exactly what to pray, to whom, and how — including support for digital pooja. Silent Prayer brings faith and technology together with care.",
  },
  {
    id: "spellbee",
    name: "SpellBee",
    category: "Community",
    description: "A spelling bee competition platform built for schools, bringing structure, excitement, and healthy competition to a classic format. SpellBee makes it easy for schools to run engaging spelling programs.",
  },
  {
    id: "strobilanthes",
    name: "Strobilanthes",
    category: "Healthcare",
    description: "A herbal concentrate derived from the Strobilanthes alternata plant, rooted in traditional practices for supporting wound healing. It's crafted with care for those who trust natural, time-tested remedies.",
  },
  {
    id: "tenman-app",
    name: "Tenman App",
    category: "Business",
    description: "A tenant management app where every transaction is monitored through a double-approval system, designed to prevent issues before they happen. Tenman App brings transparency and trust to the landlord-tenant relationship.",
  },
  {
    id: "tepache",
    name: "Tepache",
    category: "Corporate",
    description: "A fermented, pineapple-based beverage rooted in traditional craft and bursting with natural flavor. Tepache brings a beloved fermented drink tradition to a new audience.",
  },
  {
    id: "tritwa-trikes",
    name: "Tritwa Trikes",
    category: "Corporate",
    description: "An electric and non-electric three-wheeler company built around the reverse trike format. Tritwa offers a distinctive, efficient alternative for personal mobility.",
  },
  {
    id: "womsafe",
    name: "WomSafe",
    category: "Community",
    description: "A safety app for women, kids, or anyone who wants extra peace of mind, where the app checks in with users at designated times. A safe PIN confirms all is well, while an unsafe PIN quietly signals danger — giving users a simple, powerful safety net.",
  },
  {
    id: "wowfy-social-challengesonmap",
    name: "Wowfy Social / ChallengesOnMap",
    category: "Corporate",
    description: "A challenge-based engagement platform that lets brands and celebrities connect with their fans through fun, interactive challenges. Wowfy Social turns audience engagement into something people genuinely want to take part in.",
    logo: "/assets/logos/wowfy.png",
  },
  {
    id: "wowffice",
    name: "Wowffice",
    category: "Corporate",
    description: "A challenge-based engagement platform designed to bring energy and connection into the workplace. Wowffice helps teams engage with each other through fun, lightweight challenges.",
  },
  {
    id: "wowschool",
    name: "WowSchool",
    category: "Corporate",
    description: "A challenge-based engagement platform built to boost participation and spirit among students. WowSchool brings a playful, competitive energy to campus life.",
  },
  {
    id: "wowgage",
    name: "Wowgage",
    category: "Corporate",
    description: "A simple, temporary challenge platform designed for hotels, restaurants, and similar venues. Wowgage makes it easy to run short, engaging campaigns that get guests involved.",
  },
  {
    id: "xertify",
    name: "Xertify",
    category: "Technology",
    description: "An AI-powered self-testing and certification platform where anyone can test themselves on virtually any topic, no matter how niche. Xertify makes it possible to prove knowledge and curiosity on your own terms.",
  },
  {
    id: "xortcut",
    name: "Xortcut",
    category: "Technology",
    description: "A career guidance and hand-holding app that identifies the exact sectors, clusters, and careers best suited to a person's personality and interests, starting from class five all the way through adulthood. Xortcut is built to take the guesswork out of choosing a path.",
    logo: "/assets/logos/xortcut.png",
  },
  {
    id: "xortlist",
    name: "Xortlist",
    category: "Corporate",
    description: "A career pipeline app where people follow their dream job through a structured, multi-year journey of challenges, levels, and rewards — from goodies and internships to company visits and, ultimately, a real shot at the job. Xortlist is designed to connect deserving talent with the companies and opportunities they'd otherwise never reach.",
  },
  {
    id: "zuppdate",
    name: "Zuppdate",
    category: "Technology",
    description: "A live update and interaction platform for bookings, events, and services — from the moment of booking, through the event itself, to what happens after. Whether it's a hospital token or a queue at any service, Zuppdate lets people take a token, track it live, see their expected time, and stay updated on any changes along the way.",
  },
];
