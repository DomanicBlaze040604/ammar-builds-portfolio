"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, type ReactNode } from "react"

export function ContainerScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -10])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative py-20 perspective-1000">
      <motion.div
        style={{
          scale,
          rotateX,
          y,
          opacity,
        }}
        className="mx-auto max-w-5xl"
      >
        {children}
      </motion.div>
    </div>
  )
}
