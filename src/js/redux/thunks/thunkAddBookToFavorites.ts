import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { googleAPI } from "config";
import { showError, toggleSnackBar } from "../actionCreators";
import { RedirectType, RootStateType, Favorites } from "types";
import { createMessageSnackBarTextContent } from "js/utils";

export interface ThunkAddBookToFavoritesArgs {
    redirect: RedirectType;
    id: string;
    favorites: Favorites;
}

export const thunkAddBookToFavorites = ({ redirect, id, favorites }: ThunkAddBookToFavoritesArgs): ThunkAction<void, RootStateType, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const path = googleAPI + id;

        fetch(path)
            .then(res => res.json())
            .then(json => {
                if (json) {
                    try {
                        favorites.add(id, json);
                        dispatch(toggleSnackBar(createMessageSnackBarTextContent("addedToFavorites", json.volumeInfo.title)));
                    } catch (error) {
                        dispatch(
                            showError({
                                isError: true,
                                errorMessage: "An attempt to add item to local storage caused error",
                            })
                        );
                        redirect.error!();
                    }
                } else {
                    redirect.not_found!();
                }
            })
            .catch(error => {
                const result = {
                    isError: true,
                    errorMessage: error.message,
                };
                dispatch(showError(result));
                redirect.error!();
            });
    };
};
