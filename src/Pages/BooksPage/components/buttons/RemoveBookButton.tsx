import RoundIconButton from "./RoundIconButton";

import { useCreateDebouncedCallback, useAppDispatch } from "hooks";
import { showRemoveBookModal } from "store/actionCreators";
import { BookID } from "types";

interface Props {
    bookID: BookID["id"];
}
const RemoveBookButton = (props: Props) => {
    const { bookID } = props;
    const dispatch = useAppDispatch();
    const showWarningModal = (bookID: BookID) => dispatch(showRemoveBookModal(bookID));
    const RemoveBook = useCreateDebouncedCallback(showWarningModal, { id: bookID });

    return <RoundIconButton type="removeBook" ID={bookID} clickHandler={RemoveBook} />;
};

export default RemoveBookButton;
