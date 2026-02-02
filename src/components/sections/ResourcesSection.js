import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
const RESOURCES_EN = {
    title: "Resources & Insights",
    subtitle: "Practical guides and frameworks for building operational leverage in your business.",
    cards: [
        { type: "GUIDE", title: "The Operational Leverage Framework", body: "A comprehensive guide to identifying operational bottlenecks and building systems that create 10x leverage in your business operations.", readMore: "Read more" },
        { type: "CASE STUDY", title: "From 3 Days to 15 Minutes: RevOps Transformation", body: "How we built an end-to-end revenue operations system that eliminated 87% of manual work and delivered real-time forecasting for a Series B SaaS company.", readMore: "Read more" },
        { type: "WHITEPAPER", title: "Building Scalable Data Infrastructure", body: "Technical deep-dive into architecting data pipelines and warehouses that scale from thousands to millions of records without breaking.", readMore: "Read more" },
    ],
};
const RESOURCES_DE = {
    title: "Ressourcen & Einblicke",
    subtitle: "Praktische Leitfäden und Frameworks für den Aufbau operativer Hebelwirkung in Ihrem Geschäft.",
    cards: [
        { type: "LEITFADEN", title: "Das Operative Hebelwirkungs-Framework", body: "Ein umfassender Leitfaden zur Identifizierung operativer Engpässe und zum Aufbau von Systemen, die 10x Hebelwirkung in Ihren Geschäftsoperationen schaffen.", readMore: "Mehr lesen" },
        { type: "FALLSTUDIE", title: "Von 3 Tagen zu 15 Minuten: RevOps-Transformation", body: "Wie wir ein End-to-End-Revenue-Operations-System aufbauten, das 87% der manuellen Arbeit eliminierte und Echtzeit-Prognosen für ein Series B SaaS-Unternehmen lieferte.", readMore: "Mehr lesen" },
        { type: "WHITEPAPER", title: "Aufbau skalierbarer Dateninfrastruktur", body: "Technischer Tieftauchgang in die Architektur von Datenpipelines und Warehouses, die von Tausenden auf Millionen von Datensätzen skalieren, ohne zu brechen.", readMore: "Mehr lesen" },
    ],
};
export default function ResourcesSection({ language }) {
    const t = language === "en" ? RESOURCES_EN : RESOURCES_DE;
    return (_jsxs("section", { className: "px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance", children: t.title }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl leading-relaxed", children: t.subtitle })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: t.cards.map((card, i) => (_jsxs("div", { className: "bg-card border border-border p-8 rounded-sm hover:border-primary/40 transition-all duration-300 group cursor-pointer", children: [_jsx("div", { className: "text-sm text-primary font-medium mb-3", children: card.type }), _jsx("h3", { className: "text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200", children: card.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: card.body }), _jsxs("div", { className: "flex items-center text-primary group-hover:gap-2 transition-all duration-200", children: [_jsx("span", { className: "text-sm font-medium", children: card.readMore }), _jsx(ArrowRight, { className: "h-4 w-4 ml-1" })] })] }, i))) })] }));
}
//# sourceMappingURL=ResourcesSection.js.map