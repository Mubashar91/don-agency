import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const caseStudies = {
  "logistics-data-platform": {
    en: {
      category: "Data Infrastructure",
      title: "Building a Real-Time Logistics Data Platform",
      client: "Series C Logistics Company",
      timeline: "16 weeks",
      team: "3 engineers + 1 PM",
      challenge:
        "A fast-growing logistics company was drowning in spreadsheets. Route optimization required 3+ days of manual work, and forecasting was largely guesswork. They needed a system that could process thousands of shipments in real-time.",
      solution:
        "We built a complete data infrastructure from scratch: automated pipelines pulling from 12 different sources, a normalized data warehouse, and real-time dashboards for operations and finance teams. The system processes 50,000+ shipments per day and provides instant visibility into every metric that matters.",
      impact: [
        { metric: "87% reduction", description: "in time spent on route planning" },
        { metric: "3 days → 15 minutes", description: "for weekly forecasting process" },
        { metric: "50,000+", description: "shipments processed daily" },
        { metric: "Real-time visibility", description: "across all operational metrics" },
      ],
      approach: [
        {
          phase: "Discovery & Architecture",
          duration: "2 weeks",
          details: "Mapped all data sources, defined business logic, designed scalable architecture",
        },
        {
          phase: "Data Pipeline Build",
          duration: "6 weeks",
          details: "Built automated ETL pipelines, data warehouse, and API layer",
        },
        {
          phase: "Dashboard & Analytics",
          duration: "4 weeks",
          details: "Created operational dashboards, reporting system, and alert mechanisms",
        },
        {
          phase: "Testing & Deployment",
          duration: "4 weeks",
          details: "Load testing, parallel run with legacy system, team training, full deployment",
        },
      ],
      technologies: ["PostgreSQL", "Python", "Airflow", "dbt", "Metabase", "AWS"],
      testimonial: {
        quote:
          "This system transformed how we operate. What used to take our ops team days now happens automatically. The ROI was immediate.",
        author: "VP Operations",
        company: "Logistics Client",
      },
    },
    de: {
      category: "Dateninfrastruktur",
      title: "Aufbau einer Echtzeit-Logistik-Datenplattform",
      client: "Series C Logistikunternehmen",
      timeline: "16 Wochen",
      team: "3 Ingenieure + 1 PM",
      challenge:
        "Ein schnell wachsendes Logistikunternehmen ertrank in Tabellenkalkulationen. Routenoptimierung erforderte 3+ Tage manuelle Arbeit, und Prognosen waren weitgehend Ratespiele. Sie brauchten ein System, das Tausende von Sendungen in Echtzeit verarbeiten konnte.",
      solution:
        "Wir haben eine komplette Dateninfrastruktur von Grund auf aufgebaut: automatisierte Pipelines, die aus 12 verschiedenen Quellen ziehen, ein normalisiertes Data Warehouse und Echtzeit-Dashboards für Betriebs- und Finanzteams. Das System verarbeitet täglich über 50.000 Sendungen und bietet sofortige Transparenz über jede wichtige Kennzahl.",
      impact: [
        { metric: "87% Reduzierung", description: "der Zeit für Routenplanung" },
        { metric: "3 Tage → 15 Minuten", description: "für wöchentlichen Prognoseprozess" },
        { metric: "50.000+", description: "täglich verarbeitete Sendungen" },
        { metric: "Echtzeit-Transparenz", description: "über alle operativen Kennzahlen" },
      ],
      approach: [
        {
          phase: "Entdeckung & Architektur",
          duration: "2 Wochen",
          details: "Kartierung aller Datenquellen, Definition der Geschäftslogik, Design skalierbarer Architektur",
        },
        {
          phase: "Datenpipeline-Aufbau",
          duration: "6 Wochen",
          details: "Aufbau automatisierter ETL-Pipelines, Data Warehouse und API-Layer",
        },
        {
          phase: "Dashboard & Analytics",
          duration: "4 Wochen",
          details: "Erstellung operativer Dashboards, Reporting-System und Alarmmechanismen",
        },
        {
          phase: "Testing & Deployment",
          duration: "4 Wochen",
          details: "Lasttests, paralleler Betrieb mit Legacy-System, Teamschulung, vollständige Bereitstellung",
        },
      ],
      technologies: ["PostgreSQL", "Python", "Airflow", "dbt", "Metabase", "AWS"],
      testimonial: {
        quote:
          "Dieses System hat unsere Arbeitsweise transformiert. Was früher Tage dauerte, geschieht jetzt automatisch. Der ROI war sofort.",
        author: "VP Operations",
        company: "Logistik-Kunde",
      },
    },
  },
  "ecommerce-automation": {
    en: {
      category: "Operations Automation",
      title: "E-commerce Operations Automation Platform",
      client: "Series B E-commerce Brand",
      timeline: "12 weeks",
      team: "2 engineers + 1 PM",
      challenge:
        "An e-commerce brand processing 10,000+ orders per month was spending 40+ hours per week on manual tasks: order processing, inventory updates, customer communications, and reconciliation across multiple sales channels.",
      solution:
        "We built an automation platform that connects Shopify, Amazon, warehouse systems, and accounting software. Orders flow automatically from sale to fulfillment, inventory syncs in real-time across channels, and financial reconciliation happens daily without human intervention.",
      impact: [
        { metric: "92% reduction", description: "in manual order processing time" },
        { metric: "40 hours → 3 hours", description: "weekly operations workload" },
        { metric: "Zero inventory errors", description: "since deployment" },
        { metric: "10,000+ orders/month", description: "processed automatically" },
      ],
      approach: [
        {
          phase: "Process Mapping",
          duration: "2 weeks",
          details: "Documented current workflows, identified automation opportunities, designed system architecture",
        },
        {
          phase: "Integration Development",
          duration: "6 weeks",
          details: "Built connectors for all systems, created automation rules engine, implemented error handling",
        },
        {
          phase: "Testing & Rollout",
          duration: "4 weeks",
          details: "Tested with subset of orders, refined rules, trained team, full deployment",
        },
      ],
      technologies: ["Node.js", "PostgreSQL", "Shopify API", "Amazon MWS", "Stripe", "QuickBooks"],
      testimonial: {
        quote: "We scaled from 10k to 30k orders per month without hiring additional ops staff. The system just works.",
        author: "Co-founder & COO",
        company: "E-commerce Client",
      },
    },
    de: {
      category: "Betriebsautomatisierung",
      title: "E-Commerce-Betriebsautomatisierungsplattform",
      client: "Series B E-Commerce-Marke",
      timeline: "12 Wochen",
      team: "2 Ingenieure + 1 PM",
      challenge:
        "Eine E-Commerce-Marke, die monatlich über 10.000 Bestellungen verarbeitet, verbrachte über 40 Stunden pro Woche mit manuellen Aufgaben: Bestellungsverarbeitung, Bestandsaktualisierungen, Kundenkommunikation und Abgleich über mehrere Vertriebskanäle.",
      solution:
        "Wir haben eine Automatisierungsplattform gebaut, die Shopify, Amazon, Lagersysteme und Buchhaltungssoftware verbindet. Bestellungen fließen automatisch vom Verkauf zur Erfüllung, Bestände synchronisieren sich in Echtzeit über alle Kanäle, und der Finanzabgleich erfolgt täglich ohne menschliches Eingreifen.",
      impact: [
        { metric: "92% Reduzierung", description: "der manuellen Bestellverarbeitungszeit" },
        { metric: "40 Stunden → 3 Stunden", description: "wöchentlicher Betriebsaufwand" },
        { metric: "Null Bestandsfehler", description: "seit Bereitstellung" },
        { metric: "10.000+ Bestellungen/Monat", description: "automatisch verarbeitet" },
      ],
      approach: [
        {
          phase: "Prozess-Mapping",
          duration: "2 Wochen",
          details:
            "Dokumentation aktueller Workflows, Identifizierung von Automatisierungsmöglichkeiten, Design der Systemarchitektur",
        },
        {
          phase: "Integrationsentwicklung",
          duration: "6 Wochen",
          details:
            "Aufbau von Konnektoren für alle Systeme, Erstellung einer Automatisierungs-Regel-Engine, Implementierung der Fehlerbehandlung",
        },
        {
          phase: "Testing & Rollout",
          duration: "4 Wochen",
          details:
            "Test mit Teilmenge von Bestellungen, Verfeinerung der Regeln, Teamschulung, vollständige Bereitstellung",
        },
      ],
      technologies: ["Node.js", "PostgreSQL", "Shopify API", "Amazon MWS", "Stripe", "QuickBooks"],
      testimonial: {
        quote:
          "Wir skalieren von 10k auf 30k Bestellungen pro Monat, ohne zusätzliches Betriebspersonal einzustellen. Das System funktioniert einfach.",
        author: "Mitgründer & COO",
        company: "E-Commerce-Kunde",
      },
    },
  },
  "saas-revenue-operations": {
    en: {
      category: "Revenue Operations",
      title: "Complete RevOps System for SaaS Scale-Up",
      client: "Series B SaaS Company",
      timeline: "20 weeks",
      team: "4 engineers + 1 PM",
      challenge:
        "A rapidly growing SaaS company had no unified view of their revenue pipeline. Sales, marketing, and finance teams worked from different data sources. Forecasting was manual and took 3+ days. Customer health scores and churn prediction were non-existent.",
      solution:
        "We built an end-to-end revenue operations platform: unified data model across all go-to-market systems, automated pipeline tracking and forecasting, customer health scoring system, and executive dashboards with real-time metrics. The system provides a single source of truth for revenue operations.",
      impact: [
        { metric: "3 days → 15 minutes", description: "for revenue forecasting" },
        { metric: "40% improvement", description: "in forecast accuracy" },
        { metric: "14 days earlier", description: "churn prediction" },
        { metric: "100% visibility", description: "into revenue pipeline" },
      ],
      approach: [
        {
          phase: "Data Architecture",
          duration: "4 weeks",
          details: "Designed unified data model, mapped all revenue-related data sources, created integration plan",
        },
        {
          phase: "Pipeline & Forecasting",
          duration: "8 weeks",
          details: "Built automated pipeline tracking, forecasting models, and alert systems",
        },
        {
          phase: "Customer Intelligence",
          duration: "4 weeks",
          details: "Implemented health scoring, churn prediction, and expansion opportunity identification",
        },
        {
          phase: "Dashboards & Rollout",
          duration: "4 weeks",
          details: "Created executive dashboards, trained teams, full deployment across organization",
        },
      ],
      technologies: ["PostgreSQL", "Python", "Salesforce API", "Stripe", "Segment", "Looker", "AWS"],
      testimonial: {
        quote:
          "This is the operational backbone of our entire go-to-market motion. We make better decisions faster, and we actually trust our numbers now.",
        author: "Chief Revenue Officer",
        company: "SaaS Client",
      },
    },
    de: {
      category: "Revenue Operations",
      title: "Komplettes RevOps-System für SaaS Scale-Up",
      client: "Series B SaaS-Unternehmen",
      timeline: "20 Wochen",
      team: "4 Ingenieure + 1 PM",
      challenge:
        "Ein schnell wachsendes SaaS-Unternehmen hatte keine einheitliche Sicht auf seine Revenue-Pipeline. Vertriebs-, Marketing- und Finanzteams arbeiteten mit unterschiedlichen Datenquellen. Prognosen waren manuell und dauerten über 3 Tage. Kundenzufriedenheits-Scores und Churn-Prognosen existierten nicht.",
      solution:
        "Wir haben eine End-to-End-Revenue-Operations-Plattform gebaut: einheitliches Datenmodell über alle Go-to-Market-Systeme, automatisiertes Pipeline-Tracking und Forecasting, Kundenzufriedenheits-Scoring-System und Executive-Dashboards mit Echtzeit-Metriken. Das System bietet eine einzige Wahrheitsquelle für Revenue Operations.",
      impact: [
        { metric: "3 Tage → 15 Minuten", description: "für Revenue-Prognosen" },
        { metric: "40% Verbesserung", description: "der Prognosegenauigkeit" },
        { metric: "14 Tage früher", description: "Churn-Vorhersage" },
        { metric: "100% Transparenz", description: "in die Revenue-Pipeline" },
      ],
      approach: [
        {
          phase: "Datenarchitektur",
          duration: "4 Wochen",
          details:
            "Design einheitliches Datenmodell, Kartierung aller umsatzbezogenen Datenquellen, Erstellung Integrationsplan",
        },
        {
          phase: "Pipeline & Forecasting",
          duration: "8 Wochen",
          details: "Aufbau automatisiertes Pipeline-Tracking, Prognosemodelle und Alarmsysteme",
        },
        {
          phase: "Kunden-Intelligence",
          duration: "4 Wochen",
          details: "Implementierung Health-Scoring, Churn-Prognose und Identifikation von Expansionsmöglichkeiten",
        },
        {
          phase: "Dashboards & Rollout",
          duration: "4 Wochen",
          details: "Erstellung Executive-Dashboards, Teamschulung, vollständige Bereitstellung in der Organisation",
        },
      ],
      technologies: ["PostgreSQL", "Python", "Salesforce API", "Stripe", "Segment", "Looker", "AWS"],
      testimonial: {
        quote:
          "Dies ist das operative Rückgrat unserer gesamten Go-to-Market-Bewegung. Wir treffen bessere Entscheidungen schneller, und wir vertrauen unseren Zahlen jetzt wirklich.",
        author: "Chief Revenue Officer",
        company: "SaaS-Kunde",
      },
    },
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug as keyof typeof caseStudies]
  const language = "en" // You can add language detection here
  const content = language === "en" ? study.en : study.de

  if (!study) {
    return <div>Case study not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to case studies</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-sm text-primary font-medium mb-4">{content.category}</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-balance">{content.title}</h1>

        <div className="flex flex-wrap gap-8 text-sm text-muted-foreground mb-12">
          <div>
            <div className="font-medium text-foreground mb-1">{language === "en" ? "Client" : "Kunde"}</div>
            <div>{content.client}</div>
          </div>
          <div>
            <div className="font-medium text-foreground mb-1">{language === "en" ? "Timeline" : "Zeitrahmen"}</div>
            <div>{content.timeline}</div>
          </div>
          <div>
            <div className="font-medium text-foreground mb-1">Team</div>
            <div>{content.team}</div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-3xl font-semibold mb-6">{language === "en" ? "The Challenge" : "Die Herausforderung"}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{content.challenge}</p>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-3xl font-semibold mb-6">{language === "en" ? "Our Solution" : "Unsere Lösung"}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{content.solution}</p>
      </section>

      {/* Impact */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-3xl font-semibold mb-12">
          {language === "en" ? "Impact & Results" : "Wirkung & Ergebnisse"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.impact.map((item, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm">
              <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-muted-foreground">{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-3xl font-semibold mb-12">{language === "en" ? "Our Approach" : "Unser Ansatz"}</h2>
        <div className="space-y-8">
          {content.approach.map((phase, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {i + 1}
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{phase.phase}</h3>
                  <span className="text-sm text-muted-foreground">{phase.duration}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{phase.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <h2 className="text-3xl font-semibold mb-8">
          {language === "en" ? "Technologies Used" : "Verwendete Technologien"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {content.technologies.map((tech, i) => (
            <div key={i} className="px-4 py-2 bg-card border border-border rounded-sm text-sm font-medium">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border">
        <div className="bg-primary/5 border border-primary/20 p-10 rounded-sm">
          <p className="text-xl italic mb-6 leading-relaxed">"{content.testimonial.quote}"</p>
          <div className="text-sm">
            <div className="font-semibold">{content.testimonial.author}</div>
            <div className="text-muted-foreground">{content.testimonial.company}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-5xl mx-auto border-t border-border">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {language === "en" ? "Ready to build operational leverage?" : "Bereit, operative Hebelwirkung aufzubauen?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Let's discuss how we can build systems that create leverage in your business."
              : "Lassen Sie uns besprechen, wie wir Systeme aufbauen können, die Hebelwirkung in Ihrem Geschäft schaffen."}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            {language === "en" ? "Start a Conversation" : "Gespräch beginnen"}
          </Link>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ slug: "logistics-data-platform" }, { slug: "ecommerce-automation" }, { slug: "saas-revenue-operations" }]
}
