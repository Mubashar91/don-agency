interface ServicesSectionProps {
  translations: {
    services: {
      title: string
      subtitle: string
      items: Array<{
        title: string
        description: string
      }>
    }
  }
}

export default function ServicesSection({ translations }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">{translations.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{translations.services.subtitle}</p>
        </div>

        <div className="space-y-8">
          {translations.services.items.map((service, i) => (
            <div
              key={i}
              className="p-8 border border-border bg-card"
            >
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
