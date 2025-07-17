import { createReducer } from "@reduxjs/toolkit";

import { setIsLoading } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { isLoading: false };

export const loadingReducer = createReducer(initialState, builder => {
    builder.addCase(setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    });
});

export default loadingReducer;

export const isLoadingSelector = (state: RootStateType) => state.loading.isLoading;
