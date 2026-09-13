"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import Hero3DScene from "./3d/Hero3DScene";
import TiltCard3D from "./3d/TiltCard3D";
import ParallaxWrapper from "./common/ParallaxWrapper";
import { ArrowDown, ArrowUpRight, Mail, Download, GraduationCap, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070709] w-full max-w-full"
    >
      {/* 1. Interactive 3D WebGL Background (Halo & Particle Dust) */}
      <Hero3DScene />

      {/* 2. Massive Typographic Watermark in Background - Hidden on small mobile to avoid overflow */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0 font-display uppercase"
        aria-hidden="true"
      >
        MANISH MAURYA
      </div>

      {/* 3. Ambient lighting orbs with responsive sizing */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-gradient-to-tr from-[#00f0ff]/10 via-[#8b5cf6]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 sm:right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gradient-to-b from-[#8b5cf6]/15 via-[#00f0ff]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Refined Typography, Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pointer-events-auto w-full max-w-full">
            
            {/* Minimalist Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[11px] sm:text-xs font-mono text-neutral-300 mb-5 shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse shrink-0" />
              <span className="tracking-wide truncate">Full-Stack Engineer &amp; UI/UX Craftsman</span>
            </div>

            {/* Giant Kinetic Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-white leading-[1.04] mb-5 font-display break-words w-full">
              Crafting <br />
              <span className="gradient-text-cyan">Digital Products</span> <br />
              <span className="text-neutral-400 font-light">&amp; Experiences.</span>
            </h1>

            {/* Confident Bio */}
            <p className="max-w-xl text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Hi, I’m <strong className="text-white font-semibold">Manish Kumar</strong>. 
              I design and engineer reactive web applications, scalable full-stack architectures, and automated workflows with craft and performance.
            </p>

            {/* Action Buttons - full width on small screens, flex row on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                data-cursor="WORK"
                className="px-6 py-3.5 rounded-xl bg-[#00f0ff] hover:bg-[#3bf4ff] text-[#070709] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00f0ff]/25 transition-all duration-200 active:scale-95 cursor-pointer text-center"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download
                data-cursor="RESUME"
                className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 text-center"
              >
                <Download className="w-4 h-4 text-[#00f0ff]" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                data-cursor="TALK"
                className="px-5 py-3.5 rounded-xl border border-white/10 hover:border-[#00f0ff]/40 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8 pt-5 border-t border-white/10 w-full mb-6 text-center sm:text-left">
              <div>
                <span className="block text-xl sm:text-3xl font-black text-white font-display">7+</span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-mono">Projects</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-cyan-400 font-display">14+</span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-mono">Tech Stacks</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-purple-400 font-display">Parul 6.0</span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-mono">Hackathon</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 mr-1">
                Follow:
              </span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-cursor="GITHUB"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:text-[#00f0ff] text-neutral-300 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-cursor="LINKEDIN"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:text-[#00f0ff] text-neutral-300 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                data-cursor="TWITTER"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:text-[#00f0ff] text-neutral-300 transition-all"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.email}
                aria-label="Email Manish"
                data-cursor="EMAIL"
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:text-[#00f0ff] text-neutral-300 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Monumental Hero Portrait Banner */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end pointer-events-auto w-full max-w-full">
            <div className="relative w-full max-w-[310px] xs:max-w-[340px] sm:max-w-md mx-auto">
              
              {/* Atmospheric Backlight Halo */}
              <div
                className="absolute inset-0 sm:-inset-4 bg-gradient-to-tr from-[#00f0ff]/30 via-[#8b5cf6]/25 to-transparent rounded-[2.5rem] sm:rounded-[3rem] blur-2xl opacity-70 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3D Tilt Wrapper */}
              <TiltCard3D maxTilt={9} dataCursor="MANISH" className="w-full max-w-full">
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/20 bg-gradient-to-b from-[#141829]/90 via-[#0a0d17]/95 to-[#070709] backdrop-blur-2xl p-3 sm:p-4 shadow-2xl overflow-hidden group w-full">
                  
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[3/3.8] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-black shadow-inner">
                    
                    {/* Subtle Radial Spotlight behind head */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-[#00f0ff]/30 via-[#8b5cf6]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                    {/* Official Portrait Image */}
                    <Image
                      src="/assets/manish_hero.jpg"
                      alt="Manish Kumar — Full-Stack Developer & UI/UX Designer"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Soft Feather Gradient at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-85 pointer-events-none" />

                    {/* Floating Chip 1: Education Badge (Top Right) */}
                    <ParallaxWrapper speed={10} maxMouseOffset={8} className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                      <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/20 text-[10px] sm:text-[11px] font-mono text-cyan-300 shadow-xl">
                        <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00f0ff]" />
                        <span>MCA @ Parul Univ</span>
                      </div>
                    </ParallaxWrapper>

                    {/* Floating Chip 2: Tech Badge (Bottom Left) */}
                    <ParallaxWrapper speed={-8} maxMouseOffset={8} className="absolute bottom-4 left-3 sm:bottom-5 sm:left-4 z-20">
                      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 text-[11px] sm:text-xs font-mono text-white shadow-2xl">
                        <Code2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                        <span>Full-Stack &amp; n8n</span>
                      </div>
                    </ParallaxWrapper>

                  </div>

                  {/* Clean Bottom Name Bar */}
                  <div className="px-2 sm:px-3 pt-3 pb-1.5 flex items-center justify-between">
                    <div>
                      <h2 className="text-sm sm:text-lg font-bold text-white tracking-tight font-display">
                        Manish Kumar
                      </h2>
                      <p className="text-[11px] sm:text-xs font-mono text-cyan-400">
                        Gujarat, India
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] sm:text-[11px] font-mono text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>

                </div>
              </TiltCard3D>

            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-12 flex justify-center pointer-events-auto">
          <a
            href="#about"
            data-cursor="SCROLL"
            aria-label="Scroll to About Section"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#00f0ff] transition-colors"
          >
            <span>EXPLORE PROFILE</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/40 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
