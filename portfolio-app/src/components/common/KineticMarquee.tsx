"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface KineticMarqueeProps {
  reverse?: boolean;
  speed?: "normal" | "slow" | "fast";
  items?: string[];
  className?: string;
}

const defaultItems = [
  "Creative Developer",
  "Full-Stack Architect",
  "UI/UX Craftsman",
  "n8n Workflow Automation",
  "Next.js & React 19",
  "Three.js 3D WebGL",
  "Tailwind CSS Systems",
  "MySQL & Firebase BaaS",
  "Parul Hackathon Finalist",
];

export default function KineticMarquee({
  reverse = false,
  items = defaultItems,
  className = "",
}: KineticMarqueeProps) {
  // Repeat items for seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-4 border-y border-white/[0.08] bg-black/40 backdrop-blur-sm select-none ${className}`}
      aria-hidden="true"
    >
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-6 text-xs sm:text-sm font-mono font-medium tracking-wider uppercase text-neutral-400 hover:text-[#00f0ff] transition-colors"
          >
            <span>{item}</span>
            <Sparkles className="w-3 h-3 text-[#00f0ff]/60 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
