import * as React from "react";
import useDebouncedEvent from "hooks/useDebouncedEvent";
import { useDispatchAction } from "hooks";
import { useSelector, useDispatch } from "react-redux";
import { selectIsRemoveBookModalVisible, selectRemoveBookModalBook } from "store/reducers/removeBookModalReducer";
import { closeRemoveBookModal } from "store/actionCreators";
import { BookID } from "types";

/**
 * Custom hook for handling book removal and modal state.
 *
 * - Provides a debounced handler to remove a book and close the modal.
 * - Exposes modal visibility and a function to close the modal.
 *
 * @returns {Object} An object with handleRemove, isRemoveBookModalVisible, and closeModal.
 */
export const useRemoveBook = () => {
    const { removeBook } = useDispatchAction();
    const dispatch = useDispatch();
    const isRemoveBookModalVisible = useSelector(selectIsRemoveBookModalVisible);
    const book = useSelector(selectRemoveBookModalBook);

    const closeModal = React.useCallback(() => {
        dispatch(closeRemoveBookModal());
    }, [dispatch]);

    const debouncedRemoveBook = useDebouncedEvent((id: string) => {
        removeBook(id);
        closeModal();
    }, 200);

    const handleRemove = React.useCallback(() => {
        if (book) {
            const { id } = book as BookID;
            debouncedRemoveBook(id);
        }
    }, [book, debouncedRemoveBook]);

    return {
        handleRemove,
        isRemoveBookModalVisible,
        closeModal,
    };
};
export default useRemoveBook;
