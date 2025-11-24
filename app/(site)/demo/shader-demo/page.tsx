"use client"

import { ShaderAnimation } from "@/components/ui/shader-lines"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ShaderDemo() {
  return (
    <main className="relative min-h-screen">
      <ShaderAnimation />
      <div className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 bg-background/80 backdrop-blur-sm">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <div className="page-shadow bg-card/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Shader Animation Demo</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This page showcases the Three.js shader animation running in the background. The animated lines create a
              dynamic, premium backdrop effect used throughout the portfolio site.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Technology:</strong> Three.js with custom GLSL shaders
              </p>
              <p>
                <strong>Features:</strong> Animated wave patterns, responsive to screen size, optimized performance
              </p>
              <p>
                <strong>Use Cases:</strong> Hero sections, background effects, premium visual enhancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
