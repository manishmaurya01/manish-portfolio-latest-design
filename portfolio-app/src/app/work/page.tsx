import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
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
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* 3D Ambient WebGL Background */}
      <AmbientBackground3D particleCount={150} wireframeMesh="torus" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[var(--accent)]/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Heading */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-md text-xs font-mono text-[var(--accent)] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED PORTFOLIO ARCHIVE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight font-display mb-4">
              Engineered for Impact, <br />
              <span className="gradient-text-accent">Crafted for Scale.</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              A curated collection of client applications, internal tooling, and full-stack systems built with modern React, Tailwind CSS, Node.js, and cloud backends.
            </p>
          </div>

          {/* Projects Grid with 3D Tilt Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ParallaxWrapper key={project.id} speed={idx % 2 === 0 ? 6 : -6} maxMouseOffset={8}>
                <TiltCard3D maxTilt={10} className="h-full">
                  <div className="h-full rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 group">
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)] mb-5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        
                        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent)]">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-display group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Tech Stacks */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[var(--border-subtle)]">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/work/${project.slug}`}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                        </Link>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-[var(--accent)]/10 hover:bg-[var(--accent)] text-[var(--accent)] hover:text-white border border-[var(--accent)]/30 transition-all"
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
