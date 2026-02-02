import { Button } from "../ui/button"

interface HeroSectionProps {
  translations: {
    hero: {
      title: string
      subtitle: string
      cta: string
      secondaryCta: string
      stats: Array<{ value: string; label: string }>
    }
  }
}

export default function HeroSection({ translations }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
          {translations.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          {translations.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded px-8 py-4 text-base font-medium transition-colors duration-200">
            {translations.hero.cta}
          </Button>
          <Button variant="outline" className="border-border hover:border-primary/50 hover:text-primary text-foreground rounded px-8 py-4 text-base font-medium transition-colors duration-200">
            {translations.hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  )
}
