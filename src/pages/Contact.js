import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export default function ContactPage({ language, darkMode, toggleDarkMode }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", company: "", message: "" });
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const translations = {
        en: {
            title: "Contact Us",
            subtitle: "Let's build operational leverage together",
            description: "Tell us about your operational challenges and we'll show you how to scale.",
            form: {
                name: "Your Name",
                email: "your@email.com",
                company: "Company Name",
                message: "Tell us about your operational challenges...",
                submit: "Send Message"
            },
            contact: {
                title: "Get in Touch",
                email: "hello@donagency.com",
                phone: "+1 (555) 123-4567",
                address: "123 Tech Street, San Francisco, CA 94105"
            },
            office: {
                title: "Our Office",
                hours: "Monday - Friday: 9AM - 6PM PST",
                response: "Typical response time: 2-4 hours during business hours"
            }
        },
        de: {
            title: "Kontakt",
            subtitle: "Lassen Sie uns gemeinsam operativen Hebel aufbauen",
            description: "Erzählen Sie uns von Ihren operativen Herausforderungen und wir zeigen Ihnen, wie Sie skalieren können.",
            form: {
                name: "Ihr Name",
                email: "ihre@email.de",
                company: "Firmenname",
                message: "Erzählen Sie uns von Ihren operativen Herausforderungen...",
                submit: "Nachricht senden"
            },
            contact: {
                title: "Kontakt aufnehmen",
                email: "hello@donagency.com",
                phone: "+1 (555) 123-4567",
                address: "123 Tech Street, San Francisco, CA 94105"
            },
            office: {
                title: "Unser Büro",
                hours: "Montag - Freitag: 9Uhr - 18Uhr PST",
                response: "Typische Antwortzeit: 2-4 Stunden während der Geschäftszeiten"
            }
        }
    };
    const t = translations[language];
    return (_jsxs("div", { className: `min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`, children: [_jsx("nav", { className: "fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-lg font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300", children: "DON" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: toggleDarkMode, className: "p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded", "aria-label": darkMode ? "Switch to light mode" : "Switch to dark mode", children: darkMode ? "🌞" : "🌙" }), _jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { to: "/", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Home"] }) })] })] }) }), _jsx("main", { className: "pt-32 pb-20 px-6", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-5xl font-bold mb-6", children: t.title }), _jsx("p", { className: "text-2xl text-muted-foreground mb-4", children: t.subtitle }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: t.description })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsx("div", { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx("div", { children: _jsx(Input, { name: "name", placeholder: t.form.name, value: formData.name, onChange: handleChange, required: true, className: "h-12 text-base" }) }), _jsx("div", { children: _jsx(Input, { name: "email", type: "email", placeholder: t.form.email, value: formData.email, onChange: handleChange, required: true, className: "h-12 text-base" }) }), _jsx("div", { children: _jsx(Input, { name: "company", placeholder: t.form.company, value: formData.company, onChange: handleChange, className: "h-12 text-base" }) }), _jsx("div", { children: _jsx(Textarea, { name: "message", placeholder: t.form.message, value: formData.message, onChange: handleChange, required: true, rows: 6, className: "text-base resize-none" }) }), _jsx(Button, { type: "submit", className: "w-full h-12 text-base font-semibold bg-primary hover:bg-primary/85 text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30", children: t.form.submit })] }) }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: t.contact.title }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "h-5 w-5 text-primary" }), _jsx("a", { href: `mailto:${t.contact.email}`, className: "text-muted-foreground hover:text-foreground transition-colors", children: t.contact.email })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Phone, { className: "h-5 w-5 text-primary" }), _jsx("a", { href: `tel:${t.contact.phone}`, className: "text-muted-foreground hover:text-foreground transition-colors", children: t.contact.phone })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(MapPin, { className: "h-5 w-5 text-primary" }), _jsx("span", { className: "text-muted-foreground", children: t.contact.address })] })] })] }), _jsxs("div", { className: "p-6 border border-border rounded-lg bg-card", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: t.office.title }), _jsx("p", { className: "text-muted-foreground mb-2", children: t.office.hours }), _jsx("p", { className: "text-sm text-muted-foreground", children: t.office.response })] })] })] })] }) })] }));
}
//# sourceMappingURL=Contact.js.map