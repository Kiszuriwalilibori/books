import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { BookRecord, RootStateType } from "types";
import { FilteredStorage, FormatFetchedBooks } from "js/utils";
import { storeBooks, setIsFromNetwork } from "../actionCreators";

export function thunkFetchFromFavorites(): ThunkAction<void, RootStateType, unknown, AnyAction> {
    return dispatch => {
        const favorites = new FilteredStorage(item => item.kind === "books#volume");
        const retrievedFromFavorites = FormatFetchedBooks.Run(favorites.getAll() as BookRecord[]);
        dispatch(storeBooks(retrievedFromFavorites));
        dispatch(setIsFromNetwork(false));
    };
}
