import { createReducer } from "@reduxjs/toolkit";

import { setIsOnline } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { isOnline: true };
export const onlineReducer = createReducer(initialState, builder => {
    builder.addCase(setIsOnline, (state, action) => {
        state.isOnline = action.payload;
    });
});

export default onlineReducer;

export const isOnlineSelector = (state: RootStateType) => state.online.isOnline;
