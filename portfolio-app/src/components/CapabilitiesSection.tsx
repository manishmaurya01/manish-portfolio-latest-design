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
    <section id="capabilities" className="py-24 relative bg-[var(--bg-primary)] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-200">
      {/* Background ambient radial accents */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with 3D floating object */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 font-semibold">
              <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>Capabilities &amp; Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
              What I Do &amp; <br />
              <span className="gradient-text-accent">How I Deliver Value.</span>
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Combining engineering fundamentals with modern design aesthetics and smart automation to build end-to-end digital solutions.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <FloatingGeometry3D shape="icosahedron" size={130} glowColor="#3b82f6" wireframeColor="#6366f1" />
            <span className="text-[10px] font-mono text-slate-400 dark:text-neutral-400 mt-1">Interactive 3D Mesh</span>
          </div>
        </div>

        {/* 3 Interactive 3D Tilt Cards with Parallax Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <ParallaxWrapper key={item.id} speed={item.speed} maxMouseOffset={8} className="h-full">
                <TiltCard3D
                  maxTilt={10}
                  dataCursor="SERVICE"
                  className="h-full"
                >
                  <div className="h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#111422]/90 dark:via-[#0a0c14]/90 dark:to-[#070709]/95 backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 shadow-sm dark:shadow-xl group">
                    <div>
                      {/* Top Bar: Icon + Category Tag */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-neutral-400 font-medium">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Feature Checkpoints */}
                      <ul className="space-y-2.5 mb-6">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-neutral-300">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills Footer */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5"
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
