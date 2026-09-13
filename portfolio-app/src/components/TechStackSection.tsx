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
    <section id="tech-stack" className="py-24 relative bg-[var(--bg-primary)] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-200">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with 3D interactive icon */}
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stack &amp; Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
              Technologies &amp; <br />
              <span className="gradient-text-accent">Development Toolkit.</span>
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Curated tools and modern frameworks I utilize to engineer stable, fast, and scalable digital solutions.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <FloatingGeometry3D shape="dodecahedron" size={140} glowColor="#3b82f6" wireframeColor="#6366f1" />
            <span className="text-[10px] font-mono text-slate-400 dark:text-neutral-400 mt-1">Interactive 3D Dodecahedron</span>
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
                    ? "bg-blue-600 text-white dark:bg-blue-500/20 dark:border dark:border-blue-500/50 dark:text-blue-400 shadow-md shadow-blue-500/15"
                    : "bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.06]"
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
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 font-normal">
            {skillCategories[activeTab].description}
          </p>
        </div>

        {/* Skills Grid with Parallax Hover Motion */}
        <ParallaxWrapper speed={4} maxMouseOffset={6}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#111422]/90 dark:to-[#070709]/95 backdrop-blur-xl hover:border-blue-500/40 shadow-sm dark:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-neutral-400 font-medium">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </ParallaxWrapper>

        {/* Complete Technology Badges Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#0d101a]/70 backdrop-blur-xl max-w-5xl mx-auto text-center shadow-sm dark:shadow-xl">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 block mb-4 font-semibold">
            MASTERED TECHNOLOGIES &amp; LIBRARIES
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allSkillsList.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-mono text-slate-700 dark:text-neutral-300 transition-all cursor-default shadow-xs"
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
