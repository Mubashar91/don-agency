import { useState, useEffect } from "react"
import Navigation from "./components/common/Navigation"
import ScrollToTop from "./components/common/ScrollToTop"
import Footer from "./components/common/Footer"
import HeroSection from "./components/sections/HeroSection"
import ServicesSection from "./components/sections/ServicesSection"
import CaseStudiesSection from "./components/sections/CaseStudiesSection"
import ContactSection from "./components/sections/ContactSection"
import { translations } from "./lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "de">("en")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode")
      if (saved !== null) {
        return JSON.parse(saved)
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
      
      {/* Purpose Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">{t.purpose.title}</h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{t.purpose.subtitle}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.purpose.description}</p>
          </div>
        </div>
      </section>

      <ServicesSection translations={t} />
      <CaseStudiesSection translations={t} />
      <ContactSection translations={t} />

      <ScrollToTop show={showScrollTop} />
      <Footer tagline={t.footer.tagline} copyright={t.footer.copyright} />
    </div>
  )
}
