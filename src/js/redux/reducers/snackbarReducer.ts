import { createReducer } from "@reduxjs/toolkit";

import { toggleSnackBar } from "../actionCreators";

const initialState = {
    isSnackBarVisible: false,
    snackbarText: "",
};

export const snackbarReducer = createReducer(initialState, builder => {
    builder.addCase(toggleSnackBar, (state, action) => {
        state.isSnackBarVisible = !state.isSnackBarVisible;
        if (action && action.payload) {
            state.snackbarText = action.payload;
        }
    });
});

export default snackbarReducer;
