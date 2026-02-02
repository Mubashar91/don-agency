import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "de"
  darkMode: boolean
  isScrolled: boolean
  setLanguage: (lang: "en" | "de") => void
  toggleDarkMode: () => void
  translations: {
    nav: {
      services: string
      work: string
      approach: string
      expertise: string
      contactUs: string
      getStarted: string
      bookMeeting: string
    }
  }
}

export default function Navigation({
  language,
  darkMode,
  isScrolled,
  setLanguage,
  toggleDarkMode,
  translations,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-xl border-b z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-2xl border-border shadow-lg" : "bg-background/95 backdrop-blur-xl border-border/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-300"
        >
          DON
        </Link>
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {translations.nav.services}
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {translations.nav.work}
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {translations.nav.approach}
          </a>
          <a
            href="#expertise"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {translations.nav.expertise}
          </a>
          <div className="h-6 w-px bg-border/50" />
          <button
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 px-3 py-1.5 rounded hover:scale-105"
          >
            {language === "en" ? "DE" : "EN"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded hover:scale-110"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button asChild variant="outline" className="border-border/70 hover:bg-secondary/80 hover:border-primary/50 text-foreground rounded px-5 h-10 font-medium text-sm transition-all duration-300 hover:scale-105">
            <Link to="/contact">{translations.nav.contactUs}</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/85 text-primary-foreground rounded px-6 h-10 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
            <Link to="/book-meeting">{translations.nav.bookMeeting}</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/60 rounded"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/60">
          <div className="px-4 sm:px-6 py-4 space-y-2">
            <a
              href="#services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.services}
            </a>
            <a
              href="#work"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.work}
            </a>
            <a
              href="#approach"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.approach}
            </a>
            <a
              href="#expertise"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {translations.nav.expertise}
            </a>
            <div className="h-px bg-border/50 my-4"></div>
            <Button
              asChild
              variant="outline"
              className="w-full justify-start mb-3 h-12"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact">{translations.nav.contactUs}</Link>
            </Button>
            <Button
              asChild
              className="w-full justify-start h-12"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/book-meeting">{translations.nav.bookMeeting}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
