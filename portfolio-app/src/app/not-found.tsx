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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--accent)]/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg w-full rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-2xl p-8 sm:p-10 shadow-2xl flex flex-col items-center text-center">
        {/* Floating 3D Geometry Core */}
        <div className="mb-4">
          <FloatingGeometry3D shape="octahedron" size={140} glowColor="#3b82f6" wireframeColor="#6366f1" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-xs font-mono text-[var(--accent)] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ERROR CODE 404</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-3">
          Coordinate Lost
        </h1>

        <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
          The digital route you requested does not exist or has been shifted across cyberspace.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Safe Orbit (Home)</span>
        </Link>
      </div>
    </div>
  );
}
