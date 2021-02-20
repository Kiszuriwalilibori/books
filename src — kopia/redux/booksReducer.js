import { Manipulator } from "../js/manipulator";
import { initGlobalStorage, storageAvailable } from "../js/storage";
import formatFetchedBooks from "../js/formatFetchedBooks";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { googleAPI } from "../fixtures/fixtures";

// ACTIONS //////////////////////////////////////////////////////////////////////////////

export const fetchBooks = createAction("BOOKS_FETCH");
export const changePage = createAction("PAGE_CHANGE");
export const sortBook = createAction("BOOK_SORT");
export const filterBooks = createAction("BOOKS_FILTER");
export const removeBook = createAction("BOOK_REMOVE");
export const toggleFilters = createAction("FILTERS_TOGGLE");
export const showError = createAction("ERROR_SHOW");
export const cacheSupported = createAction("CACHE_SET_SUPPORTED");
export const cacheNotEmpty = createAction("CACHE_SET_AVAILABLE");
export const storeCurrentURL = createAction("CURRENT_URL_STORE");
export const fetchDetails = createAction("DETAILS_FETCH");
export const showPreviousDetails = createAction("PREVIOUS_DETAILS_SHOW");
export const showNextDetails = createAction("NEXT_DETAILS_SHOW");
export const setIsFetchedFromURL = createAction("IS_FETCHED_FROM_URL_SHOW");
export const toggleSnackBar = createAction("SNACKBAR_TOGGLE");
// REDUCER //////////////////////////////////////////////////////////////////////////////

const initialState = {
  data: [],
  errorMessage: "",
  books: null,
  filter: null,
  currentPageNUmber: 1,
  currentSortColumn: null,
  isSortOrderDescending: false,
  numberOfPages: 0,
  currentPageBooksData: [],
  areFiltersVisible: true,
  singleBookData: [],
  cacheSupported: false,
  cacheNotEmpty: false,
  currentURL: "",
  test: [],
  isFetchedFromURL: true,
  sort: null,
  booksWithDetailedInfo: [],
  currentBookWithDetailedInfoIndex: 0,
  currentBookWithDetailedInfoData: {},
  nextDetailedBookButtonVisible: false,
  prevDetailedBookButtonVisible: false,
  isSnackBarVisible: false,
  snackBarType: null,
  snackBarItem: null,
};

