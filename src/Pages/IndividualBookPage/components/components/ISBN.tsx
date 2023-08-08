import uuid from "react-uuid";

interface Props {
    label: string;
    isbnDataArray: {
        type: string;
        identifier: string;
    }[];
}

const coma = (x: number, arry: { type: string; identifier: string }[]) => {
    return x === arry.length - 1 ? "\xa0" : ",\xa0";
};
const colon = (x: number, arry: string[]) => {
    return x === arry.length - 1 ? "" : ":\xa0";
};

const ISBN = (props: Props) => {
    const { isbnDataArray, label } = props;

    return (
        <>
            <h3 className="details__header details__strong">{label + ":\xa0"}</h3>
            <ul className="details__list list">
                {isbnDataArray.map((item, i, ar) => (
                    <li className="details__item list__item" key={uuid()}>
                        {Object.values(item).map((item, index, array) => item + colon(index, array))}
                        {coma(i, ar)}
                    </li>
                ))}
            </ul>
            <br />
        </>
    );
};
export default ISBN;
