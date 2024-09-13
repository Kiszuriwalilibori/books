import * as React from "react";
import uuid from "react-uuid";

import { shallowEqual, useSelector } from "react-redux";
import { useFormik } from "formik";

import { FavoriteButton, SearchField } from "./components";
import { createFilter, createTotalNumberURL, createURL, validateInput } from "./utils";
import { Alert, Button, LogoFactory } from "components";
import { useEnhancedState, useGetBooks, useTypedSelector } from "hooks";
import { BookForm, PageContainer, SearchButtons, SearchInputs } from "pages/styled";
import { SearchFormValues, SearchPageField, searchPageFieldPlaceholderMap, initialValues, initialValidationState } from "./utils/model";
import { isOnlineSelector } from "js/redux/reducers/onlineReducer";

import { BooksState } from "types/index";

export const SearchPage = () => {
    const formID = uuid();

    const [validated, setValidated] = React.useState(initialValidationState);

    const [BooksURL, setBooksURL] = React.useState("");
    const [totalBooksNumberURL, setTotalBooksNumberURL] = React.useState("");
    const [filter, setFilter] = useEnhancedState<undefined | BooksState["filter"]>(undefined);

    const isLoading = useTypedSelector(state => state.loading.isLoading, shallowEqual);
    const isOnline = useSelector(isOnlineSelector);
    const getBooks = useGetBooks();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const { values, handleSubmit, getFieldProps, handleReset } = useFormik({
        initialValues,
        onSubmit(formValues: SearchFormValues) {
            const isValidated = validateInput(formValues);
            setValidated(isValidated);
            if (isValidated.isValid) {
                setBooksURL(createURL(formValues));
                setTotalBooksNumberURL(createTotalNumberURL(formValues));
                setFilter(createFilter(formValues as Partial<SearchFormValues>));
            }
        },
    });

    const isFormEmpty = React.useCallback(() => {
        return Object.values(values).join("") === "";
    }, [values]);

    const clearFormAndValidation: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        setValidated(initialValidationState);
        handleReset(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        let controller = new AbortController();

        if (totalBooksNumberURL && BooksURL) {
            getBooks(totalBooksNumberURL, BooksURL, controller, filter);
        }
        return () => controller?.abort();
    }, [totalBooksNumberURL, BooksURL, filter]);

    return (
        <>
            <PageContainer maxWidth={false} disableGutters={true} sx={{ alignItems: "unset" }}>
                <LogoFactory />
                <Alert shouldRender={!validated.isValid} alertMessage={validated.message} />
                <BookForm id={formID}>
                    <SearchInputs>
                        {Object.values(SearchPageField).map((fieldName: SearchPageField) => (
                            <SearchField key={uuid()} isDisabled={isLoading} label={searchPageFieldPlaceholderMap[fieldName]} {...getFieldProps(fieldName)} />
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
            </PageContainer>
        </>
    );
};

export default SearchPage;
