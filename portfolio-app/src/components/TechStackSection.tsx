"use client";

import React, { useState } from "react";
import { skillCategories, allSkillsList } from "@/data/skills";
import { Sparkles, Code, Cpu, Database, Wrench, Layers, Bot } from "lucide-react";
import FloatingGeometry3D from "./3d/FloatingGeometry3D";
import ParallaxWrapper from "./common/ParallaxWrapper";

const categoryIcons = [Bot, Code, Cpu, Database, Wrench];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3 font-semibold">
              <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              <span>Technical Repertoire</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
              Modern Architecture, <br />
              <span className="gradient-text-accent">Proven Technologies.</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              Curated tools and modern frameworks I utilize to engineer stable, fast, and scalable digital solutions.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <FloatingGeometry3D shape="dodecahedron" size={140} glowColor="#f59e0b" wireframeColor="#d97706" />
            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-400 mt-1">Interactive 3D Dodecahedron</span>
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
                    ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                    : "bg-stone-100 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/70 dark:hover:bg-white/[0.06]"
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
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-normal">
            {skillCategories[activeTab].description}
          </p>
        </div>

        {/* Skills Grid with Parallax Hover Motion */}
        <ParallaxWrapper speed={4} maxMouseOffset={6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b]/90 dark:to-[#121215]/95 backdrop-blur-xl hover:border-amber-500/40 shadow-sm dark:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-display">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 text-stone-500 dark:text-stone-400 font-medium">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </ParallaxWrapper>

        {/* Complete Technology Badges Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-white/10 bg-stone-50/80 dark:bg-[#121216]/70 backdrop-blur-xl max-w-5xl mx-auto text-center shadow-sm dark:shadow-xl">
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-4 font-semibold">
            MASTERED TECHNOLOGIES &amp; LIBRARIES
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSkillsList.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg border border-stone-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-amber-500/40 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 text-xs font-mono text-stone-700 dark:text-stone-300 transition-all cursor-default shadow-xs"
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
