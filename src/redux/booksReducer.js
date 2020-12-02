import { 
  getNumberOfPages, 
  sliceSinglePageData, 
  sort, 
  remove, 
  filtrate } from "./functions";

import { 
  createAction, 
  createReducer } from "@reduxjs/toolkit";

// ACTIONS //////////////////////////////////////////////////////////////////////////////

export const fetchBooks = createAction("BOOKS_FETCH");
export const changePage = createAction("PAGE_CHANGE");
export const sortBook = createAction("BOOK_SORT");
export const filterBooks = createAction("BOOKS_FILTER");
export const removeBook = createAction("BOOK_REMOVE");
export const toggleFilters = createAction("FILTERS_TOGGLE");
export const showError = createAction("ERROR_SHOW");

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
};

export const booksReducer = createReducer(initialState, builder => {
  builder
    // .addCase(fetchBooks, (state, action)=>{
    //   if (action.payload.error === true) {state.errorMessage = action.payload.errorMessage }
    //   else {
    //       state.data = action.payload.input;
    //       state.books = action.payload.input;
    //       state.filter = null;
    //       state.sort = null;
    //       state.isSortOrderDescending = null;
    //       state.currentSortColumn = null;
    //       state.currentPageNUmber = 1;
    //       state.numberOfPages= getNumberOfPages(action.payload.input);
    //       state.currentPageBooksData = sliceSinglePageData(1, action.payload.input, getNumberOfPages(action.payload.input));
                   
    //   }
    // })
    .addCase(fetchBooks, (state, action)=>{
      if (action.payload){
          state.data = action.payload.input;
          state.books = action.payload.input;
          state.filter = null;
          state.sort = null;
          state.isSortOrderDescending = null;
          state.currentSortColumn = null;
          state.currentPageNUmber = 1;
          state.numberOfPages= getNumberOfPages(action.payload.input);
          state.currentPageBooksData = sliceSinglePageData(1, action.payload.input, getNumberOfPages(action.payload.input));
      }            
      
    })



    .addCase(changePage,(state, action)=>{
      const temporaryResult = sort(filtrate([...state.data], state.filter), state.isSortOrderDescending, state.currentSortColumn);
      state.currentPageNUmber = action.payload;
      state.currentPageBooksData = sliceSinglePageData(action.payload, temporaryResult, getNumberOfPages(temporaryResult));
    })
    .addCase(sortBook,(state,action)=>{
      let temporaryResult =[];
      let order = false;
      if ((state.currentSortColumn || state.currentSortColumn === 0) && state.currentSortColumn === action.payload) order = !state.isSortOrderDescending;
      if(Array.isArray(state.data)){temporaryResult = sort(filtrate([...state.data], state.filter), order, action.payload);}    
        state.currentSortColumn = action.payload;
        state.isSortOrderDescending = order;
        state.currentPageBooksData= sliceSinglePageData(state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
    })
    .addCase(filterBooks,(state,action)=>{
      let temporaryResult = sort(filtrate([...state.data], action.payload), state.isSortOrderDescending, state.currentSortColumn);
      state.filter = action.payload;
      state.currentPageBooksData = sliceSinglePageData(state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
      state.numberOfPages = getNumberOfPages(temporaryResult);
    })
    .addCase(removeBook,(state,action)=>{
      let booksAfterRemoval = remove([...state.data], action.payload);
      const temporaryResult = sort(filtrate(booksAfterRemoval, state.filter), state.isSortOrderDescending, state.currentSortColumn);
      state.data = booksAfterRemoval;
      state.currentPageBooksData = sliceSinglePageData(state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
      state.numberOfPages= getNumberOfPages(temporaryResult);
    })
    .addCase(toggleFilters, (state)=>{ state.areFiltersVisible = !state.areFiltersVisible})
    
    .addCase(showError,(state,action)=>{state.errorMessage = action.payload.errorMessage})

    .addDefaultCase(() => {})
  });
  
export default booksReducer;
