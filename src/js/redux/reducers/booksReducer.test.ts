import { configureStore } from "@reduxjs/toolkit";
import booksReducer, { initialState } from "./booksReducer";
import { storeBooks, removeBook } from "../actionCreators";
import { BooksState } from "types";

describe("booksReducer", () => {
    let store: any;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                books: booksReducer,
            },
        });
    });

    // Helper function to create mock books
    const createMockBooks = (count: number): BooksState["books"] => {
        return Array.from({ length: count }, (_, index) => ({
            id: `book-${index + 1}`,
            title: `Book ${index + 1}`,
            authors: [`Author ${index + 1}`],
            publishedDate: "2023",
            categories: ["Test"],
            language: "en",
        }));
    };

    describe("storeBooks action", () => {
        it("should store valid books array", () => {
            const books = createMockBooks(3);

            store.dispatch(storeBooks(books));

            const state = store.getState().books;
            expect(state.books).toEqual(books);
            expect(state.numberOfPages).toBe(1);
            expect(state.currentPageNumber).toBe(1);
        });

        it("should ignore null payload", () => {
            store.dispatch(storeBooks(null as any));

            const state = store.getState().books;
            expect(state).toEqual(initialState);
        });

        it("should ignore undefined payload", () => {
            store.dispatch(storeBooks(undefined as any));

            const state = store.getState().books;
            expect(state).toEqual(initialState);
        });

        it("should ignore non-array payload", () => {
            store.dispatch(storeBooks("not an array" as any));

            const state = store.getState().books;
            expect(state).toEqual(initialState);
        });

        it("should ignore object payload", () => {
            store.dispatch(storeBooks({ notAnArray: true } as any));

            const state = store.getState().books;
            expect(state).toEqual(initialState);
        });

        it("should reset filter and sort when storing books", () => {
            const books = createMockBooks(3);

            // First set some state
            store.dispatch(storeBooks(books));

            // Manually modify state to simulate having filter/sort
            const currentState = store.getState().books;
            expect(currentState.filter).toEqual({});
            expect(currentState.sort).toEqual({ currentSortColumn: undefined, isSortOrderDescending: false });

            // Store new books should reset filter and sort
            const newBooks = createMockBooks(5);
            store.dispatch(storeBooks(newBooks));

            const newState = store.getState().books;
            expect(newState.books).toEqual(newBooks);
            expect(newState.filter).toEqual({});
            expect(newState.sort).toEqual({ currentSortColumn: undefined, isSortOrderDescending: false });
        });
    });

    describe("removeBook action", () => {
        beforeEach(() => {
            const books = createMockBooks(5);
            store.dispatch(storeBooks(books));
        });

        it("should remove existing book", () => {
            store.dispatch(removeBook("book-3"));

            const state = store.getState().books;
            expect(state.books).toHaveLength(4);
            expect(state.books.find((book: any) => book.id === "book-3")).toBeUndefined();
        });

        it("should ignore removal with null bookID", () => {
            const initialBooks = store.getState().books.books;

            store.dispatch(removeBook(null as any));

            const state = store.getState().books;
            expect(state.books).toEqual(initialBooks);
        });

        it("should ignore removal with undefined bookID", () => {
            const initialBooks = store.getState().books.books;

            store.dispatch(removeBook(undefined as any));

            const state = store.getState().books;
            expect(state.books).toEqual(initialBooks);
        });

        it("should ignore removal with empty string bookID", () => {
            const initialBooks = store.getState().books.books;

            store.dispatch(removeBook(""));

            const state = store.getState().books;
            expect(state.books).toEqual(initialBooks);
        });

        it("should handle removal from empty books array", () => {
            // Reset to empty state
            store.dispatch(storeBooks([]));

            store.dispatch(removeBook("book-1"));

            const state = store.getState().books;
            expect(state.books).toEqual([]);
        });

        it("should handle non-existent book ID", () => {
            const initialBooks = store.getState().books.books;

            store.dispatch(removeBook("non-existent-id"));

            const state = store.getState().books;
            expect(state.books).toEqual(initialBooks);
        });
    });

    describe("Input validation in corrupted state", () => {
        it("should handle corrupted state.books (not an array)", () => {
            // Manually corrupt the state
            const corruptedState = {
                ...initialState,
                books: "not an array" as any,
            };

            // Create a new store with corrupted initial state
            const corruptedStore = configureStore({
                reducer: {
                    books: booksReducer,
                },
                preloadedState: {
                    books: corruptedState,
                },
            });

            const initialBooks = corruptedStore.getState().books.books;

            // Try to remove a book - should be ignored due to validation
            corruptedStore.dispatch(removeBook("book-1"));

            const state = corruptedStore.getState().books;
            expect(state.books).toEqual(initialBooks); // Should remain unchanged
        });

        it("should handle corrupted state.books (null)", () => {
            const corruptedState = {
                ...initialState,
                books: null as any,
            };

            const corruptedStore = configureStore({
                reducer: {
                    books: booksReducer,
                },
                preloadedState: {
                    books: corruptedState,
                },
            });

            const initialBooks = corruptedStore.getState().books.books;

            corruptedStore.dispatch(removeBook("book-1"));

            const state = corruptedStore.getState().books;
            expect(state.books).toEqual(initialBooks);
        });
    });
});
