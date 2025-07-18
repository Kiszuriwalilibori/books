import * as React from "react";
import { Modal } from "@mui/material";
import { useDebouncedCallback } from "hooks";
import { Button } from "components";
import { AlertBox, PageContainer } from "pages/styled";
import { useRemoveBook } from "hooks/useRemoveBook";

/**
 * @description Renders modal component with two option buttons: confirming remove and cancelling remove
 * @returns modal component
 */

const RemoveBookModal = React.forwardRef((props, ref) => {
    const { handleRemove, isRemoveBookModalVisible, closeModal } = useRemoveBook();
    const handleCancel = useDebouncedCallback<HTMLButtonElement>(closeModal);
    const cancelButtonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        if (isRemoveBookModalVisible) {
            // Focus the cancel button after modal is rendered
            const focusButton = () => {
                if (cancelButtonRef.current) {
                    cancelButtonRef.current.focus();
                }
            };

            setTimeout(focusButton, 100);
        }
    }, [isRemoveBookModalVisible]);

    return (
        <Modal open={isRemoveBookModalVisible} aria-label={"remove warning modal"} role="dialog" disableAutoFocus={true} disableEnforceFocus={true}>
            <PageContainer>
                <AlertBox>
                    <p>Jesteś bliski usunięcia jednej z książek. Czy na pewno ?</p>
                </AlertBox>
                <div>
                    <Button onClick={handleRemove} className="button--problem" type="submit">
                        Usuń
                    </Button>
                    <Button onClick={handleCancel} className="button--ok" type="reset" ref={cancelButtonRef}>
                        Pozostaw
                    </Button>
                </div>
            </PageContainer>
        </Modal>
    );
});

export default RemoveBookModal;
