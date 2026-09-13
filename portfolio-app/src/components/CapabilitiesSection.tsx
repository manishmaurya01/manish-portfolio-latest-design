"use client";

import React from "react";
import { Monitor, Palette, Cpu, CheckCircle, Sparkles } from "lucide-react";
import TiltCard3D from "./3d/TiltCard3D";
import FloatingGeometry3D from "./3d/FloatingGeometry3D";
import ParallaxWrapper from "./common/ParallaxWrapper";

const capabilities = [
  {
    id: "web-dev",
    icon: Monitor,
    title: "Web Development",
    tag: "Core Engineering",
    description: "Architecting responsive, high-performance web applications and dynamic portals with clean component architecture and scalable codebases.",
    points: [
      "Modern React.js and Next.js applications",
      "Full-stack integration with Node, Express & PHP",
      "Robust database design with MySQL & Firebase",
      "Mobile-responsive, accessibility-minded layouts"
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "MySQL", "Firebase"],
    speed: 8
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI / UX Design",
    tag: "Design Craft",
    description: "Designing user-first digital products with crisp typography, intentional color palettes, frictionless checkout funnels, and responsive micro-interactions.",
    points: [
      "Intuitive user journeys & wireframing",
      "Modern aesthetic systems (dark luxury, glassmorphism)",
      "High-converting landing pages & web apps",
      "Pixel-perfect responsive screen adaptation"
    ],
    tech: ["Figma Systems", "Micro-animations", "Responsive Grid", "Design Tokens"],
    speed: -6
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Automation Workflows",
    tag: "Smart Ops",
    description: "Building automated business workflows and webhook connectors using n8n and REST APIs to eliminate repetitive tasks and streamline communications.",
    points: [
      "Custom n8n workflow construction",
      "Automated lead capture & notification bots",
      "Multi-service webhook routing & data pipelines",
      "API integrations connecting forms to databases"
    ],
    tech: ["n8n Automation", "Webhooks", "REST APIs", "JSON Pipelines"],
    speed: 10
  }
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with 3D floating object */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-3 font-medium">
              // 03 — Capabilities &amp; Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
              What I Do &amp; <br />
              <span className="gradient-text-accent">How I Deliver Value.</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Combining engineering fundamentals with modern design aesthetics and smart automation to build end-to-end digital solutions.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <FloatingGeometry3D shape="icosahedron" size={120} glowColor="#f59e0b" wireframeColor="#d97706" />
            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 mt-1">Interactive 3D Mesh</span>
          </div>
        </div>

        {/* 3 Interactive 3D Tilt Cards with Parallax Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <ParallaxWrapper key={item.id} speed={item.speed > 0 ? 3 : -2} maxMouseOffset={6} className="h-full">
                <TiltCard3D
                  maxTilt={5}
                  dataCursor="SERVICE"
                  className="h-full"
                >
                  <div className="h-full rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#141417] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-stone-300 dark:hover:border-stone-700 shadow-xs dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] group">
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 group-hover:text-amber-500 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 text-stone-600 dark:text-stone-400 font-medium">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2.5 tracking-tight group-hover:text-amber-500 transition-colors font-display">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Feature Checkpoints */}
                      <ul className="space-y-2.5 mb-6">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                            <CheckCircle className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills Footer */}
                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-1.5">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-[10px] font-mono text-stone-600 dark:text-stone-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard3D>
              </ParallaxWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
