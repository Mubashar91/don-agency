import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Database, Zap, Target, BarChart3, Users, Shield } from "lucide-react";
const ICONS = [Database, Zap, Target, BarChart3, Users, Shield];
export default function CapabilitiesSection({ translations }) {
    const { capabilities } = translations;
    return (_jsxs("section", { id: "expertise", className: "px-6 md:px-8 py-20 md:py-32 max-w-[1400px] mx-auto border-t border-border", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance", children: capabilities.title }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl leading-relaxed", children: capabilities.subtitle })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: capabilities.items.map((item, i) => {
                    const Icon = ICONS[i];
                    return (_jsxs("div", { className: "bg-card border border-border p-8 rounded-sm", children: [_jsx(Icon, { className: "h-10 w-10 text-primary mb-6" }), _jsx("h3", { className: "text-xl font-semibold mb-4 tracking-tight", children: item.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: item.description })] }, i));
                }) })] }));
}
//# sourceMappingURL=CapabilitiesSection.js.map