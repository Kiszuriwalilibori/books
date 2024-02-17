import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { BookRecord, RootStateType } from "types";
import { FilteredStorage, FormatFetchedBooks } from "js/utils";
import { storeBooks, setIsFromNetwork, showError } from "../actionCreators";
import { FAVORITE_BOOK_IDENTIFIER } from "config";

export function thunkFetchFromFavorites(): ThunkAction<void, RootStateType, unknown, AnyAction> {
    return dispatch => {
        try {
            const favorites = new FilteredStorage(item => item.kind === FAVORITE_BOOK_IDENTIFIER);
            console.log("favorites", favorites.getAll());
            const retrievedFromFavorites = FormatFetchedBooks.Run(favorites.getAll() as BookRecord[]); // tu nie będzie trzeba nic formatować. favorites.getAll zwróci co trzeba
            dispatch(storeBooks(retrievedFromFavorites));
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
