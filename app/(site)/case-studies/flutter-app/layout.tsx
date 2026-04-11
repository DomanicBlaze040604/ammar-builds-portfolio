import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flutter Assistive App for Deaf Community — Ammar Builds",
  description:
    "Case study: Flutter mobile app built for the deaf and hard-of-hearing community. Google Solution Challenge 2025 Top 100 finalist project.",
  alternates: { canonical: "https://ammarbuilds.com/case-studies/flutter-app" },
  openGraph: {
    title: "Flutter Assistive App for Deaf Community — Ammar Builds",
    description:
      "Case study: Flutter mobile app built for the deaf and hard-of-hearing community. Google Solution Challenge 2025 Top 100 finalist project.",
    url: "https://ammarbuilds.com/case-studies/flutter-app",
    siteName: "Ammar Builds",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter Assistive App for Deaf Community — Ammar Builds",
    description:
      "Case study: Flutter mobile app for the deaf community. Google Solution Challenge 2025 Top 100.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
