import { createSelector } from "@reduxjs/toolkit";
import { currentIndex, URLs } from "../reducers/detailsReducer";
import { isNetwork } from "../reducers/dataSourceReducer";
import { isCacheSupported } from "../reducers/cacheReducer";
import { currentPageNumber, filter, sort } from "../reducers/booksReducer";
import { selectAreFiltersVisible as areFiltersVisibleSelector } from "../reducers/filtersVisibilityReducer";
import { RootStateType } from "types";

/**
 * Selects the array of books from the Redux state.
 */
export const booksSelector = (state: RootStateType) => state.books.books;
/**
 * Selects the online status from the Redux state.
 */
export const isOnlineSelector = (state: RootStateType) => state.online.isOnline;
/**
 * Selects the loading state from the Redux state.
 */
export const isLoadingSelector = (state: RootStateType) => state.loading.isLoading;
/**
 * Selects the error message from the Redux state.
 */
export const errorMessageSelector = (state: RootStateType) => state.error.errorMessage;
/**
 * Selects whether the sort order is descending from the Redux state.
 */
export const sortOrderDescendingSelector = (state: RootStateType) => state.books.sort.isSortOrderDescending;
/**
 * Selects the current sort column from the Redux state.
 */
export const currentSortColumnSelector = (state: RootStateType) => state.books.sort.currentSortColumn;

function setPreviousButtonVisible(currentIndex: number) {
    return currentIndex >= 1;
}
/**
 * Selector for the visibility of the previous button in navigation.
 */
export const previousButtonVisibleSelector = createSelector(currentIndex, setPreviousButtonVisible);

const setCurrentURL = (URLs: string[], currentIndex: number) => URLs[currentIndex];
/**
 * Selector for the current URL in the list of detailed book info.
 */
export const currentURLSelector = createSelector(URLs, currentIndex, setCurrentURL);

const setNextButtonVisible = (URLs: string[], currentIndex: number) => currentIndex < URLs.length - 1;
/**
 * Selector for the visibility of the next button in navigation.
 */
export const nextButtonVisibleSelector = createSelector(URLs, currentIndex, setNextButtonVisible);

const setCanAddToFavorites = (isNetwork: boolean, isCacheSupported: boolean) => isNetwork && isCacheSupported;
/**
 * Selector for whether the current book can be added to favorites (requires network and cache support).
 */
export const canAddToFavoritesSelector = createSelector(isNetwork, isCacheSupported, setCanAddToFavorites);

const setGetTableDataArgs = (
    pageNumber: RootStateType["books"]["currentPageNumber"],
    filter: RootStateType["books"]["filter"],
    sort: RootStateType["books"]["sort"]
) => ({ pageNumber, filter, sort });
/**
 * Selector for arguments used to get table data (page number, filter, sort).
 */
export const getTableDataArgsSelector = createSelector(currentPageNumber, filter, sort, setGetTableDataArgs);

export { areFiltersVisibleSelector };
