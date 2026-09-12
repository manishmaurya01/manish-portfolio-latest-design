"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 10;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f0ff, 3, 50);
    pointLightCyan.position.set(5, 5, 5);
    scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 3, 50);
    pointLightViolet.position.set(-5, -5, 5);
    scene.add(pointLightViolet);

    // 4. Main 3D Sculpture: Holographic Torus Knot
    const torusKnotGeometry = new THREE.TorusKnotGeometry(2.0, 0.55, 120, 24, 2, 3);
    
    // Wireframe Outer Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const torusWireframe = new THREE.Mesh(torusKnotGeometry, wireframeMaterial);
    scene.add(torusWireframe);

    // Inner Glowing Core Mesh
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x080c18,
      emissive: 0x1a0f3d,
      roughness: 0.2,
      metalness: 0.9,
    });
    const torusInner = new THREE.Mesh(torusKnotGeometry, innerMaterial);
    torusInner.scale.set(0.97, 0.97, 0.97);
    scene.add(torusInner);

    // 5. Surrounding 3D Particle Cloud
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f0ff);
    const color2 = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spherical distribution around center
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 3.5 + Math.random() * 2.5;
      const sinPhi = Math.sin(phi);

      positions[i] = r * sinPhi * Math.cos(theta);
      positions[i + 1] = r * sinPhi * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      // Interpolate cyan and violet
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 6. Floating Polyhedron Geometries in Depth
    const floatingGroup = new THREE.Group();
    const shapes: THREE.Mesh[] = [];

    const geomOcta = new THREE.OctahedronGeometry(0.5, 0);
    const geomIcosa = new THREE.IcosahedronGeometry(0.4, 0);
    const geomTetra = new THREE.TetrahedronGeometry(0.45, 0);

    const polyMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    for (let i = 0; i < 6; i++) {
      const g = i % 3 === 0 ? geomOcta : i % 3 === 1 ? geomIcosa : geomTetra;
      const mesh = new THREE.Mesh(g, polyMaterial);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 2
      );
      floatingGroup.add(mesh);
      shapes.push(mesh);
    }
    scene.add(floatingGroup);

    // 7. Mouse & Touch Interaction Mechanics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const onPointerMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Subtle tracking of mouse
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = -(e.clientY / window.innerHeight) * 2 + 1;
        targetRotationY = normX * 0.8;
        targetRotationX = -normY * 0.6;
      } else {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support for mobile
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - previousPointerX;
        const deltaY = touch.clientY - previousPointerY;
        targetRotationY += deltaX * 0.015;
        targetRotationX += deltaY * 0.015;
        previousPointerX = touch.clientX;
        previousPointerY = touch.clientY;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        setIsInteracting(true);
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // 8. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp orientation towards target
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      // Base self-rotation
      torusWireframe.rotation.x = currentRotationX + elapsedTime * 0.2;
      torusWireframe.rotation.y = currentRotationY + elapsedTime * 0.25;
      torusInner.rotation.x = torusWireframe.rotation.x;
      torusInner.rotation.y = torusWireframe.rotation.y;

      // Rotate particle cloud gently in opposite direction
      particleCloud.rotation.y = -elapsedTime * 0.1;
      particleCloud.rotation.z = elapsedTime * 0.05;

      // Float and rotate background shapes
      shapes.forEach((s, idx) => {
        s.rotation.x += 0.01 * (idx + 1) * 0.5;
        s.rotation.y += 0.015 * (idx + 1) * 0.5;
        s.position.y += Math.sin(elapsedTime + idx) * 0.002;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 10. Clean Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);

      // Dispose Three.js objects
      torusKnotGeometry.dispose();
      wireframeMaterial.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      geomOcta.dispose();
      geomIcosa.dispose();
      geomTetra.dispose();
      polyMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor="DRAG 3D"
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0 pointer-events-auto select-none"
      title="Click and drag to spin 3D sculpture"
      aria-label="Interactive 3D WebGL Torus Sculpture"
    >
      {/* 3D Hint Badge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f0ff] px-3 py-1 rounded-full border border-cyan-500/20 bg-[#070709]/80 backdrop-blur-md">
          {isInteracting ? "Rotating 3D Space" : "Drag to Rotate 3D Sculpture"}
        </span>
      </div>
    </div>
  );
}
