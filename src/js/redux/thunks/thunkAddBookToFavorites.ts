import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import { FAVORITE_FIELDS, GOOGLE_API } from "config";
import { showError, setIsLoading } from "../actionCreators";
import { RootStateType, FavoriteBooks, ShowMessage } from "types";
import { NavigateFunction } from "react-router-dom";
import Paths from "routing/Paths";
import { getValue, isErrorCode } from "js/utils";

export interface ThunkAddBookToFavoritesArgs {
    bookID: string;
    favorites: FavoriteBooks;
    navigate: NavigateFunction;
    showMessage: ShowMessage;
}

export const thunkAddBookToFavorites = ({ bookID, favorites, navigate, showMessage }: ThunkAddBookToFavoritesArgs): ThunkAction<void, RootStateType, unknown, AnyAction> => {
    return async dispatch => {
        const handleError = (errorMessage: string) => {
            dispatch(
                showError({
                    isError: true,
                    errorMessage,
                })
            );
            navigate(Paths.error);
            dispatch(setIsLoading(false));
            return;
        };
        const path = GOOGLE_API + bookID + FAVORITE_FIELDS;
        if (favorites.contain(bookID)) {
            showMessage.warning("Książka jest już w Ulubionych, nie można dodać jej po raz drugi");
            return;
        } else {
            dispatch(setIsLoading(true));
            const response = await fetch(path).catch(error => {
                dispatch(setIsLoading(false));
                dispatch(
                    showError({
                        isError: true,
                        errorMessage: error.message ? error.message : `Podczas pobierania danych ksiązki o ID = ${bookID} wystapił błąd`,
                    })
                );

                navigate(Paths.error);
                return;
            });
            if (response) {
                const data = await response.json();
                if (data) {
                    try {
                        const code = getValue(data, "code");

                        if (isErrorCode(code)) {
                            const errorMessage = getValue(data, "message") || "Podczas próby dodania książki do ulubionych wystąpił błąd";
                            handleError(errorMessage);
                            return;
                        } else {
                            favorites.add(bookID, data);
                            dispatch(setIsLoading(false));
                        }
                    } catch (error) {
                        const errorMessage = error instanceof Error ? error.message : "Podczas próby dodania książki do ulubionych wystąpił błąd";
                        handleError(errorMessage);
                        return;
                    }
                }
            }
        }
    };
};

export default thunkAddBookToFavorites;
