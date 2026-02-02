import { Database, Zap, Target, BarChart3, Users, Shield } from "lucide-react"

const ICONS = [Database, Zap, Target, BarChart3, Users, Shield]

interface CapabilitiesSectionProps {
  translations: {
    capabilities: {
      title: string
      subtitle: string
      items: Array<{ title: string; description: string }>
    }
  }
}

export default function CapabilitiesSection({ translations }: CapabilitiesSectionProps) {
  const { capabilities } = translations
  return (
    <section id="expertise" className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
          {capabilities.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{capabilities.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.items.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <div key={i} className="bg-card border border-border p-8 rounded-sm">
              <Icon className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
