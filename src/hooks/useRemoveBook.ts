import * as React from "react";
import debounce from "lodash/debounce";
import { useDispatchAction } from "hooks";
import { useRemoveBookModalVisibilityContext } from "contexts";
import { BookID } from "types";

export const useRemoveBook = () => {
    const { removeBook } = useDispatchAction();
    const { closeModal, book, isRemoveBookModalVisible } = useRemoveBookModalVisibilityContext();

    const debouncedRemoveBook = React.useMemo(
        () =>
            debounce((id: string) => {
                removeBook(id);
                closeModal();
            }, 200),
        [removeBook, closeModal]
    );

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
