"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2, Code2, Sparkles, MapPin, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#070709] border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Quote Banner */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-3 inline-block">
            Philosophy &amp; Mindset
          </span>
          <blockquote className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            &ldquo;I don’t just write code — <br className="hidden sm:inline" />
            <span className="gradient-text-glow">I create experiences.</span>&rdquo;
          </blockquote>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base font-light">
            Digital things that people genuinely love and find seamless to use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo Stack Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-96">
              
              {/* Back Layer 3 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-950/40 to-violet-950/40 border border-white/10 rotate-6 translate-x-3 translate-y-3 opacity-60" />
              
              {/* Middle Layer 2 */}
              <div className="absolute inset-0 rounded-2xl bg-neutral-900/80 border border-white/10 -rotate-3 -translate-x-2 translate-y-1 opacity-80" />

              {/* Foreground Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                <Image
                  src="/assets/about.jpg"
                  alt="Manish Kumar portrait"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/90 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white">Manish Kumar</p>
                    <p className="text-[10px] text-cyan-400 font-mono">Creative Technologist</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-300">
                    <MapPin className="w-3 h-3 text-[#00f0ff]" />
                    <span>Gujarat, IN</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6">
              Engineering with precision, <br />
              <span className="gradient-text-cyan">designing with passion.</span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I’m <strong className="text-white font-medium">Manish</strong> — a full-stack developer and UI/UX designer currently pursuing my Master of Computer Applications (MCA) at Parul University, Vadodara, having completed my BCA at HNGU with Distinction.
              </p>
              <p>
                I bridge the gap between engineering rigor and aesthetic sensitivity. My focus lies in designing and building scalable web applications, responsive user interfaces with React and Tailwind CSS, backend architectures with Node.js and MySQL/Firebase, and automated business workflows via n8n.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                <span className="text-xs text-neutral-300">
                  <strong className="text-white">Clean UI &amp; Intuitive UX</strong> across all screen viewports
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                <span className="text-xs text-neutral-300">
                  <strong className="text-white">Full-Stack Cloud Delivery</strong> from frontend to database
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                <span className="text-xs text-neutral-300">
                  <strong className="text-white">Workflow Automation</strong> using n8n and modern APIs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                <span className="text-xs text-neutral-300">
                  <strong className="text-white">Continuous Growth</strong> and Hackathon competition experience
                </span>
              </div>
            </div>

            {/* Authentic Numerical Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {siteConfig.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center hover:border-[#00f0ff]/30 transition-colors"
                >
                  <p className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
