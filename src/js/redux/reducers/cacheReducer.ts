import { createReducer } from "@reduxjs/toolkit";

import { cacheSupported } from "../actionCreators";

const initialState = { isSupported: false };
export const cacheReducer = createReducer(initialState, builder => {
    builder.addCase(cacheSupported, state => {
        state.isSupported = true;
    });
});

export default cacheReducer;
