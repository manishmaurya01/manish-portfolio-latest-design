import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground3D from "@/components/3d/AmbientBackground3D";
import TiltCard3D from "@/components/3d/TiltCard3D";
import FloatingGeometry3D from "@/components/3d/FloatingGeometry3D";
import ParallaxWrapper from "@/components/common/ParallaxWrapper";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Manish Kumar`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* Interactive 3D WebGL Ambient Background */}
      <AmbientBackground3D particleCount={160} wireframeMesh="octahedron" />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[var(--accent)]/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative z-10 flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                Year: {project.year}
              </span>
              <span className="text-xs font-mono text-emerald-500 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Ready</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4 font-display">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-light max-w-3xl mb-8 leading-relaxed">
              {project.subtitle}
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl shadow-xl">
              <div className="p-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Role</span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">{project.role}</span>
              </div>
              <div className="p-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Timeline</span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">{project.year}</span>
              </div>
              <div className="p-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Deployment</span>
                <span className="text-xs font-semibold text-[var(--accent)]">{project.highlights[0]?.value || "Live"}</span>
              </div>
              <div className="p-2">
                <span className="text-[11px] font-mono text-[var(--text-muted)] block uppercase">Status</span>
                <span className="text-xs font-semibold text-emerald-500">Active / Online</span>
              </div>
            </div>
          </div>

          {/* Main Hero Showcase Media with 3D Tilt & Cyber Frame */}
          <div className="mb-14">
            <TiltCard3D maxTilt={6} className="w-full">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-2xl shadow-2xl group">
                
                {/* HUD Corner Brackets */}
                <div className="absolute top-4 left-4 z-20 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)] pointer-events-none opacity-60" />
                <div className="absolute top-4 right-4 z-20 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)] pointer-events-none opacity-60" />
                <div className="absolute bottom-4 left-4 z-20 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)] pointer-events-none opacity-60" />
                <div className="absolute bottom-4 right-4 z-20 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)] pointer-events-none opacity-60" />

                <div className="relative aspect-video w-full overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1024px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                    >
                      <span>Launch Live Application</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          </div>

          {/* Deep Dive Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            
            {/* Left Column: Problem, Solution, Features */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Executive Summary */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-3">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                  <span>PROJECT ARCHITECTURE</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 font-display">
                  Project Overview
                </h2>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Challenge & Solution Cards with Parallax Depth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ParallaxWrapper speed={6} maxMouseOffset={6}>
                  <div className="h-full p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-md">
                    <h3 className="text-sm font-bold font-display text-amber-500 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider">
                      <span>The Challenge</span>
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </ParallaxWrapper>

                <ParallaxWrapper speed={-6} maxMouseOffset={6}>
                  <div className="h-full p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
                    <h3 className="text-sm font-bold font-display text-emerald-500 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider">
                      <span>The Solution</span>
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </ParallaxWrapper>
              </div>

              {/* Secondary Image Showcase if exists */}
              {project.secondaryImage && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-display">
                    Interface Snapshot
                  </h3>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-xl">
                    <Image
                      src={project.secondaryImage}
                      alt={`${project.title} secondary interface`}
                      fill
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {/* Core Features */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-display">
                  Key Capabilities &amp; Implementation Details
                </h2>
                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--accent)]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Tech Specifications & Live Link & 3D Element */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Interactive 3D Polyhedron Widget */}
              <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl text-center flex flex-col items-center">
                <FloatingGeometry3D shape="dodecahedron" size={150} glowColor="#f59e0b" wireframeColor="#d97706" />
                <span className="text-[11px] font-mono text-[var(--accent)] uppercase tracking-wider mt-2">
                  Interactive 3D Geometry
                </span>
                <p className="text-[10px] text-[var(--text-muted)] mt-1">
                  Drag with cursor to rotate &amp; examine
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-4">
                  Tech Stack Applied
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Highlight Metrics */}
              <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] backdrop-blur-xl space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  System Metadata
                </span>
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)] text-xs">
                    <span className="text-[var(--text-muted)]">{h.label}</span>
                    <span className="text-[var(--text-primary)] font-mono font-medium">{h.value}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Next Project Footer Bar */}
          <div className="pt-10 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-2 -ml-2 rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              ← All Projects
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] block">
                  Next Project
                </span>
                <span className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-display">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center group-hover:border-[var(--accent)]/40 transition-colors">
                <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
              </div>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
