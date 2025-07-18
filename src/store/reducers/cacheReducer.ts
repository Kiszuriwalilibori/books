import { createReducer } from "@reduxjs/toolkit";

import { cacheSupported } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { isSupported: false };
export const cacheReducer = createReducer(initialState, builder => {
    builder.addCase(cacheSupported, state => {
        state.isSupported = true;
    });
});

export default cacheReducer;

export const isCacheSupported = (state: RootStateType) => state.cache.isSupported;
