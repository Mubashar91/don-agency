import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { translations } from "./lib/translations";
import Navigation from "./components/common/Navigation";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import PurposeSection from "./components/sections/PurposeSection";
import ServicesSection from "./components/sections/ServicesSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ApproachSection from "./components/sections/ApproachSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import PrinciplesSection from "./components/sections/PrinciplesSection";
import IndustriesSection from "./components/sections/IndustriesSection";
import TechStackSection from "./components/sections/TechStackSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FAQSection from "./components/sections/FAQSection";
import CTASection from "./components/sections/CTASection";
import StatsSection from "./components/sections/StatsSection";
import PhilosophySection from "./components/sections/PhilosophySection";
import ResourcesSection from "./components/sections/ResourcesSection";
export default function Home({ language, setLanguage, darkMode, toggleDarkMode, }) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const t = translations[language];
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground transition-colors duration-300", children: [_jsx(Navigation, { language: language, darkMode: darkMode, isScrolled: isScrolled, setLanguage: setLanguage, toggleDarkMode: toggleDarkMode, translations: t }), _jsx(HeroSection, { translations: t }), _jsx(PurposeSection, { translations: t }), _jsx(ServicesSection, { translations: t }), _jsx(CaseStudiesSection, { translations: t }), _jsx(ApproachSection, { translations: t }), _jsx(CapabilitiesSection, { translations: t }), _jsx(PrinciplesSection, { translations: t }), _jsx(IndustriesSection, { translations: t }), _jsx(TechStackSection, { translations: t }), _jsx(TestimonialsSection, { translations: t }), _jsx(FAQSection, { translations: t }), _jsx(CTASection, { translations: t }), _jsx(StatsSection, { language: language }), _jsx(PhilosophySection, { language: language }), _jsx(ResourcesSection, { language: language }), _jsx(ScrollToTop, { show: showScrollTop }), _jsx(Footer, { tagline: t.footer.tagline, copyright: t.footer.copyright })] }));
}
//# sourceMappingURL=page.js.map