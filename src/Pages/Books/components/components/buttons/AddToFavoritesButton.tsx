import { connect } from "react-redux";

import { useCreateDebouncedCallback, useFavorites, useCreateRedirect } from "hooks";
import { thunkAddBookToFavorites, ThunkAddBookToFavoritesArgs } from "js/redux/thunks/thunkAddBookToFavorites";

import RoundButton from "./RoundButton";

interface Props {
    id: string;
    thunkAddBookToFavorites: Function;
}

export const AddToFavoritesButton = (props: Props) => {
    const { id, thunkAddBookToFavorites } = props;
    const redirect = useCreateRedirect();
    const { favorites } = useFavorites();
    const AddToFavorites = useCreateDebouncedCallback(thunkAddBookToFavorites, {
        redirect: redirect,
        favorites: favorites,
    });

    return <RoundButton type="addToFavorites" id={id} clickHandler={e => AddToFavorites(e.target)} />;
};

const mapDispatchToProps = (dispatch: Function) => ({
    thunkAddBookToFavorites: ({ redirect, id, favorites }: ThunkAddBookToFavoritesArgs) => dispatch(thunkAddBookToFavorites({ redirect, id, favorites })),
});

export default connect(null, mapDispatchToProps)(AddToFavoritesButton);
