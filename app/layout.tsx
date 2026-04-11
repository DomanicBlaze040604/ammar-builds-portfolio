import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Inter, Geist_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const SITE_URL = "https://ammarbuilds.com"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ammar",
  url: SITE_URL,
  jobTitle: "Freelance Software Developer",
  description:
    "Full-stack software developer specializing in React, Next.js, TypeScript, and AI/ML solutions. Worked with governments and enterprises globally.",
  knowsAbout: ["React", "Next.js", "TypeScript", "AI/ML", "Flutter", "Full-Stack Development", "n8n Automation"],
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  sameAs: [SITE_URL],
}

export const metadata: Metadata = {
  title: "Ammar Builds — Freelance Software Developer | React, Next.js, AI",
  description:
    "Full-stack dev — React, Next.js, AI/ML — shipping enterprise web apps fast. Worked with Goa, Himachal Pradesh & Republic of Dominica governments.",
  generator: "Next.js",
  keywords: [
    "freelance developer",
    "React developer",
    "Next.js developer",
    "full-stack developer",
    "AI/ML developer",
    "TypeScript developer",
    "web development",
    "software engineer",
    "India",
    "Mumbai",
  ],
  authors: [{ name: "Ammar", url: SITE_URL }],
  creator: "Ammar",
  publisher: "Ammar Builds",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Ammar Builds — Freelance Software Developer",
    description:
      "Full-stack software developer specializing in React, Next.js, TypeScript, and AI/ML solutions.",
    siteName: "Ammar Builds",
    images: [
      {
        url: `${SITE_URL}/placeholder-logo.png`,
        width: 1200,
        height: 630,
        alt: "Ammar Builds - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Builds — Freelance Software Developer",
    description:
      "Full-stack software developer specializing in React, Next.js, TypeScript, and AI/ML solutions.",
    images: [`${SITE_URL}/placeholder-logo.png`],
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
    shortcut: "/favicon.jpg",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnects for external font sources */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        {/* Satoshi + General Sans (used in CSS as primary sans-serif) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Monument Extended (used for headings) */}
        <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
