"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Database, Zap, Target, TrendingUp } from "lucide-react"

export default function LeadGenCaseStudy() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Lead-Gen Scraper & Workflow</h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Problem
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Leads were scattered across 9 different platforms with inconsistent data formats, making it impossible
                to maintain a unified view of potential customers. Manual data entry was time-consuming, error-prone,
                and resulted in missed opportunities.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built a comprehensive lead scraping and enrichment system that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Crawls leads from 9 different platforms using Puppeteer/Playwright</li>
                <li>Normalizes data to a standardized schema</li>
                <li>Enriches leads with additional information from external APIs</li>
                <li>Integrates with n8n workflow for automated processing</li>
                <li>Delivers clean data to PostgreSQL database and CRM via webhook</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Puppeteer", "Playwright", "n8n", "PostgreSQL", "REST APIs", "Webhooks"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Leads per day</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Time saved</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Data accuracy</div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
