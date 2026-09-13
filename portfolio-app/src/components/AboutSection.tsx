"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import TiltCard3D from "./3d/TiltCard3D";
import { CheckCircle2, Sparkles, MapPin } from "lucide-react";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Parse numeric prefix
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (targetNumber === 0) return;

          let start = 0;
          const duration = 1600;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * targetNumber);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-3.5 rounded-xl border border-stone-200/90 dark:border-stone-800 bg-stone-50/80 dark:bg-[#121215]/80 backdrop-blur-sm text-center transition-all duration-200 group shadow-xs hover:border-stone-300 dark:hover:border-stone-700"
    >
      <p className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white font-mono tracking-tight transition-colors">
        {targetNumber > 0 ? `${count}${suffix}` : value}
      </p>
      <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-stone-800/80 w-full max-w-full overflow-hidden transition-colors duration-200">
      {/* Ambient background glow (subtle) */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Quote Banner */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-3 inline-block font-medium">
            // 01 — Philosophy &amp; Mindset
          </span>
          <blockquote className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-snug font-display">
            &ldquo;I don’t just write code — <br className="hidden sm:inline" />
            <span className="text-stone-500 dark:text-stone-400 font-normal">I create experiences.</span>&rdquo;
          </blockquote>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base font-light">
            Digital solutions designed for clarity, high performance, and human intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Tilt Photo Stack Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard3D
              maxTilt={5}
              dataCursor="ABOUT"
              className="w-72 sm:w-80 h-96 cursor-pointer"
            >
              {/* Back Layer 3 */}
              <div className="absolute inset-0 rounded-2xl bg-stone-200/50 dark:bg-stone-900/40 border border-stone-300/60 dark:border-stone-800 rotate-2 translate-x-1.5 translate-y-1.5 opacity-60 pointer-events-none" />
              
              {/* Middle Layer 2 */}
              <div className="absolute inset-0 rounded-2xl bg-stone-100 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 -rotate-1 -translate-x-1 translate-y-0.5 opacity-80 pointer-events-none" />

              {/* Foreground Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-stone-200/90 dark:border-stone-800 shadow-xl bg-stone-900 group">
                <Image
                  src="/assets/manish_about_new.jpg"
                  alt="Manish Kumar portrait"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-white/90 dark:bg-[#121215]/90 backdrop-blur-md border border-stone-200/80 dark:border-stone-800 flex items-center justify-between shadow-md">
                  <div>
                    <p className="text-xs font-semibold text-stone-900 dark:text-white">Manish Kumar</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">Creative Technologist</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-600 dark:text-stone-300">
                    <MapPin className="w-3 h-3 text-stone-400 dark:text-stone-400" />
                    <span>Gujarat, IN</span>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mb-2 font-medium">
              // 02 — About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-6">
              Engineering with precision, <br />
              <span className="text-stone-500 dark:text-stone-400 font-normal">designing with passion.</span>
            </h2>

            <div className="space-y-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I’m <strong className="text-stone-900 dark:text-white font-semibold">Manish</strong> — a full-stack developer and UI/UX designer currently pursuing my Master of Computer Applications (MCA) at Parul University, Vadodara, having completed my BCA at HNGU with Distinction.
              </p>
              <p>
                I bridge the gap between engineering rigor and aesthetic sensitivity. My focus lies in designing and building scalable web applications, responsive user interfaces with React and Tailwind CSS, backend architectures with Node.js and MySQL/Firebase, and automated business workflows via n8n.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Clean UI &amp; Intuitive UX</strong> across all screen viewports
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Full-Stack Cloud Delivery</strong> from frontend to database
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Workflow Automation</strong> using n8n and modern APIs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-stone-400 dark:text-stone-500 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Continuous Growth</strong> and Hackathon competition experience
                </span>
              </div>
            </div>

            {/* Numerical Stats with Viewport-Triggered Counter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {siteConfig.stats.map((stat, idx) => (
                <AnimatedStat
                  key={idx}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
