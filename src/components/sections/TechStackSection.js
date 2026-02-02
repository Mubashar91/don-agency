import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TECH_GROUPS = {
    dataInfra: ["PostgreSQL", "Snowflake", "BigQuery", "Redshift", "MongoDB", "Redis", "Kafka", "Airflow", "dbt"],
    integration: ["Salesforce", "HubSpot", "Stripe", "Segment", "Workday", "NetSuite", "Zapier", "Make"],
    development: ["Python", "Node.js", "React", "Next.js", "TypeScript", "GraphQL", "REST APIs"],
    infrastructure: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "Vercel"],
};
export default function TechStackSection({ translations }) {
    const { techStack } = translations;
    return (_jsxs("section", { className: "px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance", children: techStack.title }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl leading-relaxed", children: techStack.subtitle })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: ["dataInfra", "integration", "development", "infrastructure"].map((key) => (_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-6", children: techStack[key] }), _jsx("div", { className: "flex flex-wrap gap-3", children: TECH_GROUPS[key].map((tech) => (_jsx("span", { className: "px-4 py-2 bg-primary/10 text-foreground rounded-sm text-sm hover:bg-primary/20 transition-colors duration-200 cursor-default", children: tech }, tech))) })] }, key))) })] }));
}
//# sourceMappingURL=TechStackSection.js.map