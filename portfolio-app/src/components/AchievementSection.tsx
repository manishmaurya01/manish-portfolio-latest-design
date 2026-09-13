"use client";

import React, { useState } from "react";
import Image from "next/image";
import { achievementData } from "@/data/achievement";
import CertificateModal from "./CertificateModal";
import TiltCard3D from "./3d/TiltCard3D";
import ParallaxWrapper from "./common/ParallaxWrapper";
import { Award, Download, Eye, CheckCircle2, Sparkles, Trophy } from "lucide-react";

export default function AchievementSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="achievements"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors &amp; Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-4">
            Achievement Spotlight &amp; <br />
            <span className="gradient-text-accent">Hackathon Track Record.</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Pushing technical boundaries, pressure-testing ideas in high-stakes competitive environments, and collaborating in multidisciplinary teams.
          </p>
        </div>

        {/* Highlight 3D Tilt Card with Parallax Depth */}
        <TiltCard3D
          maxTilt={7}
          dataCursor="INSPECT"
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl border border-stone-200 dark:border-white/15 bg-white dark:bg-gradient-to-b dark:from-[#18181b]/95 dark:to-[#121215]/98 backdrop-blur-2xl p-6 sm:p-10 shadow-sm dark:shadow-2xl overflow-hidden group">
            
            {/* Cyber HUD Corner Brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-500/60 dark:border-amber-400/80 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-500/60 dark:border-amber-400/80 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-600/60 dark:border-amber-500/80 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-600/60 dark:border-amber-500/80 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Certificate Preview Card with Parallax */}
              <div className="lg:col-span-5">
                <ParallaxWrapper speed={8} maxMouseOffset={6}>
                  <div
                    onClick={() => setModalOpen(true)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 dark:border-white/20 bg-stone-100 dark:bg-black/60 shadow-xl cursor-pointer hover:border-amber-500/50 transition-all duration-300"
                  >
                    <Image
                      src={achievementData.image}
                      alt={achievementData.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow-lg flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Full Certificate</span>
                      </span>
                    </div>
                  </div>
                </ParallaxWrapper>
              </div>

              {/* Description & Key Learnings */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 tracking-wider font-semibold">
                      {achievementData.event}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white tracking-tight mb-4 font-display">
                    {achievementData.title}
                  </h3>

                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                    {achievementData.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-2.5 mb-8">
                    {achievementData.learnings.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-700 dark:text-stone-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200 dark:border-white/10">
                  <button
                    onClick={() => setModalOpen(true)}
                    data-cursor="EXPAND"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Certificate</span>
                  </button>

                  <a
                    href={achievementData.certificatePdf}
                    download
                    data-cursor="DOWNLOAD"
                    className="px-5 py-2.5 rounded-xl border border-stone-200 dark:border-white/15 bg-stone-100 dark:bg-white/5 hover:bg-stone-200/80 dark:hover:bg-white/10 hover:border-amber-500/40 text-stone-800 dark:text-white text-xs font-medium flex items-center gap-2 transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Download Verified PDF</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </TiltCard3D>

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
