import React, { useEffect } from "react";

import { ErrorMessage } from "components";
import { wrappedInLinkToSearchHOC } from "HOCs";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
return (<ErrorMessage error={`Strona o adresie ${decodeURIComponent(window.location.href)} nie istnieje`  } />);
};

export default React.memo(wrappedInLinkToSearchHOC(NotFoundPage));
