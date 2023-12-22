import React, { useState } from "react";

import { connect } from "react-redux";
import { debounce } from "lodash";

import RoundIconButton from "./RoundIconButton";

import { useFavoriteBooks } from "hooks";
import { thunkAddBookToFavorites, ThunkAddBookToFavoritesArgs } from "js/redux/thunks";
import { AppDispatch, Book, RootStateType } from "types";
import { columns } from "models/columns";
import { FAVORITE_BOOK_IDENTIFIER } from "config";

interface OwnProps {
    bookID: string;
}

interface Props extends OwnProps {
    thunkAddBookToFavorites: (arg0: ThunkAddBookToFavoritesArgs) => void;
    book: Book | undefined;
    isLoading: RootStateType["loading"]["isLoading"];
}

function createFavorite(book: Book) {
    const obj = {} as any;
    book.forEach((item, index) => {
        obj[columns.sourceFields[index]] = item;
    });
    return { ...obj, ...FAVORITE_BOOK_IDENTIFIER };
}

export const AddBookToFavoritesButton = (props: Props) => {
    const { bookID, isLoading, book } = props;
    const { favoriteBooks } = useFavoriteBooks();
    const [foo, setFoo] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const AddBookToFavorites = React.useCallback(
        debounce(() => {
            if (book) {
                const favoriteBook = createFavorite(book);
                const result = favoriteBooks.add(bookID, favoriteBook);
                setFoo(result); // that is only to force render and update favorites this way
            }
        }, 200),
        [favoriteBooks, bookID]
    );

    return <RoundIconButton isDisabled={favoriteBooks.contain(bookID) || isLoading} type="addToFavorites" ID={bookID} clickHandler={AddBookToFavorites} />;
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    thunkAddBookToFavorites: ({ bookID, favorites, navigate, showMessage }: ThunkAddBookToFavoritesArgs) => dispatch(thunkAddBookToFavorites({ bookID, favorites, navigate, showMessage })),
});

const mapStateToProps = (state: RootStateType, ownProps: OwnProps) => {
    return {
        book: state.books.books.find(book => book[book.length - 1] === ownProps.bookID),
        isLoading: state.loading.isLoading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBookToFavoritesButton);
