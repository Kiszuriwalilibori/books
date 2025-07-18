import { createReducer } from "@reduxjs/toolkit";

import { setIsOnline } from "../actionCreators";


const initialState = { isOnline: true };
export const onlineReducer = createReducer(initialState, builder => {
    builder.addCase(setIsOnline, (state, action) => {
        state.isOnline = action.payload;
    });
});

export default onlineReducer;

