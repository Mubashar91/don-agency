import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Shield, Target, BarChart3 } from "lucide-react";
const ICONS = [Users, Shield, Target, BarChart3];
export default function TestimonialsSection({ translations }) {
    const { testimonials } = translations;
    return (_jsxs("section", { className: "px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance", children: testimonials.title }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl leading-relaxed", children: testimonials.subtitle })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: testimonials.items.map((testimonial, i) => {
                    const Icon = ICONS[i];
                    return (_jsxs("div", { className: "bg-card border border-border p-10 rounded-sm", children: [_jsxs("p", { className: "text-lg text-foreground leading-relaxed mb-8", children: ["\"", testimonial.quote, "\""] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center", children: _jsx(Icon, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-foreground", children: testimonial.name }), _jsx("div", { className: "text-sm text-muted-foreground", children: testimonial.title })] })] })] }, i));
                }) })] }));
}
//# sourceMappingURL=TestimonialsSection.js.map