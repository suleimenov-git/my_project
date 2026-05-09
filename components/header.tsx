"use client"

import Link from "next/link"
import { Phone, MessageCircle, Send } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-8">
          <Link 
            href="#about" 
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            О нас
          </Link>
          <Link 
            href="#services" 
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Услуги
          </Link>
          <Link 
            href="#contact" 
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            Контакты
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="tel:+77085151998" 
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-white" />
          </a>
          <a 
            href="https://wa.me/77085151998" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-white" />
          </a>
          <a 
            href="https://t.me/+77085151998" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Send className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>
    </header>
  )
}
