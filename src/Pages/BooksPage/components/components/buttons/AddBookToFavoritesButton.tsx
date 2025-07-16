import React from "react";

import { connect } from "react-redux";
import { debounce } from "lodash";

import RoundIconButton from "./RoundIconButton";

import { useFavoriteBooks, useForceRender } from "hooks";

import { Book, RootStateType } from "types";
import { FAVORITE_BOOK_IDENTIFIER } from "config";

interface OwnProps {
    bookID: string;
}

interface Props extends OwnProps {
    book: Book | undefined;
    isLoading: RootStateType["loading"]["isLoading"];
}

function createFavorite(book: Book) {
    return { ...book, ...{ kind: FAVORITE_BOOK_IDENTIFIER } };
}

export const AddBookToFavoritesButton = (props: Props) => {
    const { bookID, isLoading, book } = props;
    const { favoriteBooks } = useFavoriteBooks();
    const forceRender = useForceRender();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const AddBookToFavorites = React.useCallback(
        debounce(() => {
            if (book) {
                const favorite = createFavorite(book);
                const result = favoriteBooks.add(bookID, favorite);
                forceRender(result);
            }
        }, 200),
        [favoriteBooks, bookID]
    );

    return <RoundIconButton isDisabled={favoriteBooks.contain(bookID) || isLoading} type="addToFavorites" ID={bookID} clickHandler={AddBookToFavorites} />;
};

const mapStateToProps = (state: RootStateType, ownProps: OwnProps) => {
    return {
        book: state.books.books.find(book => (book as Book).id === ownProps.bookID),
        isLoading: state.loading.isLoading,
    };
};

export default connect(mapStateToProps, {})(AddBookToFavoritesButton);
