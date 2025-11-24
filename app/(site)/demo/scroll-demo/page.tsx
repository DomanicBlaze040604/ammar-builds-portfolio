"use client"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ScrollDemo() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <ContainerScroll>
          <div className="page-shadow bg-card rounded-2xl p-8 lg:p-12 mb-12">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Container Scroll Animation Demo</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This page demonstrates the 3D scroll animation effect. As you scroll, elements transform with rotateX
              effects, creating depth and a page-turning experience similar to flipping through a physical book.
            </p>
          </div>

          <div className="space-y-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <Card key={num} className="page-shadow">
                <CardContent className="p-12">
                  <h2 className="font-serif text-3xl font-bold mb-4">Page {num}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This is page {num} of the scroll demo. Notice how each section transforms as you scroll, creating a
                    3D page-flipping effect. The ContainerScroll component uses Framer Motion to create smooth, spring-
                    based animations that respect the user's reduced motion preferences.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ContainerScroll>
      </div>
    </main>
  )
}
