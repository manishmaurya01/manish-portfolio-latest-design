import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { educationList } from "@/data/education";
import { ArrowLeft, Download, Sparkles, MapPin, GraduationCap, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import TiltCard3D from "@/components/3d/TiltCard3D";
import FloatingGeometry3D from "@/components/3d/FloatingGeometry3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Manish Kumar — Full-Stack Developer & UI/UX Designer",
  description: "Learn about Manish Kumar's engineering philosophy, academic background at Parul University, technical skill set, and hackathon achievements.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden transition-colors duration-200">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={150} wireframeMesh="icosahedron" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-indigo-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-md text-xs font-mono text-blue-600 dark:text-blue-400 mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BIOGRAPHY &amp; CRAFT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display mb-4">
              Engineering Rigor, <br />
              <span className="gradient-text-accent">Creative Intuition.</span>
            </h1>
            <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              Bridging the boundary between robust full-stack architecture, elegant user-centric design, and intelligent automated workflows.
            </p>
          </div>

          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* Left Column: 3D Tilt Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <TiltCard3D maxTilt={12} className="w-full max-w-md">
                <div className="relative rounded-3xl border border-slate-200 dark:border-white/20 bg-white dark:bg-gradient-to-b dark:from-[#131726]/90 dark:to-[#070709]/95 backdrop-blur-2xl p-6 shadow-sm dark:shadow-2xl overflow-hidden group">
                  
                  {/* Cyber HUD Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-blue-500/50 dark:border-blue-400/80 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-blue-500/50 dark:border-blue-400/80 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-indigo-500/50 dark:border-indigo-400/80 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 dark:border-indigo-400/80 pointer-events-none" />

                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-900 mb-6 shadow-inner">
                    <Image
                      src="/assets/manish_about_new.jpg"
                      alt="Manish Kumar portrait"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />

                    {/* Overlay Location Tag */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/85 dark:bg-black/75 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-between shadow-md">
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">Manish Kumar</p>
                        <p className="text-[10px] text-blue-600 dark:text-blue-400 font-mono font-medium">Full-Stack Dev &amp; Designer</p>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-600 dark:text-neutral-300">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>Gujarat, IN</span>
                      </div>
                    </div>
                  </div>

                  {/* Live Quick Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-center">
                      <span className="block text-xl font-bold text-slate-900 dark:text-white font-mono">7+</span>
                      <span className="text-[11px] text-slate-500 dark:text-neutral-400">Client Projects</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-center">
                      <span className="block text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">14+</span>
                      <span className="text-[11px] text-slate-500 dark:text-neutral-400">Tech Stacks</span>
                    </div>
                  </div>

                  {/* Download Resume Action */}
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Resume (PDF)</span>
                  </a>

                </div>
              </TiltCard3D>
            </div>

            {/* Right Column: Narrative Story & Academic Highlights */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Core Bio Panel */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d101a]/75 backdrop-blur-xl shadow-sm dark:shadow-xl">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                  Who I Am &amp; What Drives Me
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I’m <strong className="text-slate-900 dark:text-white">Manish Kumar</strong>, a full-stack engineer and UI/UX designer based in Gujarat, India. Currently, I am pursuing my <strong className="text-blue-600 dark:text-blue-400">Master of Computer Applications (MCA)</strong> at Parul University, Vadodara, following the completion of my BCA at Hemchandracharya North Gujarat University (HNGU) with Distinction (7.56 CGPA).
                  </p>
                  <p>
                    My technical work balances frontend craftsmanship with robust backend engineering. I build scalable applications with <strong className="text-slate-900 dark:text-white">React.js, Next.js, Node.js, and MySQL/Firebase</strong>, coupled with modern design systems and automated webhook workflows using <strong className="text-indigo-600 dark:text-indigo-400">n8n</strong>.
                  </p>
                  <p>
                    I believe that software should not just solve business problems mechanically — it must delight users with fluid responsiveness, visual harmony, and intuitive workflows.
                  </p>
                </div>
              </div>

              {/* Interactive 3D Geometry Card with Skills Focus */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-gradient-to-r dark:from-[#121626]/80 dark:via-[#0c0f1a]/85 dark:to-[#121626]/80 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                <div className="shrink-0">
                  <FloatingGeometry3D shape="icosahedron" size={130} glowColor="#3b82f6" wireframeColor="#6366f1" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Core Technical Focus</span>
                  </h3>
                  <p className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-3">
                    Modern component-driven web architectures, responsive animations, backend APIs, relational database design, and workflow automation.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["React.js", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "n8n Automation", "Three.js"].map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/5 shadow-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Timeline Cards */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0d101a]/75 backdrop-blur-xl space-y-6 shadow-sm dark:shadow-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span>Academic Trajectory</span>
                  </h2>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 font-medium">Formal Degrees</span>
                </div>

                <div className="space-y-4">
                  {educationList.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                          {edu.degree}
                        </h3>
                        <span className="text-[11px] font-mono text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/20 bg-blue-500/10 font-semibold">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 mb-2">
                        {edu.institution} • {edu.score}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
