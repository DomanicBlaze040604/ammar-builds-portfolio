"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

interface BackgroundCirclesProps {
  className?: string
  variant?: "primary" | "secondary"
}

const COLOR_VARIANTS = {
  primary: {
    border: ["border-primary/60", "border-accent/50", "border-border/30"],
    gradient: "from-primary/30",
    radialGlow: "#6C5CE7",
  },
  secondary: {
    border: ["border-accent/60", "border-lavender/50", "border-border/30"],
    gradient: "from-accent/30",
    radialGlow: "#00E4C7",
  },
} as const

const AnimatedGrid = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#1F2937_0%,#1F2937_1px,transparent_1px,transparent_4%)] opacity-10" />
  </motion.div>
)

export function BackgroundCircles({ className, variant = "primary" }: BackgroundCirclesProps) {
  const variantStyles = COLOR_VARIANTS[variant]

  return (
    <div className={clsx("absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      <AnimatedGrid />

      <motion.div className="absolute h-[600px] w-[600px] opacity-40">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={clsx(
              "absolute inset-0 rounded-full",
              "border-2 bg-gradient-to-br to-transparent",
              variantStyles.border[i],
              variantStyles.gradient,
            )}
            animate={{
              rotate: 360,
              scale: [1, 1.05 + i * 0.05, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full mix-blend-screen"
              style={{
                background: `radial-gradient(ellipse at center, ${variantStyles.radialGlow}15 10%, transparent 70%)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div
          className="absolute inset-0 blur-[120px]"
          style={{
            background: `radial-gradient(ellipse at center, ${variantStyles.radialGlow}30 30%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 blur-[80px]"
          style={{
            background: `radial-gradient(ellipse at center, ${variantStyles.radialGlow}15 0%, transparent)`,
          }}
        />
      </div>
    </div>
  )
}
