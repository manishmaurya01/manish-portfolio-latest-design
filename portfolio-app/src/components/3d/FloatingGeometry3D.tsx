"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface FloatingGeometry3DProps {
  shape?: "icosahedron" | "dodecahedron" | "torusKnot" | "octahedron";
  size?: number;
  className?: string;
  glowColor?: string;
  wireframeColor?: string;
}

export default function FloatingGeometry3D({
  shape = "icosahedron",
  size = 180,
  className = "relative flex items-center justify-center",
  glowColor = "#00f0ff",
  wireframeColor = "#8b5cf6",
}: FloatingGeometry3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = size;
    const height = size;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(new THREE.Color(glowColor), 3, 20);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(new THREE.Color(wireframeColor), 2.5, 20);
    pointLight2.position.set(-3, -3, 3);
    scene.add(pointLight2);

    // Geometry
    let geometry: THREE.BufferGeometry;
    switch (shape) {
      case "dodecahedron":
        geometry = new THREE.DodecahedronGeometry(1.2, 0);
        break;
      case "torusKnot":
        geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 64, 16);
        break;
      case "octahedron":
        geometry = new THREE.OctahedronGeometry(1.2, 0);
        break;
      case "icosahedron":
      default:
        geometry = new THREE.IcosahedronGeometry(1.2, 0);
        break;
    }

    // Outer Wireframe Mesh
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(glowColor),
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    scene.add(wireMesh);

    // Inner Shaded Core
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x070b14,
      roughness: 0.2,
      metalness: 0.9,
      emissive: new THREE.Color(wireframeColor),
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(geometry, coreMat);
    coreMesh.scale.set(0.92, 0.92, 0.92);
    scene.add(coreMesh);

    // Interactive Drag / Hover rotation
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        targetRotY += deltaX * 0.015;
        targetRotX += deltaY * 0.015;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.style.cursor = "grab";
    domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    let animationId: number;
    let clock = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      clock += 0.01;

      // Auto rotation + drag inertia
      if (!isDragging) {
        targetRotY += 0.008;
        targetRotX += 0.004;
      }

      wireMesh.rotation.y = THREE.MathUtils.lerp(wireMesh.rotation.y, targetRotY, 0.08);
      wireMesh.rotation.x = THREE.MathUtils.lerp(wireMesh.rotation.x, targetRotX, 0.08);

      coreMesh.rotation.y = wireMesh.rotation.y;
      coreMesh.rotation.x = wireMesh.rotation.x;

      // Gentle floating bob
      wireMesh.position.y = Math.sin(clock) * 0.08;
      coreMesh.position.y = wireMesh.position.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      geometry.dispose();
      wireMat.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [shape, size, glowColor, wireframeColor]);

  return <div ref={mountRef} className={className} />;
}
