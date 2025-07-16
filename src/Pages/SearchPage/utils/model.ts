export enum SearchPageField {
    KEYWORD = "keyword",
    AUTHORS = "authors",
    TITLE = "title",
    SUBJECT = "subject",
}

export const searchPageFieldPlaceholderMap: {
    readonly [key in SearchPageField]: string;
} = {
    [SearchPageField.AUTHORS]: "Autor",
    [SearchPageField.TITLE]: "Tytuł",
    [SearchPageField.SUBJECT]: "Etykiety",
    [SearchPageField.KEYWORD]: "Słowo kluczowe",
};

export type SearchFormValues = Readonly<{ [key in SearchPageField]: string }>;

export interface FieldValidationError {
    field: string;
    value: string;
    errors: string[];
}

export interface ValidationState {
    message: string;
    isValid: boolean;
    fieldErrors?: FieldValidationError[];
}

export const initialValues: SearchFormValues = {
    [SearchPageField.AUTHORS]: "",
    [SearchPageField.TITLE]: "",
    [SearchPageField.SUBJECT]: "",
    [SearchPageField.KEYWORD]: "",
};

export const initialValidationState: ValidationState = { isValid: true, message: "" } as const;

// src/Pages/SearchPage/utils/index.ts
