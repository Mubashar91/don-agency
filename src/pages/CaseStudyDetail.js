import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowLeft, Target, Zap, Database, BarChart3, Users, TrendingUp, Clock, DollarSign, Shield, CheckCircle } from "lucide-react";
export default function CaseStudyDetail({ language, darkMode, toggleDarkMode }) {
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
    };
    const t = translations[language];
    return (_jsxs("div", { className: `min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`, children: [_jsx("nav", { className: "fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-lg font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300", children: "DON" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: toggleDarkMode, className: "p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded", "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode", children: darkMode ? "🌞" : "🌙" }), _jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { to: "/#work", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), t.navigation.backToWork] }) })] })] }) }), _jsx("main", { className: "pt-32 pb-20 px-6", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "mb-12", children: [_jsx("div", { className: "text-xs font-bold text-primary mb-4 uppercase tracking-widest", children: t.category }), _jsx("h1", { className: "text-5xl font-bold mb-6 tracking-tight", children: t.title }), _jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: t.subtitle })] }), _jsxs("section", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: t.overview.title }), _jsx("p", { className: "text-lg text-muted-foreground mb-8 leading-relaxed", children: t.overview.description }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "p-6 border border-border rounded-lg bg-card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Client" }), _jsx("p", { className: "text-muted-foreground", children: t.overview.client })] }), _jsxs("div", { className: "p-6 border border-border rounded-lg bg-card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Duration" }), _jsx("p", { className: "text-muted-foreground", children: t.overview.duration })] }), _jsxs("div", { className: "p-6 border border-border rounded-lg bg-card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Team" }), _jsx("p", { className: "text-muted-foreground", children: t.overview.team })] }), _jsxs("div", { className: "p-6 border border-border rounded-lg bg-card", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Technologies" }), _jsx("p", { className: "text-muted-foreground", children: t.overview.technologies })] })] })] }), _jsxs("section", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: t.challenges.title }), _jsx("div", { className: "space-y-4", children: t.challenges.items.map((challenge, index) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" }), _jsx("p", { className: "text-muted-foreground", children: challenge })] }, index))) })] }), _jsxs("section", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: t.solution.title }), _jsx("p", { className: "text-lg text-muted-foreground mb-8 leading-relaxed", children: t.solution.description }), _jsx("div", { className: "space-y-4", children: t.solution.features.map((feature, index) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-primary mt-0.5 flex-shrink-0" }), _jsx("p", { className: "text-muted-foreground", children: feature })] }, index))) })] }), _jsxs("section", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold mb-8", children: t.results.title }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: t.results.metrics.map((metric, index) => {
                                        const Icon = metric.icon;
                                        return (_jsxs("div", { className: "text-center p-6 border border-border rounded-lg bg-card", children: [_jsx(Icon, { className: "h-8 w-8 text-primary mx-auto mb-4" }), _jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: metric.value }), _jsx("div", { className: "text-sm text-muted-foreground", children: metric.label })] }, index));
                                    }) }), _jsx("div", { className: "space-y-4", children: t.results.impact.map((impact, index) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(TrendingUp, { className: "h-5 w-5 text-primary mt-0.5 flex-shrink-0" }), _jsx("p", { className: "text-muted-foreground", children: impact })] }, index))) })] }), _jsx("section", { className: "mb-16", children: _jsxs("div", { className: "p-8 border border-border rounded-lg bg-card", children: [_jsxs("blockquote", { className: "text-lg text-muted-foreground mb-6 leading-relaxed italic", children: ["\"", t.testimonial.quote, "\""] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: t.testimonial.author }), _jsx("div", { className: "text-sm text-muted-foreground", children: t.testimonial.role })] })] }) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-between items-center", children: [_jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { to: "/#work", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), t.navigation.backToWork] }) }), _jsx(Button, { asChild: true, children: _jsx(Link, { to: "/contact", children: t.navigation.contactUs }) })] })] }) })] }));
}
//# sourceMappingURL=CaseStudyDetail.js.map