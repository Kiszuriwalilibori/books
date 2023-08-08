import pickBy from "lodash/pickBy";
import isEmpty from "lodash/isEmpty";
import { initialValidationState, SearchFormValues } from "./model";
import { searchFields } from "js/utils";
import { SearchableFields } from "types";

interface resultType {
    valid: boolean;
    message: string;
}
/**
 * validates input fields content.
 * @param fields -  object with keys and valuesthat further forms part of that link
 * @returns object with validation result and error message
 */
const validateInput = (fields: SearchFormValues) => {
    let result: resultType = initialValidationState;
    let message: string[] = [];

    const test = (item: string): boolean => {
        return item.length >= 2 && /\d|[A-z]/.test(item);
    };

    const filteredState: { [index in SearchableFields as string]: string } = pickBy(fields);

    if (!isEmpty(filteredState)) {
        for (let stateItemKey in filteredState) {
            if (test(filteredState[stateItemKey]) === false) {
                const label = searchFields.getPlaceholder(stateItemKey);
                result = { valid: false, message: "Nieprawidłowe dane w polu " + label };
                message.push(label);
            }
        }
    }

    if (result.valid === false) result.message = "Nieprawidłowe wartości w polach: " + message.join(", ");

    return result;
};

export default validateInput;
