import { useState, useEffect } from "react"
import { translations } from "./lib/translations"
import Navigation from "./components/common/Navigation"
import ScrollToTop from "./components/common/ScrollToTop"
import Footer from "./components/common/Footer"
import HeroSection from "./components/sections/HeroSection"
import PurposeSection from "./components/sections/PurposeSection"
import ServicesSection from "./components/sections/ServicesSection"
import CaseStudiesSection from "./components/sections/CaseStudiesSection"
import ApproachSection from "./components/sections/ApproachSection"
import CapabilitiesSection from "./components/sections/CapabilitiesSection"
import PrinciplesSection from "./components/sections/PrinciplesSection"
import IndustriesSection from "./components/sections/IndustriesSection"
import TechStackSection from "./components/sections/TechStackSection"
import TestimonialsSection from "./components/sections/TestimonialsSection"
import FAQSection from "./components/sections/FAQSection"
import CTASection from "./components/sections/CTASection"
import StatsSection from "./components/sections/StatsSection"
import PhilosophySection from "./components/sections/PhilosophySection"
import ResourcesSection from "./components/sections/ResourcesSection"
interface HomeProps {
  language: "en" | "de"
  setLanguage: (lang: "en" | "de") => void
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Home({
  language,
  setLanguage,
  darkMode,
  toggleDarkMode,
}: HomeProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[language]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation
        language={language}
        darkMode={darkMode}
        isScrolled={isScrolled}
        setLanguage={setLanguage}
        toggleDarkMode={toggleDarkMode}
        translations={t}
      />
      <HeroSection translations={t} />
      <PurposeSection translations={t} />
      <ServicesSection translations={t} />
      <CaseStudiesSection translations={t} />
      <ApproachSection translations={t} />
      <CapabilitiesSection translations={t} />
      <PrinciplesSection translations={t} />
      <IndustriesSection translations={t} />
      <TechStackSection translations={t} />
      <TestimonialsSection translations={t} />
      <FAQSection translations={t} />
      <CTASection translations={t} />
      <StatsSection language={language} />
      <PhilosophySection language={language} />
      <ResourcesSection language={language} />
      <ScrollToTop show={showScrollTop} />
      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </div>
  )
}
