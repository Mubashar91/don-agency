interface NavigationProps {
    language: "en" | "de";
    darkMode: boolean;
    isScrolled: boolean;
    setLanguage: (lang: "en" | "de") => void;
    toggleDarkMode: () => void;
    translations: {
        nav: {
            services: string;
            work: string;
            approach: string;
            expertise: string;
            contactUs: string;
            getStarted: string;
            bookMeeting: string;
        };
    };
}
export default function Navigation({ language, darkMode, isScrolled, setLanguage, toggleDarkMode, translations, }: NavigationProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Navigation.d.ts.map