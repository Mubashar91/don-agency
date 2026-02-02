interface PurposeSectionProps {
  translations: {
    purpose: {
      title: string
      subtitle: string
      description: string
    }
  }
}

export default function PurposeSection({ translations }: PurposeSectionProps) {
  const { purpose } = translations
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">{purpose.title}</h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{purpose.subtitle}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">{purpose.description}</p>
        </div>
      </div>
    </section>
  )
}
