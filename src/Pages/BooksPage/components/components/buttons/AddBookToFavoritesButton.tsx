import React from "react";

import { connect } from "react-redux";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

import RoundIconButton from "./RoundIconButton";

import { useFavoriteBooks, useMessage } from "hooks";
import { thunkAddBookToFavorites, ThunkAddBookToFavoritesArgs } from "js/redux/thunks";
import { AppDispatch, Book, RootStateType } from "types";

interface OwnProps {
    bookID: string;
}

interface Props extends OwnProps {
    thunkAddBookToFavorites: (arg0: ThunkAddBookToFavoritesArgs) => void;
    book: Book | undefined;
    isLoading: RootStateType["loading"]["isLoading"];
}

export const AddBookToFavoritesButton = (props: Props) => {
    const { bookID, thunkAddBookToFavorites, isLoading } = props;
    const { favoriteBooks } = useFavoriteBooks();
    const navigate = useNavigate();
    const showMessage = useMessage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const AddBookToFavorites = React.useCallback(
        debounce(() => {
            if (bookID) {
                thunkAddBookToFavorites({ bookID, favorites: favoriteBooks, navigate, showMessage });
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
