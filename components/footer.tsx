"use client"

import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Mail, Phone, Github, Linkedin, Twitter, Instagram } from "lucide-react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Navigation",
    links: [
      { title: "Home", href: "/" },
      { title: "Portfolio", href: "/#portfolio" },
      { title: "About", href: "/#about" },
      { title: "Contact", href: "/#contact" },
    ],
  },
  {
    label: "Case Studies",
    links: [
      { title: "Lead-Gen Scraper", href: "/case-studies/lead-gen" },
      { title: "n8n Automation", href: "/case-studies/n8n-workflows" },
      { title: "Chatbots & Agents", href: "/case-studies/chatbots" },
      { title: "Flutter App", href: "/case-studies/flutter-app" },
    ],
  },
  {
    label: "Services",
    links: [
      { title: "Web Development", href: "/#services" },
      { title: "AI Solutions", href: "/#services" },
      { title: "Automation", href: "/#services" },
      { title: "Consulting", href: "/#contact" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "GitHub", href: "https://github.com/ammarbuilds", icon: Github },
      { title: "LinkedIn", href: "https://linkedin.com/in/ammarbuilds", icon: Linkedin },
      { title: "Twitter", href: "https://twitter.com/ammarbuilds", icon: Twitter },
      { title: "Instagram", href: "https://instagram.com/ammarbuilds", icon: Instagram },
    ],
  },
]

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[3rem] border-t border-[#C4C4C4]/20 bg-[#000000] px-6 py-16 lg:py-20 mt-20">
      {/* Top glow line */}
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur bg-[#EC1C24]/50" />

      {/* Red gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[radial-gradient(ellipse_at_top,_#EC1C24_0%,_transparent_70%)] opacity-20 blur-2xl" />

      <div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-8">
        {/* Brand Section */}
        <AnimatedContainer className="space-y-6">
          <Link href="/" className="inline-block">
            <h2 className="font-heading text-4xl font-black tracking-tight text-[#EDEDED] uppercase">
              Ammar<span className="text-[#EC1C24]">.</span>
            </h2>
          </Link>
          <p className="text-[#9A9A9A] text-sm leading-relaxed max-w-xs">
            Full-stack developer crafting premium digital experiences with AI, automation, and modern web technologies.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 pt-4 border-t border-[#C4C4C4]/10">
            <a
              href="tel:+917738510206"
              className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#EC1C24] transition-colors text-sm group"
            >
              <Phone className="w-4 h-4 text-[#EC1C24] group-hover:scale-110 transition-transform" />
              +91 77385 10206
            </a>
            <a
              href="mailto:mk7164798@gmail.com"
              className="flex items-center gap-3 text-[#9A9A9A] hover:text-[#EC1C24] transition-colors text-sm group"
            >
              <Mail className="w-4 h-4 text-[#EC1C24] group-hover:scale-110 transition-transform" />
              mk7164798@gmail.com
            </a>
            <p className="text-xs text-[#9A9A9A]/60 pt-2">
              Manager: Arfat Shah ·{" "}
              <a href="tel:+919930378707" className="hover:text-[#EC1C24] transition-colors">
                +91 99303 78707
              </a>
            </p>
          </div>
        </AnimatedContainer>

        {/* Links Grid */}
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-[#EDEDED] mb-6">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-[#9A9A9A] hover:text-[#EC1C24] inline-flex items-center transition-all duration-300 text-sm group"
                      >
                        {link.icon && <link.icon className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />}
                        <span className="relative">
                          {link.title}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#EC1C24] group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <AnimatedContainer delay={0.5} className="w-full mt-16 pt-8 border-t border-[#C4C4C4]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9A9A9A]">
            © {new Date().getFullYear()} <span className="text-[#EDEDED]">Ammar Builds</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#9A9A9A]">
            <Link href="/privacy" className="hover:text-[#EC1C24] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#EC1C24] transition-colors">
              Terms
            </Link>
            <span className="text-[#C4C4C4]/30">|</span>
            <span>
              Built with <span className="text-[#EC1C24]">passion</span>
            </span>
          </div>
        </div>
      </AnimatedContainer>
    </footer>
  )
}
