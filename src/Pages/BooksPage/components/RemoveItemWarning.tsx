import * as React from "react";

import { useRemoveBookModalVisibilityContext } from "contexts";
import { useDispatchAction } from "hooks";
import { Button } from "components";
import { AlertBox, PageContainer } from "pages/styled";
import { BookID } from "types/types";
/**
 * @description Renders modal component with two option buttons: confirming remove and cancelling remove
 * @returns modal component
 */

const RemoveItemWarning = React.forwardRef((props, ref) => {
    const { removeBook } = useDispatchAction();
    const { closeModal, book } = useRemoveBookModalVisibilityContext();

    const remove: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        const { id } = book as BookID;
        book && removeBook(id);
        closeModal();
    }, [book, closeModal, removeBook]);

    const cancel: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
        closeModal();
    }, [closeModal]);

    return (
        <PageContainer>
            <AlertBox>
                <p>Jesteś bliski usunięcia jednej z książek. Czy na pewno ?</p>
            </AlertBox>
            <div className="search__buttons">
                <Button onClick={remove} className="button--problem" type="submit">
                    Usuń
                </Button>
                <Button onClick={cancel} className="button--ok" type="reset">
                    Pozostaw
                </Button>
            </div>
        </PageContainer>
    );
});

export default RemoveItemWarning;
