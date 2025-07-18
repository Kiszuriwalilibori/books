import { createAction } from "@reduxjs/toolkit";
import { BooksState, RootStateType, BookID } from "types";

interface ShowError {
    isError: boolean;
    errorMessage: string;
}

/**  booksReducer actions begin **/

export const filterBooks = createAction<BooksState["filter"]>("BOOKS_FILTER");
export const removeBook = createAction<string>("BOOK_REMOVE");
export const changePage = createAction<BooksState["currentPageNumber"]>("PAGE_CHANGE");
export const storeBooks = createAction<BooksState["books"]>("BOOKS_STORE");
export const sortBooks = createAction<NonNullable<BooksState["sort"]["currentSortColumn"]>>("BOOKS_SORT");
export const setNumberOfPages = createAction<BooksState["numberOfPages"]>("SET_NUMBER_OF_PAGES");

/**booksReducer actions end **/

export const showPreviousDetails = createAction("PREVIOUS_DETAILS_SHOW");
export const showNextDetails = createAction("NEXT_DETAILS_SHOW");
export const closeSnackBar = createAction("SNACKBAR_CLOSE");
export const cacheSupported = createAction("CACHE_SET_SUPPORTED");
export const fetchDetails = createAction<RootStateType["details"]["booksWithDetailedInfo"][number]>("DETAILS_FETCH");
export const setIsFromNetwork = createAction<RootStateType["dataSource"]["isNetwork"]>("IS_FETCHED_FROM_URL_SET");
export const showError = createAction<ShowError>("ERROR_SHOW");
export const setIsLoading = createAction<RootStateType["loading"]["isLoading"]>("IS_LOADING");
export const setIsOnline = createAction<RootStateType["online"]["isOnline"]>("IS_ONLINE");

/** filtersVisibilityReducer actions begin **/
export const toggleFiltersVisibility = createAction("FILTERS_VISIBILITY_TOGGLE");
/** filtersVisibilityReducer actions end **/

/** removeBookModalReducer actions begin **/
export const showRemoveBookModal = createAction<BookID>("REMOVE_BOOK_MODAL_SHOW");
export const closeRemoveBookModal = createAction("REMOVE_BOOK_MODAL_CLOSE");
/** removeBookModalReducer actions end **/
