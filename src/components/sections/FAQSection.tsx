interface FAQSectionProps {
  translations: {
    faq: {
      title: string
      items: Array<{ question: string; answer: string }>
    }
  }
}

export default function FAQSection({ translations }: FAQSectionProps) {
  const { faq } = translations
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">{faq.title}</h2>
        <div className="space-y-8">
          {faq.items.map((item, i) => (
            <div key={i} className="group pb-8 border-b border-border last:border-0">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
