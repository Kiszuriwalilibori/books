import * as React from "react";
import { Modal } from "@mui/material";

import { useRemoveBookModalVisibilityContext } from "Contexts";
import { useDispatchAction } from "hooks";
import { Button } from "components";
/**
 * @description Renders modal component with two option buttons: confirming remove and cancelling remove
 * @returns modal component
 */
const RemoveItemWarningModal = () => {
    const { removeBook } = useDispatchAction();
    const { closeModal, target: RemovableTarget, isVisible: isModalVisible } = useRemoveBookModalVisibilityContext();

    const remove: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        RemovableTarget && removeBook(RemovableTarget);
        closeModal();
    }, [RemovableTarget, closeModal, removeBook]);

    const cancel: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    return (
        <Modal open={isModalVisible} aria-labelledby="Remove Book Warning" aria-describedby="modal-modal-description" role="dialog">
            <div className="PageContainer">
                <div className="CustomBox">
                    <p>Jesteś bliski usunięcia jednej z książek. Czy na pewno?</p>
                </div>
                <div className="search__buttons">
                    <Button onClick={remove} className="button--problem" type="submit">
                        Usuń
                    </Button>

                    <Button onClick={cancel} className="button--ok" type="reset">
                        Pozostaw
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default RemoveItemWarningModal;
