import { createSelector } from "@reduxjs/toolkit";

import { currentIndex, URLs } from "../reducers/detailsReducer";

/*** */
function setPreviousButtonVisible(currentIndex: number) {
    if (currentIndex >= 1) {
        return true;
    } else {
        return false;
    }
}

export const getIsPreviousButtonVisible = createSelector(currentIndex, setPreviousButtonVisible);

/*** */
const setCurrentURL = (URLs: string[], currentIndex: number) => URLs[currentIndex];

export const currentURL = createSelector(URLs, currentIndex, setCurrentURL);

/*** */
export const setNextButtonVisible = (URLs: string[], currentIndex: number) => {
    if (currentIndex < URLs.length - 1) {
        return true;
    } else {
        return false;
    }
};

export const getIsNextButtonVisible = createSelector(URLs, currentIndex, setNextButtonVisible);
/*** */
