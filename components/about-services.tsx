"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import { AnimatedExperiences } from "@/components/ui/animated-experiences"

const AboutServices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    { title: "Full-Stack Development", desc: "React, Next.js, Node.js, TypeScript" },
    { title: "AI/ML Integration", desc: "ChatGPT, Anthropic, Custom Models" },
    { title: "Brand & Design", desc: "Logo, Identity, Marketing Materials" },
    { title: "Photography", desc: "Product, Corporate, Lifestyle" },
    { title: "Infrastructure", desc: "Hosting, Backend, DevOps" },
    { title: "SEO & Performance", desc: "Optimization, Analytics, Growth" },
  ]

  const experiences = [
    {
      title: "Government Tech Consultant",
      role: "Goa & Himachal Pradesh Governments",
      quote:
        "Serving as technology consultant for state governments, building digital infrastructure and modernizing public services for millions of citizens across India.",
      src: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Government of Dominica",
      role: "National News Portal Developer",
      quote:
        "Built the official government news and information portal for the Caribbean nation of Dominica, serving as the primary digital communication channel for the entire country.",
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Enterprise Solutions",
      role: "Indian Oil | Deloitte | KPMG | Pharma Tech",
      quote:
        "Delivered enterprise-grade solutions for Fortune 500 companies and major corporations, handling complex integrations, scalable architectures, and mission-critical systems.",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Technical Lead - Zebvo AI",
      role: "AI Startup | Built Team from Scratch",
      quote:
        "Led technical development at an AI startup, building the entire engineering team from ground up and delivering end-to-end product development from concept to launch.",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Google Solution Challenge",
      role: "Global Top 100 Finalist | 2024",
      quote:
        "Selected among the top 100 teams globally in Google's prestigious Solution Challenge, building an AI-powered solution addressing critical social impact challenges.",
      src: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Collaborator - Media Atelier",
      role: "Creative Partner | mediasmartatelier.com",
      quote:
        "Strategic collaborator at Media Smart Atelier, delivering premium digital experiences, brand identities, and creative solutions for high-end clients worldwide.",
      src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "Co-founder - ZuZi Fashion",
      role: "E-commerce Venture | Fashion Tech",
      quote:
        "Co-founded and built the technology backbone for ZuZi Fashion, an emerging e-commerce brand combining fashion with cutting-edge digital experiences.",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=3540&auto=format&fit=crop",
    },
    {
      title: "AI & ML Engineer",
      role: "B.E. AI&ML | M.H. Saboo Siddik COE | 2025",
      quote:
        "Pursuing Bachelor of Engineering in Artificial Intelligence & Machine Learning, combining academic excellence with real-world implementation of AI solutions.",
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3540&auto=format&fit=crop",
    },
  ]

  const highlights = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Same-Day MVP", value: "2hrs" },
    { label: "Google Top 100", value: "2024" },
    { label: "B.E. AI&ML", value: "2025" },
  ]

  return (
    <section ref={ref} id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-heading text-6xl lg:text-8xl font-bold text-gradient leading-tight tracking-tighter uppercase">
              Elite Digital Solutions
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              From government portals to startup MVPs. Building the future, one line at a time.
            </p>
          </motion.div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-gradient uppercase tracking-wide">
              Experience & Highlights
            </h3>
            <p className="text-lg text-muted-foreground">Proven track record across industries</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedExperiences experiences={experiences} autoplay={true} />
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center space-y-3 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Logo Carousels */}
        <div className="pt-8 mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold text-center">
            Trusted By
          </p>
          <LogoCarousel type="companies" />
        </div>

        <div className="mb-32">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Tech Stack</p>
          </div>
          <LogoCarousel type="tech" />
        </div>

        {/* Services */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-gradient uppercase tracking-wide">
              Services
            </h3>
            <p className="text-lg text-muted-foreground">Everything you need under one roof</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center space-y-4 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-foreground">{service.title}</h4>
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                <p className="text-muted-foreground text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-16 lg:p-24 text-center space-y-8 rounded-3xl">
          <h3 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight uppercase tracking-wide">
            Ready to Build the <span className="text-primary">Future?</span>
          </h3>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Elite development. Lightning-fast delivery. Zero compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7"
            >
              <Link href="#contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 font-bold text-lg px-10 py-7 bg-transparent"
            >
              <a href="https://www.mediasmartatelier.com" target="_blank" rel="noopener noreferrer">
                Media Smart Atelier
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutServices
