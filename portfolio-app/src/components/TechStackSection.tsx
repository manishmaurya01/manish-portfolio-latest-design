"use client";

import React, { useState } from "react";
import { skillCategories, allSkillsList } from "@/data/skills";
import { Layers, Terminal, Database, Wrench, Sparkles, Bot } from "lucide-react";
import FloatingGeometry3D from "./3d/FloatingGeometry3D";
import ParallaxWrapper from "./common/ParallaxWrapper";

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons = [Bot, Layers, Terminal, Database, Wrench];

  return (
    <section id="tech-stack" className="py-24 relative bg-[#070709] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00f0ff]/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with 3D interactive icon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stack &amp; Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
              Technologies &amp; <br />
              <span className="gradient-text-cyan">Development Toolkit.</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Curated tools and modern frameworks I utilize to engineer stable, fast, and scalable digital solutions.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <FloatingGeometry3D shape="dodecahedron" size={140} glowColor="#00f0ff" wireframeColor="#8b5cf6" />
            <span className="text-[10px] font-mono text-neutral-400 mt-1">Interactive 3D Dodecahedron</span>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Layers;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#00f0ff]/15 border border-[#00f0ff]/50 text-[#00f0ff] shadow-lg shadow-[#00f0ff]/15"
                    : "bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <p className="text-xs sm:text-sm text-neutral-300 font-light">
            {skillCategories[activeTab].description}
          </p>
        </div>

        {/* Skills Grid with Parallax Hover Motion */}
        <ParallaxWrapper speed={4} maxMouseOffset={6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-[#111422]/90 to-[#070709]/95 backdrop-blur-xl hover:border-[#00f0ff]/40 shadow-lg hover:shadow-[#00f0ff]/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-white group-hover:text-[#00f0ff] transition-colors font-display">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-400">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </ParallaxWrapper>

        {/* Complete Technology Badges Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0d101a]/70 backdrop-blur-xl max-w-5xl mx-auto text-center shadow-xl">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f0ff] block mb-4">
            MASTERED TECHNOLOGIES &amp; LIBRARIES
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSkillsList.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] text-xs font-mono text-neutral-300 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
