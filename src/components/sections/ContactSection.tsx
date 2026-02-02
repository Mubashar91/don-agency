import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

interface ContactSectionProps {
  translations: {
    contactForm: {
      title: string
      subtitle: string
      namePlaceholder: string
      emailPlaceholder: string
      companyPlaceholder: string
      messagePlaceholder: string
      submit: string
    }
  }
}

export default function ContactSection({ translations }: ContactSectionProps) {
  return (
    <section id="contact-form" className="py-20 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">{translations.contactForm.title}</h2>
          <p className="text-xl text-muted-foreground">{translations.contactForm.subtitle}</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <Input
              placeholder={translations.contactForm.namePlaceholder}
              className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
            />
            <Input
              type="email"
              placeholder={translations.contactForm.emailPlaceholder}
              className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
            />
          </div>
          <Input
            placeholder={translations.contactForm.companyPlaceholder}
            className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
          />
          <Textarea
            placeholder={translations.contactForm.messagePlaceholder}
            className="bg-secondary border-border rounded-sm min-h-[150px] focus:border-primary transition-colors resize-none"
          />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm h-12 text-base font-medium transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/20">
            {translations.contactForm.submit}
          </Button>
        </form>
      </div>
    </section>
  )
}
