import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ErrorMessage } from "components";
import { wrappedInLinkToSearchHOC } from "HOCs";
import { useTypedSelector } from "hooks";

export const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const errorMessage = useTypedSelector(state => state.error.errorMessage, shallowEqual);

    return <ErrorMessage error={errorMessage} />;
};

export default wrappedInLinkToSearchHOC(ErrorPage);
