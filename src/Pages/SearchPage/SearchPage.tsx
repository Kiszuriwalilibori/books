import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { SearchForm } from "./components/SearchForm";
import { createURL } from "./utils";
import { LogoFactory } from "components";

import { PageContainer } from "pages/styled";
import { SearchFormValues, ValidationState } from "./utils/model";
import { isOnlineSelector } from "store/reducers/onlineReducer";
import { isLoadingSelector } from "store/reducers/loadingReducer";
import { useFetchBooks } from "hooks";

export const SearchPage = () => {
    const [URL, setURL] = useState("");

    const isLoading = useSelector(isLoadingSelector);
    const isOnline = useSelector(isOnlineSelector);
    const fetchBooksFromAPI = useFetchBooks();

    const handleFormSubmit = useCallback((formValues: SearchFormValues) => {
        setURL(createURL(formValues));
    }, []);

    const handleValidationChange = useCallback((validation: ValidationState) => {}, []);

    useEffect(() => {
        const controller = new AbortController();
        if (URL) {
            console.log(URL); // for testing purposes, remove before production
            fetchBooksFromAPI(URL, controller);
        }
        return () => controller.abort();
    }, [URL, fetchBooksFromAPI]);

    return (
        <PageContainer maxWidth={false} disableGutters sx={{ alignItems: "unset" }}>
            <LogoFactory />
            <SearchForm isLoading={isLoading} isOnline={isOnline} onSubmit={handleFormSubmit} onValidationChange={handleValidationChange} />
        </PageContainer>
    );
};

export default SearchPage;
