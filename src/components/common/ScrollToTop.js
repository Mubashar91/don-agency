import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop({ show }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsx("button", { onClick: scrollToTop, className: `fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 z-50 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}`, "aria-label": "Scroll to top", children: _jsx(ArrowUp, { className: "h-5 w-5" }) }));
}
//# sourceMappingURL=ScrollToTop.js.map