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
      className="p-3.5 rounded-xl border border-stone-200 dark:border-white/10 bg-stone-100/80 dark:bg-white/[0.02] backdrop-blur-sm text-center hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 group shadow-sm"
    >
      <p className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white font-mono tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
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
    <section id="about" className="py-24 relative bg-[var(--bg-primary)] border-t border-stone-200 dark:border-white/[0.06] w-full max-w-full overflow-hidden transition-colors duration-200">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Quote Banner */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3 inline-block font-semibold">
            Philosophy &amp; Mindset
          </span>
          <blockquote className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-snug font-display">
            &ldquo;I don’t just write code — <br className="hidden sm:inline" />
            <span className="gradient-text-accent">I create experiences.</span>&rdquo;
          </blockquote>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base font-light">
            Digital solutions designed for clarity, high performance, and human intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Tilt Photo Stack Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard3D
              maxTilt={15}
              dataCursor="ABOUT"
              className="w-72 sm:w-80 h-96 cursor-pointer"
            >
              {/* Back Layer 3 */}
              <div className="absolute inset-0 rounded-2xl bg-stone-200/60 dark:bg-stone-800/40 border border-stone-300 dark:border-white/10 rotate-6 translate-x-3 translate-y-3 opacity-60" />
              
              {/* Middle Layer 2 */}
              <div className="absolute inset-0 rounded-2xl bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-white/10 -rotate-3 -translate-x-2 translate-y-1 opacity-80" />

              {/* Foreground Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-stone-200 dark:border-white/20 shadow-2xl bg-stone-900 group">
                <Image
                  src="/assets/manish_about_new.jpg"
                  alt="Manish Kumar portrait"
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/80 dark:bg-black/75 backdrop-blur-md border border-stone-200 dark:border-white/10 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-semibold text-stone-900 dark:text-white">Manish Kumar</p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-mono">Creative Technologist</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-stone-600 dark:text-stone-300">
                    <MapPin className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    <span>Gujarat, IN</span>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight font-display mb-6">
              Engineering with precision, <br />
              <span className="gradient-text-accent">designing with passion.</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-stone-200 dark:border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Clean UI &amp; Intuitive UX</strong> across all screen viewports
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Full-Stack Cloud Delivery</strong> from frontend to database
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <span className="text-xs text-stone-700 dark:text-stone-300">
                  <strong className="text-stone-900 dark:text-white font-medium">Workflow Automation</strong> using n8n and modern APIs
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
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
