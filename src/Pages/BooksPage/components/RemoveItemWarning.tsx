import * as React from "react";
import { Modal } from "@mui/material";

import { useRemoveBookModalVisibilityContext } from "contexts";
import { useDebouncedCallback, useDispatchAction } from "hooks";
import { Button } from "components";
import { AlertBox, PageContainer } from "pages/styled";
import { BookID } from "types/types";
import debounce from "lodash/debounce";
/**
 * @description Renders modal component with two option buttons: confirming remove and cancelling remove
 * @returns modal component
 */

const RemoveItemWarning = React.forwardRef((props, ref) => {
    const { removeBook } = useDispatchAction();
    const { closeModal, book, isRemoveBookModalVisible } = useRemoveBookModalVisibilityContext();

    const handleRemove: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(
        debounce(() => {
            const { id } = book as BookID;
            book && removeBook(id);
            closeModal();
        }, 200),
        [book, closeModal, removeBook]
    );

    const handleCancel = useDebouncedCallback(closeModal);

    return (
        <Modal open={isRemoveBookModalVisible} aria-label={"remove warning modal"} role="dialog">
            <PageContainer>
                <AlertBox>
                    <p>Jesteś bliski usunięcia jednej z książek. Czy na pewno ?</p>
                </AlertBox>
                <div className="search__buttons">
                    <Button onClick={handleRemove} className="button--problem" type="submit">
                        Usuń
                    </Button>
                    <Button onClick={handleCancel} className="button--ok" type="reset">
                        Pozostaw
                    </Button>
                </div>
            </PageContainer>
        </Modal>
    );
});

export default RemoveItemWarning;
