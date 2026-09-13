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
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-3 font-medium">
              // 04 — Technical Repertoire
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
            <FloatingGeometry3D shape="dodecahedron" size={130} glowColor="#f59e0b" wireframeColor="#d97706" />
            <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 mt-1">Interactive 3D Dodecahedron</span>
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
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-180 cursor-pointer ${
                  isActive
                    ? "btn-primary-tactile text-stone-950 font-semibold"
                    : "bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:border-stone-300 dark:hover:border-stone-700"
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
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-normal">
            {skillCategories[activeTab].description}
          </p>
        </div>

        {/* Skills Grid with Parallax Hover Motion */}
        <ParallaxWrapper speed={2} maxMouseOffset={4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#141417] backdrop-blur-xl hover:border-stone-300 dark:hover:border-stone-700 shadow-xs transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-bold text-sm text-stone-900 dark:text-white group-hover:text-amber-500 transition-colors font-display">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-stone-500 dark:text-stone-400 font-medium">
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
        <div className="p-6 sm:p-7 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50/70 dark:bg-[#121215]/70 backdrop-blur-xl max-w-5xl mx-auto text-center shadow-xs">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 block mb-4 font-medium">
            // Comprehensive Toolkit &amp; Ecosystem
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSkillsList.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/60 hover:border-stone-400 dark:hover:border-stone-600 text-xs font-mono text-stone-700 dark:text-stone-300 transition-all cursor-default shadow-2xs"
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
