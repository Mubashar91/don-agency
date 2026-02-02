import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function FAQSection({ translations }) {
    const { faq } = translations;
    return (_jsx("section", { className: "py-20 px-6 border-t border-border", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold mb-16", children: faq.title }), _jsx("div", { className: "space-y-8", children: faq.items.map((item, i) => (_jsxs("div", { className: "group pb-8 border-b border-border last:border-0", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-200", children: item.question }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.answer })] }, i))) })] }) }));
}
//# sourceMappingURL=FAQSection.js.map