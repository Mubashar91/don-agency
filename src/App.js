import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page";
import Contact from "./pages/Contact";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BookMeeting from "./pages/BookMeeting";
export default function App() {
    const [language, setLanguage] = useState("en");
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (_jsx(Router, { children: _jsx("div", { className: `antialiased ${darkMode ? 'dark' : ''}`, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, { language: language, setLanguage: setLanguage, darkMode: darkMode, toggleDarkMode: toggleDarkMode }) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, { language: language, darkMode: darkMode, toggleDarkMode: toggleDarkMode }) }), _jsx(Route, { path: "/case-study/revenue-operations-platform", element: _jsx(CaseStudyDetail, { language: language, darkMode: darkMode, toggleDarkMode: toggleDarkMode }) }), _jsx(Route, { path: "/book-meeting", element: _jsx(BookMeeting, { language: language, darkMode: darkMode, toggleDarkMode: toggleDarkMode }) })] }) }) }));
}
//# sourceMappingURL=App.js.map