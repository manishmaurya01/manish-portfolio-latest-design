import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Manish Kumar — Let's Build Something Exceptional",
  description: "Get in touch with Manish Kumar for freelance opportunities, full-stack web applications, UI/UX design, or technical collaborations.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={140} wireframeMesh="torus" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[var(--accent)]/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)] mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
