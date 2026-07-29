"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/icons";

const PATHWAYS = [
  {
    number: "1",
    title: "Join the Engine",
    description: "Work at the centre of ByRoice, where ideas become strategies, systems, products, prototypes and companies.",
    details: "The Engine works across ByRoice assignments and businesses. You may move from research to product development, from an industrial design challenge to a digital platform, or from a client problem to a venture of our own.",
    rolesTitle: "Possible disciplines",
    roles: [
      "Strategy and venture architecture",
      "Research and analytical frameworks",
      "R&D and prototyping",
      "Product and industrial design",
      "Brand and communication design",
      "Software, engineering and technology",
      "Business building and launch operations"
    ],
    cta: "Join the ByRoice Engine",
    ctaLink: "#",
  },
  {
    number: "2",
    title: "Join a Business",
    description: "Become part of one ByRoice business and help turn its early foundation into a focused, operating company.",
    details: "These roles suit people who want the energy of an early-stage venture, the support of a wider creation ecosystem and the opportunity to shape how a business is built from its beginning.",
    rolesTitle: "Possible roles",
    roles: [
      "Product and operations",
      "Sales, partnerships and business development",
      "Technology and engineering",
      "Customer experience and community",
      "Marketing and growth",
      "Domain-specific specialist roles"
    ],
    cta: "Find a Business to Join",
    ctaLink: "#",
  },
  {
    number: "3",
    title: "Lead a Business",
    description: "Take responsibility for a ByRoice venture and build it beyond the 0→1 stage.",
    details: "ByRoice is strongest at discovering, defining and developing the beginning. The right leader takes that foundation, builds the team, raises or deploys capital, establishes the market and creates an independent company around it.",
    rolesTitle: "Leadership pathways",
    roles: [
      "Founder-in-residence or entrepreneur-in-residence",
      "Chief executive or business head",
      "Chief operating officer",
      "Technical co-founder",
      "Country, market or category lead"
    ],
    cta: "Lead a ByRoice Business",
    ctaLink: "#",
    footer: "Leadership structures may include salary, performance incentives and meaningful equity, depending on the venture, stage, commitment and capital requirements."
  }
];

export default function CareerPathways() {
  return (
    <section id="pathways" className="px-6 py-24 sm:px-10 sm:py-28 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="space-y-12 lg:space-y-24">
          {PATHWAYS.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 shadow-lg shadow-black/40 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#FFE100]/35 hover:shadow-2xl hover:shadow-[#FFE100]/5 overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#FFE100]/10 opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
              />
              <div className="lg:col-span-5 relative z-10">
                <span className="text-[#FFE100] text-xl font-bold tracking-widest">{pathway.number}.</span>
                <h3 className="mt-4 text-3xl font-bold text-white">{pathway.title}</h3>
                <p className="mt-4 text-xl font-medium text-[#FFE100]/90 leading-relaxed">{pathway.description}</p>
                <p className="mt-4 text-base text-white/70 leading-relaxed">{pathway.details}</p>
                
                <div className="mt-10">
                  <Link
                    href={pathway.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full border border-[#FFE100]/30 bg-[#FFE100]/5 px-6 py-3 text-sm font-semibold text-[#FFE100] transition-colors hover:bg-[#FFE100]/10 hover:border-[#FFE100]/50"
                  >
                    {pathway.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 lg:mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-6">{pathway.rolesTitle}</h4>
                <ul className="space-y-4">
                  {pathway.roles.map((role) => (
                    <li key={role} className="flex items-start text-lg text-white/80">
                      <span className="mr-4 mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                      <span className="leading-relaxed">{role}</span>
                    </li>
                  ))}
                </ul>
                
                {pathway.footer && (
                  <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-sm text-white/60 leading-relaxed italic">{pathway.footer}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
