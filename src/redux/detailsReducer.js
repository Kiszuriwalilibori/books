import { 
  createAction, 
  createReducer 
} from "@reduxjs/toolkit";

import errorShow from './booksReducer';

export const fetchDetails = createAction("details/DETAILS_FETCH");
export const showPreviousDetails = createAction("details/PREVIOUS_DETAILS_SHOW");
export const showNextDetails = createAction("details/NEXT_DETAILS_SHOW");

const initialState = {
  booksWithDetailedInfo:[],
  currentBookWithDetailedInfoIndex:0,
  currentBookWithDetailedInfoData:{},
  nextDetailedBookButtonVisible:false,
  prevDetailedBookButtonVisible:false,
}

const detailsReducer = createReducer(initialState, builder => {
  builder
    .addCase(fetchDetails,(state,action)=>{
      state.booksWithDetailedInfo.push(action.payload);
      state.currentBookWithDetailedInfoData = action.payload;
      state.currentBookWithDetailedInfoIndex = state.booksWithDetailedInfo.length;
      if(state.currentBookWithDetailedInfoIndex >1 && state.prevDetailedBookButtonVisible ===false){state.prevDetailedBookButtonVisible = true }
    })
    .addCase(showPreviousDetails,(state)=>{
      state.currentBookWithDetailedInfoIndex -=1;
      state.currentBookWithDetailedInfoData = state.booksWithDetailedInfo[state.currentBookWithDetailedInfoIndex-1];
      if(state.currentBookWithDetailedInfoIndex >1 && state.prevDetailedBookButtonVisible ===false){state.prevDetailedBookButtonVisible = true }
      if(state.currentBookWithDetailedInfoIndex ===1){state.prevDetailedBookButtonVisible = false}
      if(state.booksWithDetailedInfo.length > state.currentBookWithDetailedInfoIndex && state.nextDetailedBookButtonVisible ===false){state.nextDetailedBookButtonVisible = true}
    })
    .addCase(showNextDetails,(state)=>{
      state.currentBookWithDetailedInfoIndex +=1;
      state.currentBookWithDetailedInfoData = state.booksWithDetailedInfo[state.currentBookWithDetailedInfoIndex-1];
      if(state.currentBookWithDetailedInfoIndex === state.booksWithDetailedInfo.length){state.nextDetailedBookButtonVisible = false;}
    })
    .addDefaultCase(() => {})
  });

export default detailsReducer;

export function fetchSingleBook (redirect, id){return(dispatch) => { 
  
  const path = "https://www.googleapis.com/books/v1/volumes/"+id;
  fetch(path)
    .then(res => res.json())
    .then(json => {
      redirect.connecting();
      if (json) {
          dispatch(fetchDetails(json));
          redirect.singleBook();
      }
      else{
          redirect.not_found()
      }
  
  })
    .catch((error) => {
      const result ={
      error:true,
      errorMessage: error.message}
      dispatch(errorShow(result));
      redirect.error();

    })
    ;
}};

