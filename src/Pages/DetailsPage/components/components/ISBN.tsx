import uuid from "react-uuid";

interface ISBNNumber {
    type: string;
    identifier: string;
}
interface Props {
    label: string;
    ISBNData: ISBNNumber[];
}

const insertComa = (index: number, arry: { type: string; identifier: string }[]) => {
    return index === arry.length - 1 ? "\xa0" : ",\xa0";
};
const insertColon = (index: number, arry: string[]) => {
    return index === arry.length - 1 ? "" : ":\xa0";
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
    const isbnId = uuid();

    return (
        <>
            <p id={isbnId} className="details__header details__strong">
                {label + ":\xa0"}
            </p>
            <ul aria-labelledby={isbnId} className="details__list list">
                {stringifyISBN(ISBNData)}
            </ul>
            <br />
        </>
    );
};
export default ISBN;
