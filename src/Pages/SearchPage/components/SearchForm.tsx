import React, { useCallback } from "react";
import { useFormik } from "formik";
import uuid from "react-uuid";

import { Button, ValidationAlert } from "components";
import { BookForm, SearchButtons, SearchInputs } from "pages/styled";
import { SearchField, FavoriteButton } from "./";
import { SearchFormValues, SearchPageField, searchPageFieldPlaceholderMap, initialValues, initialValidationState, ValidationState } from "../utils/model";
import { validateInput } from "../utils";

interface SearchFormProps {
    isLoading: boolean;
    isOnline: boolean;
    onSubmit: (values: SearchFormValues) => void;
    onValidationChange: (validation: ValidationState) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ isLoading, isOnline, onSubmit, onValidationChange }) => {
    const formID = uuid();
    const [validated, setValidated] = React.useState(initialValidationState);

    const handleCloseValidationAlert = () => {
        setValidated(initialValidationState);
        onValidationChange(initialValidationState);
    };

    const { values, handleSubmit, getFieldProps, handleReset } = useFormik({
        initialValues,
        onSubmit: (formValues: SearchFormValues) => {
            const validationResult = validateInput(formValues);
            setValidated(validationResult);
            onValidationChange(validationResult);

            if (validationResult.isValid) {
                onSubmit(formValues);
            }
        },
    });

    const isFormEmpty = useCallback(() => {
        return Object.values(values).join("") === "";
    }, [values]);

    const clearFormAndValidation = useCallback(() => {
        setValidated(initialValidationState);
        onValidationChange(initialValidationState);
        handleReset(null);
    }, [handleReset, onValidationChange]);

    return (
        <>
            <ValidationAlert shouldRender={!validated.isValid} alertMessage={validated.message} fieldErrors={validated.fieldErrors} onClose={handleCloseValidationAlert} />
            <BookForm id={formID}>
                <SearchInputs>
                    {Object.values(SearchPageField).map((fieldName: SearchPageField) => (
                        <SearchField key={fieldName} isDisabled={isLoading} label={searchPageFieldPlaceholderMap[fieldName]} fieldErrors={validated.fieldErrors} {...getFieldProps(fieldName)} />
                    ))}
                </SearchInputs>
                <SearchButtons>
                    <Button form={formID} disabled={isLoading || isFormEmpty() || !isOnline} onClick={handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>} className="button--ok" type="submit">
                        Szukaj
                    </Button>
                    <Button disabled={isLoading || isFormEmpty()} onClick={clearFormAndValidation} className="button--problem" type="reset">
                        Wyczyść
                    </Button>
                    <FavoriteButton />
                </SearchButtons>
            </BookForm>
        </>
    );
};
