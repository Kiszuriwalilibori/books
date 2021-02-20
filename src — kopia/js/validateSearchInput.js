import { pickBy, isEmpty } from "lodash";
export const validateSearchInput = obj => {
  var result = true;

  const test = item => {
    return item.length >= 2 && /\d|[A-z]/.test(item);
  };

  const filteredState = pickBy(obj);

  if (!isEmpty(filteredState)) {
    for (let stateItemKey in filteredState) {
      if (result === true) {
        result = test(filteredState[stateItemKey])
          ? { valid: true, message: "" }
          : {
              valid: false,
              message: "Nieprawidłowe dane w polu " + stateItemKey,
            };
      }
    }
  }
  return result;
};
