"use client"

import { useEffect, useRef } from "react"

export function ShaderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Skip heavy animation on low-end devices (navigator.hardwareConcurrency <= 4)
    const isLowEnd = typeof navigator !== "undefined" && navigator.hardwareConcurrency <= 4
    const particlesCount = isLowEnd ? 400 : 700

    let animationFrameId: number
    let three: any

    const initShader = async () => {
      try {
        three = await import("three")

        const scene = new three.Scene()
        const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new three.WebGLRenderer({ canvas, alpha: true, antialias: false })

        renderer.setSize(window.innerWidth, window.innerHeight)
        // Cap pixel ratio at 1.5 — prevents heavy GPU load on hi-dpi screens
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        renderer.setClearColor(0x000000, 0)
        camera.position.z = 5

        const particlesGeometry = new three.BufferGeometry()
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

        // Throttled mouse tracking — only update every 50ms
        let mouseX = 0
        let mouseY = 0
        let lastMouseUpdate = 0
        const handleMouseMove = (event: MouseEvent) => {
          const now = Date.now()
          if (now - lastMouseUpdate < 50) return
          lastMouseUpdate = now
          mouseX = (event.clientX / window.innerWidth) * 2 - 1
          mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        }
        window.addEventListener("mousemove", handleMouseMove, { passive: true })

        // Throttled render: target 30fps to halve GPU load
        let lastFrame = 0
        const FPS_INTERVAL = 1000 / 30

        const animate = (timestamp: number) => {
          animationFrameId = requestAnimationFrame(animate)
          if (timestamp - lastFrame < FPS_INTERVAL) return
          lastFrame = timestamp

          particlesMesh.rotation.y += 0.0005
          particlesMesh.rotation.x = mouseY * 0.1
          particlesMesh.rotation.y += mouseX * 0.001

          renderer.render(scene, camera)
        }

        animationFrameId = requestAnimationFrame(animate)

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener("resize", handleResize, { passive: true })

        return () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("mousemove", handleMouseMove)
          cancelAnimationFrame(animationFrameId)
          particlesGeometry.dispose()
          particlesMaterial.dispose()
          renderer.dispose()
        }
      } catch (error) {
        console.log("[shader] Three.js failed to load:", error)
      }
    }

    const cleanup = initShader()

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      cleanup?.then((fn) => fn?.())
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
