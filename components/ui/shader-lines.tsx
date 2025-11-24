"use client"

import { useEffect, useRef } from "react"

export function ShaderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animationFrameId: number
    let three: any

    // Dynamic import of Three.js
    const initShader = async () => {
      try {
        three = await import("three")

        const scene = new three.Scene()
        const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new three.WebGLRenderer({ canvas, alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0)
        camera.position.z = 5

        // Create particle system for elegant background
        const particlesGeometry = new three.BufferGeometry()
        const particlesCount = 1000
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10
        }

        particlesGeometry.setAttribute("position", new three.BufferAttribute(posArray, 3))

        const particlesMaterial = new three.PointsMaterial({
          size: 0.02,
          color: 0x256d5a,
          transparent: true,
          opacity: 0.6,
          blending: three.AdditiveBlending,
        })

        const particlesMesh = new three.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Animation loop
        let mouseX = 0
        let mouseY = 0

        const handleMouseMove = (event: MouseEvent) => {
          mouseX = (event.clientX / window.innerWidth) * 2 - 1
          mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener("mousemove", handleMouseMove)

        const animate = () => {
          animationFrameId = requestAnimationFrame(animate)

          particlesMesh.rotation.y += 0.0005
          particlesMesh.rotation.x = mouseY * 0.1
          particlesMesh.rotation.y += mouseX * 0.001

          renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("mousemove", handleMouseMove)
          cancelAnimationFrame(animationFrameId)
          renderer.dispose()
        }
      } catch (error) {
        console.log("[v0] Three.js failed to load:", error)
      }
    }

    initShader()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30 z-0"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
