import { createReducer } from "@reduxjs/toolkit";
import { RootStateType } from "types/index";

import { showPreviousDetails, showNextDetails, fetchDetails } from "../actionCreators";

const initialState = { booksWithDetailedInfo: [] as string[], currentBookWithDetailedInfoIndex: 0 };

export const detailsReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchDetails, (state, action) => {
            if (!state.booksWithDetailedInfo.includes(action.payload)) {
                state.booksWithDetailedInfo.push(action.payload);
            }
            state.currentBookWithDetailedInfoIndex = state.booksWithDetailedInfo.indexOf(action.payload);
        })

        .addCase(showPreviousDetails, state => {
            state.currentBookWithDetailedInfoIndex -= 1;
        })

        .addCase(showNextDetails, state => {
            state.currentBookWithDetailedInfoIndex += 1;
        });
});

export default detailsReducer;

export const currentIndex = (state: RootStateType) => state.details.currentBookWithDetailedInfoIndex;

export const URLs = (state: RootStateType) => state.details.booksWithDetailedInfo;
