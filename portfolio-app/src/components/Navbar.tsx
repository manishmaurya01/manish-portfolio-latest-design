"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "./common/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = ["home", "about", "capabilities", "skills", "projects", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-full ${
        scrolled
          ? "glass-nav py-3.5 shadow-lg shadow-black/5 dark:shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-white/5 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Manish Kumar"
              width={36}
              height={36}
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Manish<span className="text-amber-600 dark:text-amber-400">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
              Developer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-stone-200 dark:border-white/10 bg-stone-100/90 dark:bg-stone-900/60 backdrop-blur-md px-4 py-1.5 shadow-sm dark:shadow-inner">
          {siteConfig.navLinks.map((link) => {
            const sectionKey = link.href.replace("/#", "");
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 font-semibold"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Stack: Theme Toggle + Resume + Connect */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-white/15 bg-stone-100 dark:bg-white/5 hover:bg-stone-200/80 dark:hover:bg-white/10 text-xs font-medium text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold shadow-md shadow-amber-500/20 transition-all duration-200 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger & Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg border border-stone-200 dark:border-white/10 bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border-b border-stone-200 dark:border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 py-2 border-b border-stone-100 dark:border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={siteConfig.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-stone-200 dark:border-white/15 bg-stone-100 dark:bg-white/5 text-sm font-medium text-stone-800 dark:text-white shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-sm font-semibold shadow-md shadow-amber-500/20"
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
