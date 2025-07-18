import { createReducer } from "@reduxjs/toolkit";
import { toggleFiltersVisibility } from "../actionCreators";

export interface FiltersVisibilityState {
    areFiltersVisible: boolean;
}

const initialState: FiltersVisibilityState = {
    areFiltersVisible: true,
};

const filtersVisibilityReducer = createReducer(initialState, builder => {
    builder.addCase(toggleFiltersVisibility, state => {
        state.areFiltersVisible = !state.areFiltersVisible;
    });
});

export default filtersVisibilityReducer;

// Selector
export const selectAreFiltersVisible = (state: { filtersVisibility: FiltersVisibilityState }) => state.filtersVisibility.areFiltersVisible;
