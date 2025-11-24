"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

interface Project {
  title: string
  description: string
  url: string
  thumbnail: string
  category: string
}

interface PortfolioCardProps {
  project: Project
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        type: "spring",
        stiffness: 100,
      }}
      className="h-full"
    >
      <Card className="glassmorphism-card premium-card-hover h-full overflow-hidden group relative rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          <motion.div className="absolute top-4 right-4" whileHover={{ scale: 1.1 }}>
            <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-md neon-glow border border-primary/30 flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {project.category}
            </span>
          </motion.div>
        </div>

        <CardContent className="p-8 relative z-20">
          <h3 className="text-2xl font-semibold mb-3 line-clamp-1 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-full transition-all duration-300 group/link font-medium text-sm border border-primary/20 hover:border-primary neon-glow-hover"
          >
            View Live
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </Link>
        </CardContent>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
        />
      </Card>
    </motion.div>
  )
}
