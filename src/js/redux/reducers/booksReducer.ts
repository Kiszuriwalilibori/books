import { createReducer } from "@reduxjs/toolkit";

import { BooksManager } from "../../BooksManager";
import { filterBooks, removeBook, changePage, storeBooks, sortBooks } from "../actionCreators";
import { BooksState } from "types";

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
            const manager = new BooksManager(state);
            manager.ChangePage(action.payload);
            state.currentPageNumber = manager.state.currentPageNumber;
            state.books = manager.state.books;
        })

        .addCase(sortBooks, (state, action) => {
            const manager = new BooksManager(state);
            manager.Sort(action.payload);
            state.currentSortColumn = manager.state.currentSortColumn;
            state.isSortOrderDescending = manager.state.isSortOrderDescending;
            state.books = manager.state.books;
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
