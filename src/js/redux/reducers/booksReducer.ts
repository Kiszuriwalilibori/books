import { createReducer } from "@reduxjs/toolkit";

import { BooksManager } from "../../BooksManager";
import { filterBooks, removeBook, changePage, storeBooks, sortBooks } from "../actionCreators";
import { BooksState, RootStateType } from "types";

export const initialState: BooksState = {
    data: [],
    errorMessage: "",
    books: [],
    filter: {},
    currentPageNumber: 1,
    currentSortColumn: undefined,
    isSortOrderDescending: false,
    numberOfPages: 0,
};

export const booksReducer = createReducer(initialState, builder => {
    builder

        .addCase(storeBooks, (state, action) => {
            if (action.payload) {
                const manager = new BooksManager(state);
                manager.StoreBooks(action.payload);
                state.data = manager.state.data;
                state.books = manager.state.books;
                state.numberOfPages = manager.state.numberOfPages;
                state.currentPageNumber = initialState.currentPageNumber;
                state.filter = initialState.filter;
                state.currentSortColumn = initialState.currentSortColumn;
                state.isSortOrderDescending = initialState.isSortOrderDescending;
            }
        })

        .addCase(changePage, (state, action) => {
            if (action.payload && action.payload !== state.currentPageNumber) {
                state.currentPageNumber = action.payload;
            }
        })

        .addCase(sortBooks, (state, action) => {
            if (state.currentSortColumn && state.currentSortColumn === action.payload) state.isSortOrderDescending = !state.isSortOrderDescending;
            state.currentSortColumn = action.payload;
        })

        .addCase(filterBooks, (state, action) => {
            const manager = new BooksManager({ ...state });
            manager.Filter(action.payload);
            state.filter = manager.state.filter;
            state.numberOfPages = manager.state.numberOfPages;
            state.books = manager.state.books;
        })

        .addCase(removeBook, (state, action) => {
            const manager = new BooksManager(state);
            manager.Remove(action.payload);
            state.data = manager.state.data;
            state.numberOfPages = manager.state.numberOfPages;
            state.books = manager.state.books;
        })

        .addDefaultCase(() => {});
});

export default booksReducer;

export const books = (state: RootStateType) => state.books.books;
export const currentPageNumber = (state: RootStateType) => state.books.currentPageNumber;
export const numberOfPages = (state: RootStateType) => state.books.numberOfPages;
export const currentSortColumn = (state: RootStateType) => state.books.currentSortColumn;
export const isSortOrderDescending = (state: RootStateType) => state.books.isSortOrderDescending;
