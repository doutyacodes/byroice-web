"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type FlowKey = "services" | "join" | "businesses";

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

const MENU_ITEMS: { key: FlowKey; label: string }[] = [
  { key: "services", label: "Explore Our Services" },
  { key: "join", label: "Join ByRoice" },
  { key: "businesses", label: "Explore Our Businesses" },
];

const FLOWS: Record<
  FlowKey,
  { prompt: string; options: string[]; closing: string }
> = {
  services: {
    prompt: "Welcome! Which service are you interested in?",
    options: [
      "Brand Strategy",
      "Product Design",
      "Growth Marketing",
      "Technology",
    ],
    closing: "Great choice! Our team will follow up with more details soon.",
  },
  join: {
    prompt: "Awesome! How would you like to join ByRoice?",
    options: ["View Careers", "Internships", "Partnerships"],
    closing: "Thanks for your interest! We'll be in touch soon.",
  },
  businesses: {
    prompt: "Here are our ventures. Which one would you like to explore?",
    options: ["ByRoice Media", "ByRoice Ventures", "ByRoice Studio"],
    closing: "Nice pick! We'll send more information your way.",
  },
};

export default function QuickChat() {
  const [flow, setFlow] = useState<FlowKey | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [resolved, setResolved] = useState(false);

  function startFlow(key: FlowKey) {
    const item = MENU_ITEMS.find((i) => i.key === key);
    if (!item) return;
    setFlow(key);
    setResolved(false);
    setMessages([
      { from: "user", text: item.label },
      { from: "bot", text: FLOWS[key].prompt },
    ]);
  }

  function selectOption(option: string) {
    if (!flow) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option },
      { from: "bot", text: FLOWS[flow].closing },
    ]);
    setResolved(true);
  }

  function goBack() {
    setFlow(null);
    setMessages([]);
    setResolved(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="w-full max-w-[320px] rounded-[32px] bg-[#FFE100] p-7 shadow-2xl shadow-black/40 sm:p-8"
    >
      <Image
        src="/assets/logo-black.png"
        alt="ByRoice"
        width={669}
        height={238}
        className="mx-auto h-8 w-auto"
      />

      <AnimatePresence mode="wait">
        {!flow ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="mb-6 mt-4 text-center text-lg font-semibold text-black sm:text-xl">
              Choose your journey
            </h2>

            <div className="flex flex-col gap-3.5">
              {MENU_ITEMS.map((item) => (
                <motion.button
                  key={item.key}
                  type="button"
                  onClick={() => startFlow(item.key)}
                  whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.18)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-white px-6 py-[18px] text-[15px] font-semibold text-black transition-shadow"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4"
          >
            <button
              type="button"
              onClick={goBack}
              className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-black/70 transition-colors hover:text-black"
            >
              <span aria-hidden="true">&larr;</span>
              Back
            </button>

            <div className="flex max-h-64 flex-col gap-2.5 overflow-y-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                    message.from === "user"
                      ? "self-end rounded-br-sm bg-black text-white"
                      : "self-start rounded-bl-sm bg-white text-black"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {!resolved && flow && (
              <div className="mt-3 flex flex-wrap gap-2">
                {FLOWS[flow].options.map((option) => (
                  <motion.button
                    key={option}
                    type="button"
                    onClick={() => selectOption(option)}
                    whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(0,0,0,0.16)" }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-shadow sm:text-sm"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            )}

            {resolved && (
              <motion.button
                type="button"
                onClick={goBack}
                whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.18)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-shadow"
              >
                Back to Menu
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
