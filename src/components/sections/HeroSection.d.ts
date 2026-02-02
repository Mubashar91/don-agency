interface HeroSectionProps {
    translations: {
        hero: {
            title: string;
            subtitle: string;
            cta: string;
            stats: Array<{
                value: string;
                label: string;
            }>;
        };
    };
}
export default function HeroSection({ translations }: HeroSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeroSection.d.ts.map