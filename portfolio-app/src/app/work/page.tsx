import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Sparkles, Code2, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import TiltCard3D from "@/components/3d/TiltCard3D";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description: "Explore selected full-stack applications, responsive UI/UX designs, and automated systems built by Manish Kumar.",
};

export default function WorkGalleryPage() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f4f4f7] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={150} wireframeMesh="torus" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#8b5cf6]/20 via-[#00f0ff]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#00f0ff] transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Heading */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-xs font-mono text-[#00f0ff] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED PORTFOLIO ARCHIVE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display mb-4">
              Engineered for Impact, <br />
              <span className="gradient-text-cyan">Crafted for Scale.</span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              A curated collection of client applications, internal tooling, and full-stack systems built with modern React, Tailwind CSS, Node.js, and cloud backends.
            </p>
          </div>

          {/* Projects Grid with 3D Tilt Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ParallaxWrapper key={project.id} speed={idx % 2 === 0 ? 6 : -6} maxMouseOffset={8}>
                <TiltCard3D maxTilt={10} className="h-full">
                  <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-[#121626]/90 via-[#0b0e17]/90 to-[#070709]/95 backdrop-blur-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl hover:border-[#00f0ff]/40 transition-all duration-300 group">
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 mb-5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-xl font-bold text-white mb-2 font-display group-hover:text-[#00f0ff] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-white/5">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/work/${project.slug}`}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#00f0ff]" />
                        </Link>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[#00f0ff]/10 hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#070709] border border-[#00f0ff]/30 transition-all"
                          aria-label={`Launch ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                </TiltCard3D>
              </ParallaxWrapper>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
