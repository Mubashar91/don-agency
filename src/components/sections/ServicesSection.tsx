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
    <section id="services" className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{translations.services.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">{translations.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translations.services.items.map((service, i) => (
            <div
              key={i}
              className="group p-6 md:p-8 border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-1 bg-card hover:bg-card/80 cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
