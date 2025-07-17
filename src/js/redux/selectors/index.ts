import { createSelector } from "@reduxjs/toolkit";
import { currentIndex, URLs } from "../reducers/detailsReducer";
import { isNetwork } from "../reducers/dataSourceReducer";
import { isCacheSupported } from "../reducers/cacheReducer";
import { currentPageNumber /*, currentSortColumn, isSortOrderDescending*/, filter, sort } from "../reducers/booksReducer";
import { selectAreFiltersVisible } from "../reducers/filtersVisibilityReducer";

import { RootStateType } from "types";

/****/
function setPreviousButtonVisible(currentIndex: number) {
    if (currentIndex >= 1) {
        return true;
    } else {
        return false;
    }
}
export const getIsPreviousButtonVisible = createSelector(currentIndex, setPreviousButtonVisible);

/****/
const setCurrentURL = (URLs: string[], currentIndex: number) => URLs[currentIndex];
export const currentURL = createSelector(URLs, currentIndex, setCurrentURL);

/****/
const setNextButtonVisible = (URLs: string[], currentIndex: number) => {
    if (currentIndex < URLs.length - 1) {
        return true;
    } else {
        return false;
    }
};
export const getIsNextButtonVisible = createSelector(URLs, currentIndex, setNextButtonVisible);

/****/
const setCanAddToFavorites = (isNetwork: boolean, isCacheSupported: boolean) => {
    return isNetwork && isCacheSupported;
};
export const selectCanAddToFavorites = createSelector(isNetwork, isCacheSupported, setCanAddToFavorites);

/****/

const setGetTableDataArgs = (pageNumber: RootStateType["books"]["currentPageNumber"], filter: RootStateType["books"]["filter"], sort: RootStateType["books"]["sort"]) => {
    return { pageNumber, filter, sort };
};
export const selectGetTableDataArgs = createSelector(currentPageNumber, filter, sort, setGetTableDataArgs);

/*** */
export { selectAreFiltersVisible };
