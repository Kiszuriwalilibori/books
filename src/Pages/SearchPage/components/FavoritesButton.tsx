import { connect } from "react-redux";

import { Button } from "components";
import { useFavorites, useCreateRedirect } from "hooks";
import { thunkFetchFromFavorites } from "js/redux/thunks/thunkFetchFromFavorites";

export interface Props {
    fetchFromFavorites: Function;
}

export function FavoritesButton(props: Props): JSX.Element {
    const redirect = useCreateRedirect();
    const { fetchFromFavorites } = props;
    const { favorites } = useFavorites();

    const processFavorites = () => {
        fetchFromFavorites();
        redirect.books();
    };

    return (
        <Button disabled={!favorites.containsBooks()} className="button--favorites" onClick={processFavorites}>
            Ulubione
        </Button>
    );
}

const mapDispatchToProps = (dispatch: Function) => ({
    fetchFromFavorites: () => dispatch(thunkFetchFromFavorites()),
});

export default connect(null, mapDispatchToProps)(FavoritesButton);
