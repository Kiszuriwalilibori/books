import { createReducer } from "@reduxjs/toolkit";

import { setIsFromNetwork } from "../actionCreators";

const initialState = { isNetwork: true };
export const dataSourceReducer = createReducer(initialState, builder => {
    builder.addCase(setIsFromNetwork, (state, action) => {
        state.isNetwork = action.payload;
    });
});

export default dataSourceReducer;
