interface ApproachSectionProps {
  translations: {
    approach: {
      title: string
      subtitle: string
      phases: Array<{ title: string; description: string }>
    }
  }
}

export default function ApproachSection({ translations }: ApproachSectionProps) {
  const { approach } = translations
  return (
    <section id="approach" className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">{approach.title}</h2>
          <p className="text-xl text-muted-foreground">{approach.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.phases.map((phase, i) => (
            <div key={i} className="group">
              <div className="mb-4 text-primary font-mono text-sm">0{i + 1}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                {phase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
