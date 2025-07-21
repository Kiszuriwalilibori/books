// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// import useMessage from "./useMessage";
// import { useDispatchAction } from "hooks";
// import { BookRecord, FlatBookRecord } from "types";
// import { formatFetchedDataAsBooks, getValue, isErrorCode } from "utils";
// import Paths from "routing";

// interface FetchSummary {
//     isError: boolean;
//     data: FlatBookRecord[];
//     errorMessage: string;
// }

// const STEP = 40;
// const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };
// const INITIAL_FOUND_BOOKS: BookRecord[] = [];

// export const useFetchBooks = () => {
//     const navigate = useNavigate();
//     const showMessage = useMessage();
//     const { t } = useTranslation();
//     const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();

//     const extractSearchCriteriaFromURL = (url: string): string => {
//         try {
//             const urlObj = new URL(url);
//             const queryParam = urlObj.searchParams.get("q");

//             if (!queryParam) return t("noSearchCriteria");

//             const criteria = queryParam
//                 .split("+")
//                 .map(criterion => {
//                     if (criterion.includes(":")) {
//                         const [key, value] = criterion.split(":", 2);
//                         const fieldMap: { [key: string]: string } = {
//                             inauthor: t("author"),
//                             intitle: t("title"),
//                             subject: t("labels"),
//                             keyword: t("keyword"),
//                         };
//                         return `${fieldMap[key] || key}: "${decodeURIComponent(value)}"`;
//                     }
//                     return `"${decodeURIComponent(criterion)}"`;
//                 })
//                 .join(", ");

//             return criteria || t("noSearchCriteria");
//         } catch (error) {
//             return t("invalidSearchCriteria");
//         }
//     };

//     const fetchBooksFromAPI = (path: string, controller: AbortController): void => {
//         let startIndex = 0;
//         let foundBooks = INITIAL_FOUND_BOOKS;
//         let fetchSummary = INITIAL_FETCH_SUMMARY;
//         setIsLoading(true);

//         const handleError = (error: unknown): void => {
//             console.error("Error details:", error);

//             let errorMessage = t("unknownError");
//             if (error instanceof Error) {
//                 errorMessage = error.message;

//                 if (errorMessage.includes("NetworkError") || errorMessage.includes("CORS")) {
//                     errorMessage = t("networkError");
//                 }
//             } else if (typeof error === "object" && error !== null) {
//                 errorMessage = JSON.stringify(error);
//             }

//             fetchSummary.isError = true;
//             fetchSummary.errorMessage = `${t("error")}: ${errorMessage}`;
//             showError(fetchSummary);
//             setIsLoading(false);
//             navigate(Paths.error);
//         };

//         const handleNotFound = (): void => {
//             setIsLoading(false);
//             const criteriaText = extractSearchCriteriaFromURL(path);
//             showMessage.warning(t("noBooksFound", { criteria: criteriaText }));
//         };

//         const handleSuccess = (foundBooks: BookRecord[]): void => {
//             controller.abort();

//             fetchSummary.data = formatFetchedDataAsBooks(foundBooks);
//             console.log(fetchSummary.data);
//             storeBooks(fetchSummary.data);
//             setIsFromNetwork(true);
//             setIsLoading(false);
//             showMessage.success(t("dataFetchedSuccessfully", { count: fetchSummary.data.length }));
//             navigate(Paths.books);
//         };

//         const increaseCounter = (): void => {
//             startIndex += STEP;
//         };

//         const addBooks = (moreBooks: BookRecord[]): void => {
//             foundBooks = foundBooks.concat(moreBooks);
//         };

//         async function recursiveFetch(): Promise<void> {
//             const fullPath = path + startIndex.toString();
//             try {
//                 const fetchResult = await fetch(fullPath, { signal: controller.signal });
//                 if (!fetchResult.ok) {
//                     throw new Error(`HTTP error! status: ${fetchResult.status}`);
//                 }
//                 const response = await fetchResult.json();
//                 const code = getValue(response, "code");
//                 if (isErrorCode(code)) {
//                     handleError(response);
//                     return;
//                 }

//                 if (response.items) {
//                     increaseCounter();
//                     addBooks(response.items);
//                     recursiveFetch();
//                 } else {
//                     if (response.error) {
//                         handleError(response);
//                     } else if (foundBooks.length === 0) {
//                         handleNotFound();
//                     } else {
//                         handleSuccess(foundBooks);
//                     }
//                 }
//             } catch (error) {
//                 handleError(error);
//             }
//         }

//         recursiveFetch();
//     };

