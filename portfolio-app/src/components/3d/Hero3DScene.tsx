"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 12;

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

    // 3. Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const lightAmber = new THREE.PointLight(0xf59e0b, 2.4, 50);
    lightAmber.position.set(6, 6, 6);
    scene.add(lightAmber);

    const lightGold = new THREE.PointLight(0xd97706, 2.0, 50);
    lightGold.position.set(-6, -6, 6);
    scene.add(lightGold);

    // 4. Subtle Background Geometric Wireframe Halo (Positioned to the right behind portrait)
    const haloGeometry = new THREE.TorusGeometry(3.5, 0.4, 24, 80);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    haloMesh.position.set(4, 0, -4);
    haloMesh.rotation.x = Math.PI / 4;
    scene.add(haloMesh);

    // Inner subtle gold ring
    const innerHaloGeo = new THREE.RingGeometry(2.6, 2.65, 64);
    const innerHaloMat = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const innerHaloMesh = new THREE.Mesh(innerHaloGeo, innerHaloMat);
    innerHaloMesh.position.set(4, 0, -4);
    innerHaloMesh.rotation.x = Math.PI / 4;
    scene.add(innerHaloMesh);

    // 5. Star / Light Dust Particle Cloud
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0xf59e0b);
    const c2 = new THREE.Color(0xfbbf24);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 26;
      positions[i + 1] = (Math.random() - 0.5) * 18;
      positions[i + 2] = (Math.random() - 0.5) * 12;

      const mixed = c1.clone().lerp(c2, Math.random());
      colors[i] = mixed.r;
      colors[i + 1] = mixed.g;
      colors[i + 2] = mixed.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 6. Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = normX * 0.8;
      targetY = normY * 0.5;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animId: number;
    let clock = 0;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      clock += 0.006;

      // Smooth camera parallax
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      camera.position.x = currentX;
      camera.position.y = currentY;
      camera.lookAt(0, 0, 0);

      // Rotate geometric halo gently in background
      haloMesh.rotation.z = clock * 0.4;
      haloMesh.rotation.y = clock * 0.2;
      innerHaloMesh.rotation.z = -clock * 0.3;

      // Rotate particle cloud gently
      particleCloud.rotation.y = clock * 0.15;
      particleCloud.rotation.x = clock * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      haloGeometry.dispose();
      haloMaterial.dispose();
      innerHaloGeo.dispose();
      innerHaloMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
