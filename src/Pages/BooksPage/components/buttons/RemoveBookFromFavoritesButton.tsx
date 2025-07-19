import debounce from "lodash/debounce";
import * as React from "react";

import { useDispatchAction, useFavoriteBooks } from "hooks";

import RoundIconButton from "./RoundIconButton";

interface Props {
    bookID: string;
}

const RemoveBookFromFavoritesButton = (props: Props) => {
    const { bookID } = props;
    const { removeBook } = useDispatchAction();
    const { favoriteBooks } = useFavoriteBooks();
    //eslint-disable-next-line react-hooks/exhaustive-deps
    const RemoveFromFavorites = React.useCallback(
        debounce(() => {
            if (bookID) {
                favoriteBooks.remove(bookID);
                removeBook(bookID);
            }
        }, 200),
        [removeBook, bookID]
    );

    return <RoundIconButton type="removeBookFromFavorites" ID={bookID} clickHandler={RemoveFromFavorites} />;
};
export default RemoveBookFromFavoritesButton;
