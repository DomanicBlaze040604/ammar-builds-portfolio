"use client"

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"
import { cn } from "@/lib/utils"

type Experience = {
  quote: string
  title: string
  role: string
  src: string
}

export const AnimatedExperiences = ({
  experiences,
  autoplay = true,
  className,
}: {
  experiences: Experience[]
  autoplay?: boolean
  className?: string
}) => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % experiences.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  // Generate stable rotation values using useMemo to avoid hydration mismatch
  const rotations = useMemo(() => {
    return experiences.map((_, index) => {
      // Use index-based deterministic rotation instead of random
      return ((index * 7) % 21) - 10
    })
  }, [experiences.length])

  return (
    <div className={cn("max-w-sm md:max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index) ? 999 : experiences.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={experience.src || "/placeholder.svg"}
                    alt={experience.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border-2 border-primary/20"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground uppercase tracking-wide">
              {experiences[active].title}
            </h3>
            <p className="text-lg text-primary font-semibold mt-2">{experiences[active].role}</p>
            <motion.p className="text-lg md:text-xl text-muted-foreground mt-8 leading-relaxed">
              {experiences[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group/button hover:bg-primary/30 transition-all duration-300"
            >
              <IconArrowLeft className="h-6 w-6 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group/button hover:bg-primary/30 transition-all duration-300"
            >
              <IconArrowRight className="h-6 w-6 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
