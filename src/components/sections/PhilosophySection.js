import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PHILOSOPHY_EN = {
    title: "Our Operational Philosophy",
    subtitle: "The core principles that guide how we build operational infrastructure for scaling companies.",
    items: [
        { title: "Infrastructure Over Solutions", body: "We don't build temporary fixes or one-off implementations. Every system we create is designed as permanent infrastructure that becomes a core operational asset for your business. We think in terms of platforms, not projects." },
        { title: "Operational Leverage, Not Just Efficiency", body: "True operational leverage means creating systems where incremental effort produces exponential results. We focus on building infrastructure that scales sub-linearly with business growth—systems that handle 10x volume without 10x resources." },
        { title: "Data as Operational Foundation", body: "Every operational decision should be informed by real-time data. We architect systems where data flows automatically from source to insight—no manual exports, no spreadsheet gymnastics. Your operational reality should be visible in real-time dashboards, not month-end reports." },
        { title: "Maintainability is Non-Negotiable", body: "We build systems your team can understand, modify, and maintain. That means clean architecture, comprehensive documentation, and proven technologies. The operational infrastructure we deliver shouldn't require us to maintain—it should empower your team." },
        { title: "Security and Compliance From Day One", body: "Enterprise-grade operational infrastructure means enterprise-grade security. We build with SOC 2, GDPR, and industry-specific compliance requirements in mind from the start. Security isn't bolted on—it's baked into the architecture." },
    ],
};
const PHILOSOPHY_DE = {
    title: "Unsere Operative Philosophie",
    subtitle: "Die Kernprinzipien, die leiten, wie wir operative Infrastruktur für wachsende Unternehmen aufbauen.",
    items: [
        { title: "Infrastruktur über Lösungen", body: "Wir bauen keine temporären Fixes oder Einzelimplementierungen. Jedes System, das wir erstellen, ist als permanente Infrastruktur konzipiert, die zu einem operativen Kernelement für Ihr Unternehmen wird. Wir denken in Plattformen, nicht in Projekten." },
        { title: "Operative Hebelwirkung, nicht nur Effizienz", body: "Echte operative Hebelwirkung bedeutet Systeme zu schaffen, bei denen inkrementeller Aufwand exponentielle Ergebnisse produziert. Wir konzentrieren uns auf den Aufbau von Infrastruktur, die sublinear mit dem Geschäftswachstum skaliert—Systeme, die 10x Volumen ohne 10x Ressourcen bewältigen." },
        { title: "Daten als Operative Grundlage", body: "Jede operative Entscheidung sollte durch Echtzeitdaten informiert werden. Wir entwickeln Systeme, bei denen Daten automatisch von der Quelle zur Einsicht fließen—keine manuellen Exporte, keine Tabellenkalkulations-Gymnastik. Ihre operative Realität sollte in Echtzeit-Dashboards sichtbar sein, nicht in Monatsendberichten." },
        { title: "Wartbarkeit ist nicht verhandelbar", body: "Wir bauen Systeme, die Ihr Team verstehen, ändern und warten kann. Das bedeutet saubere Architektur, umfassende Dokumentation und bewährte Technologien. Die operative Infrastruktur, die wir liefern, sollte nicht unsere Wartung erfordern—sie sollte Ihr Team befähigen." },
        { title: "Sicherheit und Compliance von Tag Eins", body: "Operative Infrastruktur auf Unternehmensniveau bedeutet Sicherheit auf Unternehmensniveau. Wir bauen von Anfang an mit SOC 2, GDPR und branchenspezifischen Compliance-Anforderungen im Hinterkopf. Sicherheit wird nicht nachträglich hinzugefügt—sie ist in die Architektur eingebacken." },
    ],
};
export default function PhilosophySection({ language }) {
    const t = language === "en" ? PHILOSOPHY_EN : PHILOSOPHY_DE;
    return (_jsxs("section", { className: "px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance", children: t.title }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl leading-relaxed", children: t.subtitle })] }), _jsx("div", { className: "space-y-12", children: t.items.map((item, i) => (_jsxs("div", { className: "flex gap-8 group", children: [_jsx("div", { className: "shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300", children: _jsx("span", { className: "text-2xl font-bold text-primary", children: String(i + 1).padStart(2, "0") }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200", children: item.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed text-lg", children: item.body })] })] }, i))) })] }));
}
//# sourceMappingURL=PhilosophySection.js.map