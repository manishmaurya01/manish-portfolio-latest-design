"use client";

import React from "react";
import { educationList } from "@/data/education";
import { Calendar, MapPin } from "lucide-react";
import TiltCard3D from "./3d/TiltCard3D";

export default function AcademicJourneySection() {
  return (
    <section
      id="journey"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2 inline-block font-medium">
            // 07 — Education &amp; Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
            Academic Journey &amp; <br />
            <span className="gradient-text-accent">Milestones.</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Structured formal education in computer science, software engineering principles, and data fundamentals.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line (Architectural 1px Rule) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800 -translate-x-1/2" />

          <div className="space-y-12">
            {educationList.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12`}
                >
                  
                  {/* Center Precision Node */}
                  <div className="absolute left-4 sm:left-1/2 top-5 -translate-x-1/2 w-5 h-5 rounded-full border border-amber-500/80 bg-white dark:bg-[#09090b] flex items-center justify-center z-10 shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>

                  {/* Spacer for 2-column balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content with 3D Tilt */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-0">
                    <TiltCard3D
                      maxTilt={4}
                      dataCursor="DEGREE"
                    >
                      <div className="p-5 sm:p-6 rounded-xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#141417] hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200 shadow-xs dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] group">
                        
                        {/* Top Row: Degree & Status */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 font-medium">
                            {item.score}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                            <Calendar className="w-3 h-3 text-stone-400 dark:text-stone-500" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight group-hover:text-amber-500 transition-colors mb-1 font-display">
                          {item.degree}
                        </h3>

                        {/* Institution & Location */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 dark:text-stone-400 mb-3">
                          <span className="font-medium text-stone-800 dark:text-stone-300">{item.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-stone-400 dark:text-stone-500" />
                            {item.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex flex-wrap gap-1.5">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-stone-600 dark:text-stone-400"
                            >
                              {h}
                            </span>
                          ))}
                        </div>

                      </div>
                    </TiltCard3D>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
