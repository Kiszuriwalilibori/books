import { createAction } from "@reduxjs/toolkit";
import { BooksState } from "types";
interface ShowError {
    isError: boolean;
    errorMessage: string;
}

/**  booksReducer actions begin **/

export const filterBooks = createAction<BooksState["filter"]>("BOOKS_FILTER");
export const removeBook = createAction<string>("BOOK_REMOVE");
export const changePage = createAction<BooksState["currentPageNumber"]>("PAGE_CHANGE");
export const storeBooks = createAction<BooksState["data"]>("BOOKS_STORE");
export const sortBooks = createAction<NonNullable<BooksState["currentSortColumn"]>>("BOOKS_SORT");

/**booksReducer actions end **/

export const showPreviousDetails = createAction("PREVIOUS_DETAILS_SHOW");
export const showNextDetails = createAction("NEXT_DETAILS_SHOW");
export const closeSnackBar = createAction("SNACKBAR_CLOSE");
export const cacheSupported = createAction("CACHE_SET_SUPPORTED");
export const fetchDetails = createAction<string>("DETAILS_FETCH");
export const setIsFromNetwork = createAction<boolean>("IS_FETCHED_FROM_URL_SET");
export const showError = createAction<ShowError>("ERROR_SHOW");
export const setIsLoading = createAction<boolean>("IS_LOADING");
export const setIsOnline = createAction<boolean>("IS_ONLINE");
