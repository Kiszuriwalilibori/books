import pickBy from "lodash/pickBy";
import isEmpty from "lodash/isEmpty";
import { initialValidationState, SearchFormValues, ValidationState } from "./model";
import { searchFields } from ".";
import { SearchableFields } from "types";

interface ValidationResult {
    isValid: boolean;
    message: string;
}

/**
 * validates input fields content.
 * @param fields -  object with keys and valuesthat further forms part of that link
 * @returns object with validation result and error message
 */
export const validateInput = (fields: SearchFormValues): ValidationResult => {
    let validationResult: ValidationResult = { ...initialValidationState };
    const invalidFields: string[] = [];

    const isValidField = (value: string): boolean => {
        return value.length >= 2 && /\d|[A-Za-z]/.test(value);
    };

    const nonEmptyFields: { [index in SearchableFields as string]: string } = pickBy(fields);

    if (!isEmpty(nonEmptyFields)) {
        for (const key in nonEmptyFields) {
            if (!isValidField(nonEmptyFields[key])) {
                const label = searchFields.getPlaceholder(key);
                invalidFields.push(label);
            }
        }
    }

    if (invalidFields.length > 0) {
        validationResult = {
            isValid: false,
            message: `Nieprawidłowe wartości w polach: ${invalidFields.join(", ")}`,
        };
    }

    return validationResult;
};
