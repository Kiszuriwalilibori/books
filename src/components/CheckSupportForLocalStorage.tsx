import * as React from "react";

import { useFavorites } from "hooks";

const CheckSupportForLocalStorage = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { favorites } = useFavorites();

  React.useEffect(() => {
    favorites.manageSupport() && favorites.showSize();
  }, [favorites]);

  return children;
};

export default CheckSupportForLocalStorage;
