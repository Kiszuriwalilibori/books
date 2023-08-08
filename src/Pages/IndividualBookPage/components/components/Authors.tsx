import uuid from "react-uuid";

interface Props {
    label: string;
    authors: string[];
}

const Authors = (props: Props) => {
    return (
        <>
            <h3 className="details__header details__strong">{props.label + ":\xa0"}</h3>
            <ul className="details__list list">
                {props.authors.map((item, i, ar) => (
                    <li className="details__item list__item " key={uuid()}>
                        {typeof item === "object" && item !== null ? [...Object.values(item).map((item, index, array) => (index === array.length - 1 ? item + "\xa0" : item + ",\xa0"))] : i === ar.length - 1 ? item + "\xa0" : item + ",\xa0"}
                    </li>
                ))}
            </ul>
            <br />
        </>
    );
};
export default Authors;
