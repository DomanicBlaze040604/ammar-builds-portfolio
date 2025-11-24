"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoCarouselProps {
  type: "companies" | "tech"
}

export const LogoCarousel = ({ type }: LogoCarouselProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const companies = [
    {
      name: "Indian Oil",
      logo: "https://www.iocl.com/images/indianoil-logo-new.png",
    },
    {
      name: "Deloitte",
      logo: "https://cdn.worldvectorlogo.com/logos/deloitte-1.svg",
    },
    {
      name: "KPMG",
      logo: "https://cdn.worldvectorlogo.com/logos/kpmg-1.svg",
    },
    {
      name: "Govt of Dominica",
      logo: "/images/dn-logo.png",
    },
    {
      name: "Goa Government",
      logo: "https://i.postimg.cc/t4vPHzSY/goa-govt-logo.png",
    },
    {
      name: "HP Government",
      logo: "https://i.postimg.cc/7h6L6xXw/hp-govt-logo.png",
    },
  ]

  const techStack = [
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "TailwindCSS",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    },
  ]

  const logos = type === "companies" ? companies : techStack
  const duplicatedLogos = [...logos, ...logos, ...logos]

  if (!mounted) return null

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center"
        animate={{
          x: [0, -100 * logos.length],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: type === "companies" ? 40 : 50,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center p-3"
            whileHover={{ scale: 1.15 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                width={48}
                height={48}
                className="object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=48&width=48&query=${logo.name} logo`
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
