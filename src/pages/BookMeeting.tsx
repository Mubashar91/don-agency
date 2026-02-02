import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle2, ArrowLeft, Menu, X, Phone, Mail, Star, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

interface BookMeetingProps {
  language: "en" | "de"
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function BookMeeting({ language, darkMode, toggleDarkMode }: BookMeetingProps) {
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
      subtitle: "Schedule a free 15-minute call to discuss how we can help your business.",
      whatToExpect: "What to Expect",
      session: "15-Minute Session",
      sessionDesc: "Quick, focused discussion about your needs",
      virtual: "Virtual Meeting",
      virtualDesc: "Join via Google Meet or Zoom",
      commitment: "No Commitment",
      commitmentDesc: "Free consultation with no obligations",
      wellDiscuss: "We'll Discuss",
      discussItems: [
        "Your current operational challenges",
        "How VAs can fit into your workflow",
        "Custom solutions for your business",
        "Pricing & team structure options",
        "Next steps to get started",
      ],
      clients: "Clients",
      costSaved: "Cost Saved",
      rating: "Rating",
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "See why businesses trust Don Va",
        items: [
          {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            text: "Don Va transformed our operations. The consultation was thorough and the onboarding was seamless.",
            rating: 5
          },
          {
            name: "Michael Chen",
            role: "Founder, Digital Growth",
            text: "Best decision we made. Our VA has become an integral part of our team within weeks.",
            rating: 5
          },
          {
            name: "Emma Davis",
            role: "Director, MarketPro",
            text: "Professional, reliable, and cost-effective. Couldn't ask for more from a VA service.",
            rating: 5
          }
        ]
      },
      secure: "100% Secure & Confidential",
      bookNow: "Book Now",
      home: "Home",
      backToHome: "Back to Home"
    },
    de: {
      title: "Ihre Beratung buchen",
      subtitle: "Vereinbaren Sie ein kostenloses 15-minütiges Gespräch, um zu besprechen, wie wir Ihrem Unternehmen helfen können.",
      whatToExpect: "Was Sie erwartet",
      session: "15-Minuten-Sitzung",
      sessionDesc: "Schnelle, fokussierte Diskussion über Ihre Bedürfnisse",
      virtual: "Virtuelles Treffen",
      virtualDesc: "Nehmen Sie über Google Meet oder Zoom teil",
      commitment: "Keine Verpflichtung",
      commitmentDesc: "Kostenlose Beratung ohne Verpflichtungen",
      wellDiscuss: "Wir besprechen",
      discussItems: [
        "Ihre aktuellen operativen Herausforderungen",
        "Wie VAs in Ihren Workflow passen können",
        "Maßgeschneiderte Lösungen für Ihr Unternehmen",
        "Preis- & Teamstrukturoptionen",
        "Nächste Schritte zum Start",
      ],
      clients: "Kunden",
      costSaved: "Kosten gespart",
      rating: "Bewertung",
      testimonials: {
        title: "Was unsere Kunden sagen",
        subtitle: "Sehen Sie, warum Unternehmen Don Va vertrauen",
        items: [
          {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc",
            text: "Don Va hat unsere Operationen transformiert. Die Beratung war gründlich und das Onboarding nahtlos.",
            rating: 5
          },
          {
            name: "Michael Chen",
            role: "Founder, Digital Growth",
            text: "Beste Entscheidung, die wir getroffen haben. Unsere VA wurde innerhalb von Wochen ein integraler Bestandteil unseres Teams.",
            rating: 5
          },
          {
            name: "Emma Davis",
            role: "Director, MarketPro",
            text: "Professionell, zuverlässig und kosteneffektiv. Könnte man nicht mehr von einem VA-Service erwarten.",
            rating: 5
          }
        ]
      },
      secure: "100% Sicher & Vertraulich",
      bookNow: "Jetzt buchen",
      home: "Startseite",
      backToHome: "Zurück zur Startseite"
    }
  };

  const t = translations[language];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Enhanced Professional Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/98 backdrop-blur-2xl border-b-2 border-gold/20 shadow-2xl shadow-gold/5"
            : "bg-background/90 backdrop-blur-xl border-b border-border/30"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring", damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center space-x-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-gold/30 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-black font-black text-xl sm:text-2xl">D</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-gold group-hover:to-yellow-600 transition-all duration-300">
                  Don
                </span>
                <span className="text-[10px] sm:text-xs text-gold/80 font-semibold -mt-1 tracking-wide">Agency</span>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-6">
              <Button
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-gold hover:bg-gold/10 transition-all duration-300 font-semibold px-4 py-2 rounded-xl group"
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  {t.home}
                </Link>
              </Button>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.open("https://calendly.com/patryk-donocik/30min", "_blank", "noopener,noreferrer")}
                  className="bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 border-2 border-gold/50"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.bookNow}
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative w-11 h-11 rounded-xl border border-border/50 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5 text-gold" />
                  ) : (
                    <Menu className="h-5 w-5 text-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="md:hidden border-t-2 border-gold/20 bg-background/95 backdrop-blur-xl"
              >
                <div className="py-6 space-y-4">
                  {/* Book Now CTA */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="px-4"
                  >
                    <Button
                      onClick={() => {
                        document.querySelector('.calendly-inline-widget')?.scrollIntoView({ behavior: 'smooth' });
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-600 hover:to-gold text-black font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {t.bookNow}
                    </Button>
                  </motion.div>
                  
                  <div className="h-px bg-border/50 mx-4" />
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      asChild
                      className="w-full justify-start text-muted-foreground hover:text-gold hover:bg-gold/5 py-3 rounded-xl transition-all duration-300 group"
                    >
                      <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                        <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-semibold">{t.backToHome}</span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            className="lg:col-span-2 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                {t.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Meeting Details */}
            <div className="space-y-4 p-5 sm:p-6 bg-card border border-border rounded-xl shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                {t.whatToExpect}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      {t.session}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t.sessionDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      {t.virtual}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t.virtualDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground mb-1">
                      {t.commitment}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t.commitmentDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We'll Cover */}
            <div className="space-y-4 p-5 sm:p-6 bg-gold/5 border border-gold/20 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                {t.wellDiscuss}
              </h3>
              <ul className="space-y-3">
                {t.discussItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">200+</div>
                <div className="text-xs text-muted-foreground mt-1">{t.clients}</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">70%</div>
                <div className="text-xs text-muted-foreground mt-1">{t.costSaved}</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-lg">
                <div className="text-2xl font-bold text-gold">4.9/5</div>
                <div className="text-xs text-muted-foreground mt-1">{t.rating}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Calendly Widget */}
          <div className="lg:col-span-3 order-first lg:order-last">
            <div className="lg:sticky lg:top-24">
              <div className="bg-card border border-border rounded-xl p-2 shadow-lg">
                <div
                  className="calendly-inline-widget rounded-lg overflow-hidden"
                  data-url="https://calendly.com/patryk-donocik/30min"
                  style={{ minWidth: "100%", height: "600px" }}
                />
              </div>

              {/* Bottom Note */}
              <div className="mt-4 p-4 bg-gold/5 border border-gold/20 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 inline mr-2 text-gold" />
                  <span className="font-semibold text-foreground">{t.secure}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <motion.div
          className="mt-16 sm:mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
              {t.testimonials.title}
            </h2>
            <p className="text-muted-foreground">
              {t.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                    <span className="text-gold font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
