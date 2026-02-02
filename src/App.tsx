import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./page"
import Contact from "./pages/Contact"
import CaseStudyDetail from "./pages/CaseStudyDetail"
import BookMeeting from "./pages/BookMeeting"

export default function App() {
  const [language, setLanguage] = useState<"en" | "de">("en")
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className={`antialiased ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                language={language} 
                setLanguage={setLanguage} 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Contact 
                language={language} 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            } 
          />
          <Route 
            path="/case-study/revenue-operations-platform" 
            element={
              <CaseStudyDetail 
                language={language} 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            } 
          />
          <Route 
            path="/book-meeting" 
            element={
              <BookMeeting 
                language={language} 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}
