"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, BarChart3, Users, Shield, Target, Zap, Database, ChevronDown } from "lucide-react"

const translations = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      approach: "Approach",
      expertise: "Expertise",
      contact: "Contact",
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    hero: {
      title: "Operational Leverage for Scaling Companies",
      subtitle:
        "We don't build campaigns. We build systems—enterprise-grade operational infrastructure that creates force multipliers for companies ready to scale.",
      cta: "Start Building",
      stats: [
        { value: "10x", label: "Avg. Efficiency Gain" },
        { value: "45%", label: "Cost Reduction" },
        { value: "6mo", label: "Avg. Payback Period" },
      ],
    },
    purpose: {
      title: "What We Do",
      subtitle:
        "We are an operations-focused partner that provides enterprise-grade operational leverage for scaling companies.",
      description:
        "We build systems, not campaigns. Infrastructure, not one-offs. Our work creates force multipliers—operational foundations that scale with your business.",
    },
    services: {
      title: "Core Services",
      subtitle: "Operational infrastructure built for scale",
      items: [
        {
          title: "Data Infrastructure",
          description:
            "Enterprise-grade data pipelines, warehousing, and analytics infrastructure that scales with your business.",
        },
        {
          title: "Process Automation",
          description: "Intelligent automation systems that eliminate manual work and create operational leverage.",
        },
        {
          title: "Systems Integration",
          description: "Seamless integration of your operational stack—CRM, ERP, analytics, and custom tools.",
        },
        {
          title: "Business Intelligence",
          description: "Real-time dashboards and reporting systems that provide actionable insights at every level.",
        },
      ],
    },
    contactForm: {
      title: "Let's Build Together",
      subtitle: "Tell us about your operational challenges and we'll show you how to scale.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your@email.com",
      companyPlaceholder: "Company Name",
      messagePlaceholder: "Tell us about your operational challenges...",
      submit: "Send Message",
    },
    approach: {
      title: "Our Approach",
      subtitle: "Built for scale from day one",
      phases: [
        { title: "Discovery", description: "Map operational bottlenecks and opportunities" },
        { title: "Design", description: "Architect scalable systems and infrastructure" },
        { title: "Build", description: "Deploy enterprise-grade operational tools" },
        { title: "Optimize", description: "Continuous improvement and scaling" },
      ],
    },
    principles: {
      title: "Operating Principles",
      items: [
        { title: "Systems Over Solutions", description: "We build infrastructure, not one-off fixes" },
        { title: "Force Multipliers", description: "Every engagement creates leverage" },
        { title: "Built to Scale", description: "Architecture that grows with your business" },
        { title: "Operational Excellence", description: "Enterprise-grade standards, always" },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How is DON AGENCY different?",
          answer:
            "We're not a typical agency. We build operational infrastructure—systems that create leverage and scale with your business. Think infrastructure partner, not service provider.",
        },
        {
          question: "What's the typical engagement timeline?",
          answer:
            "Most engagements are 3-6 months for initial build, followed by ongoing optimization. We move fast but build for the long term.",
        },
        {
          question: "Do you work with startups?",
          answer:
            "We work with companies at inflection points—typically Series A+ or high-growth bootstrapped companies ready to scale operations.",
        },
        {
          question: "What's your pricing model?",
          answer:
            "We offer project-based and retainer models. Most clients see 6-month payback periods through efficiency gains and cost reduction.",
        },
      ],
    },
    footer: {
      tagline: "Operational leverage for scaling companies",
      copyright: "2025 DON AGENCY. Built for scale.",
    },
    caseStudies: {
      title: "Selected work",
      subtitle: "Real systems built for real businesses. Impact measured in efficiency gained.",
      case1: {
        category: "Series B SaaS Company",
        title: "Revenue Operations Platform",
        description:
          "Built end-to-end revenue operations system connecting Salesforce, Stripe, and internal data warehouse. Automated 47 manual processes and reduced reporting time from 3 days to 15 minutes.",
        metric1: "87% reduction in manual work",
        metric2: "Real-time forecasting",
        metric3: "Single source of truth",
      },
      case2: {
        category: "Enterprise Healthcare",
        title: "Patient Data Integration System",
        description:
          "Designed secure integration layer connecting 12 legacy systems to modern cloud infrastructure. Enabled real-time patient data access while maintaining HIPAA compliance and reducing query times by 94%.",
        metric1: "12 systems unified",
        metric2: "94% faster queries",
        metric3: "HIPAA compliant",
      },
      case3: {
        category: "E-commerce Platform",
        title: "Fulfillment Orchestration Engine",
        description:
          "Custom fulfillment system routing orders across 6 warehouses and 4 shipping carriers. Optimized delivery times by 32% and reduced shipping costs by $2.1M annually through intelligent routing algorithms.",
        metric1: "$2.1M annual savings",
        metric2: "32% faster delivery",
        metric3: "6 warehouses unified",
      },
    },
    capabilities: {
      title: "Technical capabilities",
      subtitle: "The infrastructure layers we build and integrate.",
      items: [
        {
          title: "Data Engineering",
          description:
            "ETL pipelines, data warehouses, real-time streaming, and transformation logic that turns fragmented data into actionable intelligence.",
        },
        {
          title: "Process Automation",
          description:
            "Workflow automation, scheduled jobs, event-driven triggers, and intelligent routing that eliminates repetitive manual work.",
        },
        {
          title: "API Development",
          description:
            "RESTful and GraphQL APIs, webhooks, real-time connections, and integration middleware that connects your systems.",
        },
        {
          title: "Analytics & Reporting",
          description:
            "Custom dashboards, automated reports, KPI tracking, and real-time analytics that give your team operational visibility.",
        },
        {
          title: "Internal Tools",
          description:
            "Admin panels, operations dashboards, support tools, and internal platforms that give your team superpowers.",
        },
        {
          title: "Business Intelligence",
          description:
            "Data modeling, forecasting systems, cohort analysis, and strategic analytics that inform business decisions.",
        },
      ],
    },
    industries: {
      title: "Industries we serve",
      subtitle: "Deep operational expertise across high-growth sectors.",
      items: [
        {
          title: "B2B SaaS",
          description:
            "Revenue operations, customer success automation, product analytics, and usage-based billing systems for software companies from Series A through IPO.",
          tags: ["RevOps", "Customer Success", "Usage Analytics"],
        },
        {
          title: "Healthcare",
          description:
            "HIPAA-compliant data integration, patient workflow automation, provider operations, and clinical data systems for digital health and healthcare services companies.",
          tags: ["Data Integration", "Compliance", "Clinical Workflows"],
        },
        {
          title: "E-commerce",
          description:
            "Fulfillment orchestration, inventory management, dynamic pricing, customer data platforms, and logistics optimization for direct-to-consumer and marketplace businesses.",
          tags: ["Fulfillment", "Inventory", "Logistics"],
        },
        {
          title: "Fintech",
          description:
            "Transaction monitoring, risk operations, compliance automation, and financial data pipelines for payments, lending, and financial services platforms.",
          tags: ["Risk Ops", "Compliance", "Transaction Systems"],
        },
        {
          title: "Marketplace",
          description:
            "Multi-sided marketplace operations, trust and safety systems, payment routing, vendor management, and quality control automation for platform businesses.",
          tags: ["Trust & Safety", "Payment Routing", "Vendor Management"],
        },
        {
          title: "Logistics",
          description:
            "Fleet management, route optimization, warehouse automation, and supply chain visibility systems for logistics and transportation companies.",
          tags: ["Fleet Management", "Route Optimization", "Supply Chain"],
        },
      ],
    },
    techStack: {
      title: "Technology stack",
      subtitle: "Modern, proven technologies that your team can maintain long-term.",
      dataInfra: "Data Infrastructure",
      integration: "Integration Layer",
      development: "Development",
      infrastructure: "Infrastructure",
    },
    testimonials: {
      title: "What clients say",
      subtitle: "Feedback from operators who've deployed our systems.",
      items: [
        {
          quote:
            "DON AGENCY built our entire revenue operations infrastructure in 6 weeks. What would have taken our team 6 months to patch together, they delivered as a cohesive system. Our forecasting accuracy went from 63% to 94%.",
          name: "Sarah Chen",
          title: "VP Operations, Vertex SaaS",
        },
        {
          quote:
            "We were skeptical about bringing in external help for something as core as our operations stack. DON proved us wrong. They understood our business faster than most internal hires and delivered something we still use 2 years later.",
          name: "Michael Rodriguez",
          title: "CTO, HealthTech Solutions",
        },
        {
          quote:
            "The fulfillment system DON built handles 50,000+ orders per day without breaking a sweat. It's saved us millions in shipping costs and our delivery times are 30% faster. This is infrastructure that scales.",
          name: "Emma Thompson",
          title: "Head of Logistics, Retail Co",
        },
        {
          quote:
            "Most agencies promise the world and deliver PowerPoints. DON delivered working code that integrated with our entire stack. Their systems approach to operations has fundamentally changed how we scale our business.",
          name: "James Park",
          title: "COO, Growth Stage Startup",
        },
      ],
    },
    cta: {
      title: "Ready to build operational leverage?",
      subtitle:
        "Schedule a 30-minute call to discuss your operational challenges and how we can help build the systems you need to scale.",
      button: "Schedule Discovery Call",
      response: "Typical response time: 2-4 hours during business hours",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      work: "Arbeit",
      approach: "Ansatz",
      expertise: "Expertise",
      contact: "Kontakt",
      getStarted: "Loslegen",
      contactUs: "Kontaktieren Sie uns",
    },
    hero: {
      title: "Operative Hebelwirkung für Wachstumsunternehmen",
      subtitle:
        "Wir entwickeln keine Kampagnen. Wir bauen Systeme—operative Infrastruktur auf Unternehmensniveau, die Kraftmultiplikatoren für skalierungsbereite Unternehmen schafft.",
      cta: "Jetzt Beginnen",
      stats: [
        { value: "10x", label: "Durchschn. Effizienzgewinn" },
        { value: "45%", label: "Kostenreduzierung" },
        { value: "6mo", label: "Durchschn. Amortisationszeit" },
      ],
    },
    purpose: {
      title: "Was Wir Tun",
      subtitle:
        "Wir sind ein operativ ausgerichteter Partner, der operative Hebelwirkung auf Unternehmensniveau für wachsende Unternehmen bereitstellt.",
      description:
        "Wir bauen Systeme, keine Kampagnen. Infrastruktur, keine Einzellösungen. Unsere Arbeit schafft Kraftmultiplikatoren—operative Grundlagen, die mit Ihrem Unternehmen skalieren.",
    },
    services: {
      title: "Kerndienstleistungen",
      subtitle: "Operative Infrastruktur für Skalierung gebaut",
      items: [
        {
          title: "Dateninfrastruktur",
          description:
            "Datenpipelines, Datenspeicherung und Analyseinfrastruktur auf Unternehmensniveau, die mit Ihrem Geschäft skaliert.",
        },
        {
          title: "Prozessautomatisierung",
          description:
            "Intelligente Automatisierungssysteme, die manuelle Arbeit eliminieren und operative Hebelwirkung schaffen.",
        },
        {
          title: "Systemintegration",
          description: "Nahtlose Integration Ihres operativen Stacks—CRM, ERP, Analytik und kundenspezifische Tools.",
        },
        {
          title: "Business Intelligence",
          description: "Echtzeit-Dashboards und Berichtssysteme, die auf jeder Ebene umsetzbare Erkenntnisse liefern.",
        },
      ],
    },
    contactForm: {
      title: "Lassen Sie Uns Gemeinsam Bauen",
      subtitle:
        "Erzählen Sie uns von Ihren operativen Herausforderungen und wir zeigen Ihnen, wie Sie skalieren können.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.de",
      companyPlaceholder: "Firmenname",
      messagePlaceholder: "Erzählen Sie uns von Ihren operativen Herausforderungen...",
      submit: "Nachricht Senden",
    },
    approach: {
      title: "Unser Ansatz",
      subtitle: "Von Anfang an für Skalierung gebaut",
      phases: [
        { title: "Entdeckung", description: "Operative Engpässe und Chancen identifizieren" },
        { title: "Design", description: "Skalierbare Systeme und Infrastruktur entwickeln" },
        { title: "Aufbau", description: "Operative Tools auf Unternehmensniveau implementieren" },
        { title: "Optimierung", description: "Kontinuierliche Verbesserung und Skalierung" },
      ],
    },
    principles: {
      title: "Betriebsprinzipien",
      items: [
        { title: "Systeme Über Lösungen", description: "Wir bauen Infrastruktur, keine Einzellösungen" },
        { title: "Kraftmultiplikatoren", description: "Jedes Engagement schafft Hebelwirkung" },
        { title: "Für Skalierung Gebaut", description: "Architektur, die mit Ihrem Geschäft wächst" },
        { title: "Operative Exzellenz", description: "Standards auf Unternehmensniveau, immer" },
      ],
    },
    faq: {
      title: "Häufig Gestellte Fragen",
      items: [
        {
          question: "Wie unterscheidet sich DON AGENCY?",
          answer:
            "Wir sind keine typische Agentur. Wir bauen operative Infrastruktur—Systeme, die Hebelwirkung schaffen und mit Ihrem Geschäft skalieren. Denken Sie an Infrastrukturpartner, nicht an Dienstleister.",
        },
        {
          question: "Was ist der typische Projektzeitraum?",
          answer:
            "Die meisten Projekte dauern 3-6 Monate für den initialen Aufbau, gefolgt von kontinuierlicher Optimierung. Wir arbeiten schnell, bauen aber für die Langfristigkeit.",
        },
        {
          question: "Arbeiten Sie mit Startups?",
          answer:
            "Wir arbeiten mit Unternehmen an Wendepunkten—typischerweise Series A+ oder wachstumsstarke bootstrapped Unternehmen, die bereit sind, Operationen zu skalieren.",
        },
        {
          question: "Was ist Ihr Preismodell?",
          answer:
            "Wir bieten projektbasierte und Retainer-Modelle an. Die meisten Kunden sehen 6-monatige Amortisationszeiten durch Effizienzgewinne und Kostenreduzierung.",
        },
      ],
    },
    footer: {
      tagline: "Operative Hebelwirkung für wachsende Unternehmen",
      copyright: "2025 DON AGENCY. Für Skalierung gebaut.",
    },
    caseStudies: {
      title: "Ausgewählte Projekte",
      subtitle: "Echte Systeme für echte Unternehmen. Wirkung gemessen in gewonnener Effizienz.",
      case1: {
        category: "Series B SaaS-Unternehmen",
        title: "Revenue Operations Plattform",
        description:
          "End-to-End Revenue Operations System gebaut, das Salesforce, Stripe und interne Data Warehouse verbindet. 47 manuelle Prozesse automatisiert und Berichtszeit von 3 Tagen auf 15 Minuten reduziert.",
        metric1: "87% weniger manuelle Arbeit",
        metric2: "Echtzeit-Prognosen",
        metric3: "Zentrale Datenquelle",
      },
      case2: {
        category: "Enterprise Healthcare",
        title: "Patientendaten-Integrationssystem",
        description:
          "Sichere Integrationsebene entwickelt, die 12 Legacy-Systeme mit moderner Cloud-Infrastruktur verbindet. Echtzeit-Patientendatenzugriff ermöglicht bei HIPAA-Konformität und 94% schnelleren Abfragen.",
        metric1: "12 Systeme vereint",
        metric2: "94% schnellere Abfragen",
        metric3: "HIPAA-konform",
      },
      case3: {
        category: "E-Commerce-Plattform",
        title: "Fulfillment-Orchestrierungs-Engine",
        description:
          "Maßgeschneidertes Fulfillment-System für Bestellungen über 6 Lager und 4 Versanddienstleister. Lieferzeiten um 32% optimiert und Versandkosten jährlich um 2,1 Mio. $ durch intelligente Routing-Algorithmen reduziert.",
        metric1: "2,1 Mio. $ jährliche Einsparungen",
        metric2: "32% schnellere Lieferung",
        metric3: "6 Lager vereint",
      },
    },
    capabilities: {
      title: "Technische Fähigkeiten",
      subtitle: "Die Infrastruktur-Schichten, die wir aufbauen und integrieren.",
      items: [
        {
          title: "Data Engineering",
          description:
            "ETL-Pipelines, Data Warehouses, Echtzeit-Streaming und Transformationslogik, die fragmentierte Daten in umsetzbare Erkenntnisse verwandelt.",
        },
        {
          title: "Prozessautomatisierung",
          description:
            "Workflow-Automatisierung, geplante Jobs, ereignisgesteuerte Trigger und intelligentes Routing, das repetitive manuelle Arbeit eliminiert.",
        },
        {
          title: "API-Entwicklung",
          description:
            "RESTful und GraphQL APIs, Webhooks, Echtzeit-Verbindungen und Integrations-Middleware, die Ihre Systeme verbindet.",
        },
        {
          title: "Analytics & Reporting",
          description:
            "Benutzerdefinierte Dashboards, automatisierte Berichte, KPI-Tracking und Echtzeit-Analytics, die Ihrem Team operative Transparenz geben.",
        },
        {
          title: "Interne Tools",
          description:
            "Admin-Panels, Operations-Dashboards, Support-Tools und interne Plattformen, die Ihrem Team Superkräfte verleihen.",
        },
        {
          title: "Business Intelligence",
          description:
            "Datenmodellierung, Prognosesysteme, Kohortenanalyse und strategische Analytics, die Geschäftsentscheidungen informieren.",
        },
      ],
    },
    industries: {
      title: "Branchen, die wir bedienen",
      subtitle: "Tiefe operative Expertise über wachstumsstarke Sektoren.",
      items: [
        {
          title: "B2B SaaS",
          description:
            "Revenue Operations, Customer Success Automatisierung, Produktanalysen und nutzungsbasierte Abrechnungssysteme für Softwareunternehmen von Series A bis IPO.",
          tags: ["RevOps", "Customer Success", "Nutzungsanalyse"],
        },
        {
          title: "Gesundheitswesen",
          description:
            "HIPAA-konforme Datenintegration, Patienten-Workflow-Automatisierung, Anbieter-Operationen und klinische Datensysteme für Digital Health und Gesundheitsdienstleistungsunternehmen.",
          tags: ["Datenintegration", "Compliance", "Klinische Workflows"],
        },
        {
          title: "E-Commerce",
          description:
            "Fulfillment-Orchestrierung, Bestandsverwaltung, dynamische Preisgestaltung, Customer Data Platforms und Logistikoptimierung für Direct-to-Consumer und Marktplatz-Geschäfte.",
          tags: ["Fulfillment", "Bestand", "Logistik"],
        },
        {
          title: "Fintech",
          description:
            "Transaktionsüberwachung, Risk Operations, Compliance-Automatisierung und Finanzdaten-Pipelines für Zahlungs-, Kredit- und Finanzdienstleistungsplattformen.",
          tags: ["Risk Ops", "Compliance", "Transaktionssysteme"],
        },
        {
          title: "Marktplatz",
          description:
            "Multi-seitige Marktplatz-Operationen, Trust- und Safety-Systeme, Payment-Routing, Lieferantenverwaltung und Qualitätskontroll-Automatisierung für Plattform-Geschäfte.",
          tags: ["Trust & Safety", "Payment-Routing", "Lieferantenverwaltung"],
        },
        {
          title: "Logistik",
          description:
            "Flottenverwaltung, Routenoptimierung, Lagerautomatisierung und Supply-Chain-Transparenz-Systeme für Logistik- und Transportunternehmen.",
          tags: ["Flottenverwaltung", "Routenoptimierung", "Supply Chain"],
        },
      ],
    },
    techStack: {
      title: "Technologie-Stack",
      subtitle: "Moderne, bewährte Technologien, die Ihr Team langfristig warten kann.",
      dataInfra: "Daten-Infrastruktur",
      integration: "Integrations-Schicht",
      development: "Entwicklung",
      infrastructure: "Infrastruktur",
    },
    testimonials: {
      title: "Was Kunden sagen",
      subtitle: "Feedback von Betreibern, die unsere Systeme eingesetzt haben.",
      items: [
        {
          quote:
            "DON AGENCY hat unsere gesamte Revenue Operations Infrastruktur in 6 Wochen aufgebaut. Was unser Team 6 Monate zusammenflicken würde, haben sie als kohärentes System geliefert. Unsere Prognosegenauigkeit stieg von 63% auf 94%.",
          name: "Sarah Chen",
          title: "VP Operations, Vertex SaaS",
        },
        {
          quote:
            "Wir waren skeptisch, externe Hilfe für etwas so Zentrales wie unseren Operations-Stack zu holen. DON bewies uns das Gegenteil. Sie verstanden unser Geschäft schneller als die meisten internen Einstellungen und lieferten etwas, das wir 2 Jahre später noch nutzen.",
          name: "Michael Rodriguez",
          title: "CTO, HealthTech Solutions",
        },
        {
          quote:
            "Das Fulfillment-System, das DON gebaut hat, verarbeitet 50.000+ Bestellungen pro Tag ohne Probleme. Es hat uns Millionen an Versandkosten gespart und unsere Lieferzeiten sind 30% schneller. Das ist Infrastruktur, die skaliert.",
          name: "Emma Thompson",
          title: "Head of Logistics, Retail Co",
        },
        {
          quote:
            "Die meisten Agenturen versprechen die Welt und liefern PowerPoints. DON lieferte funktionierenden Code, der sich in unseren gesamten Stack integrierte. Ihr Systemansatz für Operationen hat grundlegend verändert, wie wir unser Geschäft skalieren.",
          name: "James Park",
          title: "COO, Growth Stage Startup",
        },
      ],
    },
    cta: {
      title: "Bereit, operativen Hebel aufzubauen?",
      subtitle:
        "Planen Sie ein 30-minütiges Gespräch, um Ihre operativen Herausforderungen zu besprechen und wie wir die Systeme aufbauen können, die Sie zum Skalieren benötigen.",
      button: "Entdeckungsgespräch planen",
      response: "Typische Antwortzeit: 2-4 Stunden während der Geschäftszeiten",
    },
  },
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "de">("en")

  const t = translations[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300">
            DON
          </a>
          <div className="flex items-center gap-12">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.services}
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.work}
            </a>
            <a
              href="#approach"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.approach}
            </a>
            <a
              href="#expertise"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.expertise}
            </a>
            <div className="h-6 w-px bg-border/50" />
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 hover:bg-secondary/60 px-3 py-1 rounded"
            >
              {language === "en" ? "DE" : "EN"}
            </button>
            <Button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="border-border/70 hover:bg-secondary/80 hover:border-primary/50 text-foreground rounded px-5 h-10 font-medium text-sm transition-all duration-300"
            >
              {t.nav.contactUs}
            </Button>
            <Button className="bg-primary hover:bg-primary/85 text-primary-foreground rounded px-6 h-10 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
              {t.nav.getStarted}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-44 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-8xl font-bold text-balance leading-[1.05] mb-10 tracking-tight">{t.hero.title}</h1>
            <p className="text-2xl text-muted-foreground text-pretty leading-relaxed mb-16 max-w-4xl font-light">
              {t.hero.subtitle}
            </p>
            <Button className="bg-primary hover:bg-primary/85 text-primary-foreground rounded px-12 h-14 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30">
              {t.hero.cta}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-16 mt-28 pt-28 border-t border-border/40">
            {t.hero.stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-7xl font-bold text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary/90">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">{t.purpose.title}</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{t.purpose.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.purpose.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className="group p-8 border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.01]"
              >
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 px-6 border-t border-border/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">{t.caseStudies.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">{t.caseStudies.subtitle}</p>
          </div>

          <Link href="/case-studies/logistics-data-platform">
            <div className="bg-card border border-border p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group cursor-pointer mb-6">
              <div className="flex items-start justify-between mb-10">
                <div className="flex-1">
                  <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                    {t.caseStudies.case1.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{t.caseStudies.case1.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">
                    {t.caseStudies.case1.description}
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 flex-shrink-0 ml-8" />
              </div>
              <div className="flex flex-wrap items-center gap-8 text-sm border-t border-border/40 pt-8">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case1.metric1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case1.metric2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case1.metric3}</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ecommerce-automation">
            <div className="bg-card border border-border p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group cursor-pointer mb-6">
              <div className="flex items-start justify-between mb-10">
                <div className="flex-1">
                  <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                    {t.caseStudies.case2.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{t.caseStudies.case2.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">
                    {t.caseStudies.case2.description}
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 flex-shrink-0 ml-8" />
              </div>
              <div className="flex flex-wrap items-center gap-8 text-sm border-t border-border/40 pt-8">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case2.metric1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case2.metric2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case2.metric3}</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/saas-revenue-operations">
            <div className="bg-card border border-border p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group cursor-pointer">
              <div className="flex items-start justify-between mb-10">
                <div className="flex-1">
                  <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                    {t.caseStudies.case3.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{t.caseStudies.case3.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">
                    {t.caseStudies.case3.description}
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 flex-shrink-0 ml-8" />
              </div>
              <div className="flex flex-wrap items-center gap-8 text-sm border-t border-border/40 pt-8">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case3.metric1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case3.metric2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground font-medium">{t.caseStudies.case3.metric3}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.approach.title}</h2>
            <p className="text-xl text-muted-foreground">{t.approach.subtitle}</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {t.approach.phases.map((phase, i) => (
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

      {/* Capabilities Section - Adding translation support */}
      <section id="expertise" className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
            {t.capabilities.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.capabilities.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.capabilities.items.map((item, i) => {
            const icons = [Database, Zap, Target, BarChart3, Users, Shield]
            const Icon = icons[i]
            return (
              <div key={i} className="bg-card border border-border p-8 rounded-sm">
                <Icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">{t.principles.title}</h2>

          <div className="grid grid-cols-2 gap-6">
            {t.principles.items.map((principle, i) => (
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

      {/* Industries Section - Adding translation support */}
      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">{t.industries.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.industries.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.industries.items.map((industry, i) => (
            <div
              key={i}
              className="bg-card border border-border p-10 rounded-sm hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{industry.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {industry.tags.map((tag, j) => (
                  <span key={j}>
                    <span className="text-primary">{tag}</span>
                    {j < industry.tags.length - 1 && <span className="text-muted-foreground ml-2">•</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Section - Adding translation support */}
      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">{t.techStack.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.techStack.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.techStack.dataInfra}</h3>
            <div className="flex flex-wrap gap-3">
              {["PostgreSQL", "Snowflake", "BigQuery", "Redshift", "MongoDB", "Redis", "Kafka", "Airflow", "dbt"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.techStack.integration}</h3>
            <div className="flex flex-wrap gap-3">
              {["Salesforce", "HubSpot", "Stripe", "Segment", "Workday", "NetSuite", "Zapier", "Make"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.techStack.development}</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Node.js", "React", "Next.js", "TypeScript", "GraphQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.techStack.infrastructure}</h3>
            <div className="flex flex-wrap gap-3">
              {["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Adding translation support */}
      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.items.map((testimonial, i) => {
            const icons = [Users, Shield, Target, BarChart3]
            const Icon = icons[i]
            return (
              <div key={i} className="bg-card border border-border p-10 rounded-sm">
                <p className="text-lg text-foreground leading-relaxed mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">{t.faq.title}</h2>

          <div className="space-y-8">
            {t.faq.items.map((item, i) => (
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

      {/* CTA Section - Adding translation support */}
      <section id="contact" className="px-6 md:px-8 py-32 md:py-40 max-w-[1400px] mx-auto border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">{t.cta.subtitle}</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-12 h-16 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
          >
            {t.cta.button}
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <p className="mt-8 text-sm text-muted-foreground">{t.cta.response}</p>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
            {language === "en" ? "Success By The Numbers" : "Erfolg in Zahlen"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {language === "en"
              ? "Real operational improvements our systems have delivered across client engagements."
              : "Echte operative Verbesserungen, die unsere Systeme bei Kundenengagements erzielt haben."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              $18M
            </div>
            <div className="text-muted-foreground leading-relaxed">
              {language === "en" ? "Total Cost Savings Delivered" : "Gesamte Kosteneinsparungen"}
            </div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              83%
            </div>
            <div className="text-muted-foreground leading-relaxed">
              {language === "en" ? "Avg. Manual Process Reduction" : "Durchschn. Reduzierung manueller Prozesse"}
            </div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              4.2mo
            </div>
            <div className="text-muted-foreground leading-relaxed">
              {language === "en" ? "Avg. Time to ROI" : "Durchschn. Zeit bis ROI"}
            </div>
          </div>
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-muted-foreground leading-relaxed">
              {language === "en" ? "System Uptime SLA" : "System Uptime SLA"}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-8 rounded-sm">
            <div className="text-3xl font-bold text-primary mb-3">200K+</div>
            <div className="text-lg font-semibold mb-2">
              {language === "en" ? "Hours Saved" : "Eingesparte Stunden"}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === "en"
                ? "Combined manual hours eliminated through automation across all client engagements"
                : "Kombinierte manuelle Stunden durch Automatisierung über alle Kundenengagements hinweg eliminiert"}
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-sm">
            <div className="text-3xl font-bold text-primary mb-3">15M+</div>
            <div className="text-lg font-semibold mb-2">
              {language === "en" ? "Data Points Processed" : "Verarbeitete Datenpunkte"}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === "en"
                ? "Daily data pipeline throughput across integrated systems and platforms"
                : "Täglicher Datenpipeline-Durchsatz über integrierte Systeme und Plattformen"}
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-sm">
            <div className="text-3xl font-bold text-primary mb-3">24/7</div>
            <div className="text-lg font-semibold mb-2">
              {language === "en" ? "Monitoring & Support" : "Überwachung & Support"}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === "en"
                ? "Real-time system monitoring and incident response for critical infrastructure"
                : "Echtzeit-Systemüberwachung und Incident-Response für kritische Infrastruktur"}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
            {language === "en" ? "Our Operational Philosophy" : "Unsere Operative Philosophie"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {language === "en"
              ? "The core principles that guide how we build operational infrastructure for scaling companies."
              : "Die Kernprinzipien, die leiten, wie wir operative Infrastruktur für wachsende Unternehmen aufbauen."}
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-primary">01</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {language === "en" ? "Infrastructure Over Solutions" : "Infrastruktur über Lösungen"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === "en"
                  ? "We don't build temporary fixes or one-off implementations. Every system we create is designed as permanent infrastructure that becomes a core operational asset for your business. We think in terms of platforms, not projects."
                  : "Wir bauen keine temporären Fixes oder Einzelimplementierungen. Jedes System, das wir erstellen, ist als permanente Infrastruktur konzipiert, die zu einem operativen Kernelement für Ihr Unternehmen wird. Wir denken in Plattformen, nicht in Projekten."}
              </p>
            </div>
          </div>

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-primary">02</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {language === "en"
                  ? "Operational Leverage, Not Just Efficiency"
                  : "Operative Hebelwirkung, nicht nur Effizienz"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === "en"
                  ? "True operational leverage means creating systems where incremental effort produces exponential results. We focus on building infrastructure that scales sub-linearly with business growth—systems that handle 10x volume without 10x resources."
                  : "Echte operative Hebelwirkung bedeutet Systeme zu schaffen, bei denen inkrementeller Aufwand exponentielle Ergebnisse produziert. Wir konzentrieren uns auf den Aufbau von Infrastruktur, die sublinear mit dem Geschäftswachstum skaliert—Systeme, die 10x Volumen ohne 10x Ressourcen bewältigen."}
              </p>
            </div>
          </div>

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-primary">03</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {language === "en" ? "Data as Operational Foundation" : "Daten als Operative Grundlage"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === "en"
                  ? "Every operational decision should be informed by real-time data. We architect systems where data flows automatically from source to insight—no manual exports, no spreadsheet gymnastics. Your operational reality should be visible in real-time dashboards, not month-end reports."
                  : "Jede operative Entscheidung sollte durch Echtzeitdaten informiert werden. Wir entwickeln Systeme, bei denen Daten automatisch von der Quelle zur Einsicht fließen—keine manuellen Exporte, keine Tabellenkalkulations-Gymnastik. Ihre operative Realität sollte in Echtzeit-Dashboards sichtbar sein, nicht in Monatsendberichten."}
              </p>
            </div>
          </div>

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-primary">04</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {language === "en" ? "Maintainability is Non-Negotiable" : "Wartbarkeit ist nicht verhandelbar"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === "en"
                  ? "We build systems your team can understand, modify, and maintain. That means clean architecture, comprehensive documentation, and proven technologies. The operational infrastructure we deliver shouldn't require us to maintain—it should empower your team."
                  : "Wir bauen Systeme, die Ihr Team verstehen, ändern und warten kann. Das bedeutet saubere Architektur, umfassende Dokumentation und bewährte Technologien. Die operative Infrastruktur, die wir liefern, sollte nicht unsere Wartung erfordern—sie sollte Ihr Team befähigen."}
              </p>
            </div>
          </div>

          <div className="flex gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-2xl font-bold text-primary">05</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
                {language === "en" ? "Security and Compliance From Day One" : "Sicherheit und Compliance von Tag Eins"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {language === "en"
                  ? "Enterprise-grade operational infrastructure means enterprise-grade security. We build with SOC 2, GDPR, and industry-specific compliance requirements in mind from the start. Security isn't bolted on—it's baked into the architecture."
                  : "Operative Infrastruktur auf Unternehmensniveau bedeutet Sicherheit auf Unternehmensniveau. Wir bauen von Anfang an mit SOC 2, GDPR und branchenspezifischen Compliance-Anforderungen im Hinterkopf. Sicherheit wird nicht nachträglich hinzugefügt—sie ist in die Architektur eingebacken."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
            {language === "en" ? "Resources & Insights" : "Ressourcen & Einblicke"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {language === "en"
              ? "Practical guides and frameworks for building operational leverage in your business."
              : "Praktische Leitfäden und Frameworks für den Aufbau operativer Hebelwirkung in Ihrem Geschäft."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-8 rounded-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer">
            <div className="text-sm text-primary font-medium mb-3">{language === "en" ? "GUIDE" : "LEITFADEN"}</div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
              {language === "en" ? "The Operational Leverage Framework" : "Das Operative Hebelwirkungs-Framework"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === "en"
                ? "A comprehensive guide to identifying operational bottlenecks and building systems that create 10x leverage in your business operations."
                : "Ein umfassender Leitfaden zur Identifizierung operativer Engpässe und zum Aufbau von Systemen, die 10x Hebelwirkung in Ihren Geschäftsoperationen schaffen."}
            </p>
            <div className="flex items-center text-primary group-hover:gap-2 transition-all duration-200">
              <span className="text-sm font-medium">{language === "en" ? "Read more" : "Mehr lesen"}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer">
            <div className="text-sm text-primary font-medium mb-3">
              {language === "en" ? "CASE STUDY" : "FALLSTUDIE"}
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
              {language === "en"
                ? "From 3 Days to 15 Minutes: RevOps Transformation"
                : "Von 3 Tagen zu 15 Minuten: RevOps-Transformation"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === "en"
                ? "How we built an end-to-end revenue operations system that eliminated 87% of manual work and delivered real-time forecasting for a Series B SaaS company."
                : "Wie wir ein End-to-End-Revenue-Operations-System aufbauten, das 87% der manuellen Arbeit eliminierte und Echtzeit-Prognosen für ein Series B SaaS-Unternehmen lieferte."}
            </p>
            <div className="flex items-center text-primary group-hover:gap-2 transition-all duration-200">
              <span className="text-sm font-medium">{language === "en" ? "Read more" : "Mehr lesen"}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer">
            <div className="text-sm text-primary font-medium mb-3">
              {language === "en" ? "WHITEPAPER" : "WHITEPAPER"}
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200">
              {language === "en" ? "Building Scalable Data Infrastructure" : "Aufbau skalierbarer Dateninfrastruktur"}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === "en"
                ? "Technical deep-dive into architecting data pipelines and warehouses that scale from thousands to millions of records without breaking."
                : "Technischer Tieftauchgang in die Architektur von Datenpipelines und Warehouses, die von Tausenden auf Millionen von Datensätzen skalieren, ohne zu brechen."}
            </p>
            <div className="flex items-center text-primary group-hover:gap-2 transition-all duration-200">
              <span className="text-sm font-medium">{language === "en" ? "Read more" : "Mehr lesen"}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">{t.contactForm.title}</h2>
            <p className="text-xl text-muted-foreground">{t.contactForm.subtitle}</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Input
                placeholder={t.contactForm.namePlaceholder}
                className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
              />
              <Input
                type="email"
                placeholder={t.contactForm.emailPlaceholder}
                className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
              />
            </div>
            <Input
              placeholder={t.contactForm.companyPlaceholder}
              className="bg-secondary border-border rounded-sm h-12 focus:border-primary transition-colors"
            />
            <Textarea
              placeholder={t.contactForm.messagePlaceholder}
              className="bg-secondary border-border rounded-sm min-h-[150px] focus:border-primary transition-colors resize-none"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm h-12 text-base font-medium transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/20">
              {t.contactForm.submit}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold mb-2">DON AGENCY</div>
              <div className="text-sm text-muted-foreground">{t.footer.tagline}</div>
            </div>
            <div className="text-sm text-muted-foreground">{t.footer.copyright}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
