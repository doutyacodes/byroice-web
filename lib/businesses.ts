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
    id: "keekkoo",
    name: "Keekkoo",
    category: "Media",
    description: "",
    logo: "/assets/logos/keekkoo.png",
    url: "https://www.keekkoo.com/",
  },
  {
    id: "qatha",
    name: "Qatha",
    category: "Media",
    description: "",
    logo: "/assets/logos/qatha.png",
    url: "https://www.qatha.com/",
  },
  {
    id: "xortcut",
    name: "Xortcut",
    category: "Technology",
    description: "",
    logo: "/assets/logos/xortcut.png",
    url: "https://www.xortcut.com/",
  },
  {
    id: "zuppdate",
    name: "Zuppdate",
    category: "Technology",
    description: "",
    logo: "/assets/logos/zuppdate.png",
    url: "https://www.zuppdate.com/",
  },
  {
    id: "roice-strategies",
    name: "Roice Strategies",
    category: "Business",
    description: "",
    logo: "/assets/logos/roicestrategies.png",
    url: "https://www.roicestrategies.com",
  },
  {
    id: "zamachar",
    name: "Zamachar",
    category: "Media",
    description: "",
    logo: "/assets/logos/zamachar.png",
    url: "https://www.zamachar.com",
  }
];
