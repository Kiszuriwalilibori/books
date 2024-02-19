import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { RootStateType } from "types";
import { FilteredStorage } from "js/utils";
import { storeBooks, setIsFromNetwork, showError } from "../actionCreators";
import { FAVORITE_BOOK_IDENTIFIER } from "config";

export function thunkFetchFromFavorites(): ThunkAction<void, RootStateType, unknown, AnyAction> {
    return dispatch => {
        try {
            const favorites = new FilteredStorage(item => item.kind === FAVORITE_BOOK_IDENTIFIER.kind);
            const booksRetrievedFromFavorites = favorites.getAll();
            dispatch(storeBooks(booksRetrievedFromFavorites));
            dispatch(setIsFromNetwork(false));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Podczas próby pobrania ulubionych wystąpił błąd";
            dispatch(
                showError({
                    isError: true,
                    errorMessage: errorMessage,
                })
            );
        }
    };
}
