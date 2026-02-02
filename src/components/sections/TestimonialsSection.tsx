import { Users, Shield, Target, BarChart3 } from "lucide-react"

const ICONS = [Users, Shield, Target, BarChart3]

interface TestimonialsSectionProps {
  translations: {
    testimonials: {
      title: string
      subtitle: string
      items: Array<{ quote: string; name: string; title: string }>
    }
  }
}

export default function TestimonialsSection({ translations }: TestimonialsSectionProps) {
  const { testimonials } = translations
  return (
    <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
          {testimonials.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{testimonials.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.items.map((testimonial, i) => {
          const Icon = ICONS[i]
          return (
            <div key={i} className="bg-card border border-border p-10 rounded-sm">
              <p className="text-lg text-foreground leading-relaxed mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
