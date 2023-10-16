import pickBy from "lodash/pickBy";
import isEmpty from "lodash/isEmpty";
import { initialValidationState, SearchFormValues } from "./model";
import { searchFields } from ".";
import { SearchableFields } from "types";

interface resultType {
    isValid: boolean;
    message: string;
}
/**
 * validates input fields content.
 * @param fields -  object with keys and valuesthat further forms part of that link
 * @returns object with validation result and error message
 */
const validateInput = (fields: SearchFormValues) => {
    let validationResult: resultType = initialValidationState;
    let message: string[] = [];

    const test = (item: string): boolean => {
        return item.length >= 2 && /\d|[A-z]/.test(item);
    };

    const searchKeys: { [index in SearchableFields as string]: string } = pickBy(fields);

    if (!isEmpty(searchKeys)) {
        for (let key in searchKeys) {
            if (test(searchKeys[key]) === false) {
                const label = searchFields.getPlaceholder(key);
                validationResult = { isValid: false, message: "Nieprawidłowe dane w polu " + label };
                message.push(label);
            }
        }
    }

    if (validationResult.isValid === false) validationResult.message = "Nieprawidłowe wartości w polach: " + message.join(", ");

    return validationResult;
};

export default validateInput;
