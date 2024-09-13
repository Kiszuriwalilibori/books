export enum SearchPageField {
    KEYWORD = "keyword",
    AUTHORS = "authors",
    TITLE = "title",
    SUBJECT = "subject",
}

export const searchPageFieldPlaceholderMap: {
    [key in SearchPageField]: string;
} = {
    [SearchPageField.AUTHORS]: "Autor",
    [SearchPageField.TITLE]: "Tytuł",
    [SearchPageField.SUBJECT]: "Etykiety",
    [SearchPageField.KEYWORD]: "Słowo kluczowe",
};

export type SearchFormValues = { [key in SearchPageField]: string };

export interface ValidationState {
    message: string;
    isValid: boolean;
}

export const initialValues: SearchFormValues = {
    [SearchPageField.AUTHORS]: "",
    [SearchPageField.TITLE]: "",
    [SearchPageField.SUBJECT]: "",
    [SearchPageField.KEYWORD]: "",
};

export const initialValidationState: ValidationState = { isValid: true, message: "" };
