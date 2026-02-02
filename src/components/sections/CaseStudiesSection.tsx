import { Link } from "react-router-dom"
import { ArrowRight, Target, Zap, Database, Shield } from "lucide-react"

interface CaseStudiesSectionProps {
  translations: {
    caseStudies: {
      title: string
      subtitle: string
      case1: {
        category: string
        title: string
        description: string
        metric1: string
        metric2: string
        metric3: string
      }
      case2: {
        category: string
        title: string
        description: string
        metric1: string
        metric2: string
        metric3: string
      }
      case3: {
        category: string
        title: string
        description: string
        metric1: string
        metric2: string
        metric3: string
      }
    }
  }
}

export default function CaseStudiesSection({ translations }: CaseStudiesSectionProps) {
  const { caseStudies } = translations

  return (
    <section id="work" className="py-24 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">{caseStudies.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">{caseStudies.subtitle}</p>
        </div>

        {/* Case Study 1 */}
        <Link to="/case-study/revenue-operations-platform" className="block">
          <div className="bg-card border border-border p-6 sm:p-8 md:p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer mb-6 hover:-translate-y-1 hover:bg-card/80">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 sm:mb-10 gap-4">
              <div className="flex-1">
                <div className="text-xs font-bold text-primary mb-3 sm:mb-4 uppercase tracking-widest">
                  {caseStudies.case1.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                  {caseStudies.case1.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-4xl">
                  {caseStudies.case1.description}
                </p>
              </div>
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 shrink-0 mt-2 sm:mt-0 sm:ml-8" />
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm border-t border-border/40 pt-6 sm:pt-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case1.metric1}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case1.metric2}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case1.metric3}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Case Study 2 */}
        <div className="bg-card border border-border p-6 sm:p-8 md:p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer mb-6 hover:-translate-y-1 hover:bg-card/80">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 sm:mb-10 gap-4">
            <div className="flex-1">
              <div className="text-xs font-bold text-primary mb-3 sm:mb-4 uppercase tracking-widest">
                {caseStudies.case2.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                {caseStudies.case2.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-4xl">
                {caseStudies.case2.description}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 shrink-0 mt-2 sm:mt-0 sm:ml-8" />
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm border-t border-border/40 pt-6 sm:pt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case2.metric1}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case2.metric2}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case2.metric3}</span>
            </div>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="bg-card border border-border p-6 sm:p-8 md:p-12 rounded-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer hover:-translate-y-1 hover:bg-card/80">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 sm:mb-10 gap-4">
            <div className="flex-1">
              <div className="text-xs font-bold text-primary mb-3 sm:mb-4 uppercase tracking-widest">
                {caseStudies.case3.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                {caseStudies.case3.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-4xl">
                {caseStudies.case3.description}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 shrink-0 mt-2 sm:mt-0 sm:ml-8" />
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm border-t border-border/40 pt-6 sm:pt-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case3.metric1}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case3.metric2}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="text-muted-foreground font-medium text-xs sm:text-sm">{caseStudies.case3.metric3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
