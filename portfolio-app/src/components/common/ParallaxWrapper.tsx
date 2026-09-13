"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number; // Parallax intensity (e.g., -20 to 20)
  className?: string;
  mouseParallax?: boolean;
  maxMouseOffset?: number;
}

export default function ParallaxWrapper({
  children,
  speed = 10,
  className = "",
  mouseParallax = true,
  maxMouseOffset = 15,
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mouseParallax) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      targetX = normX * maxMouseOffset * (speed / 10);
      targetY = normY * maxMouseOffset * (speed / 10);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [mouseParallax, speed, maxMouseOffset]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-75 ease-out ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
