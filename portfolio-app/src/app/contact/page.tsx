import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
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
    <div className="relative min-h-screen bg-[#070709] text-[#f4f4f7] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={140} wireframeMesh="torus" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[#00f0ff]/15 via-[#8b5cf6]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#00f0ff] transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5 mb-4"
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
