"use client"

import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Mail, Phone } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

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
      { title: "GitHub", href: "https://github.com/DomanicBlaze040604", icon: GithubIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/ammar-siddiqui-32386a250/", icon: LinkedinIcon },
      { title: "Instagram", href: "https://www.instagram.com/ammargotnoriz/", icon: InstagramIcon },
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
