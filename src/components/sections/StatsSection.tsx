const STATS_EN = {
  title: "Success By The Numbers",
  subtitle: "Real operational improvements our systems have delivered across client engagements.",
  mainStats: [
    { value: "$18M", label: "Total Cost Savings Delivered" },
    { value: "83%", label: "Avg. Manual Process Reduction" },
    { value: "4.2mo", label: "Avg. Time to ROI" },
    { value: "98%", label: "System Uptime SLA" },
  ],
  cards: [
    { value: "200K+", title: "Hours Saved", desc: "Combined manual hours eliminated through automation across all client engagements" },
    { value: "15M+", title: "Data Points Processed", desc: "Daily data pipeline throughput across integrated systems and platforms" },
    { value: "24/7", title: "Monitoring & Support", desc: "Real-time system monitoring and incident response for critical infrastructure" },
  ],
}

const STATS_DE = {
  title: "Erfolg in Zahlen",
  subtitle: "Echte operative Verbesserungen, die unsere Systeme bei Kundenengagements erzielt haben.",
  mainStats: [
    { value: "$18M", label: "Gesamte Kosteneinsparungen" },
    { value: "83%", label: "Durchschn. Reduzierung manueller Prozesse" },
    { value: "4.2mo", label: "Durchschn. Zeit bis ROI" },
    { value: "98%", label: "System Uptime SLA" },
  ],
  cards: [
    { value: "200K+", title: "Eingesparte Stunden", desc: "Kombinierte manuelle Stunden durch Automatisierung über alle Kundenengagements hinweg eliminiert" },
    { value: "15M+", title: "Verarbeitete Datenpunkte", desc: "Täglicher Datenpipeline-Durchsatz über integrierte Systeme und Plattformen" },
    { value: "24/7", title: "Überwachung & Support", desc: "Echtzeit-Systemüberwachung und Incident-Response für kritische Infrastruktur" },
  ],
}

interface StatsSectionProps {
  language: "en" | "de"
}

export default function StatsSection({ language }: StatsSectionProps) {
  const t = language === "en" ? STATS_EN : STATS_DE
  return (
    <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">{t.title}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{t.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {t.mainStats.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-muted-foreground leading-relaxed">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.cards.map((card, i) => (
          <div key={i} className="bg-card border border-border p-8 rounded-sm">
            <div className="text-3xl font-bold text-primary mb-3">{card.value}</div>
            <div className="text-lg font-semibold mb-2">{card.title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
