import { connect } from "react-redux";

import thunkFetchIndividualBook from "js/redux/thunks/thunkfetchIndividualBook";
import RoundButton from "./RoundButton";

import { useCreateDebouncedCallback, useCreateRedirect } from "hooks";
import { RedirectType } from "types";
interface thunkFetchIndividualBookArgsType {
    redirect: RedirectType;
    id: string;
}

interface Props {
    id: string;
    thunkFetchIndividualBook: Function;
}
export const ShowFullInfoButton = (props: Props) => {
    const { id, thunkFetchIndividualBook } = props;

    const redirect = useCreateRedirect();

    const fetchIndividualBook = useCreateDebouncedCallback(thunkFetchIndividualBook, {
        redirect: redirect,
    });

    return (
        <RoundButton
            type="showFullInfo"
            id={id}
            clickHandler={e => {
                fetchIndividualBook(e.target);
            }}
        />
    );
};

const mapDispatchToProps = (dispatch: Function) => ({
    thunkFetchIndividualBook: ({ redirect, id }: thunkFetchIndividualBookArgsType) => {
        dispatch(thunkFetchIndividualBook({ redirect, id }));
    },
});

export default connect(null, mapDispatchToProps)(ShowFullInfoButton);
