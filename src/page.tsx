import { useState, useEffect } from "react"
import { translations } from "./lib/translations"
import Navigation from "./components/common/Navigation"
import ScrollToTop from "./components/common/ScrollToTop"
import Footer from "./components/common/Footer"
import HeroSection from "./components/sections/HeroSection"
import ServicesSection from "./components/sections/ServicesSection"
import CTASection from "./components/sections/CTASection"
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
      <ServicesSection translations={t} />
      <CTASection translations={t} />
      <ScrollToTop show={showScrollTop} />
      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </div>
  )
}
