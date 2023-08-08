import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { googleAPI } from "config";
import { fetchDetails } from "../actionCreators";
import { RedirectType, RootStateType } from "types";

interface Args {
    redirect: RedirectType;
    id: string;
}
const thunkFetchIndividualBook = ({ redirect, id }: Args): ThunkAction<void, RootStateType, unknown, AnyAction> => {
    return async dispatch => {
        const path = googleAPI + id;
        dispatch(fetchDetails(path));
        redirect.individualBook();
    };
};

export default thunkFetchIndividualBook;
