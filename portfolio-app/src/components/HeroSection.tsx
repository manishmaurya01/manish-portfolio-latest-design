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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[var(--bg-primary)] w-full max-w-full transition-colors duration-200"
    >
      {/* 1. Interactive 3D WebGL Background */}
      <Hero3DScene />

      {/* 2. Massive Typographic Watermark in Background */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black tracking-tighter text-stone-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0 font-display uppercase"
        aria-hidden="true"
      >
        MANISH MAURYA
      </div>

      {/* 3. Subtle Warm Studio Lighting (Atmospheric & Diffuse) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] bg-gradient-to-tr from-amber-500/5 via-amber-600/3 to-transparent rounded-full blur-3xl pointer-events-none opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/2 right-0 sm:right-10 w-[240px] sm:w-[420px] h-[240px] sm:h-[420px] bg-gradient-to-b from-amber-600/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none opacity-50"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Refined Typography, Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pointer-events-auto w-full max-w-full">
            
            {/* Minimalist Executive Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200/90 dark:border-stone-800 bg-stone-100/80 dark:bg-[#121215]/80 backdrop-blur-md text-[11px] font-mono text-stone-600 dark:text-stone-300 mb-6 shadow-xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide uppercase text-[10px] font-semibold text-stone-800 dark:text-stone-200">Available for Opportunities</span>
              <span className="text-stone-300 dark:text-stone-700">/</span>
              <span className="text-stone-500 dark:text-stone-400 truncate">Full-Stack &amp; UI/UX</span>
            </div>

            {/* Kinetic Headline with Editorial Contrast */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-stone-900 dark:text-white leading-[1.06] sm:leading-[1.02] mb-6 font-display break-words w-full">
              Crafting <br className="hidden sm:inline" />
              <span className="gradient-text-accent">Digital Products</span> <br className="hidden sm:inline" />
              <span className="text-stone-500 dark:text-stone-400 font-normal">&amp; Experiences.</span>
            </h1>

            {/* Confident Bio */}
            <p className="max-w-xl text-sm sm:text-base lg:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed mb-8">
              Hi, I’m <strong className="text-stone-900 dark:text-white font-semibold">Manish Kumar</strong>. 
              I design and engineer reactive web applications, scalable full-stack architectures, and automated workflows with craft and performance.
            </p>

            {/* Tactile Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                data-cursor="WORK"
                className="btn-primary-tactile px-5 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download
                data-cursor="RESUME"
                className="btn-secondary-tactile px-5 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 text-center"
              >
                <Download className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                data-cursor="TALK"
                className="px-4 py-3 rounded-lg border border-transparent hover:border-stone-200 dark:hover:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8 pt-5 border-t border-stone-200 dark:border-stone-800/80 w-full mb-6 text-center sm:text-left">
              <div>
                <span className="block text-xl sm:text-3xl font-black text-stone-900 dark:text-white font-display">7+</span>
                <span className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-wider">Projects</span>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-stone-800 hidden sm:block" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-stone-900 dark:text-white font-display">14+</span>
                <span className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-wider">Tech Stacks</span>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-stone-800 hidden sm:block" />
              <div>
                <span className="block text-xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-display">Parul 6.0</span>
                <span className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono uppercase tracking-wider">Hackathon</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 mr-1">
                Follow:
              </span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                data-cursor="GITHUB"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                data-cursor="LINKEDIN"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                data-cursor="TWITTER"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-all shadow-xs"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.email}
                aria-label="Email Manish"
                data-cursor="EMAIL"
                className="p-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-all shadow-xs"
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
                className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent rounded-2xl blur-xl opacity-50 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3D Tilt Wrapper */}
              <TiltCard3D maxTilt={5} dataCursor="MANISH" className="w-full max-w-full">
                <div className="relative rounded-2xl border border-stone-200/90 dark:border-stone-800/90 bg-white dark:bg-[#141417] backdrop-blur-xl p-3 shadow-lg dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] overflow-hidden group w-full">
                  
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[3/3.8] rounded-xl overflow-hidden bg-stone-900 shadow-inner">
                    
                    {/* Subtle Spotlight behind head */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tr from-amber-500/10 via-yellow-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                    {/* Official Portrait Image */}
                    <Image
                      src="/assets/manish_hero.jpg"
                      alt="Manish Kumar — Full-Stack Developer & UI/UX Designer"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                      className="object-cover object-top hover:scale-103 transition-transform duration-500 ease-out"
                    />

                    {/* Soft Gradient at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Chip 1: Education Badge */}
                    <ParallaxWrapper speed={6} maxMouseOffset={6} className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-amber-300 shadow-lg">
                        <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                        <span>MCA @ Parul Univ</span>
                      </div>
                    </ParallaxWrapper>

                    {/* Floating Chip 2: Tech Badge */}
                    <ParallaxWrapper speed={-6} maxMouseOffset={6} className="absolute bottom-3.5 left-3 sm:bottom-4 sm:left-3.5 z-20">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-mono text-stone-200 shadow-lg">
                        <Code2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Full-Stack &amp; n8n</span>
                      </div>
                    </ParallaxWrapper>

                  </div>

                  {/* Clean Bottom Name Bar */}
                  <div className="px-2 pt-2.5 pb-1 flex items-center justify-between">
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white tracking-tight font-display">
                        Manish Kumar
                      </h2>
                      <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                        Gujarat, India
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-mono text-emerald-700 dark:text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
            className="group flex flex-col items-center gap-2 text-xs font-mono text-stone-400 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <span>EXPLORE PROFILE</span>
            <div className="w-8 h-8 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-600 dark:text-amber-400" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
