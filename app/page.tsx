"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { ContactForm } from "@/components/ui/contact-form"
import { PortfolioCard } from "@/components/ui/portfolio-card"
import { Button } from "@/components/ui/button"
import { BackgroundCircles } from "@/components/ui/background-circles"
import { EtheralShadow } from "@/components/ui/etheral-shadow"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import AboutServices from "@/components/about-services"

const projects = [
  {
    title: "Government of the Republic of Dominica",
    description: "Official News & Information Portal",
    url: "https://www.dominicanews.dm",
    thumbnail: "/images/dn-logo.png",
    category: "Government",
  },
  {
    title: "Express Impex",
    description: "Premium Import/Export Business Solutions",
    url: "https://www.expressimpex.com",
    thumbnail: "https://i.postimg.cc/Fz6vKcC4/EXPRESS-IMPEX-LOGO.png",
    category: "Business",
  },
  {
    title: "That Infinite Girl",
    description: "Personal Brand & Lifestyle Platform",
    url: "https://www.thatinfinitegirl.com",
    thumbnail: "https://i.postimg.cc/2y2XpH1Y/Chat-GPT-Image-Sep-1-2025-07-53-28-PM.png",
    category: "Lifestyle",
  },
  {
    title: "Noor Travels",
    description: "Premium Travel & Car Rental Website",
    url: "https://noortravels.org",
    thumbnail: "https://i.postimg.cc/Yq5kWc42/portfoloiothumbnail.jpg",
    category: "Travel & Tourism",
  },
  {
    title: "Aseco Life Care Pvt Ltd",
    description: "Healthcare & Life Sciences Solutions",
    url: "https://asecolifecare.com",
    thumbnail: "https://i.postimg.cc/L8CYqj1s/aseclogos.jpg",
    category: "Healthcare",
  },
  {
    title: "EasyBezy",
    description: "Digital Solutions & Services Platform",
    url: "https://www.easybezy.in",
    thumbnail: "https://files.catbox.moe/8mx5um.jpg",
    category: "Digital Services",
  },
  {
    title: "ZuZi Fashion",
    description: "Korean-Chinese Fusion Streetwear",
    url: "https://zuzifashion.com",
    thumbnail: "https://i.postimg.cc/1zMLMbzq/zuzinail.jpg",
    category: "E-commerce",
  },
  {
    title: "Vidha QRA Solutions (V1)",
    description: "MedTech Regulatory Consultancy",
    url: "https://vidhaqra.com",
    thumbnail: "https://i.postimg.cc/kgMr8nJm/vidhanail.jpg",
    category: "Healthcare",
  },
  {
    title: "Vidha QRA Solutions (Enhanced)",
    description: "Modern Glassmorphism UI",
    url: "https://loquacious-croquembouche-9b8b0a.netlify.app",
    thumbnail: "https://i.postimg.cc/kgMr8nJm/vidhanail.jpg",
    category: "Healthcare",
  },
  {
    title: "Client Budget App",
    description: "Personal Finance Tracker with DB Integration",
    url: "https://hilarious-travesseiro-aef9fb.netlify.app",
    thumbnail: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    category: "Finance",
  },
  {
    title: "Jarvis AI Assistant",
    description: "AI-Powered Voice Assistant UI",
    url: "https://incandescent-pithivier-83ceda.netlify.app",
    thumbnail: "https://i.postimg.cc/CKQH74bN/jarvis-thumbnail.jpg",
    category: "AI/ML",
  },
  {
    title: "Office Workspace Showcase",
    description: "Professional Office Environment",
    url: "#",
    thumbnail: "https://i.postimg.cc/15X2gjbB/office-view.jpg",
    category: "Photography",
  },
]

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <main className="relative min-h-screen bg-background">
      <ShaderAnimation />

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <BackgroundCircles variant="primary" />

        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <motion.div
          className="container mx-auto relative z-10 max-w-7xl"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
              <Image
                src="https://i.postimg.cc/X7DmGsZH/AMMARBUILDSLOGO.jpg"
                alt="Ammar Builds"
                width={120}
                height={120}
                className="rounded-full shadow-2xl border-4 border-primary/50 neon-glow relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <h1 className="text-7xl lg:text-9xl font-bold tracking-tighter leading-none">
                <span className="block text-gradient text-shadow-neon">Ammar</span>
                <span className="block text-gradient-neon text-shadow-neon">Builds</span>
              </h1>

              <p className="text-2xl lg:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Elite software development for businesses that demand excellence
              </p>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse neon-glow"></span>
                  Full-Stack
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse neon-glow"></span>
                  AI/ML
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lavender animate-pulse neon-glow"></span>
                  Design
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 shadow-xl neon-glow-hover transition-all duration-300"
              >
                <Link href="#portfolio">
                  View Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 shadow-xl neon-glow-hover transition-all duration-300"
              >
                <Link href="#contact">Start Project</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { label: "Projects", value: "50+" },
                { label: "Industries", value: "8+" },
                { label: "Prototype", value: "2hrs" },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-gradient-neon">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Ethereal Shadow Background for all sections except hero */}
      <EtheralShadow
        color="rgba(100, 100, 120, 0.3)"
        animation={{ scale: 80, speed: 70 }}
        noise={{ opacity: 0.8, scale: 1.5 }}
        sizing="fill"
        className="relative"
      >
        <AboutServices />

        <section id="portfolio" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <ContainerScroll>
            <div className="container mx-auto relative z-10 max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center"
              >
                <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                  Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Real solutions delivering real results for businesses and startups across industries
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <PortfolioCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          </ContainerScroll>
        </section>

        <section
          id="contact"
          className="relative py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto relative z-10 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tighter">
                Let's Build <span className="text-gradient-gold">Your Vision</span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                From concept to launch in record time. Choose your preferred contact method below.
              </p>
            </motion.div>

            <ContactForm />
          </div>
        </section>
      </EtheralShadow>
    </main>
  )
}
