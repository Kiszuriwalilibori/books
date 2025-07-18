import debounce from "lodash/debounce";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import RoundIconButton from "./RoundIconButton";
import Paths from "routing";

import { useDispatchAction } from "hooks";
import { DETAILS_FIELDS, GOOGLE_API } from "config";
import { isOnlineSelector } from "store/reducers/onlineReducer";

interface Props {
    bookID: string;
}
export const ShowBookDetailsButton = (props: Props) => {
    const { bookID } = props;
    const navigate = useNavigate();
    const { fetchDetails } = useDispatchAction();
    const isOnline = useSelector(isOnlineSelector);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getBookDetails = useCallback(
        debounce(() => {
            if (bookID) {
                const path = GOOGLE_API + bookID + DETAILS_FIELDS;
                fetchDetails(path);
                navigate(Paths.details);
            }
        }, 200),
        [bookID]
    );

    return <RoundIconButton isDisabled={!isOnline} type="showFullInfo" ID={bookID} clickHandler={getBookDetails} />;
};

export default ShowBookDetailsButton;
