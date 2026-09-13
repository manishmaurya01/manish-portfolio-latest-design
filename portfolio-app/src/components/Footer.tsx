"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./SocialIcons";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 text-neutral-400 text-xs w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Manish Kumar"
                  width={32}
                  height={32}
                  className="object-contain p-1"
                />
              </div>
              <span className="text-base font-bold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
                Manish Kumar
              </span>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              Web Developer, UI/UX Designer &amp; Programmer building modern websites, digital products, and creative web experiences.
            </p>

            {/* Live IST Clock */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] font-mono text-[11px] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
              <span>Gujarat, IN:</span>
              <span className="text-white font-semibold">{time || "12:00 PM IST"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#00f0ff] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block mb-4">
              Social Channels
            </span>
            <p className="text-xs text-neutral-400 mb-4">
              Follow along with my ongoing builds, experiments, and open-source contributions.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-colors"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-[#00f0ff] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-all text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f0ff]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
