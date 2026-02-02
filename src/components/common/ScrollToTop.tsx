import { ArrowUp } from "lucide-react"

interface ScrollToTopProps {
  show: boolean
}

export default function ScrollToTop({ show }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 z-50 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
