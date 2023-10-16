import React from "react";

import { BooksPageLogo } from "pages/styled";

export const BooksPageHeader = () => {
    return (
        <header>
            <BooksPageLogo>Książki znalezione</BooksPageLogo>
        </header>
    );
};

export default React.memo(BooksPageHeader);
