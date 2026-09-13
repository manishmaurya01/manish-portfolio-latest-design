"use client";

import React from "react";
import { educationList } from "@/data/education";
import { Calendar, MapPin } from "lucide-react";
import TiltCard3D from "./3d/TiltCard3D";

export default function AcademicJourneySection() {
  return (
    <section id="journey" className="py-24 relative bg-[#070709] border-t border-white/[0.06] w-full max-w-full overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-2 inline-block">
            Education &amp; Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Academic Journey &amp; <br />
            <span className="gradient-text-cyan">Milestones.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Structured formal education in computer science, software engineering principles, and data fundamentals.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line with Glowing Gradient */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#8b5cf6] to-cyan-500/20 -translate-x-1/2 shadow-[0_0_8px_rgba(0,240,255,0.4)]" />

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
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#00f0ff] bg-[#070709] flex items-center justify-center z-10 shadow-lg shadow-[#00f0ff]/30 group">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#00f0ff] opacity-40"></span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" />
                  </div>

                  {/* Spacer for 2-column balance on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content with 3D Tilt */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-0">
                    <TiltCard3D
                      maxTilt={8}
                      dataCursor="DEGREE"
                    >
                      <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-[#111420] to-[#0a0c13] hover:border-[#00f0ff]/40 transition-all duration-300 shadow-xl group">
                        
                        {/* Top Row: Degree & Status */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                            {item.score}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
                            <Calendar className="w-3 h-3 text-[#00f0ff]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors mb-1 font-display">
                          {item.degree}
                        </h3>

                        {/* Institution & Location */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mb-3">
                          <span className="font-medium text-neutral-300">{item.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#00f0ff]" />
                            {item.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-neutral-400"
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