//     return React.useMemo(() => fetchBooksFromAPI, []);
// };

// export default useFetchBooks;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const STEP = 40;
const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };
const INITIAL_FOUND_BOOKS: BookRecord[] = [];

export const useFetchBooks = () => {
    const navigate = useNavigate();
    const showMessage = useMessage();
    const { t } = useTranslation();
    const { setIsLoading, showError, storeBooks, setIsFromNetwork } = useDispatchAction();

    const filterBooksBySubject = (books: BookRecord[], searchSubject: string): BookRecord[] => {
        if (!searchSubject.trim()) return books;

        return books.filter(book => {
            if (!book.volumeInfo?.categories) return false;

            const categories = Array.isArray(book.volumeInfo.categories) ? book.volumeInfo.categories : [book.volumeInfo.categories];

            return categories.some(category => {
                const categoryString = typeof category === "string" ? category : String(category);
                return categoryString.toLowerCase().includes(searchSubject.toLowerCase());
            });
        });
    };

    const extractSubjectFromURL = (url: string): string => {
        try {
            const urlObj = new URL(url);
            const queryParam = urlObj.searchParams.get("q");

            if (!queryParam) return "";

            const subjectMatch = queryParam.match(/subject:"([^"]+)"/);
            return subjectMatch ? subjectMatch[1] : "";
        } catch (error) {
            return "";
        }
    };

    const extractSearchCriteriaFromURL = (url: string): string => {
        try {
            const urlObj = new URL(url);
            const queryParam = urlObj.searchParams.get("q");

            if (!queryParam) return t("noSearchCriteria");

            const criteria = queryParam
                .split("+")
                .map(criterion => {
                    if (criterion.includes(":")) {
                        const [key, value] = criterion.split(":", 2);
                        const fieldMap: { [key: string]: string } = {
                            inauthor: t("author"),
                            intitle: t("title"),
                            subject: t("labels"),
                            keyword: t("keyword"),
                        };
                        return `${fieldMap[key] || key}: "${decodeURIComponent(value)}"`;
                    }
                    return `"${decodeURIComponent(criterion)}"`;
                })
                .join(", ");

            return criteria || t("noSearchCriteria");
        } catch (error) {
            return t("invalidSearchCriteria");
        }
    };

    const fetchBooksFromAPI = (path: string, controller: AbortController): void => {
        let startIndex = 0;
        let foundBooks = INITIAL_FOUND_BOOKS;
        const searchSubject = extractSubjectFromURL(path);

        let fetchSummary = INITIAL_FETCH_SUMMARY;
        setIsLoading(true);

        const handleError = (error: unknown): void => {
            console.error("Error details:", error);

            let errorMessage = t("unknownError");
            if (error instanceof Error) {
                errorMessage = error.message;

                if (errorMessage.includes("NetworkError") || errorMessage.includes("CORS")) {
                    errorMessage = t("networkError");
                }
            } else if (typeof error === "object" && error !== null) {
                errorMessage = JSON.stringify(error);
            }

            fetchSummary.isError = true;
            fetchSummary.errorMessage = `${t("error")}: ${errorMessage}`;
            showError(fetchSummary);
            setIsLoading(false);
            navigate(Paths.error);
        };

        const handleNotFound = (): void => {
            setIsLoading(false);
            const criteriaText = extractSearchCriteriaFromURL(path);
            showMessage.warning(t("noBooksFound", { criteria: criteriaText }));
        };

        const handleSuccess = (rawBooks: BookRecord[]): void => {
            // Apply client-side subject filtering for better accuracy
            const filteredBooks = searchSubject ? filterBooksBySubject(rawBooks, searchSubject) : rawBooks;
            controller.abort();
            fetchSummary.data = formatFetchedDataAsBooks(filteredBooks);
            storeBooks(fetchSummary.data);
            setIsFromNetwork(true);
            setIsLoading(false);
            showMessage.success(t("dataFetchedSuccessfully", { count: fetchSummary.data.length }));
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
            try {
                const fetchResult = await fetch(fullPath, { signal: controller.signal });
                if (!fetchResult.ok) {
                    throw new Error(`HTTP error! status: ${fetchResult.status}`);
                }
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
                    } else if (foundBooks.length === 0) {
                        handleNotFound();
                    } else {
                        handleSuccess(foundBooks);
                    }
                }
            } catch (error) {
                handleError(error);
            }
        }

        recursiveFetch();
    };

    return React.useMemo(() => fetchBooksFromAPI, []);
};

export default useFetchBooks;
