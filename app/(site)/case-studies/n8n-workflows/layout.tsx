import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "n8n Automation Workflows — Ammar Builds",
  description:
    "Case study: End-to-end n8n automation workflows for business processes — CRM sync, email sequences, data pipelines, and API integrations.",
  alternates: { canonical: "https://ammarbuilds.com/case-studies/n8n-workflows" },
  openGraph: {
    title: "n8n Automation Workflows — Ammar Builds",
    description:
      "Case study: End-to-end n8n automation workflows for business processes — CRM sync, email sequences, data pipelines, and API integrations.",
    url: "https://ammarbuilds.com/case-studies/n8n-workflows",
    siteName: "Ammar Builds",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Automation Workflows — Ammar Builds",
    description:
      "Case study: End-to-end n8n automation workflows for CRM sync, email sequences, and API integrations.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
