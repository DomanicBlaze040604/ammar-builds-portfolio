import { NextResponse } from "next/server"
import { Resend } from "resend"
import { headers } from "next/headers"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim()
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitStore.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= maxRequests) {
    return false
  }
  
  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const forwarded = headersList.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(',')[0] : headersList.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const formData = await request.formData()
    const name = sanitizeInput(formData.get("name") as string || "")
    const email = sanitizeInput(formData.get("email") as string || "")
    const budget = sanitizeInput(formData.get("budget") as string || "")
    const timeline = sanitizeInput(formData.get("timeline") as string || "")
    const message = sanitizeInput(formData.get("message") as string || "")
    const file = formData.get("file") as File | null

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email format" }, { status: 400 })
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json({ success: false, error: "Message too short" }, { status: 400 })
    }

    if (message.length > 5000) {
      return NextResponse.json({ success: false, error: "Message too long" }, { status: 400 })
    }

    // Validate file size and type
    if (file) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        return NextResponse.json({ success: false, error: "File too large (max 5MB)" }, { status: 400 })
      }

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/png',
        'image/jpeg',
        'image/jpg'
      ]

      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json({ success: false, error: "Invalid file type" }, { status: 400 })
      }
    }

    // Prepare professional email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; }
          .message-box { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="margin: 0; color: #2563eb;">🚀 New Project Inquiry</h2>
          <p style="margin: 5px 0 0 0; color: #666;">Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Client Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email Address:</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>
          
          <div class="field">
            <div class="label">💰 Budget Range:</div>
            <div class="value">${budget || 'Not specified'}</div>
          </div>
          
          <div class="field">
            <div class="label">⏰ Timeline:</div>
            <div class="value">${timeline || 'Not specified'}</div>
          </div>
          
          <div class="field">
            <div class="label">💬 Project Details:</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          ${file ? `
          <div class="field">
            <div class="label">📎 Attachment:</div>
            <div class="value">${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</div>
          </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted through your portfolio contact form.</p>
          <p>Client IP: ${ip} | Timestamp: ${new Date().toISOString()}</p>
        </div>
      </body>
      </html>
    `

    // Send email using Resend
    const emailData: any = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mk7164798@gmail.com'],
      subject: `🚀 New Project Inquiry from ${name} - ${budget || 'Budget TBD'}`,
      html: emailContent,
      reply_to: email,
    }

    // Add attachment if file exists
    if (file) {
      const fileBuffer = await file.arrayBuffer()
      emailData.attachments = [{
        filename: file.name,
        content: Buffer.from(fileBuffer),
      }]
    }

    const result = await resend.emails.send(emailData)

    if (result.error) {
      console.error("Resend error:", result.error)
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
    }

    // Log successful submission (without sensitive data)
    console.log("Email sent successfully:", {
      id: result.data?.id,
      to: 'mk7164798@gmail.com',
      from: name,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully! I'll respond within 24 hours.",
      id: result.data?.id
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ 
      success: false, 
      error: "An unexpected error occurred. Please try again or contact directly via WhatsApp." 
    }, { status: 500 })
  }
}
