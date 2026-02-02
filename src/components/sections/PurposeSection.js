import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PurposeSection({ translations }) {
    const { purpose } = translations;
    return (_jsx("section", { className: "py-20 px-6 border-t border-border", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "max-w-3xl", children: [_jsx("h2", { className: "text-4xl font-bold mb-6", children: purpose.title }), _jsx("p", { className: "text-xl text-muted-foreground mb-6 leading-relaxed", children: purpose.subtitle }), _jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: purpose.description })] }) }) }));
}
//# sourceMappingURL=PurposeSection.js.map