import { useNavigate } from "react-router-dom";
import useDispatchAction from "./useDispatchAction";
import useMessage from "./useMessage";
import { BookRecord, FetchSummary } from "types/types";
import Paths from "routing/Paths";
import { formatFetchedDataAsBooks, getValue } from "js/utils";
import { MAX_RESULTS } from "config";

const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };

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
    const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();
    let fetchSummary = INITIAL_FETCH_SUMMARY;

    const navigate = useNavigate();

    async function getBooks(path: string, URL: string, controller: AbortController) {
        const handleNotFound = () => {
            setIsLoading(false);
            fetchSummary.isError = true;
            fetchSummary.errorMessage = "Nie znaleziono książek spełniających podane kryteria";
            showError(fetchSummary);
            navigate(Paths.error);
        };
        const handleError = (response: any) => {
            setIsLoading(false);
            controller?.abort();
            const message = getValue(response, "message") || "Unknown error";
            fetchSummary.isError = true;
            fetchSummary.errorMessage = message;
            showError(fetchSummary);
            navigate(Paths.error);
        };

        const handleSuccess = (foundBooks: BookRecord[]) => {
            setIsLoading(false);
            controller?.abort();
            storeBooks(formatFetchedDataAsBooks(foundBooks));
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
