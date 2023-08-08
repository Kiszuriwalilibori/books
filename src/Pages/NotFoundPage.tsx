import React from "react";


import { ErrorMessage } from "components";
import { wrappedInLinkToSearchHOC } from "HOCs";

export const NotFoundPage = () => <ErrorMessage error={"Nie znaleziono księżek spełniających podane kryteria"} />;

export default React.memo(wrappedInLinkToSearchHOC(NotFoundPage));