export const booksReducer = createReducer(initialState, builder => {
  builder

    .addCase(fetchBooks, (state, action) => {
      if (action.payload) {
        const manipulator = new Manipulator(state);
        manipulator.fetchBooks(action.payload);
        state.data = manipulator.state.data;
        state.books = manipulator.state.books;
        state.numberOfPages = manipulator.state.numberOfPages;
        state.currentPageBooksData = manipulator.state.currentPageBooksData;
      }
    })

    .addCase(changePage, (state, action) => {
      const manipulator = new Manipulator(state);
      manipulator.changePage(action.payload);
      state.currentPageNUmber = manipulator.state.currentPageNUmber;
      state.currentPageBooksData = manipulator.state.currentPageBooksData;
    })

    .addCase(sortBook, (state, action) => {
      const manipulator = new Manipulator(state);
      manipulator.sort(action.payload);
      state.currentSortColumn = manipulator.state.currentSortColumn;
      state.isSortOrderDescending = manipulator.state.isSortOrderDescending;
      state.currentPageBooksData = manipulator.state.currentPageBooksData;
    })

    .addCase(filterBooks, (state, action) => {
      const manipulator = new Manipulator(state);
      manipulator.filter(action.payload);
      state.filter = manipulator.state.filter;
      state.currentPageBooksData = manipulator.state.currentPageBooksData;
      state.numberOfPages = manipulator.state.numberOfPages;
    })

    .addCase(removeBook, (state, action) => {
      const manipulator = new Manipulator(state);
      manipulator.remove(action.payload.id);
      state.data = manipulator.state.data;
      state.currentPageBooksData = manipulator.state.currentPageBooksData;
      state.numberOfPages = manipulator.state.numberOfPages;
    })

    .addCase(toggleFilters, state => {
      state.areFiltersVisible = !state.areFiltersVisible;
    })

    .addCase(showError, (state, action) => {
      state.errorMessage = action.payload.errorMessage;
    })

    .addCase(cacheSupported, state => {
      state.cacheSupported = true;
    })

    .addCase(cacheNotEmpty, state => {
      state.cacheNotEmpty = true;
    })

    .addCase(storeCurrentURL, (state, action) => {
      state.currentURL = action.payload;
    })

    .addCase(setIsFetchedFromURL, (state, action) => {
      state.isFetchedFromURL = action.payload;
    })

    .addCase(toggleSnackBar, (state, action) => {
      state.isSnackBarVisible = !state.isSnackBarVisible;
      if (action && action.payload) {
        state.snackBarType = action.payload.type;
        state.snackBarItem = action.payload.item;
      }
    })

    .addCase(fetchDetails, (state, action) => {
      state.booksWithDetailedInfo.push(action.payload);
      state.currentBookWithDetailedInfoData = action.payload;
      state.currentBookWithDetailedInfoIndex = state.booksWithDetailedInfo.length;
      if (state.currentBookWithDetailedInfoIndex > 1 && state.prevDetailedBookButtonVisible === false) {
        state.prevDetailedBookButtonVisible = true;
      }
    })

    .addCase(showPreviousDetails, state => {
      state.currentBookWithDetailedInfoIndex -= 1;
      state.currentBookWithDetailedInfoData = state.booksWithDetailedInfo[state.currentBookWithDetailedInfoIndex - 1];
      if (state.currentBookWithDetailedInfoIndex > 1 && state.prevDetailedBookButtonVisible === false) {
        state.prevDetailedBookButtonVisible = true;
      }
      if (state.currentBookWithDetailedInfoIndex === 1) {
        state.prevDetailedBookButtonVisible = false;
      }
      if (state.booksWithDetailedInfo.length > state.currentBookWithDetailedInfoIndex && state.nextDetailedBookButtonVisible === false) {
        state.nextDetailedBookButtonVisible = true;
      }
    })

    .addCase(showNextDetails, state => {
      state.currentBookWithDetailedInfoIndex += 1;
      state.currentBookWithDetailedInfoData = state.booksWithDetailedInfo[state.currentBookWithDetailedInfoIndex - 1];
      if (state.currentBookWithDetailedInfoIndex === state.booksWithDetailedInfo.length) {
        state.nextDetailedBookButtonVisible = false;
      }
    })

    .addDefaultCase(() => {});
});

export default booksReducer;

export function checkSupportForCache() {
  return dispatch => {
    if (storageAvailable("localStorage")) {
      dispatch(cacheSupported());
      console.warn("Storage available");
      initGlobalStorage();
      if (window.Storage.local.hasItems()) {
        console.log("Storage contains " + window.Storage.local.getLength() + " items");
        dispatch(cacheNotEmpty());
      } else {
        console.warn("No items in storage");
      }
    } else {
      console.warn("Storage not available");
    }
  };
}

export function fetchSingleBook({ redirect, id, toStore }) {
  return (dispatch, getState) => {
    const path = googleAPI + id;
    fetch(path)
      .then(res => res.json())
      .then(json => {
        if (json) {
          switch (
            toStore //gdybym miał realizować wzrorzec strategii to zamiast switcha musiałbym w tym miejscu pobrać strategię z menadżera strategii a gdzie indziej, w momencie kiedy decyduję jakafunkcja będzi zrealizowana - wrzucić strategię do manadżera strategii
          ) {
            case true:
              redirect.connecting();
              dispatch(fetchDetails(json));
              redirect.singleBook();
              break;
            case false:
              try {
                window.Storage.local.set(id, json);
                dispatch(toggleSnackBar({ type: "addedToFavorites", item: json.volumeInfo.title }));
                dispatch(cacheNotEmpty());
              } catch (error) {
                dispatch(showError("An attempt to add item to local storage caused error"));
                redirect.error();
              }
              break;
            default:
              dispatch(fetchDetails(json));
              redirect.singleBook();
          }
        } else {
          redirect.not_found();
        }
      })
      .catch(error => {
        const result = {
          error: true,
          errorMessage: error.message,
        };
        dispatch(showError(result));
        redirect.error();
      });
  };
}

export function fetchFromFavorites() {
  return async dispatch => {
    const result = { input: formatFetchedBooks(window.Storage.local.getAll()) };
    dispatch(fetchBooks(result));
    dispatch(setIsFetchedFromURL(false));
  };
}

export function removeFromFavorites() {
  return async dispatch => {
    const result = { input: formatFetchedBooks(window.Storage.local.getAll()) };
    dispatch(fetchBooks(result)); /// do tego momentu jest ok i pobiera co powinno
    dispatch(setIsFetchedFromURL(false));
  };
}
