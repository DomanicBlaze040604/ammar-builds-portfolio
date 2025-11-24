import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")
    const file = formData.get("file")

    console.log("[v0] Contact form submission:", { name, email, subject, message, file: file ? "attached" : "none" })

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, just log and return success

    return NextResponse.json({
      success: true,
      message: "Form received successfully",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, error: "Failed to process form" }, { status: 500 })
  }
}
