"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "capabilities", "tech-stack", "projects", "achievement", "journey", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070709]/80 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Manish Kumar"
              width={36}
              height={36}
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-[#00f0ff] transition-colors">
              Manish<span className="text-[#00f0ff]">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
              Developer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/60 backdrop-blur-md px-4 py-1.5 shadow-inner">
          {siteConfig.navLinks.map((link) => {
            const sectionKey = link.href.replace("/#", "");
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#00f0ff]/10 text-[#00f0ff] font-semibold"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-neutral-200 hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#00f0ff] hover:bg-[#38f8ff] text-[#070709] text-xs font-semibold shadow-lg shadow-[#00f0ff]/20 transition-all duration-200 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-neutral-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#070709]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-[#00f0ff] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={siteConfig.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm font-medium text-white"
              >
                <FileText className="w-4 h-4 text-[#00f0ff]" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#00f0ff] text-[#070709] text-sm font-semibold shadow-md shadow-[#00f0ff]/20"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
