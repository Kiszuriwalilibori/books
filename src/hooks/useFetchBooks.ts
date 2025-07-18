import React from "react";

import { useNavigate } from "react-router-dom";

import useMessage from "./useMessage";

import { useDispatchAction } from "hooks";
import { BookRecord, FlatBookRecord } from "types";
import { formatFetchedDataAsBooks, getValue, isErrorCode } from "utils";
import Paths from "routing";

interface FetchSummary {
    isError: boolean;
    data: FlatBookRecord[];
    errorMessage: string;
}

interface APIErrorResponse {
    message?: string;
    code?: number;
    error?: {
        message?: string;
        code?: number;
    };
    [key: string]: unknown;
}

const STEP = 40;
const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };
const INITIAL_FOUND_BOOKS: BookRecord[] = [];

/**
 * Custom hook for fetching books from an API and handling related UI state.
 *
 * - Initiates API requests to fetch books in batches.
 * - Handles loading state, error reporting, and storing books in Redux.
 * - Shows warning messages on empty results instead of navigating to error page.
 *
 * @returns {Object} An object exposing fetchBooksFromAPI(path, controller) to trigger the fetch process.
 */
export const useFetchBooks = () => {
    const navigate = useNavigate();
    const showMessage = useMessage();
    const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();

    const extractSearchCriteriaFromURL = (url: string): string => {
        try {
            // Extract the query part from the URL
            const urlObj = new URL(url);
            const queryParam = urlObj.searchParams.get("q");

            if (!queryParam) return "brak kryteriów wyszukiwania";

            // Parse the search criteria from the query parameter
            const criteria = queryParam
                .split("+")
                .map(criterion => {
                    if (criterion.includes(":")) {
                        const [key, value] = criterion.split(":", 2);
                        const fieldMap: { [key: string]: string } = {
                            inauthor: "Autor",
                            intitle: "Tytuł",
                            subject: "Etykiety",
                            keyword: "Słowo kluczowe",
                        };
                        return `${fieldMap[key] || key}: "${decodeURIComponent(value)}"`;
                    }
                    return `"${decodeURIComponent(criterion)}"`;
                })
                .join(", ");

            return criteria || "brak kryteriów wyszukiwania";
        } catch (error) {
            return "nieprawidłowe kryteria wyszukiwania";
        }
    };

    const fetchBooksFromAPI = (path: string, controller: AbortController): void => {
        let startIndex = 0;
        let foundBooks = INITIAL_FOUND_BOOKS;
        let fetchSummary = INITIAL_FETCH_SUMMARY;
        setIsLoading(true);

        const handleError = (response: APIErrorResponse): void => {
            const message = getValue(response, "message");
            fetchSummary.isError = true;
            fetchSummary.errorMessage = message || "unknown error";
            showError(fetchSummary);
            setIsLoading(false);
            navigate(Paths.error);
        };
        const handleNotFound = (): void => {
            setIsLoading(false);
            const criteriaText = extractSearchCriteriaFromURL(path);
            showMessage.warning(`Nie znaleziono książek dla: ${criteriaText}`);
        };

        const handleSuccess = (foundBooks: BookRecord[]): void => {
            controller.abort();
            fetchSummary.data = formatFetchedDataAsBooks(foundBooks);
            storeBooks(fetchSummary.data);
            setIsFromNetwork(true);
            setIsLoading(false);
            showMessage.success(`Poprawnie pobrano dane, łącznie pobrano ${fetchSummary.data.length.toString()} książek`);
            navigate(Paths.books);
        };

        const increaseCounter = (): void => {
            startIndex += STEP;
        };

        const addBooks = (moreBooks: BookRecord[]): void => {
            foundBooks = foundBooks.concat(moreBooks);
        };

        async function recursiveFetch(): Promise<void> {
            const fullPath = path + startIndex.toString();
            const fetchResult = await fetch(fullPath, { signal: controller.signal }).catch(error => {
                handleError(error);
            });
            if (fetchResult) {
                const response = await fetchResult.json();
                const code = getValue(response, "code");
                if (isErrorCode(code)) {
                    handleError(response);
                    return;
                }

                if (response.items) {
                    increaseCounter();
                    addBooks(response.items);
                    recursiveFetch();
                } else {
                    if (response.error) {
                        handleError(response);
                    }

                    if (!response.eror && foundBooks.length === 0) {
                        handleNotFound();
                    } else {
                        handleSuccess(foundBooks);
                    }
                }
            }
        }
        recursiveFetch();
    };

    return React.useMemo(() => fetchBooksFromAPI, []); // musi być zmemoizowane, jeżeli ma się pojawić jako dependencja
};

export default useFetchBooks;
