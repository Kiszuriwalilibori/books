import { getSummary } from "js/utils";

interface Props {
    description: string;
}

export const Description = (props: Props) => {
    const { description } = props;

    return (
        <section className="details__description">
            <h2 className="details__strong">Opis</h2>
            <details className="details__item">
                <summary>{getSummary(description)}</summary>
                {description.replace("<p>", "").replace("</p>", "")}
            </details>
        </section>
    );
};

export default Description;
