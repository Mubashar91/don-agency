interface HomeProps {
    language: "en" | "de";
    setLanguage: (lang: "en" | "de") => void;
    darkMode: boolean;
    toggleDarkMode: () => void;
}
export default function Home({ language, setLanguage, darkMode, toggleDarkMode, }: HomeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=page.d.ts.map