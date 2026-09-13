"use client";

import React, { useEffect, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only enable on desktop with mouse pointer — let mobile devices use native momentum scroll
    if (typeof window === "undefined") return;

    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      window.innerWidth < 1024;

    if (isTouchDevice) {
      // Do NOT initialize Lenis on touch devices to avoid gesture fighting & horizontal overflow
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 0,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Check if initial load has hash
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const aliasMap: Record<string, string> = {
        skills: "tech-stack",
        techstack: "tech-stack",
        achievements: "achievement",
        archivements: "achievement",
      };
      const targetId = aliasMap[hashId] || hashId;
      setTimeout(() => {
        const el = document.getElementById(targetId) || document.getElementById(hashId);
        if (el) lenis.scrollTo(el, { offset: -60 });
      }, 300);
    }

    // Smooth scroll for internal hash anchors
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let id = "";
      if (href.startsWith("/#")) {
        id = href.replace("/#", "");
      } else if (href.startsWith("#")) {
        id = href.slice(1);
      }

      if (id) {
        const aliasMap: Record<string, string> = {
          skills: "tech-stack",
          techstack: "tech-stack",
          achievements: "achievement",
          archivements: "achievement",
        };
        const targetId = aliasMap[id] || id;
        const element = document.getElementById(targetId) || document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -60 });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
