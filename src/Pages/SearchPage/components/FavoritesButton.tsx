import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import Paths from "routing/Paths";

import { Button } from "components";
import { useFavoriteBooks } from "hooks";
import { thunkFetchFromFavorites } from "js/redux/thunks/thunkFetchFromFavorites";
import { AppDispatch, RootStateType } from "types";

export interface Props {
    fetchFromFavorites: () => void;
    isLoading: boolean;
}

export function FavoritesButton(props: Props): JSX.Element {
    const navigate = useNavigate();
    const { fetchFromFavorites, isLoading } = props;
    const { favoriteBooks } = useFavoriteBooks();

    const processFavorites = () => {
        fetchFromFavorites();
        navigate(Paths.books);
    };

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
