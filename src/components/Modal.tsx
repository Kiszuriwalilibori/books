import * as React from "react";
import { Modal } from "@mui/material";

/**
 * @description Renders modal component with two option buttons: confirming remove and cancelling remove
 * @returns modal component
 */

interface Props {
    isOpen: boolean;
    onClose?: () => void;
    content: React.ReactElement;
    label: string;
}
const RemoveItemWarningModal = (props: Props) => {
    const { isOpen, content, label } = props;

    return (
        <Modal open={isOpen} aria-label={label} role="dialog">
            {content}
        </Modal>
    );
};

export default RemoveItemWarningModal;
