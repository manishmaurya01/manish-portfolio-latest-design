import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Trophy, Code2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Resume & Credentials",
  description: "View and download the verified resume, academic trajectory, and technical credentials of Manish Kumar.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={140} wireframeMesh="octahedron" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-amber-500 transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-stone-200 dark:border-stone-800 gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 block mb-2 font-medium">
                // Curriculum Vitae &amp; Credentials
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-[-0.035em] font-display mb-3">
                Manish Kumar
              </h1>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
                Full-Stack Engineer &amp; UI/UX Designer specialized in responsive React/Next.js platforms, intelligent n8n automation, and performant digital experiences.
              </p>
            </div>

            {/* Top Action CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Raw PDF</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="MANISH_MAURYA_RESUME.pdf"
                className="btn-primary-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm text-stone-950 font-bold shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Education Card */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#141417]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-white font-bold">
                  Education
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                <strong className="text-stone-900 dark:text-white">MCA</strong> (Parul University, In-progress)<br />
                <strong className="text-stone-900 dark:text-white">BCA</strong> (HNGU, Distinction — 7.56 CGPA)
              </p>
            </div>

            {/* Experience & Hackathon Card */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#141417]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-white font-bold">
                  Track Record
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                <strong className="text-stone-900 dark:text-white">Parul Hackathon 6.0</strong> Finalist<br />
                <strong className="text-stone-900 dark:text-white">7+ Production</strong> Client Web Apps Delivered
              </p>
            </div>

            {/* Core Stack Card */}
            <div className="p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-[#141417]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-stone-900 dark:text-white font-bold">
                  Primary Stack
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                React.js, Next.js, Node.js, MySQL, Three.js, Tailwind CSS, n8n Automation Workflows.
              </p>
            </div>
          </div>

          {/* Embedded Interactive Resume Document Preview */}
          <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#141417] p-2 sm:p-4 shadow-xl mb-12">
            <div className="flex items-center justify-between px-3 py-2 border-b border-stone-200 dark:border-stone-800 mb-3 text-xs font-mono text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Document: MANISH MAURYA.pdf</span>
              </div>
              <span className="hidden sm:inline">100% Verified PDF Document</span>
            </div>

            {/* Viewer Iframe */}
            <div className="w-full h-[70vh] sm:h-[82vh] rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
              <iframe
                src={`${siteConfig.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                title="Manish Kumar Resume Preview"
                className="w-full h-full border-0"
              />
            </div>

            {/* Mobile Fallback Bar */}
            <div className="sm:hidden mt-3 p-3 bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
              <span className="text-stone-600 dark:text-stone-400">Mobile PDF viewer:</span>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 font-bold underline"
              >
                Open in Fullscreen
              </a>
            </div>
          </div>

          {/* Bottom Contact CTA Box */}
          <div className="p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-gradient-to-r from-stone-100 dark:from-stone-900 via-stone-50 dark:via-stone-900/60 to-stone-100 dark:to-stone-900 text-center flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white font-display mb-2">
              Ready to collaborate on your next project?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-md mb-6 leading-relaxed">
              Available for full-time engineering roles, high-impact design contracts, and automated system development.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="btn-primary-tactile px-6 py-3 rounded-lg text-stone-950 font-bold text-xs sm:text-sm shadow-md"
              >
                <span>Initiate Conversation</span>
              </Link>
              <a
                href={siteConfig.socials.email}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white/60 dark:bg-stone-800/60 text-xs sm:text-sm text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
