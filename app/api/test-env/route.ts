import { NextResponse } from 'next/server'

export async function GET() {
  // This endpoint helps verify environment variables are set correctly in production
  // Never expose actual API keys - only check if they exist
  
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'not-set',
    // Security: Never log actual API keys
    status: process.env.RESEND_API_KEY ? 'Environment configured correctly' : 'Missing RESEND_API_KEY'
  })
}