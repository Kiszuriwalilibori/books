import { createReducer } from "@reduxjs/toolkit";

import { BooksManager } from "../../BooksManager/BooksManager";
import { initialState } from "../initialState";
import { filterBooks, removeBook, changePage, fetchBooksFromFavorites, sortBook } from "../actionCreators";

export const booksReducer = createReducer(initialState, builder => {
    builder

        .addCase(fetchBooksFromFavorites, (state, action) => {
            if (action.payload) {
                const manager = new BooksManager(state);
                manager.FetchFavoriteBooks(action.payload);
                state.data = manager.state.data;
                state.books = manager.state.books;
                state.numberOfPages = manager.state.numberOfPages;
                state.currentPageBooksData = manager.state.currentPageBooksData;
            }
        })

        .addCase(changePage, (state, action) => {
            const manager = new BooksManager(state);
            manager.ChangePage(action.payload);
            state.currentPageNumber = manager.state.currentPageNumber;
            state.currentPageBooksData = manager.state.currentPageBooksData;
        })

        .addCase(sortBook, (state, action) => {
            const manager = new BooksManager(state);
            manager.Sort(action.payload);
            state.currentSortColumn = manager.state.currentSortColumn;
            state.isSortOrderDescending = manager.state.isSortOrderDescending;
            state.currentPageBooksData = manager.state.currentPageBooksData;
        })

        .addCase(filterBooks, (state, action) => {
            const manager = new BooksManager({ ...state });
            manager.Filter(action.payload);
            state.filter = manager.state.filter;
            state.currentPageBooksData = manager.state.currentPageBooksData;
            state.numberOfPages = manager.state.numberOfPages;
        })

        .addCase(removeBook, (state, action) => {
            const manager = new BooksManager(state);
            manager.Remove(action.payload.id);
            state.data = manager.state.data;
            state.currentPageBooksData = manager.state.currentPageBooksData;
            state.numberOfPages = manager.state.numberOfPages;
        })
        .addDefaultCase(() => {});
});

export default booksReducer;
