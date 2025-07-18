import { createReducer } from "@reduxjs/toolkit";

import { showError } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { errorMessage: "" };

export const errorReducer = createReducer(initialState, builder => {
    builder.addCase(showError, (state, action) => {
        if (action.payload.isError) state.errorMessage = action.payload.errorMessage;
    });
});

export default errorReducer;

export const errorMessageSelector = (state: RootStateType) => state.error.errorMessage;
