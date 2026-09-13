import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import AchievementSection from "@/components/AchievementSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honors & Achievements",
  description: "View hackathon recognition, Parul 6.0 finalist ranking, and official certifications earned by Manish Kumar.",
};

export default function AchievementsPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={140} wireframeMesh="icosahedron" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          {/* Breadcrumb / Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-amber-500 transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Achievement Section Component */}
        <AchievementSection />
      </main>

      <Footer />
    </div>
  );
}
