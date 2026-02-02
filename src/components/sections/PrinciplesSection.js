import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PrinciplesSection({ translations }) {
    const { principles } = translations;
    return (_jsx("section", { className: "py-20 px-6 border-t border-border", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-16", children: principles.title }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: principles.items.map((principle, i) => (_jsxs("div", { className: "group p-8 border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5", children: [_jsx("h3", { className: "text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200", children: principle.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: principle.description })] }, i))) })] }) }));
}
//# sourceMappingURL=PrinciplesSection.js.map