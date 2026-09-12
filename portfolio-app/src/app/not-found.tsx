import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f7] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[#00f0ff] mb-6">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-2">
        Error 404
      </span>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display mb-4">
        Page Not Found
      </h1>

      <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed mb-8">
        The digital space you are looking for doesn’t exist or has been relocated to another coordinates.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00f0ff] text-[#070709] font-bold text-xs shadow-lg shadow-[#00f0ff]/20 hover:bg-[#38f8ff] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
