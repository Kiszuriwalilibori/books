import React from "react";

import { useNavigate } from "react-router-dom";

import useMessage from "./useMessage";

import { useDispatchAction } from "hooks";
import { BookRecord, FlatBookRecord } from "types";
import { formatFetchedDataAsBooks, getValue, isErrorCode } from "js/utils";
import Paths from "routing";

interface FetchSummary {
    isError: boolean;
    data: FlatBookRecord[];
    errorMessage: string;
}

const STEP = 40;
const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };
const INITIAL_FOUND_BOOKS: BookRecord[] = [];

export const useFetchBooks = () => {
    const navigate = useNavigate();
    const showMessage = useMessage();
    const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();

    const fetchBooksFromAPI = (path: string, controller: AbortController): void => {
        let startIndex = 0;
        let foundBooks = INITIAL_FOUND_BOOKS;
        let fetchSummary = INITIAL_FETCH_SUMMARY;
        setIsLoading(true);

        const handleError = (response: any): void => {
            const message = getValue(response, "message");
            fetchSummary.isError = true;
            fetchSummary.errorMessage = message || "unknown error";
            showError(fetchSummary);
            setIsLoading(false);
            navigate(Paths.error);
        };
        const handleNotFound = (): void => {
            fetchSummary.isError = true;
            fetchSummary.errorMessage = "Nie znaleziono książek spełniających podane kryteria";
            showError(fetchSummary);
            setIsLoading(false);
            navigate(Paths.error);
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

        const addBooks = (moreBooks: any): void => {
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
