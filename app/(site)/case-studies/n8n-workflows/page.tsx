"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Workflow, Clock, Zap } from "lucide-react"

export default function N8nCaseStudy() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">n8n Automation Flows</h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Workflow className="w-6 h-6 text-primary" />
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Built and maintained complex production automation workflows using n8n that connect multiple services,
                transform data, and trigger actions based on various events. These workflows handle everything from
                customer onboarding to data synchronization across platforms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4">Workflow Architecture</h2>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Typical workflow node graph showing triggers, transformations, and integrations:
                </p>
                <div className="bg-background rounded-lg p-8 border-2 border-border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-12 bg-primary/20 rounded flex items-center justify-center text-sm font-medium">
                        Webhook
                      </div>
                      <div className="flex-1 h-0.5 bg-border" />
                      <div className="w-32 h-12 bg-primary/20 rounded flex items-center justify-center text-sm font-medium">
                        Transform
                      </div>
                    </div>
                    <div className="flex items-center gap-4 ml-40">
                      <div className="flex-1 h-0.5 bg-border" />
                      <div className="w-32 h-12 bg-primary/20 rounded flex items-center justify-center text-sm font-medium">
                        Enrich
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-12 bg-primary/20 rounded flex items-center justify-center text-sm font-medium">
                        Cron Job
                      </div>
                      <div className="flex-1 h-0.5 bg-border" />
                      <div className="w-32 h-12 bg-primary rounded flex items-center justify-center text-sm font-medium text-primary-foreground">
                        CRM Push
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Webhook Triggers",
                    desc: "Real-time event processing from multiple sources",
                  },
                  {
                    title: "Scheduled Tasks",
                    desc: "Cron-based automation for regular data sync and reporting",
                  },
                  {
                    title: "Data Transformation",
                    desc: "Complex data manipulation and normalization logic",
                  },
                  {
                    title: "CRM Integration",
                    desc: "Automated data push to CRM systems via webhooks and APIs",
                  },
                  {
                    title: "Error Handling",
                    desc: "Robust error handling with fallback and retry logic",
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
                <Clock className="w-6 h-6 text-primary" />
                Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">20+ hours</div>
                    <div className="text-sm text-muted-foreground">Saved per week</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
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
