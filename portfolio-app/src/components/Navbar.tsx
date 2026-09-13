"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "./common/ThemeToggle";
import { useResumeModal } from "@/context/ResumeModalContext";

export default function Navbar() {
  const { openResumeModal } = useResumeModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = ["home", "about", "capabilities", "tech-stack", "projects", "achievement", "journey", "contact"];
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
          ? "glass-nav py-3 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
            <Image
              src="/assets/logo.png"
              alt="Manish Kumar"
              width={32}
              height={32}
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-amber-500 transition-colors">
              Manish<span className="text-amber-500">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-mono">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-stone-200/80 dark:border-stone-800/80 bg-stone-100/80 dark:bg-[#121215]/80 backdrop-blur-xl px-2 py-1 shadow-xs">
          {siteConfig.navLinks.map((link) => {
            const sectionKey = link.href.replace("/#", "");
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-[12px] font-medium rounded-full transition-all duration-180 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-white font-semibold shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-white/[0.04]"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Stack: Theme Toggle + Resume + Connect */}
        <div className="hidden sm:flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={openResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/60 hover:border-amber-500/40 dark:hover:border-amber-500/40 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-amber-500 dark:hover:text-amber-400 transition-all shadow-xs cursor-pointer"
            title="Preview Resume on site"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-primary-tactile group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-stone-950 font-semibold"
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
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-stone-200 dark:border-white/15 bg-stone-100 dark:bg-white/5 text-sm font-medium text-stone-800 dark:text-white shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Preview &amp; Download Resume</span>
              </button>
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
