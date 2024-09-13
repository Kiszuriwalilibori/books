import { useNavigate } from "react-router-dom";

import Paths from "routing";

import { useMessage, useDispatchAction } from "hooks";
import { BookRecord, FilteringCondition } from "types";
import { formatFetchedDataAsBooks, getValue } from "js/utils";
import { MAX_RESULTS } from "config";
import { filtrate } from "../js/BooksManager/tableHelpers/filtrate";

const createEndpoints = (path: string, totalNumber: number) => {
    const numberOfPages = Math.ceil(totalNumber / MAX_RESULTS);
    let index = 0;
    let arrayOfEndpoints = [];
    do {
        arrayOfEndpoints.push(path + index * MAX_RESULTS);
        index++;
    } while (index < numberOfPages);
    return arrayOfEndpoints;
};

export const useGetBooks = () => {
    const showMessage = useMessage();
    const navigate = useNavigate();
    const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();

    async function getBooks(path: string, URL: string, controller: AbortController, filter: FilteringCondition | undefined = undefined) {
        const handleNotFound = () => {
            setIsLoading(false);
            showError({ isError: true, errorMessage: "Nie znaleziono książek spełniających podane kryteria" });
            navigate(Paths.error);
        };
        const handleError = (response: any) => {
            setIsLoading(false);
            controller?.abort();
            showError({ isError: true, errorMessage: getValue(response, "message") || "Unknown error" });
            navigate(Paths.error);
        };

        const handleSuccess = (foundBooks: BookRecord[]) => {
            setIsLoading(false);
            controller?.abort();
            storeBooks(filtrate(formatFetchedDataAsBooks(foundBooks), filter));
            setIsFromNetwork(true);
            showMessage.success(`Poprawnie pobrano dane, łącznie pobrano ${foundBooks.length.toString()} książek`);
            navigate(Paths.books);
        };
        /** this function really fetches books */
        async function fetchBooks(arrayOfEndpoints: string[], controller: AbortController) {
            const promises = arrayOfEndpoints.map(endpoint => fetch(endpoint, { signal: controller.signal }).then(res => res.json()));
            const books: BookRecord[] = [];
            const errors: string[] = [];

            Promise.allSettled(promises).then(results => {
                if (results && results.length) {
                    results.forEach(result => {
                        if (result.status === "fulfilled") {
                            if (getValue(result, "error")) {
                                errors.push(getValue(result, "message") || "Unknown error");
                            } else {
                                const items = getValue(result, "items");
                                items && items.length && books.push(...items);
                            }
                        } else {
                            errors.push(getValue(result, "message") || "Unknown error");
                        }
                    });

                    errors.length && showMessage.error("Podczas pobierania conajmniej jednej książki wystąpił błąd:" + errors[0] + " Łącznie błędów: " + errors.length);
                    if (books && books.length) {
                        handleSuccess(books);
                    } else {
                        handleNotFound();
                    }
                }
            });
        }
        // here flow begins
        setIsLoading(true);
        const fetchResult = await fetch(path, { signal: controller.signal }).catch(error => {
            handleError(error);
        });
        if (fetchResult) {
            const response = await fetchResult.json();
            const totalNumberOfBooks = getValue(response, "totalItems");
            if (totalNumberOfBooks) {
                const endpoints = createEndpoints(URL, totalNumberOfBooks);
                endpoints && endpoints.length && fetchBooks(endpoints, controller);
                return;
            } else {
                handleNotFound();
            }
        }
    }
    return getBooks;
};

export default useGetBooks;
