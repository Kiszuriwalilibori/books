import uuid from "react-uuid";

interface ISBNNumber {
    type: string;
    identifier: string;
}
interface Props {
    label: string;
    ISBNData: ISBNNumber[];
}

const insertComa = (x: number, arry: { type: string; identifier: string }[]) => {
    return x === arry.length - 1 ? "\xa0" : ",\xa0";
};
const insertColon = (x: number, arry: string[]) => {
    return x === arry.length - 1 ? "" : ":\xa0";
};

const stringifyISBN = (ISBNData: ISBNNumber[]) => {
    return ISBNData.map((item, i, ar) => (
        <li className="details__item list__item" key={uuid()}>
            {Object.values(item).map((item, index, array) => item + insertColon(index, array))}
            {insertComa(i, ar)}
        </li>
    ));
};

const ISBN = (props: Props) => {
    const { ISBNData, label } = props;

    return (
        <>
            <p id="ISBN" className="details__header details__strong">
                {label + ":\xa0"}
            </p>
            <ul aria-labelledby="ISBN" className="details__list list">
                {stringifyISBN(ISBNData)}
            </ul>
            <br />
        </>
    );
};
export default ISBN;
