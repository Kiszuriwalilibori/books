import pickBy from "lodash/pickBy";
import isEmpty from "lodash/isEmpty";
import { initialValidationState, SearchFormValues, FieldValidationError, SearchPageField, searchPageFieldPlaceholderMap } from "./model";
import { SearchableFields } from "types";

interface ValidationResult {
    isValid: boolean;
    message: string;
    fieldErrors?: FieldValidationError[];
}

/**
 * Validates individual field value and returns detailed error information
 * @param value - field value to validate
 * @returns array of specific validation errors
 */
const validateFieldValue = (value: string): string[] => {
    const errors: string[] = [];

    if (value.length === 0) {
        return errors; // Empty fields are allowed, skip validation
    }

    if (value.length === 1) {
        errors.push("musi zawierać co najmniej 2 znaki");
    }

    if (!/[A-Za-z0-9]/.test(value)) {
        errors.push("musi zawierać co najmniej jeden znak alfanumeryczny (litera lub cyfra)");
    }

    if (value.trim() !== value) {
        errors.push("nie może zaczynać się ani kończyć spacją");
    }

    if (/^\s*$/.test(value) && value.length > 0) {
        errors.push("nie może składać się tylko z białych znaków");
    }

    // Check for potentially problematic characters
    if (/[<>{}[\]\\]/.test(value)) {
        errors.push("zawiera niedozwolone znaki specjalne");
    }

    return errors;
};

/**
 * Get field label for display purposes
 * @param fieldName - field name from SearchPageField
 * @returns human-readable field label
 */
const getFieldLabel = (fieldName: string): string => {
    return searchPageFieldPlaceholderMap[fieldName as SearchPageField] || fieldName;
};

/**
 * Creates detailed validation message based on field errors
 * @param fieldErrors - array of field validation errors
 * @returns formatted error message
 */
const createDetailedMessage = (fieldErrors: FieldValidationError[]): string => {
    if (fieldErrors.length === 0) return "";

    let message = "Błędy walidacji:\n";

    fieldErrors.forEach((fieldError, index) => {
        const fieldLabel = getFieldLabel(fieldError.field);
        message += `\n${index + 1}. Pole "${fieldLabel}"`;

        if (fieldError.value.length > 20) {
            message += ` (wartość: "${fieldError.value.substring(0, 20)}...")`;
        } else {
            message += ` (wartość: "${fieldError.value}")`;
        }

        fieldError.errors.forEach((error /*, errorIndex*/) => {
            message += `\n   • ${error}`;
        });
    });

    message += "\n\nWymagania dla wszystkich pól:";
    message += "\n• Minimum 2 znaki";
    message += "\n• Co najmniej jedna litera lub cyfra";
    message += "\n• Bez spacji na początku i końcu";

    return message;
};

/**
 * validates input fields content with detailed error reporting.
 * @param fields -  object with keys and values that further forms part of that link
 * @returns object with validation result, error message, and detailed field errors
 */
export const validateInput = (fields: SearchFormValues): ValidationResult => {
    let validationResult: ValidationResult = { ...initialValidationState };
    const fieldErrors: FieldValidationError[] = [];

    const nonEmptyFields: { [index in SearchableFields as string]: string } = pickBy(fields);

    if (!isEmpty(nonEmptyFields)) {
        for (const key in nonEmptyFields) {
            const fieldValue = nonEmptyFields[key];
            const errors = validateFieldValue(fieldValue);

            if (errors.length > 0) {
                fieldErrors.push({
                    field: key,
                    value: fieldValue,
                    errors: errors,
                });
            }
        }
    }

    if (fieldErrors.length > 0) {
        const simpleMessage = `Nieprawidłowe wartości w polach: ${fieldErrors.map(fe => getFieldLabel(fe.field)).join(", ")}`;
        const detailedMessage = createDetailedMessage(fieldErrors);

        validationResult = {
            isValid: false,
            message: simpleMessage,
            fieldErrors: fieldErrors,
        };

        // Log detailed message to console for debugging
        console.group("🔍 Szczegóły błędów walidacji:");
        console.log(detailedMessage);
        console.table(
            fieldErrors.map(fe => ({
                Pole: getFieldLabel(fe.field),
                Wartość: fe.value,
                Błędy: fe.errors.join("; "),
            }))
        );
        console.groupEnd();
    }

    return validationResult;
};
