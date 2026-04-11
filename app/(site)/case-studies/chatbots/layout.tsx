import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chatbots & Agent Orchestration — Ammar Builds",
  description:
    "Case study: Building production AI chatbots and multi-agent orchestration systems. LLM integration, RAG pipelines, and autonomous workflow automation.",
  alternates: { canonical: "https://ammarbuilds.com/case-studies/chatbots" },
  openGraph: {
    title: "Chatbots & Agent Orchestration — Ammar Builds",
    description:
      "Case study: Building production AI chatbots and multi-agent orchestration systems. LLM integration, RAG pipelines, and autonomous workflow automation.",
    url: "https://ammarbuilds.com/case-studies/chatbots",
    siteName: "Ammar Builds",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbots & Agent Orchestration — Ammar Builds",
    description:
      "Case study: Building production AI chatbots and multi-agent orchestration systems.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
