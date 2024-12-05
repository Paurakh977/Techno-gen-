"use client";

import { useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create circular sprite texture for particles
      const spriteCanvas = document.createElement("canvas");
      const spriteCtx = spriteCanvas.getContext("2d");
      if (spriteCtx) {
        spriteCanvas.width = 32;
        spriteCanvas.height = 32;
        const gradient = spriteCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        spriteCtx.fillStyle = gradient;
        spriteCtx.fillRect(0, 0, 32, 32);
      }
      const spriteTexture = new THREE.Texture(spriteCanvas);
      spriteTexture.needsUpdate = true;

      // Create sphere
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const isDarkMode = document.documentElement.classList.contains("dark");
      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0xc4b5fd : 0x8b5cf6,
        emissive: isDarkMode ? 0xa78bfa : 0x7c3aed,
        side: THREE.DoubleSide,
        flatShading: true,
      });
      const sphere = new THREE.Mesh(geometry, sphereMaterial);
      scene.add(sphere);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 10);
      scene.add(light);

      camera.position.z = 5;

      let particles: THREE.Points;
      let particleGeometry: THREE.BufferGeometry;
      let particleMaterial: THREE.PointsMaterial;

      const createParticles = (isDark: boolean) => {
        const particleCount = isDark ? 10000 : 60000;
        particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 35;
          positions[i + 1] = (Math.random() - 0.5) * 35;
          positions[i + 2] = (Math.random() - 0.5) * 55;
        }

        particleGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        particleMaterial = new THREE.PointsMaterial({
          size: isDark ? 0.06 : 0.12,
          map: spriteTexture,
          transparent: true,
          blending: THREE.AdditiveBlending,
          opacity: isDark ? 0.7 : 0.9,
          depthWrite: false,
          color: isDark ? 0xffffff : 0x8352fd,
        });
        particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
      };

      // Initial creation with current mode
      const initialIsDark = document.documentElement.classList.contains("dark");
      createParticles(initialIsDark);

      let animationState = "forming";
      let animationProgress = 0;
      const formingDuration = 600;
      const explodingDuration = 2000;
      const floatingDuration = 3000;

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };
      let sphereVelocity = { x: 0, y: 0 };
      const dragDamping = 0.95; // Damping factor for smooth deceleration
      const throwForceMultiplier = 0.5; // Adjust throw strength

      // Create raycaster for mouse interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Add mouse event handlers
      const onMouseDown = (event: MouseEvent) => {
        if (animationState !== "floating") return;

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(sphere);

        if (intersects.length > 0) {
          isDragging = true;
          previousMousePosition = { x: event.clientX, y: event.clientY };
        }
      };

      const onMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;

        // Calculate mouse movement
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;

        // Update sphere velocity based on mouse movement
        sphereVelocity.x = deltaX * 0.01;
        sphereVelocity.y = -deltaY * 0.01;

        // Update sphere position
        const vector = new THREE.Vector3();
        vector.set(
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1,
          0.5
        );
        vector.unproject(camera);
        vector.sub(camera.position).normalize();
        const distance = -camera.position.z / vector.z;
        const pos = camera.position
          .clone()
          .add(vector.multiplyScalar(distance));
        sphere.position.copy(pos);

        previousMousePosition = { x: event.clientX, y: event.clientY };
      };

      const onMouseUp = (event: MouseEvent) => {
        if (!isDragging) return;
        isDragging = false;

        // Calculate throw velocity
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;
        sphereVelocity.x = deltaX * throwForceMultiplier * 0.01;
        sphereVelocity.y = -deltaY * throwForceMultiplier * 0.01;
      };

      // Add event listeners
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      const animate = () => {
        requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        switch (animationState) {
          case "forming":
            const formingProgress = easeInOutCubic(
              animationProgress / formingDuration
            );
            sphere.scale.setScalar(Math.min(1, formingProgress));
            if (animationProgress >= formingDuration) {
              animationState = "exploding";
              animationProgress = 0;
            }
            break;
          case "exploding":
            const explodingProgress = easeInOutCubic(
              animationProgress / explodingDuration
            );
            sphere.scale.setScalar(Math.max(0, 1 - explodingProgress * 8));
            particles.visible = true;
            const positions = particleGeometry.attributes.position
              .array as Float32Array;
            for (let i = 0; i < positions.length; i += 3) {
              const factor = explodingProgress;
              positions[i] *= 1 + factor * 5;
              positions[i + 1] *= 1 + factor * 5;
              positions[i + 2] *= 1 + factor * 8;
              const angle =
                factor * Math.PI * 3 + (i / positions.length) * Math.PI * 2;
              const radius = factor * 1.5;
              positions[i] += Math.sin(angle) * radius;
              positions[i + 1] += Math.cos(angle) * radius;
              positions[i + 2] += (Math.random() - 0.5) * factor * 3;
            }
            particleGeometry.attributes.position.needsUpdate = true;
            if (
              animationProgress >= explodingDuration * 0.4 &&
              sphere.scale.x <= 0.1
            ) {
              animationState = "floating";
              animationProgress = 0;
              particles.visible = false;
              const entranceType = Math.floor(Math.random() * 4);
              let startX = 0,
                startY = 0;
              switch (entranceType) {
                case 0: // Diagonal entrance from far top-right
                  startX = 25;
                  startY = 20;
                  break;
                case 1: // Deep swoop from bottom
                  startX = -15;
                  startY = -25;
                  break;
                case 2: // Far left entrance
                  startX = -30;
                  startY = 8;
                  break;
                case 3: // High top drop
                  startX = 8;
                  startY = 30;
                  break;
              }
              sphere.position.set(startX, startY, 0);
              sphere.scale.setScalar(1);
            }
            break;
          case "floating":
            if (!isDragging) {
              if (sphereVelocity.x !== 0 || sphereVelocity.y !== 0) {
                // Apply throw physics
                sphere.position.x += sphereVelocity.x;
                sphere.position.y += sphereVelocity.y;

                // Apply damping
                sphereVelocity.x *= dragDamping;
                sphereVelocity.y *= dragDamping;

                // Stop very small movements
                if (Math.abs(sphereVelocity.x) < 0.001) sphereVelocity.x = 0;
                if (Math.abs(sphereVelocity.y) < 0.001) sphereVelocity.y = 0;

                // Add boundary checks
                const bound = 8;
                if (Math.abs(sphere.position.x) > bound) {
                  sphere.position.x = Math.sign(sphere.position.x) * bound;
                  sphereVelocity.x *= -0.8; // Bounce off edges
                }
                if (Math.abs(sphere.position.y) > bound) {
                  sphere.position.y = Math.sign(sphere.position.y) * bound;
                  sphereVelocity.y *= -0.8; // Bounce off edges
                }
              } else {
                // Original floating behavior when not thrown
                sphere.position.x +=
                  (Math.sin(time * 0.5) * 4 - sphere.position.x) * 0.02;
                sphere.position.y +=
                  (Math.cos(time * 0.3) * 3 - sphere.position.y) * 0.02;
              }
            }

            sphere.rotation.x += 0.003;
            sphere.rotation.y += 0.003;

            if (animationProgress >= floatingDuration) {
              animationState = "forming";
              animationProgress = 0;
              sphere.scale.setScalar(0);
              sphere.position.set(0, 0, 0);
              sphereVelocity = { x: 0, y: 0 };
            }
            break;
        }

        animationProgress++;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Modify the dark mode observer to recreate particles
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            const isDark = document.documentElement.classList.contains("dark");
            sphereMaterial.color.setHex(isDark ? 0xc4b5fd : 0x8b5cf6);
            sphereMaterial.emissive.setHex(isDark ? 0xa78bfa : 0x7c3aed);

            scene.remove(particles);
            createParticles(isDark);
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 mix-blend-difference"
        >
          Welcome to Technogen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mix-blend-difference"
        >
          Innovating the future, one byte at a time
        </motion.p>
      </div>
    </div>
  );
}
