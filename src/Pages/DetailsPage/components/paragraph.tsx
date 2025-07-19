import { polishTranslationMap } from "./utils";

type Content = string | number | boolean;

interface Props {
    textContent: Content;
    label: string;
}

const Paragraph = ({ textContent, label }: Props) => {
    const translatedValue = polishTranslationMap.get(textContent) ?? String(textContent);

    return (
        <p className="details__item">
            <strong className="details__strong">{label + ": "}</strong>
            {translatedValue}
        </p>
    );
};

export default Paragraph;
