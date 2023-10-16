import * as React from "react";

import { useFavoriteBooks } from "hooks";

const WithCheckSupportForLocalStorage = ({ children }: { children: JSX.Element }): JSX.Element => {
    const {
        favoriteBooks: { manageSupport, showSize },
    } = useFavoriteBooks();

    React.useEffect(() => {
        manageSupport() && showSize();
    }, [manageSupport, showSize]);

    return children;
};

export default WithCheckSupportForLocalStorage;
