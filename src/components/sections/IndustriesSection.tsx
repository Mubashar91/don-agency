interface IndustriesSectionProps {
  translations: {
    industries: {
      title: string
      subtitle: string
      items: Array<{ title: string; description: string; tags: string[] }>
    }
  }
}

export default function IndustriesSection({ translations }: IndustriesSectionProps) {
  const { industries } = translations
  return (
    <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
          {industries.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{industries.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.items.map((industry, i) => (
          <div
            key={i}
            className="bg-card border border-border p-10 rounded-sm hover:border-primary/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">{industry.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {industry.tags.map((tag, j) => (
                <span key={j}>
                  <span className="text-primary">{tag}</span>
                  {j < industry.tags.length - 1 && <span className="text-muted-foreground ml-2">•</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
