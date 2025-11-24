"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Smartphone, Heart, Accessibility, Database } from "lucide-react"

export default function FlutterAppCaseStudy() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-shadow bg-card rounded-2xl p-8 lg:p-12"
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Flutter Assistive App for Deaf Community</h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Mission & Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Built a cross-platform mobile application specifically designed for the deaf community, focusing on
                accessibility, offline support, and intuitive user experience. This app helps bridge communication gaps
                and provides essential tools for daily activities.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Accessibility className="w-6 h-6 text-primary" />
                Accessibility Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Visual Captions</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time visual captions for all audio content with customizable font sizes and colors
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Haptic Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Vibration patterns to convey different types of alerts and notifications
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Sign Language Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrated sign language videos and gestures for better communication
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Offline Functionality</h3>
                    <p className="text-sm text-muted-foreground">
                      Full offline support with local database (sqflite) for uninterrupted access
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                Technical Implementation
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Flutter Framework",
                    desc: "Cross-platform development for iOS and Android with single codebase",
                  },
                  {
                    title: "Local Database (sqflite)",
                    desc: "Offline-first architecture with SQLite for data persistence",
                  },
                  {
                    title: "Custom Widgets",
                    desc: "Accessibility-focused UI components with high contrast and large touch targets",
                  },
                  {
                    title: "Push Notifications",
                    desc: "Visual and haptic notifications using Flutter local notifications",
                  },
                  {
                    title: "State Management",
                    desc: "Provider pattern for reactive UI updates and clean architecture",
                  },
                ].map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong className="font-semibold">{feature.title}:</strong>{" "}
                      <span className="text-muted-foreground">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "sqflite", "Provider", "Firebase", "Local Notifications", "Custom Widgets"].map(
                  (tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
