"use client"

import { useEffect, useRef } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Create circular sprite texture for particles
      const spriteCanvas = document.createElement('canvas')
      const spriteCtx = spriteCanvas.getContext('2d')
      if (spriteCtx) {
        spriteCanvas.width = 32
        spriteCanvas.height = 32
        const gradient = spriteCtx.createRadialGradient(16, 16, 0, 16, 16, 16)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        spriteCtx.fillStyle = gradient
        spriteCtx.fillRect(0, 0, 32, 32)
      }
      const spriteTexture = new THREE.Texture(spriteCanvas)
      spriteTexture.needsUpdate = true

      // Create sphere
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const isDarkMode = document.documentElement.classList.contains('dark')
      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: isDarkMode ? 0xE5E7EB : 0x8352FD,
        emissive: isDarkMode ? 0x4B5563 : 0x310A90,
        side: THREE.DoubleSide,
        flatShading: true,
      })
      const sphere = new THREE.Mesh(geometry, sphereMaterial)
      scene.add(sphere)

      const light = new THREE.PointLight(0xffffff, 1, 100)
      light.position.set(0, 0, 10)
      scene.add(light)

      camera.position.z = 5

      let particles: THREE.Points
      let particleGeometry: THREE.BufferGeometry
      let particleMaterial: THREE.PointsMaterial

      const createParticles = () => {
        const particleCount = 2000
        particleGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 10
          positions[i + 1] = (Math.random() - 0.5) * 10
          positions[i + 2] = (Math.random() - 0.5) * 10
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particleMaterial = new THREE.PointsMaterial({
          size: 0.05,
          map: spriteTexture,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          color: isDarkMode ? 0xFFFFFF : 0x8352FD,
        })
        particles = new THREE.Points(particleGeometry, particleMaterial)
        scene.add(particles)
      }

      createParticles()

      let animationState = 'forming' // 'forming', 'exploding', 'reassembling', 'floating'
      let animationProgress = 0
      const formingDuration = 600 // Increased duration for initial animation
      const explodingDuration = 400
      const reassemblingDuration = 400
      const floatingDuration = 900

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animate = () => {
        requestAnimationFrame(animate)

        const time = Date.now() * 0.001

        switch (animationState) {
          case 'forming':
            const formingProgress = easeInOutCubic(animationProgress / formingDuration)
            sphere.scale.setScalar(Math.min(1, formingProgress))
            if (animationProgress >= formingDuration) {
              animationState = 'exploding'
              animationProgress = 0
            }
            break
          case 'exploding':
            const explodingProgress = easeInOutCubic(animationProgress / explodingDuration)
            sphere.scale.setScalar(Math.max(0, 1 - explodingProgress))
            particles.visible = true
            const positions = particleGeometry.attributes.position.array as Float32Array
            for (let i = 0; i < positions.length; i += 3) {
              const factor = explodingProgress
              positions[i] *= 1 + factor * 2
              positions[i + 1] *= 1 + factor * 2
              positions[i + 2] *= 1 + factor * 2
            }
            particleGeometry.attributes.position.needsUpdate = true
            if (animationProgress >= explodingDuration) {
              animationState = 'reassembling'
              animationProgress = 0
            }
            break
          case 'reassembling':
            const reassemblingProgress = easeInOutCubic(animationProgress / reassemblingDuration)
            sphere.scale.setScalar(Math.min(1, reassemblingProgress))
            const reassemblingPositions = particleGeometry.attributes.position.array as Float32Array
            for (let i = 0; i < reassemblingPositions.length; i += 3) {
              const factor = 1 - reassemblingProgress
              reassemblingPositions[i] *= factor
              reassemblingPositions[i + 1] *= factor
              reassemblingPositions[i + 2] *= factor
            }
            particleGeometry.attributes.position.needsUpdate = true
            if (animationProgress >= reassemblingDuration) {
              animationState = 'floating'
              animationProgress = 0
              particles.visible = false
            }
            break
          case 'floating':
            sphere.position.x = Math.sin(time * 0.7) * 2
            sphere.position.y = Math.cos(time * 0.5) * 2
            sphere.rotation.x += 0.005
            sphere.rotation.y += 0.005
            if (animationProgress >= floatingDuration) {
              animationState = 'forming'
              animationProgress = 0
              sphere.scale.setScalar(0)
              sphere.position.set(0, 0, 0)
            }
            break
        }

        animationProgress++
        renderer.render(scene, camera)
      }

      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      // Handle dark mode changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isDark = document.documentElement.classList.contains('dark')
            sphereMaterial.color.setHex(isDark ? 0xE5E7EB : 0x8352FD)
            sphereMaterial.emissive.setHex(isDark ? 0x4B5563 : 0x310A90)
            particleMaterial.color.setHex(isDark ? 0xFFFFFF : 0x8352FD)
          }
        })
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })

      return () => {
        window.removeEventListener('resize', handleResize)
        observer.disconnect()
      }
    }
  }, [])

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
  )
}

