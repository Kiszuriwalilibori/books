import React from "react";

import { ErrorMessage, LogoFactory } from "components";
import { withLinkToSearchPageHOC } from "hocs";

export const NotFoundPage = () => (
    <>
        <LogoFactory />
        <ErrorMessage errorMessage={"Nie znaleziono książek spełniających podane kryteria"} />
    </>
);

export default React.memo(withLinkToSearchPageHOC(NotFoundPage));
