import { useCallback } from "react";
import { useSelector } from "react-redux";

import { SearchForm } from "./components/SearchForm";
import { createURL } from "./utils";
import { LogoFactory } from "components";

import { PageContainer } from "pages/styled";
import { SearchFormValues, ValidationState } from "./utils/model";
import { isOnlineSelector, isLoadingSelector } from "store/selectors";
import { useFetchBooks } from "hooks";

export const SearchPage = () => {
    const isLoading = useSelector(isLoadingSelector);
    const isOnline = useSelector(isOnlineSelector);
    const fetchBooksFromAPI = useFetchBooks();

    const handleFormSubmit = useCallback(
        (formValues: SearchFormValues) => {
            const url = createURL(formValues);
            fetchBooksFromAPI(url);
        },
        [fetchBooksFromAPI]
    );

    const handleValidationChange = useCallback((validation: ValidationState) => {}, []);

    return (
        <PageContainer maxWidth={false} disableGutters sx={{ alignItems: "unset" }}>
            <LogoFactory />
            <SearchForm isLoading={isLoading} isOnline={isOnline} onSubmit={handleFormSubmit} onValidationChange={handleValidationChange} />
        </PageContainer>
    );
};

export default SearchPage;
