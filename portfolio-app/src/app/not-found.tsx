import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import FloatingGeometry3D from "@/components/3d/FloatingGeometry3D";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={140} wireframeMesh="icosahedron" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl p-8 sm:p-10 shadow-xl flex flex-col items-center text-center">
        {/* Floating 3D Geometry Core */}
        <div className="mb-4">
          <FloatingGeometry3D shape="octahedron" size={140} glowColor="#f59e0b" wireframeColor="#d97706" />
        </div>

        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 dark:text-amber-400 px-3 py-1 rounded-md border border-amber-500/20 bg-amber-500/5 mb-4">
          // Error 404 — Page Not Found
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-[-0.035em] font-display mb-3">
          Page Not Found
        </h1>

        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
          The route you requested could not be located. It may have been moved or archived.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-stone-950 font-bold text-xs sm:text-sm btn-primary-tactile transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
