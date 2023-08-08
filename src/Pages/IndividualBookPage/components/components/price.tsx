interface Props {
  label: string;
  price: { amount: number; currencyCode: string };
}
export const Price = (props: Props) => {
  const { price, label } = props;

  return (
    <>
      <h3 className="details__header details__strong">{label + ":\xa0"}</h3>
      <p className="details__item list__item"> {[...Object.values(price).map((item, index, array) => (index - 1 === array.length ? item : item + "\xa0"))]}</p>
      <br />
    </>
  );
};

export default Price;
