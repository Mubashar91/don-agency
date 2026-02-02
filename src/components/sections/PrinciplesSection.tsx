interface PrinciplesSectionProps {
  translations: {
    principles: {
      title: string
      items: Array<{ title: string; description: string }>
    }
  }
}

export default function PrinciplesSection({ translations }: PrinciplesSectionProps) {
  const { principles } = translations
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">{principles.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.items.map((principle, i) => (
            <div
              key={i}
              className="group p-8 border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
