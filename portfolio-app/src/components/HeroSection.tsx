"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import HeroCanvas from "./HeroCanvas";
import { ArrowDown, ArrowUpRight, Mail, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070709]"
    >
      {/* Interactive Background Canvas */}
      <HeroCanvas />

      {/* Ambient background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#8b5cf6]/15 via-[#00f0ff]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 backdrop-blur-md mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wide">
                Available for Projects &amp; Roles
              </span>
            </div>

            {/* Intro Greeting */}
            <div className="flex items-center gap-2 text-sm md:text-base font-mono text-[#00f0ff] mb-3">
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              <span>Hi there, I am {siteConfig.name}</span>
            </div>

            {/* Main Kinetic Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-display">
              Build Digital <br />
              <span className="gradient-text-cyan">Products, Brands</span> <br />
              <span className="text-neutral-300 font-light">&amp; Experiences.</span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="max-w-xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Full-Stack Developer, UI/UX Designer &amp; Programmer based in Gujarat, India. 
              Specializing in reactive web applications, clean user architecture, and intelligent automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00f0ff]/25 transition-all duration-200 active:scale-95"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#00f0ff]" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X Profile"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-all"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.email}
                  aria-label="Email Manish"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Avatar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00f0ff]/30 via-[#8b5cf6]/30 to-[#00f0ff]/20 rounded-3xl blur-xl opacity-70 animate-pulse-glow" />

              {/* Main Avatar Glass Container */}
              <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#131622]/90 to-[#0d0f17]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center">
                
                {/* Tech Badge Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-[11px] font-mono text-cyan-300">
                  MCA @ Parul Univ
                </div>

                {/* Avatar Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 rounded-2xl overflow-hidden border-2 border-white/15 shadow-inner bg-gradient-to-tr from-[#070709] to-[#1e293b]">
                  <Image
                    src="/assets/hero_avatar.png"
                    alt="Manish Kumar Avatar"
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Subtitle / Bio pill */}
                <h2 className="text-xl font-bold text-white mb-1 tracking-tight">
                  Manish Kumar
                </h2>
                <p className="text-xs font-mono text-[#00f0ff] mb-4">
                  Full-Stack Dev • UI/UX Designer
                </p>

                {/* Live micro-metrics pills */}
                <div className="grid grid-cols-2 gap-2 w-full pt-4 border-t border-white/10">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="block text-base font-bold text-white font-mono">3+</span>
                    <span className="text-[11px] text-neutral-400">Client Projects</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="block text-base font-bold text-cyan-400 font-mono">12+</span>
                    <span className="text-[11px] text-neutral-400">Tech Stacks</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About Section"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#00f0ff] transition-colors"
          >
            <span>DISCOVER MORE</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/40 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
