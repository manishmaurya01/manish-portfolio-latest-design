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
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 inline-block font-semibold">
            Education &amp; Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
            Academic Journey &amp; <br />
            <span className="gradient-text-accent">Milestones.</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Structured formal education in computer science, software engineering principles, and data fundamentals.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line with Glowing Gradient */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700/20 -translate-x-1/2 shadow-[0_0_8px_rgba(245,158,11,0.25)]" />

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
                  
                  {/* Center Node / Dot with Pulse Ring */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-amber-500 dark:border-amber-400 bg-white dark:bg-[#09090b] flex items-center justify-center z-10 shadow-md shadow-amber-500/25 group">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-amber-500 opacity-40"></span>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400" />
                  </div>

                  {/* Spacer for 2-column balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content with 3D Tilt */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-0">
                    <TiltCard3D
                      maxTilt={8}
                      dataCursor="DEGREE"
                    >
                      <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10 bg-white dark:bg-gradient-to-b dark:from-[#18181b] dark:to-[#121215] hover:border-amber-500/40 transition-all duration-300 shadow-sm dark:shadow-xl group">
                        
                        {/* Top Row: Degree & Status */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold">
                            {item.score}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                            <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-1 font-display">
                          {item.degree}
                        </h3>

                        {/* Institution & Location */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 dark:text-stone-400 mb-3">
                          <span className="font-medium text-stone-800 dark:text-stone-300">{item.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                            {item.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="pt-3 border-t border-stone-200 dark:border-white/10 flex flex-wrap gap-1.5">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-white/[0.03] border border-stone-200 dark:border-white/5 text-stone-600 dark:text-stone-400"
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
