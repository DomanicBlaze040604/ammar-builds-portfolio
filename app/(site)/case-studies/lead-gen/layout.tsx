import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lead-Gen Scraper & Workflow — Ammar Builds",
  description:
    "Case study: Automated lead generation scraper with n8n workflow integration. Sourcing, qualifying, and delivering high-intent leads at scale.",
  alternates: { canonical: "https://ammarbuilds.com/case-studies/lead-gen" },
  openGraph: {
    title: "Lead-Gen Scraper & Workflow — Ammar Builds",
    description:
      "Case study: Automated lead generation scraper with n8n workflow integration. Sourcing, qualifying, and delivering high-intent leads at scale.",
    url: "https://ammarbuilds.com/case-studies/lead-gen",
    siteName: "Ammar Builds",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead-Gen Scraper & Workflow — Ammar Builds",
    description:
      "Case study: Automated lead generation scraper with n8n workflow integration.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
