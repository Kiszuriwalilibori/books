import { createSelector } from "@reduxjs/toolkit";
import { currentIndex, URLs } from "../reducers/detailsReducer";
import { isNetwork } from "../reducers/dataSourceReducer";
import { isCacheSupported } from "../reducers/cacheReducer";
import { currentPageNumber, filter, sort } from "../reducers/booksReducer";
import { selectAreFiltersVisible as areFiltersVisibleSelector } from "../reducers/filtersVisibilityReducer";
import { RootStateType } from "types";

export const booksSelector = (state: RootStateType) => state.books.books;
export const isOnlineSelector = (state: RootStateType) => state.online.isOnline;
export const isLoadingSelector = (state: RootStateType) => state.loading.isLoading;
export const errorMessageSelector = (state: RootStateType) => state.error.errorMessage;
export const sortOrderDescendingSelector = (state: RootStateType) => state.books.sort.isSortOrderDescending;
export const currentSortColumnSelector = (state: RootStateType) => state.books.sort.currentSortColumn;

function setPreviousButtonVisible(currentIndex: number) {
    return currentIndex >= 1;
}
export const previousButtonVisibleSelector = createSelector(currentIndex, setPreviousButtonVisible);

const setCurrentURL = (URLs: string[], currentIndex: number) => URLs[currentIndex];
export const currentURLSelector = createSelector(URLs, currentIndex, setCurrentURL);

const setNextButtonVisible = (URLs: string[], currentIndex: number) => currentIndex < URLs.length - 1;
export const nextButtonVisibleSelector = createSelector(URLs, currentIndex, setNextButtonVisible);

const setCanAddToFavorites = (isNetwork: boolean, isCacheSupported: boolean) => isNetwork && isCacheSupported;
export const canAddToFavoritesSelector = createSelector(isNetwork, isCacheSupported, setCanAddToFavorites);

const setGetTableDataArgs = (
    pageNumber: RootStateType["books"]["currentPageNumber"],
    filter: RootStateType["books"]["filter"],
    sort: RootStateType["books"]["sort"]
) => ({ pageNumber, filter, sort });
export const getTableDataArgsSelector = createSelector(currentPageNumber, filter, sort, setGetTableDataArgs);

export { areFiltersVisibleSelector };
