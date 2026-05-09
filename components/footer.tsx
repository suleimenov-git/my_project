import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Contact Info */}
        <div className="text-center mb-12" id="services">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            НАШИ КОНТАКТЫ
          </p>
          <a 
            href="tel:+77085151998" 
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
            +7 708 515 1998
          </a>
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
            Все фотографии, тексты и видеоматериалы принадлежат их владельцам и использованы для демонстрации. Пожалуйста, не используйте контент шаблона в коммерческих целях.
          </p>
        </div>
      </div>
    </footer>
  )
}
