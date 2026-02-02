import { Button } from "../ui/button"

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {cta.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-12">{cta.subtitle}</p>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded px-8 py-4 text-base font-medium transition-colors duration-200"
        >
          {cta.button}
        </Button>
        <p className="mt-8 text-sm text-muted-foreground">{cta.response}</p>
      </div>
    </section>
  )
}
