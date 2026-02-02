import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowLeft, Target, Zap, Database, BarChart3, Users, TrendingUp, Clock, DollarSign, Shield, CheckCircle } from "lucide-react"

interface CaseStudyDetailProps {
  language: "en" | "de"
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function CaseStudyDetail({ language, darkMode, toggleDarkMode }: CaseStudyDetailProps) {
  const translations = {
    en: {
      title: "Revenue Operations Platform",
      category: "Series B SaaS Company",
      subtitle: "End-to-end revenue operations system connecting Salesforce, Stripe, and internal data warehouse",
      overview: {
        title: "Project Overview",
        description: "Built a comprehensive revenue operations platform that unified disparate systems into a single source of truth. The solution automated 47 manual processes and reduced reporting time from 3 days to 15 minutes.",
        client: "Vertex SaaS",
        duration: "6 weeks",
        team: "3 engineers",
        technologies: "Salesforce, Stripe, Snowflake, Airflow, React"
      },
      challenges: {
        title: "Challenges",
        items: [
          "Disconnected systems across sales, finance, and operations",
          "Manual data reconciliation taking 3+ days",
          "Inaccurate forecasting due to data silos",
          "No real-time visibility into revenue metrics",
          "Compliance and audit trail requirements"
        ]
      },
      solution: {
        title: "Our Solution",
        description: "Designed and implemented a unified revenue operations platform that:",
        features: [
          "Integrated Salesforce CRM with Stripe payment data",
          "Built automated data pipelines using Airflow",
          "Created real-time dashboards for revenue metrics",
          "Implemented forecasting algorithms with 94% accuracy",
          "Established audit trails for compliance requirements"
        ]
      },
      results: {
        title: "Results",
        metrics: [
          {
            icon: Target,
            value: "87%",
            label: "Reduction in manual work"
          },
          {
            icon: Zap,
            value: "15 min",
            label: "Reporting time (from 3 days)"
          },
          {
            icon: Database,
            value: "100%",
            label: "Data accuracy"
          },
          {
            icon: TrendingUp,
            value: "94%",
            label: "Forecasting accuracy"
          }
        ],
        impact: [
          "Streamlined month-end close process",
          "Improved sales team productivity by 40%",
          "Enabled real-time decision making",
          "Reduced compliance overhead by 60%"
        ]
      },
      testimonial: {
        quote: "DON AGENCY built our entire revenue operations infrastructure in 6 weeks. What would have taken our team 6 months to patch together, they delivered as a cohesive system. Our forecasting accuracy went from 63% to 94%.",
        author: "Sarah Chen",
        role: "VP Operations, Vertex SaaS"
      },
      navigation: {
        backToWork: "Back to Work",
        nextProject: "Next Project",
        contactUs: "Contact Us"
      }
    },
    de: {
      title: "Revenue Operations Plattform",
      category: "Series B SaaS-Unternehmen",
      subtitle: "End-to-End Revenue Operations System, das Salesforce, Stripe und interne Data Warehouse verbindet",
      overview: {
        title: "Projektübersicht",
        description: "Umfassende Revenue Operations Plattform entwickelt, die disparate Systeme zu einer einzigen Datenquelle zusammenführte. Die Lösung automatisierte 47 manuelle Prozesse und reduzierte die Berichtszeit von 3 Tagen auf 15 Minuten.",
        client: "Vertex SaaS",
        duration: "6 Wochen",
        team: "3 Ingenieure",
        technologies: "Salesforce, Stripe, Snowflake, Airflow, React"
      },
      challenges: {
        title: "Herausforderungen",
        items: [
          "Getrennte Systeme über Vertrieb, Finanzen und Operationen",
          "Manuelle Datenabgleich dauerte 3+ Tage",
          "Ungenauige Prognosen aufgrund von Datensilos",
          "Keine Echtzeit-Transparenz in Umsatzkennzahlen",
          "Compliance- und Audit-Trail-Anforderungen"
        ]
      },
      solution: {
        title: "Unsere Lösung",
        description: "Entwarf und implementierte eine vereinheitlichte Revenue Operations Plattform, die:",
        features: [
          "Salesforce CRM mit Stripe Zahlungsdaten integrierte",
          "Automatisierte Datenpipelines mit Airflow erstellte",
          "Echtzeit-Dashboards für Umsatzkennzahlen entwickelte",
          "Prognosealgorithmen mit 94% Genauigkeit implementierte",
          "Audit-Trails für Compliance-Anforderungen etablierte"
        ]
      },
      results: {
        title: "Ergebnisse",
        metrics: [
          {
            icon: Target,
            value: "87%",
            label: "Reduzierung manueller Arbeit"
          },
          {
            icon: Zap,
            value: "15 min",
            label: "Berichtszeit (von 3 Tagen)"
          },
          {
            icon: Database,
            value: "100%",
            label: "Datengenauigkeit"
          },
          {
            icon: TrendingUp,
            value: "94%",
            label: "Prognosengenauigkeit"
          }
        ],
        impact: [
          "Monatsabschlussprozess optimiert",
          "Vertriebsteam-Produktivität um 40% verbessert",
          "Echtzeit-Entscheidungsfindung ermöglicht",
          "Compliance-Aufwand um 60% reduziert"
        ]
      },
      testimonial: {
        quote: "DON AGENCY hat unsere gesamte Revenue Operations Infrastruktur in 6 Wochen aufgebaut. Was unser Team 6 Monate zusammenflicken würde, haben sie als kohärentes System geliefert. Unsere Prognosegenauigkeit stieg von 63% auf 94%.",
        author: "Sarah Chen",
        role: "VP Operations, Vertex SaaS"
      },
      navigation: {
        backToWork: "Zurück zur Arbeit",
        nextProject: "Nächstes Projekt",
        contactUs: "Kontaktieren Sie uns"
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
              <Link to="/#work">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.navigation.backToWork}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
              {t.category}
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">{t.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t.subtitle}</p>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.overview.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.overview.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Client</h3>
                <p className="text-muted-foreground">{t.overview.client}</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">{t.overview.duration}</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-muted-foreground">{t.overview.team}</p>
              </div>
              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Technologies</h3>
                <p className="text-muted-foreground">{t.overview.technologies}</p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.challenges.title}</h2>
            <div className="space-y-4">
              {t.challenges.items.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.solution.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.solution.description}</p>
            <div className="space-y-4">
              {t.solution.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.results.title}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {t.results.metrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div key={index} className="text-center p-6 border border-border rounded-lg bg-card">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4">
              {t.results.impact.map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{impact}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="mb-16">
            <div className="p-8 border border-border rounded-lg bg-card">
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{t.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold">{t.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{t.testimonial.role}</div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/#work">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.navigation.backToWork}
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                {t.navigation.contactUs}
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
