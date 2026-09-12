"use client";

import React, { useState } from "react";
import Image from "next/image";
import { achievementData } from "@/data/achievement";
import CertificateModal from "./CertificateModal";
import { Award, Download, Eye, CheckCircle2, Sparkles } from "lucide-react";

export default function AchievementSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="achievement" className="py-24 relative bg-[#070709] border-t border-white/[0.06]">
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Achievement Spotlight &amp; <br />
            <span className="gradient-text-cyan">Hackathon Track Record.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Pushing technical boundaries, pressure-testing ideas in high-stakes competitive environments, and collaborating in multidisciplinary teams.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-[#111420] to-[#0a0c13] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Certificate Preview Card */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setModalOpen(true)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl cursor-pointer hover:border-[#00f0ff]/50 transition-all duration-300"
              >
                <Image
                  src={achievementData.image}
                  alt={achievementData.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-3.5 py-2 rounded-xl bg-[#00f0ff] text-[#070709] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Key Learnings */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase text-[#00f0ff] tracking-wider">
                    {achievementData.event}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-display">
                  {achievementData.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {achievementData.summary}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2.5 mb-8">
                  {achievementData.learnings.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] text-xs font-semibold flex items-center gap-1.5 shadow transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Certificate</span>
                </button>

                <a
                  href={achievementData.certificatePdf}
                  download
                  className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>Download Verified PDF</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={achievementData.image}
        pdfSrc={achievementData.certificatePdf}
        title={achievementData.title}
      />
    </section>
  );
}
