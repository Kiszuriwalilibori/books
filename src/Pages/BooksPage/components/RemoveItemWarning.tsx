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

const RemoveItemWarning = React.forwardRef((props, ref) => {
    const { handleRemove, isRemoveBookModalVisible, closeModal } = useRemoveBook();
    const handleCancel = useDebouncedCallback<HTMLButtonElement>(closeModal);

    return (
        <Modal open={isRemoveBookModalVisible} aria-label={"remove warning modal"} role="dialog">
            <PageContainer>
                <AlertBox>
                    <p>Jesteś bliski usunięcia jednej z książek. Czy na pewno ?</p>
                </AlertBox>
                <div>
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