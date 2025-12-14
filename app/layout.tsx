import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Inter,
  IBM_Plex_Sans as V0_Font_IBM_Plex_Sans,
  Geist_Mono as V0_Font_Geist_Mono,
  Playfair_Display as V0_Font_Playfair_Display,
} from "next/font/google"
import { Geist_Mono } from "next/font/google"

// Initialize fonts
const _ibmPlexSans = V0_Font_IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _playfairDisplay = V0_Font_Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

// Using Inter and Playfair Display for premium typography
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

export const metadata: Metadata = {
  title: "Ammar Builds — Freelance Software Developer | React, Next.js, AI",
  description:
    "Full-stack software developer — React, Next.js, TS, AI/ML — shipping enterprise & startup web apps. Worked with governments of Goa, Himachal Pradesh, and Republic of Dominica.",
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
    "Mumbai"
  ],
  authors: [{ name: "Ammar", url: "https://ammarbuilds.com" }],
  creator: "Ammar",
  publisher: "Ammar Builds",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ammarbuilds.com',
    title: 'Ammar Builds — Freelance Software Developer',
    description: 'Full-stack software developer specializing in React, Next.js, TypeScript, and AI/ML solutions.',
    siteName: 'Ammar Builds',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Ammar Builds - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ammar Builds — Freelance Software Developer',
    description: 'Full-stack software developer specializing in React, Next.js, TypeScript, and AI/ML solutions.',
    images: ['/placeholder-logo.png'],
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
    <html lang="en" className={geistMono.variable}>
      <head>
        {/* Adding Google Fonts for premium typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-black">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
