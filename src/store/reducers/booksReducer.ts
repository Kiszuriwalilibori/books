import { createReducer } from "@reduxjs/toolkit";
import { filterBooks, removeBook, changePage, setNumberOfPages, storeBooks, sortBooks } from "../actionCreators";
import { BooksState, RootStateType } from "types";
import { getNumberOfPages, remove } from "tableHelpers";

export const initialState: BooksState = {
    errorMessage: "",
    books: [],
    filter: {},
    currentPageNumber: 1,
    numberOfPages: 0,
    sort: { currentSortColumn: undefined, isSortOrderDescending: false },
};

export const booksReducer = createReducer(initialState, builder => {
    builder

        .addCase(storeBooks, (state, action) => {
            if (action.payload && Array.isArray(action.payload)) {
                state.books = action.payload;
                state.numberOfPages = getNumberOfPages(action.payload);
                state.currentPageNumber = initialState.currentPageNumber;
                state.filter = initialState.filter;
                state.sort = initialState.sort;
            }
        })

        .addCase(changePage, (state, action) => {
            if (action.payload && action.payload !== state.currentPageNumber) {
                state.currentPageNumber = action.payload;
            }
        })

        .addCase(sortBooks, (state, action) => {
            if (state.sort.currentSortColumn && state.sort.currentSortColumn === action.payload) state.sort.isSortOrderDescending = !state.sort.isSortOrderDescending;
            state.sort.currentSortColumn = action.payload;
        })

        .addCase(filterBooks, (state, action) => {
            if (action.payload && JSON.stringify(action.payload) !== JSON.stringify(state.filter)) {
                state.filter = { ...action.payload };
            }
        })

        .addCase(removeBook, (state, action) => {
            if (Array.isArray(state.books) && action.payload) {
                state.books = remove([...state.books], action.payload);
            }
        })
        .addCase(setNumberOfPages, (state, action) => {
            state.numberOfPages = action.payload;
        })

        .addDefaultCase(() => {});
});

export default booksReducer;

export const books = (state: RootStateType) => state.books.books;
export const currentPageNumber = (state: RootStateType) => state.books.currentPageNumber;
export const numberOfPages = (state: RootStateType) => state.books.numberOfPages;
export const filter = (state: RootStateType) => state.books.filter;
export const sort = (state: RootStateType) => state.books.sort;
