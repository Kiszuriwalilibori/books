const convertToPolish = (x: boolean | string) => {
  let result = "";
  switch (x) {
    case true:
      result = "Tak";
      break;
    case false:
      result = "Nie";
      break;
    case "BOOK":
      result = "Książka";
      break;
    case "MAGAZINE":
      result = "Magazyn";
      break;
    case "ALLOWED":
      result = "Tak";
      break;
    case "NOT_ALLOWED":
      result = "Nie";
      break;
    case "FOR_SALE":
      result = "Tak";
      break;
    case "NOT_FOR_SALE":
      result = "Nie";
      break;
    case "ALLOWED_FOR_ACCESSIBILITY":
      result = "Tak";
      break;
    default:
      result = "Nie";
  }

  return result;
};
export default convertToPolish;
