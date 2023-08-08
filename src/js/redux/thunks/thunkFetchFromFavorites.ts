import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { RootStateType } from "types";
import { FilteredStorage, ReformatFetchedBooks } from "js/utils";
import { fetchBooksFromFavorites, setIsFromNetwork } from "../actionCreators";

export function thunkFetchFromFavorites(): ThunkAction<void, RootStateType, unknown, AnyAction> {
    return async dispatch => {
        const favorites = new FilteredStorage(item => item.kind === "books#volume");
        const result = { data: ReformatFetchedBooks.Run(favorites.getAllItems()) };

        dispatch(fetchBooksFromFavorites(result));
        dispatch(setIsFromNetwork(false));
    };
}
