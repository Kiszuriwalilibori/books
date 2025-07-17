import { createReducer } from "@reduxjs/toolkit";
import { showRemoveBookModal, closeRemoveBookModal } from "../actionCreators";
import { BookID } from "types";

export interface RemoveBookModalState {
    isRemoveBookModalVisible: boolean;
    book: BookID | null;
}

const initialState: RemoveBookModalState = {
    isRemoveBookModalVisible: false,
    book: null,
};

const removeBookModalReducer = createReducer(initialState, builder => {
    builder
        .addCase(showRemoveBookModal, (state, action) => {
            state.isRemoveBookModalVisible = true;
            state.book = action.payload;
        })
        .addCase(closeRemoveBookModal, state => {
            state.isRemoveBookModalVisible = false;
            state.book = null;
        });
});

export default removeBookModalReducer;

// Selectors
export const selectIsRemoveBookModalVisible = (state: { removeBookModal: RemoveBookModalState }) => state.removeBookModal.isRemoveBookModalVisible;

export const selectRemoveBookModalBook = (state: { removeBookModal: RemoveBookModalState }) => state.removeBookModal.book;
