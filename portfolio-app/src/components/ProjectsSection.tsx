"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLink, ArrowRight, Layers, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-[#070709] border-t border-white/[0.06]">
      {/* Background radial accent */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Featured Projects &amp; <br />
              <span className="gradient-text-cyan">Real-World Deployments.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Every project represents a tailored solution designed for specific business needs, from enterprise human resources to fast consumer food ordering and institutional online examinations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-[#111420] to-[#0a0c13] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#00f0ff]/30 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Project Media Preview */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl group-hover:border-[#00f0ff]/30 transition-all">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00f0ff] text-[#070709] text-xs font-semibold shadow"
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
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00f0ff] px-2.5 py-0.5 rounded-full border border-cyan-500/20 bg-cyan-500/10">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-500">
                        0{idx + 1} / 0{projects.length}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-[#00f0ff] transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-neutral-400 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Highlights pill tags */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/5">
                          <span className="block text-[10px] uppercase font-mono text-neutral-500">{h.label}</span>
                          <span className="text-xs font-medium text-neutral-200">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-[#00f0ff]/20 transition-all active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      href={`/work/${project.slug}`}
                      className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00f0ff]" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
