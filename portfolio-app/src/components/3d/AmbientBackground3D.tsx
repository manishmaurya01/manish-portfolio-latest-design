"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AmbientBackground3DProps {
  particleCount?: number;
  interactive?: boolean;
  className?: string;
  wireframeMesh?: "icosahedron" | "torus" | "octahedron" | "none";
}

export default function AmbientBackground3D({
  particleCount = 140,
  interactive = true,
  className = "absolute inset-0 pointer-events-none overflow-hidden",
  wireframeMesh = "icosahedron",
}: AmbientBackground3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 8;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f0ff, 2.5, 40);
    lightCyan.position.set(4, 4, 4);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0x8b5cf6, 2.5, 40);
    lightViolet.position.set(-4, -4, 4);
    scene.add(lightViolet);

    // 4. Optional Wireframe Floating Mesh
    let mesh: THREE.Mesh | null = null;
    if (wireframeMesh !== "none") {
      let geometry: THREE.BufferGeometry;
      if (wireframeMesh === "torus") {
        geometry = new THREE.TorusGeometry(1.8, 0.45, 16, 60);
      } else if (wireframeMesh === "octahedron") {
        geometry = new THREE.OctahedronGeometry(1.8, 1);
      } else {
        geometry = new THREE.IcosahedronGeometry(2.0, 1);
      }

      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });

      mesh = new THREE.Mesh(geometry, wireMat);
      mesh.position.set(2.5, -0.5, -2);
      scene.add(mesh);
    }

    // 5. Ambient Particles Cloud
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x00f0ff);
    const cViolet = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;

      const mixed = cCyan.clone().lerp(cViolet, Math.random());
      colors[i] = mixed.r;
      colors[i + 1] = mixed.g;
      colors[i + 2] = mixed.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMat);
    scene.add(particles);

    // 6. Interaction & Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let clock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible) return;

      clock += 0.008;

      // Smooth camera parallax interpolation
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      camera.position.x = currentX;
      camera.position.y = -currentY;
      camera.lookAt(0, 0, 0);

      // Rotate particle field
      particles.rotation.y = clock * 0.25;
      particles.rotation.x = clock * 0.12;

      // Rotate wireframe mesh if present
      if (mesh) {
        mesh.rotation.x = clock * 0.35;
        mesh.rotation.y = clock * 0.45;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      // Clean up Three.js resources
      particleGeometry.dispose();
      particleMat.dispose();
      if (mesh) {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      }
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [particleCount, interactive, wireframeMesh]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
