import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { ErrorMessage } from "components";
import { withLinkToSearchPageHOC } from "hocs";
import { useNavigate } from "react-router-dom";
import { LogoFactory } from "components";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <LogoFactory />
            <ErrorMessage errorMessage={t("noPage.message", { url: decodeURIComponent(window.location.href) })} />
        </>
    );
};

export default React.memo(withLinkToSearchPageHOC(NotFoundPage));
