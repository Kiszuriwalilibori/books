// import { connect } from "react-redux";
// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// import Paths from "routing";

// import { Button } from "components";
// import { useFavoriteBooks } from "hooks";
// import { thunkFetchFromFavorites } from "js/redux/thunks/thunkFetchFromFavorites";
// import { AppDispatch, RootStateType } from "types";

// export interface Props {
//     fetchFromFavorites: () => void;
//     isLoading: RootStateType["loading"]["isLoading"];
// }

// export function FavoritesButton(props: Props): JSX.Element {
//     const navigate = useNavigate();
//     const { fetchFromFavorites, isLoading } = props;
//     const { favoriteBooks } = useFavoriteBooks();

//     const processFavorites = useCallback(() => {
//         fetchFromFavorites();
//         navigate(Paths.books);
//     }, [fetchFromFavorites, navigate]);

//     return (
//         <Button disabled={!favoriteBooks.areNotEmpty() || isLoading} className="button--favorites" onClick={processFavorites}>
//             Ulubione
//         </Button>
//     );
// }

// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//     fetchFromFavorites: () => dispatch(thunkFetchFromFavorites()),
// });

// const mapStateToProps = (state: RootStateType) => ({
//     isLoading: state.loading.isLoading,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FavoritesButton);
import { connect } from "react-redux";
import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import Paths from "routing";

import { Button } from "components";
import { useFavoriteBooks } from "hooks";
import { thunkFetchFromFavorites } from "store/thunks/thunkFetchFromFavorites";
import { AppDispatch, RootStateType } from "types";

export interface Props {
    fetchFromFavorites: () => void;
    isLoading: RootStateType["loading"]["isLoading"];
}

export function FavoritesButton(props: Props): JSX.Element {
    const navigate = useNavigate();
    const { fetchFromFavorites, isLoading } = props;
    const { favoriteBooks } = useFavoriteBooks();

    const processFavorites = useCallback(() => {
        fetchFromFavorites();
        navigate(Paths.books);
    }, [fetchFromFavorites, navigate]);

    return (
        <Button disabled={!favoriteBooks.areNotEmpty() || isLoading} className="button--favorites" onClick={processFavorites}>
            Ulubione
        </Button>
    );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchFromFavorites: () => dispatch(thunkFetchFromFavorites()),
});

const mapStateToProps = (state: RootStateType) => ({
    isLoading: state.loading.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesButton);
