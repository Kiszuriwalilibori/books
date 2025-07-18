import { createReducer } from "@reduxjs/toolkit";

import { setIsLoading } from "../actionCreators";

const initialState = { isLoading: false };

export const loadingReducer = createReducer(initialState, builder => {
    builder.addCase(setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    });
});

export default loadingReducer;

