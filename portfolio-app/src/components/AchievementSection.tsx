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
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-3 font-medium">
            // 06 — Honors &amp; Recognition
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
          maxTilt={4}
          dataCursor="INSPECT"
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#141417] backdrop-blur-xl p-6 sm:p-9 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] overflow-hidden group">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Certificate Preview Card with Parallax */}
              <div className="lg:col-span-5">
                <ParallaxWrapper speed={3} maxMouseOffset={4}>
                  <div
                    onClick={() => setModalOpen(true)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-stone-100 dark:bg-black/60 shadow-md cursor-pointer hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300"
                  >
                    <Image
                      src={achievementData.image}
                      alt={achievementData.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="btn-primary-tactile px-3.5 py-2 text-xs text-stone-950 font-semibold shadow-md flex items-center gap-2">
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
                    <div className="p-1 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-amber-500">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase text-stone-600 dark:text-stone-400 tracking-wider font-medium">
                      {achievementData.event}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white tracking-tight mb-3 font-display">
                    {achievementData.title}
                  </h3>

                  <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                    {achievementData.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-2.5 mb-8">
                    {achievementData.learnings.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-700 dark:text-stone-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800/80">
                  <button
                    onClick={() => setModalOpen(true)}
                    data-cursor="EXPAND"
                    className="btn-primary-tactile px-4 py-2 text-xs text-stone-950 font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Certificate</span>
                  </button>

                  <a
                    href={achievementData.certificatePdf}
                    download
                    data-cursor="DOWNLOAD"
                    className="btn-secondary-tactile px-4 py-2 text-xs font-medium flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-stone-500 dark:text-stone-400" />
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
