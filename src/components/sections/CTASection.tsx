import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  translations: {
    cta: {
      title: string
      subtitle: string
      button: string
      response: string
    }
  }
}

export default function CTASection({ translations }: CTASectionProps) {
  const { cta } = translations
  return (
    <section id="contact" className="px-6 md:px-8 py-32 md:py-40 max-w-[1400px] mx-auto border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-balance">
          {cta.title}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed mb-12">{cta.subtitle}</p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-12 h-16 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
        >
          {cta.button}
          <ArrowRight className="ml-3 h-6 w-6" />
        </Button>
        <p className="mt-8 text-sm text-muted-foreground">{cta.response}</p>
      </div>
    </section>
  )
}
