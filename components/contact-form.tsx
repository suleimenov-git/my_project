"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setName("")
    setPhone("")
    setMessage("")
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Написать нам
          </h2>
          <p className="text-secondary-foreground/70 mb-10">
            Укажите данные, и мы обязательно свяжемся с вами.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch">
            <Input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-input border-border text-secondary-foreground placeholder:text-secondary-foreground/50 h-12 md:flex-1"
            />
            <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 h-12 md:flex-1">
              <span className="text-secondary-foreground/70 text-sm whitespace-nowrap">🇰🇿</span>
              <Input
                type="tel"
                placeholder="+7 (000) 000-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-transparent border-0 text-secondary-foreground placeholder:text-secondary-foreground/50 h-full p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <Input
              type="text"
              placeholder="Текст"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-input border-border text-secondary-foreground placeholder:text-secondary-foreground/50 h-12 md:flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 font-medium"
            >
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </form>
          
          {submitted && (
            <p className="mt-4 text-green-400 text-sm">
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
