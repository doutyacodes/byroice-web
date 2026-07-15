import type { Business, BusinessCategory } from "./businesses";

export function getLongDescription(business: Business): string {
  return `${business.description} ${business.name} is one of the ventures in the ByRoice family — built with the same commitment to craft, reliability, and purpose that shapes everything we create. From first concept to everyday use, our team works closely with ${business.name} to deliver an experience clients and users can depend on.`;
}

export const CATEGORY_HIGHLIGHTS: Record<
  BusinessCategory,
  [string, string, string]
> = {
  Healthcare: [
    "Patient-first design",
    "Secure & compliant",
    "Trusted by care teams",
  ],
  Technology: ["Powered by modern AI", "Built to scale", "Developer friendly"],
  Community: [
    "Safer, connected living",
    "Real-time alerts",
    "Built for neighborhoods",
  ],
  Business: [
    "Enterprise ready",
    "Streamlined workflows",
    "Built for growth",
  ],
  Media: ["Independent voice", "Timely storytelling", "Built for readers"],
  Marketplace: ["Secure transactions", "Verified listings", "Built for trust"],
  Corporate: [
    "Guiding every venture",
    "Shared values, shared standards",
    "One family, many companies",
  ],
  Websites: [
    "Polished, on-brand design",
    "Fast and reliable",
    "Built to convert",
  ],
};
