import * as React from "react";

import { useLocation } from "react-router-dom";

import Paths from "routing";
import HiddenH1 from "./HiddenH1";
import Logo from "./Logo";

import { BooksPageHeader } from "./BooksPageHeader";

export const LogoFactory = () => {
    const location = useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    switch (location.pathname) {
        case Paths.books:
            return <BooksPageHeader />;

        case Paths.details:
            return null;
        case Paths.search:
            return (
                <>
                    <HiddenH1 label="Search Page" />
                    <Logo />
                </>
            );
        case Paths.landing:
            return <HiddenH1 label="Google Books Finder" />;
        case Paths.error:
            return <HiddenH1 label="Error Page" />;
        case Paths.no_page:
            return <HiddenH1 label="Non existing Page" />;
        case Paths.not_found:
            return <HiddenH1 label="Not found" />;
        default:
            return null;
    }
};

export default LogoFactory;
