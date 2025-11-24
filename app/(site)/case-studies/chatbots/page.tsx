"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Bot, MessageSquare, Zap, Users } from "lucide-react"

export default function ChatbotsCaseStudy() {
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
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Chatbots & Agent Orchestration</h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-primary" />
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Designed and implemented intelligent chatbot systems with sophisticated conversation flows, external
                agent orchestration, and seamless fallback to human support when needed. These bots handle customer
                support, sales inquiries, and internal operations with high accuracy and user satisfaction.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Conversation Flow Design
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-4 border-l-4 border-primary">
                    <div className="font-semibold mb-2">User Intent Recognition</div>
                    <p className="text-sm text-muted-foreground">
                      Natural language processing to understand user queries and route to appropriate handlers
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border-l-4 border-primary">
                    <div className="font-semibold mb-2">Multi-Agent Orchestration</div>
                    <p className="text-sm text-muted-foreground">
                      Coordinate multiple specialized agents for complex queries requiring different expertise
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border-l-4 border-primary">
                    <div className="font-semibold mb-2">External API Integration</div>
                    <p className="text-sm text-muted-foreground">
                      Call external services for data retrieval, transactions, and third-party integrations
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border-l-4 border-accent">
                    <div className="font-semibold mb-2">Human Handoff</div>
                    <p className="text-sm text-muted-foreground">
                      Intelligent escalation to human agents when confidence is low or explicit request is made
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Capabilities
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Multi-turn conversations",
                  "Context retention",
                  "Sentiment analysis",
                  "Multi-language support",
                  "Transaction handling",
                  "API orchestration",
                  "Fallback strategies",
                  "Analytics & insights",
                ].map((capability) => (
                  <li key={capability} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Performance Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">92%</div>
                    <div className="text-sm text-muted-foreground">User satisfaction</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                    <div className="text-sm text-muted-foreground">Conversations/month</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Resolution rate</div>
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
