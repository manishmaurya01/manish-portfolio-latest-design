"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Download, ExternalLink, FileText, CheckCircle2, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useResumeModal } from "@/context/ResumeModalContext";

export default function ResumeModal() {
  const { isOpen, closeResumeModal } = useResumeModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResumeModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeResumeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 dark:bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeResumeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-5xl rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#141417] p-4 sm:p-6 shadow-2xl z-10 max-h-[94vh] flex flex-col transition-all">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white font-display tracking-tight">
                  Manish Kumar — Official Resume
                </h3>
                <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Updated 2026
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                Full-Stack Developer • UI/UX Designer • MCA Candidate
              </p>
            </div>
          </div>

          {/* Action Stack */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <Link
              href="/resume"
              onClick={closeResumeModal}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
              title="View full standalone page"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 text-xs font-mono text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:border-amber-500/40 transition-colors"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Raw PDF</span>
            </a>

            <a
              href={siteConfig.resumeUrl}
              download="MANISH_MAURYA_RESUME.pdf"
              className="btn-primary-tactile inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs text-stone-950 font-bold shadow-sm"
              title="Download PDF to device"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={closeResumeModal}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* In-Browser PDF Viewer Preview */}
        <div className="relative flex-1 min-h-[420px] sm:min-h-[580px] my-4 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex flex-col">
          <iframe
            src={`${siteConfig.resumeUrl}#toolbar=0&navpanes=0&view=FitH`}
            title="Manish Kumar Resume Document"
            className="w-full h-full flex-1 border-0"
          />

          {/* Mobile Fallback Overlay Note */}
          <div className="sm:hidden p-3 bg-stone-100 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
            <span className="text-stone-500 dark:text-stone-400">Viewing on mobile?</span>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 font-semibold underline"
            >
              Open Fullscreen PDF
            </a>
          </div>
        </div>

        {/* Footer info & quick contact bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available for Full-time Roles &amp; High-Impact Freelance Projects</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              onClick={closeResumeModal}
              className="inline-flex items-center gap-1.5 text-stone-700 dark:text-stone-300 hover:text-amber-500 font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>Get in touch directly</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
