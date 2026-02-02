import { Button } from "../ui/button"

interface HeroSectionProps {
  translations: {
    hero: {
      title: string
      subtitle: string
      cta: string
      stats: Array<{ value: string; label: string }>
    }
  }
}

export default function HeroSection({ translations }: HeroSectionProps) {
  return (
    <section className="pt-24 sm:pt-32 md:pt-44 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-5xl animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-[1.05] mb-6 sm:mb-8 md:mb-10 tracking-tight animate-slide-up">
            {translations.hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed mb-8 sm:mb-12 md:mb-16 max-w-4xl font-light animate-slide-up [animation-delay:100ms]">
            {translations.hero.subtitle}
          </p>
          <Button className="bg-primary hover:bg-primary/85 text-primary-foreground rounded px-6 sm:px-8 md:px-12 h-11 sm:h-12 md:h-14 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 animate-slide-up [animation-delay:200ms]">
            {translations.hero.cta}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mt-16 sm:mt-20 md:mt-28 pt-16 sm:pt-20 md:pt-28 border-t border-border/40">
          {translations.hero.stats.map((stat, i) => (
            <div key={i} className="group text-center sm:text-left">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/90">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
