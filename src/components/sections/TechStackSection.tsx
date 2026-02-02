const TECH_GROUPS = {
  dataInfra: ["PostgreSQL", "Snowflake", "BigQuery", "Redshift", "MongoDB", "Redis", "Kafka", "Airflow", "dbt"],
  integration: ["Salesforce", "HubSpot", "Stripe", "Segment", "Workday", "NetSuite", "Zapier", "Make"],
  development: ["Python", "Node.js", "React", "Next.js", "TypeScript", "GraphQL", "REST APIs"],
  infrastructure: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Vercel"],
} as const

interface TechStackSectionProps {
  translations: {
    techStack: {
      title: string
      subtitle: string
      dataInfra: string
      integration: string
      development: string
      infrastructure: string
    }
  }
}

export default function TechStackSection({ translations }: TechStackSectionProps) {
  const { techStack } = translations
  return (
    <section className="px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
          {techStack.title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{techStack.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {(["dataInfra", "integration", "development", "infrastructure"] as const).map((key) => (
          <div key={key}>
            <h3 className="text-lg font-semibold mb-6">{techStack[key]}</h3>
            <div className="flex flex-wrap gap-3">
              {TECH_GROUPS[key].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
