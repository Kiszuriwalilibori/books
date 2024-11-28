import { SearchInputs } from "pages/styled";
import SearchField from "./SearchField";

import uuid from "react-uuid";
import { useFormik } from "formik";
import { createFilter, createTotalNumberURL, createBooksURL, validateInput } from "../utils";
import { SearchFormValues, SearchPageField, searchPageFieldPlaceholderMap, initialValues, initialValidationState } from "../utils/model";
import React from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { shallowEqual } from "react-redux";

interface Props {
    handleSetFilter: Function;
    handleSetBooksURL: Function;
    handleSetCountURL: Function;
    handleSetIsFormEmpty: Function;
    handleSetIsValidated: Function;
}

const SearchSection = (props: Props) => {
    const { handleSetFilter, handleSetBooksURL, handleSetCountURL, handleSetIsFormEmpty, handleSetIsValidated } = props;

    const [validated, setValidated] = React.useState(initialValidationState);
    const isLoading = useTypedSelector(state => state.loading.isLoading, shallowEqual);

    const { values, handleSubmit, getFieldProps, handleReset } = useFormik({
        initialValues,
        onSubmit(formValues: SearchFormValues) {
            const isValidated = validateInput(formValues);
            setValidated(isValidated);
            handleSetIsValidated(isValidated);
            if (isValidated.isValid) {
                console.log("is validated");

                handleSetBooksURL(createBooksURL(formValues));
                handleSetCountURL(createTotalNumberURL(formValues));
                handleSetFilter(createFilter(formValues as Partial<SearchFormValues>));
            }
        },
    });
    React.useEffect(() => {
        handleSetIsFormEmpty(Object.values(values).join("") === "");
    }, [values]);

    return (
        <SearchInputs>
            {Object.values(SearchPageField).map((fieldName: SearchPageField) => (
                <SearchField key={uuid()} isDisabled={isLoading} label={searchPageFieldPlaceholderMap[fieldName]} {...getFieldProps(fieldName)} />
            ))}
        </SearchInputs>
    );
};
