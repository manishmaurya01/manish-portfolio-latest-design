"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import TiltCard3D from "./3d/TiltCard3D";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      {/* Background radial accent */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2 font-medium">
              // 05 — Selected Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display">
              Featured Projects &amp; <br />
              <span className="gradient-text-accent">Real-World Deployments.</span>
            </h2>
          </div>
          <p className="max-w-md text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
            Every project represents a tailored solution designed for specific real-world needs, from autonomous AI learning engines to enterprise HR platforms, high-speed food ordering, and institutional examination systems.
          </p>
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => (
            <TiltCard3D
              key={project.id}
              maxTilt={4}
              dataCursor="EXPLORE"
              className="w-full"
            >
              <div className="group rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-[#141417] p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:border-stone-300 dark:hover:border-stone-700 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Project Media Preview */}
                  <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-stone-100 dark:bg-black/60 shadow-md group-hover:border-stone-300 dark:group-hover:border-stone-700 transition-all">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="LIVE"
                          className="btn-primary-tactile px-3.5 py-1.5 text-xs text-stone-950 font-semibold inline-flex items-center gap-1.5 shadow"
                        >
                          <span>Open Live App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
                    <div>
                      {/* Category & Index badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-700 dark:text-stone-300 px-2 py-0.5 rounded border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/60 font-medium">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                          0{idx + 1} / 0{projects.length}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white tracking-tight mb-1.5 group-hover:text-amber-500 transition-colors font-display">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-stone-500 dark:text-stone-400 mb-4">
                        {project.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      {/* Highlights pill tags */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="p-2.5 rounded-lg bg-stone-50 dark:bg-stone-900/50 border border-stone-200/80 dark:border-stone-800">
                            <span className="block text-[10px] uppercase font-mono text-stone-500 dark:text-stone-400">{h.label}</span>
                            <span className="text-xs font-medium text-stone-800 dark:text-stone-200">{h.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 text-[10px] font-mono text-stone-600 dark:text-stone-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800/80">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="DEMO"
                        className="btn-primary-tactile px-4 py-2 text-xs text-stone-950 font-semibold inline-flex items-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <Link
                        href={`/work/${project.slug}`}
                        data-cursor="CASE STUDY"
                        className="btn-secondary-tactile px-4 py-2 text-xs font-medium inline-flex items-center gap-1.5"
                      >
                        <span>Read Deep Dive</span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>

      </div>
    </section>
  );
}
