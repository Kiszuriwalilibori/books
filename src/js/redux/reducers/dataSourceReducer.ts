import { createReducer } from "@reduxjs/toolkit";

import { setIsFromNetwork } from "../actionCreators";
import { RootStateType } from "components/AppProvider";

const initialState = { isNetwork: true };
export const dataSourceReducer = createReducer(initialState, builder => {
    builder.addCase(setIsFromNetwork, (state, action) => {
        state.isNetwork = action.payload;
    });
});

export default dataSourceReducer;

export const isNetwork = (state: RootStateType) => state.dataSource.isNetwork;
