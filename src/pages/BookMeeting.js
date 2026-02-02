import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle2, ArrowLeft, Menu, X, Phone, Mail, Star, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
export default function BookMeeting({ language, darkMode, toggleDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
        // Handle scroll for navbar
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const translations = {
        en: {
            title: "Book Your Consultation",
            subtitle: "Schedule a consultation to discuss how we can build operational leverage for your scaling company.",
            whatToExpect: "What to Expect",
            session: "30-Minute Strategy Session",
            sessionDesc: "Focused discussion about your operational challenges and scaling opportunities",
            virtual: "Virtual Meeting",
            virtualDesc: "Join via Google Meet or Zoom",
            commitment: "No Commitment",
            commitmentDesc: "Free consultation with no obligations",
            wellDiscuss: "We'll Discuss",
            discussItems: [
                "Your current operational challenges and bottlenecks",
                "How operational systems can create force multipliers",
                "Custom infrastructure solutions for your business",
                "Implementation roadmap and timeline",
                "ROI projections and success metrics",
            ],
            clients: "200+",
            costSaved: "45%",
            rating: "4.9/5",
            testimonials: {
                title: "What Our Clients Say",
                subtitle: "See why scaling companies trust DON AGENCY",
                items: [
                    {
                        name: "Sarah Chen",
                        role: "VP Operations, Vertex SaaS",
                        text: "DON AGENCY built our entire revenue operations infrastructure. What would have taken our team 6 months to patch together, they delivered as a cohesive system in 6 weeks.",
                        rating: 5
                    },
                    {
                        name: "Michael Rodriguez",
                        role: "CEO, ScaleTech",
                        text: "The operational systems they designed increased our efficiency by 10x. This is exactly what scaling companies need - infrastructure, not campaigns.",
                        rating: 5
                    },
                    {
                        name: "Emma Thompson",
                        role: "Founder, GrowthStage",
                        text: "Finally, a partner who understands that systems are the answer. Our operational foundation is now solid and ready for exponential growth.",
                        rating: 5
                    }
                ]
            },
            secure: "100% Secure & Confidential",
            bookNow: "Book Your Session",
            home: "Home",
            backToHome: "Back to Home"
        },
        de: {
            title: "Ihre Beratung buchen",
            subtitle: "Vereinbaren Sie eine Beratung, um zu besprechen, wie wir operativen Hebel für Ihr wachsendes Unternehmen aufbauen können.",
            whatToExpect: "Was Sie erwartet",
            session: "30-Minuten-Strategie-Sitzung",
            sessionDesc: "Fokussierte Diskussion über Ihre operativen Herausforderungen und Skalierungsmöglichkeiten",
            virtual: "Virtuelles Treffen",
            virtualDesc: "Nehmen Sie über Google Meet oder Zoom teil",
            commitment: "Keine Verpflichtung",
            commitmentDesc: "Kostenlose Beratung ohne Verpflichtungen",
            wellDiscuss: "Wir besprechen",
            discussItems: [
                "Ihre aktuellen operativen Herausforderungen und Engpässe",
                "Wie operative Systeme Kraftmultiplikatoren schaffen können",
                "Maßgeschneiderte Infrastrukturlösungen für Ihr Unternehmen",
                "Implementierungs-Roadmap und Zeitplan",
                "ROI-Projektionen und Erfolgsmetriken",
            ],
            clients: "200+",
            costSaved: "45%",
            rating: "4.9/5",
            testimonials: {
                title: "Was unsere Kunden sagen",
                subtitle: "Sehen Sie, warum wachsende Unternehmen DON AGENCY vertrauen",
                items: [
                    {
                        name: "Sarah Chen",
                        role: "VP Operations, Vertex SaaS",
                        text: "DON AGENCY hat unsere gesamte Revenue Operations Infrastruktur aufgebaut. Was unserem Team 6 Monate Patchwork gekostet hätte, haben sie in 6 Wochen als kohärentes System geliefert.",
                        rating: 5
                    },
                    {
                        name: "Michael Rodriguez",
                        role: "CEO, ScaleTech",
                        text: "Die von ihnen entworfenen operativen Systeme erhöhten unsere Effizienz um 10x. Das ist genau, was wachsende Unternehmen brauchen - Infrastruktur, keine Kampagnen.",
                        rating: 5
                    },
                    {
                        name: "Emma Thompson",
                        role: "Founder, GrowthStage",
                        text: "Endlich ein Partner, der versteht, dass Systeme die Antwort sind. Unsere operative Grundlage ist nun solide und bereit für exponentielles Wachstum.",
                        rating: 5
                    }
                ]
            },
            secure: "100% Sicher & Vertraulich",
            bookNow: "Ihre Sitzung buchen",
            home: "Startseite",
            backToHome: "Zurück zur Startseite"
        }
    };
    const t = translations[language];
    return (_jsxs("div", { className: `min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`, children: [_jsx("nav", { className: "fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-lg sm:text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300", children: "DON" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: toggleDarkMode, className: "p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded", "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode", children: darkMode ? "🌞" : "🌙" }), _jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { to: "/", children: [_jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), t.home] }) })] })] }) }), _jsx("main", { className: "pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [_jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6", children: t.title }), _jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto", children: t.subtitle })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12", children: [_jsxs("div", { className: "lg:col-span-1 space-y-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-6", children: t.whatToExpect }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: _jsx(Clock, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg text-foreground mb-2", children: t.session }), _jsx("p", { className: "text-muted-foreground", children: t.sessionDesc })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: _jsx(Video, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg text-foreground mb-2", children: t.virtual }), _jsx("p", { className: "text-muted-foreground", children: t.virtualDesc })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center", children: _jsx(CheckCircle2, { className: "h-6 w-6 text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg text-foreground mb-2", children: t.commitment }), _jsx("p", { className: "text-muted-foreground", children: t.commitmentDesc })] })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl sm:text-2xl font-bold mb-6", children: t.wellDiscuss }), _jsx("div", { className: "space-y-4", children: t.discussItems.map((item, index) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5", children: _jsx("div", { className: "w-2 h-2 rounded-full bg-primary" }) }), _jsx("p", { className: "text-muted-foreground leading-relaxed", children: item })] }, index))) })] }), _jsxs("div", { className: "grid grid-cols-3 gap-4 pt-8 border-t border-border", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl sm:text-3xl font-bold text-primary", children: t.clients }), _jsx("div", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: "Clients" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl sm:text-3xl font-bold text-primary", children: t.costSaved }), _jsx("div", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: "Cost Saved" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-2xl sm:text-3xl font-bold text-primary", children: t.rating }), _jsx("div", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: "Rating" })] })] })] }), _jsxs("div", { className: "lg:col-span-2", children: [_jsx("div", { className: "bg-card border border-border rounded-xl p-4 sm:p-6 shadow-lg", children: _jsx("div", { className: "calendly-inline-widget rounded-lg overflow-hidden", "data-url": "https://calendly.com/patryk-donocik/30min", style: { minWidth: "100%", height: "700px" } }) }), _jsx("div", { className: "mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg text-center", children: _jsxs("p", { className: "text-sm text-muted-foreground", children: [_jsx(Shield, { className: "w-4 h-4 inline mr-2 text-primary" }), _jsx("span", { className: "font-semibold text-foreground", children: t.secure })] }) })] })] }), _jsxs("div", { className: "mt-16 sm:mt-20", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: t.testimonials.title }), _jsx("p", { className: "text-muted-foreground", children: t.testimonials.subtitle })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: t.testimonials.items.map((testimonial, idx) => (_jsxs("div", { className: "bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300", children: [_jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 text-primary fill-primary" }, i))) }), _jsxs("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: _jsx("span", { className: "text-primary font-bold text-sm", children: testimonial.name.split(' ').map(n => n[0]).join('') }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-sm text-foreground", children: testimonial.name }), _jsx("div", { className: "text-xs text-muted-foreground", children: testimonial.role })] })] })] }, testimonial.name))) })] })] }) })] }));
}
//# sourceMappingURL=BookMeeting.js.map