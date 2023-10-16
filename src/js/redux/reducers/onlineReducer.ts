import { createReducer } from "@reduxjs/toolkit";

import { setIsOnline } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { isOnline: true };
export const cacheReducer = createReducer(initialState, builder => {
    builder.addCase(setIsOnline, (state, action) => {
        state.isOnline = action.payload;
    });
});

export default cacheReducer;

export const isOnlineSelector = (state: RootStateType) => state.online.isOnline;
