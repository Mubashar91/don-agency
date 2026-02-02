import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
export default function CTASection({ translations }) {
    const { cta } = translations;
    return (_jsx("section", { id: "contact", className: "px-6 md:px-8 py-32 md:py-40 max-w-[1400px] mx-auto border-t border-border", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-balance", children: cta.title }), _jsx("p", { className: "text-xl text-muted-foreground leading-relaxed mb-12", children: cta.subtitle }), _jsxs(Button, { size: "lg", className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-12 h-16 text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30", children: [cta.button, _jsx(ArrowRight, { className: "ml-3 h-6 w-6" })] }), _jsx("p", { className: "mt-8 text-sm text-muted-foreground", children: cta.response })] }) }));
}
//# sourceMappingURL=CTASection.js.map