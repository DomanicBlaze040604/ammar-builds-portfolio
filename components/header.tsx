"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about", label: "About" },
    {
      label: "Case Studies",
      submenu: [
        { href: "/case-studies/lead-gen", label: "Lead-Gen Scraper" },
        { href: "/case-studies/n8n-workflows", label: "n8n Automation" },
        { href: "/case-studies/chatbots", label: "Chatbots & Agents" },
        { href: "/case-studies/flutter-app", label: "Flutter App" },
      ],
    },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://i.postimg.cc/X7DmGsZH/AMMARBUILDSLOGO.jpg"
              alt="Ammar Builds Logo"
              width={45}
              height={45}
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-foreground hidden sm:block">Ammar Builds</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                    className="w-full text-left py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCaseStudiesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isCaseStudiesOpen && (
                    <div className="pl-4 space-y-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
