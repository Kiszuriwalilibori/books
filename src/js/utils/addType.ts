type NumericalString = string;
type GeneralString = string;

const addType = (element: string, x: string) => {
  if (x === "publishedDate") {
    return element as NumericalString;
  } else {
    return element as GeneralString;
  }
};

export default addType;
