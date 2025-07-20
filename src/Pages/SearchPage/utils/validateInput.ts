import pickBy from "lodash/pickBy";
import isEmpty from "lodash/isEmpty";
import i18n from "i18next";
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
        errors.push(i18n.t("validation.errorMessages.minLength"));
    }

    if (!/[A-Za-z0-9]/.test(value)) {
        errors.push(i18n.t("validation.errorMessages.alphanumeric"));
    }

    if (value.trim() !== value) {
        errors.push(i18n.t("validation.errorMessages.noSpaces"));
    }

    if (/^\s*$/.test(value) && value.length > 0) {
        errors.push(i18n.t("validation.errorMessages.onlyWhitespace"));
    }

    // Check for potentially problematic characters
    if (/[<>{}[\]\\]/.test(value)) {
        errors.push(i18n.t("validation.errorMessages.specialChars"));
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

    let message = i18n.t("validation.title") + ":\n";

    fieldErrors.forEach((fieldError, index) => {
        const fieldLabel = getFieldLabel(fieldError.field);
        message += `\n${index + 1}. ${i18n.t("validation.field")} "${fieldLabel}"`;

        if (fieldError.value.length > 20) {
            message += ` (${i18n.t("validation.value")}: "${fieldError.value.substring(0, 20)}...")`;
        } else {
            message += ` (${i18n.t("validation.value")}: "${fieldError.value}")`;
        }

        fieldError.errors.forEach((error /*, errorIndex*/) => {
            message += `\n   • ${error}`;
        });
    });

    message += "\n\n" + i18n.t("validation.requirements") + ":";
    message += "\n• " + i18n.t("validation.ruleDescriptions.minLength");
    message += "\n• " + i18n.t("validation.ruleDescriptions.alphanumeric");
    message += "\n• " + i18n.t("validation.ruleDescriptions.noSpaces");

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
        const simpleMessage = i18n.t("validation.invalidFields", {
            fields: fieldErrors.map(fe => getFieldLabel(fe.field)).join(", "),
        });
        const detailedMessage = createDetailedMessage(fieldErrors);

        validationResult = {
            isValid: false,
            message: simpleMessage,
            fieldErrors: fieldErrors,
        };

        // Log detailed message to console for debugging
        console.group("🔍 " + i18n.t("validation.errorDetails") + ":");
        console.log(detailedMessage);
        console.table(
            fieldErrors.map(fe => ({
                [i18n.t("validation.field")]: getFieldLabel(fe.field),
                [i18n.t("validation.value")]: fe.value,
                [i18n.t("validation.errors")]: fe.errors.join("; "),
            }))
        );
        console.groupEnd();
    }

    return validationResult;
};
