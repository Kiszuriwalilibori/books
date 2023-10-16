import React, { useEffect } from "react";

import { ErrorMessage } from "components";
import { withLinkToSearchPageHOC } from "hocs";
import { useNavigate } from "react-router-dom";
import { LogoFactory } from "components";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <LogoFactory />
            <ErrorMessage errorMessage={`Strona o adresie ${decodeURIComponent(window.location.href)} nie istnieje`} />
        </>
    );
};

export default React.memo(withLinkToSearchPageHOC(NotFoundPage));
