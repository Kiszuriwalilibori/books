import RoundIconButton from "./RoundIconButton";

import { useCreateDebouncedCallback } from "hooks";
import { useRemoveBookModalVisibilityContext } from "contexts";
import { BookID } from "types";

interface Props {
    bookID: BookID["id"];
}
const RemoveBookButton = (props: Props) => {
    const { bookID } = props;
    const { showWarningModal } = useRemoveBookModalVisibilityContext();
    const RemoveBook = useCreateDebouncedCallback(showWarningModal, { id: bookID });

    return <RoundIconButton type="removeBook" ID={bookID} clickHandler={RemoveBook} />;
};

export default RemoveBookButton;
