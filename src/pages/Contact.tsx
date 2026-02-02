import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

interface ContactPageProps {
  language: "en" | "de"
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function ContactPage({ language, darkMode, toggleDarkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "Let's build operational leverage together",
      description: "Tell us about your operational challenges and we'll show you how to scale.",
      form: {
        name: "Your Name",
        email: "your@email.com",
        company: "Company Name",
        message: "Tell us about your operational challenges...",
        submit: "Send Message"
      },
      contact: {
        title: "Get in Touch",
        email: "hello@donagency.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, San Francisco, CA 94105"
      },
      office: {
        title: "Our Office",
        hours: "Monday - Friday: 9AM - 6PM PST",
        response: "Typical response time: 2-4 hours during business hours"
      }
    },
    de: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns gemeinsam operativen Hebel aufbauen",
      description: "Erzählen Sie uns von Ihren operativen Herausforderungen und wir zeigen Ihnen, wie Sie skalieren können.",
      form: {
        name: "Ihr Name",
        email: "ihre@email.de",
        company: "Firmenname",
        message: "Erzählen Sie uns von Ihren operativen Herausforderungen...",
        submit: "Nachricht senden"
      },
      contact: {
        title: "Kontakt aufnehmen",
        email: "hello@donagency.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech Street, San Francisco, CA 94105"
      },
      office: {
        title: "Unser Büro",
        hours: "Montag - Freitag: 9Uhr - 18Uhr PST",
        response: "Typische Antwortzeit: 2-4 Stunden während der Geschäftszeiten"
      }
    }
  }

  const t = translations[language]

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300"
          >
            DON
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">{t.title}</h1>
            <p className="text-2xl text-muted-foreground mb-4">{t.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.form.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder={t.form.company}
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.form.message}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="text-base resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/85 text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
                >
                  {t.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.contact.title}</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${t.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${t.contact.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                      {t.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t.contact.address}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-semibold mb-4">{t.office.title}</h3>
                <p className="text-muted-foreground mb-2">{t.office.hours}</p>
                <p className="text-sm text-muted-foreground">{t.office.response}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
