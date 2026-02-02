interface FAQSectionProps {
    translations: {
        faq: {
            title: string;
            items: Array<{
                question: string;
                answer: string;
            }>;
        };
    };
}
export default function FAQSection({ translations }: FAQSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FAQSection.d.ts.map