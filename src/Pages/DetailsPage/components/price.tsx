interface PriceType {
    amount: number;
    currencyCode: string;
}

interface Props {
    label: string;
    price: PriceType;
}

const stringifyPrice = (price: PriceType) => {
    return [...Object.values(price).map((item, index, array) => (index - 1 === array.length ? item : item + "\xa0"))];
};

export const Price = (props: Props) => {
    const { price, label } = props;

    return (
        <>
            <h3 className="details__header details__strong">{label + ":\xa0"}</h3>
            <p className="details__item list__item"> {stringifyPrice(price)}</p>
            <br />
        </>
    );
};

export default Price;
