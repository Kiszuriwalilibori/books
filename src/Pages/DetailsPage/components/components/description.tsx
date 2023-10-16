import { useMemo } from "react";
import { createSummary } from "./utils";

interface Props {
    description: string;
}

export const Description = (props: Props) => {
    const { description } = props;
    const bookSummary = useMemo(() => createSummary(description), [description]);
    return (
        <section className="details__description">
            <h2 className="details__strong">Opis</h2>
            <details className="details__item">
                <summary>{bookSummary}</summary>
                {description}
            </details>
        </section>
    );
};

export default Description;
