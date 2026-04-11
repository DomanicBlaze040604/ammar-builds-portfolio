import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ammarbuilds.com'

interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
}

const pages: SitemapEntry[] = [
  {
    loc: BASE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    loc: `${BASE_URL}/case-studies/chatbots`,
    lastmod: '2025-04-01',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    loc: `${BASE_URL}/case-studies/lead-gen`,
    lastmod: '2025-04-01',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    loc: `${BASE_URL}/case-studies/flutter-app`,
    lastmod: '2025-04-01',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    loc: `${BASE_URL}/case-studies/n8n-workflows`,
    lastmod: '2025-04-01',
    changefreq: 'monthly',
    priority: '0.9',
  },
]

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  })
}
