"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Download, ExternalLink } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  pdfSrc: string;
  title: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  imageSrc,
  pdfSrc,
  title,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/20 bg-[#0d0f17] p-4 sm:p-6 shadow-2xl z-10 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              Official Verification Document
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfSrc}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] text-xs font-semibold shadow transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Viewer Preview */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] my-4 rounded-xl overflow-hidden border border-white/10 bg-black/50 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain p-2"
            priority
          />
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-neutral-400">
          <span>Awarded to Manish Maurya</span>
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00f0ff] hover:underline flex items-center gap-1"
          >
            <span>Open PDF in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
