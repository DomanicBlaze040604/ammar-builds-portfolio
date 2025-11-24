"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Upload, X, MessageCircle, User, Briefcase } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("budget", formData.budget)
    formDataToSend.append("timeline", formData.timeline)
    formDataToSend.append("message", formData.message)
    if (file) {
      formDataToSend.append("file", file)
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", budget: "", timeline: "", message: "" })
        setFile(null)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.log("[v0] Form submission error:", error)
      setSubmitStatus("error")

      const mailtoLink = `mailto:mk7164798@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(`Budget: ${formData.budget}\nTimeline: ${formData.timeline}\n\n${formData.message}`)}`
      window.location.href = mailtoLink
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="premium-card premium-card-hover p-8 text-center space-y-4 bg-gradient-to-br from-primary/5 to-gold/5 border-2 border-primary/20">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 font-serif">Ammar</h3>
            <p className="text-muted-foreground mb-6">Lead Developer & Designer</p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg glow-primary"
          >
            <a
              href="https://wa.me/919137037888?text=Hi%20Ammar%2C%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Ammar
            </a>
          </Button>
        </div>

        <div className="premium-card premium-card-hover p-8 text-center space-y-4 bg-gradient-to-br from-gold/5 to-accent/5 border-2 border-gold/20">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
            <Briefcase className="w-8 h-8 text-gold" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 font-serif">Manager</h3>
            <p className="text-muted-foreground mb-6">Project Coordination & Planning</p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-bold py-6 text-lg glow-gold"
          >
            <a
              href="https://wa.me/917506405404?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20project%20management"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Manager
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="premium-card p-10 bg-card border-2 border-primary/10"
      >
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold mb-3 font-serif">Send Detailed Inquiry</h3>
          <p className="text-muted-foreground">Or fill out the form below for a comprehensive project brief</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors h-12 text-base"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors h-12 text-base"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-base font-semibold">
                Project Budget
              </Label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors h-12 text-base px-3 rounded-md"
              >
                <option value="">Select range</option>
                <option value="<$5k">Less than $5,000</option>
                <option value="$5k-$10k">$5,000 - $10,000</option>
                <option value="$10k-$25k">$10,000 - $25,000</option>
                <option value="$25k+">$25,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-base font-semibold">
                Desired Timeline
              </Label>
              <select
                id="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors h-12 text-base px-3 rounded-md"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP (Rush)</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1-3 months">1-3 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-semibold">
              Project Details *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors min-h-[180px] text-base"
              placeholder="Tell me about your project: What are you building? What problems are you solving? Any specific requirements or features?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file" className="text-base font-semibold">
              Attachments (optional)
            </Label>
            <p className="text-sm text-muted-foreground mb-2">
              Upload wireframes, mockups, or project documents (max 5MB)
            </p>
            <div className="flex items-center gap-4">
              <Input
                id="file"
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0]
                  if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
                    setFile(selectedFile)
                  } else if (selectedFile) {
                    alert("File size must be less than 5MB")
                  }
                }}
                className="bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.fig,.sketch,.psd"
              />
              {file && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Upload className="w-4 h-4 text-primary" />
                  <span className="truncate max-w-[150px]">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg glow-primary"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Project Brief
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base text-primary font-semibold text-center bg-primary/10 p-4 rounded-lg"
            >
              ✓ Message sent successfully! I'll respond within 24 hours.
            </motion.p>
          )}

          {submitStatus === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base text-destructive text-center bg-destructive/10 p-4 rounded-lg"
            >
              Failed to send. Opening email client as fallback...
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  )
}
