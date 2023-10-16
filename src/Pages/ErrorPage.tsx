import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

import { ErrorMessage, LogoFactory } from "components";
import { withLinkToSearchPageHOC } from "hocs";
import { useTypedSelector } from "hooks";

export const ErrorPage = () => {
    const navigate = useNavigate();

    const gotoPreviousPage = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    useEffect(() => {
        let timer = setTimeout(() => gotoPreviousPage(), 10000);
        return () => {
            clearTimeout(timer);
        };
    }, [gotoPreviousPage]);

    const errorMessage = useTypedSelector(state => state.error.errorMessage, shallowEqual);

    return (
        <>
            <LogoFactory />
            <ErrorMessage errorMessage={errorMessage} clickHandler={gotoPreviousPage} />
        </>
    );
};

export default withLinkToSearchPageHOC(ErrorPage);
