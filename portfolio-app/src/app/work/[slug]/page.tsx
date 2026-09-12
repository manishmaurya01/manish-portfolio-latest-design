import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, Project } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Calendar, User, Code2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-[#070709] text-[#f4f4f7] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#00f0ff] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00f0ff] px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Year: {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-3xl mb-8">
              {project.subtitle}
            </p>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block uppercase">Role</span>
                <span className="text-xs font-medium text-white">{project.role}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block uppercase">Timeline</span>
                <span className="text-xs font-medium text-white">{project.year}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block uppercase">Deployment</span>
                <span className="text-xs font-medium text-cyan-400">{project.highlights[0]?.value || "Live"}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-400 block uppercase">Status</span>
                <span className="text-xs font-medium text-emerald-400">Active / Production</span>
              </div>
            </div>
          </div>

          {/* Main Hero Showcase Media */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] font-bold text-xs shadow-lg shadow-[#00f0ff]/20 transition-all active:scale-95"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Deep Dive Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Left: Problem, Solution, Features */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Executive Summary */}
              <div>
                <h2 className="text-xl font-bold text-white mb-3 font-display">
                  Project Overview
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Problem */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-base font-bold text-white mb-2 font-display text-red-400 flex items-center gap-2">
                  <span>The Challenge</span>
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                <h3 className="text-base font-bold text-white mb-2 font-display text-emerald-400 flex items-center gap-2">
                  <span>The Solution</span>
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Secondary Image Showcase if exists */}
              {project.secondaryImage && (
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-white font-display">
                    Interface Snapshot
                  </h3>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl">
                    <Image
                      src={project.secondaryImage}
                      alt={`${project.title} secondary interface`}
                      fill
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {/* Core Features */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 font-display">
                  Key Capabilities &amp; Implementation Details
                </h2>
                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Tech Specifications & Live Link */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tech Stack Card */}
              <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-4">
                  Tech Stack Applied
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] font-bold text-xs flex items-center justify-center gap-2 shadow transition-all"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Highlight Metrics */}
              <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  System Metadata
                </span>
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between pb-2 border-b border-white/5 text-xs">
                    <span className="text-neutral-400">{h.label}</span>
                    <span className="text-white font-mono font-medium">{h.value}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Next Project Footer Bar */}
          <div className="pt-12 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              ← All Projects
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                  Next Project
                </span>
                <span className="text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors font-display">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#00f0ff]/40 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#00f0ff]" />
              </div>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
