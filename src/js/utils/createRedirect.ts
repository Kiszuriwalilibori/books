import Paths from "Routing/Paths";

import { RedirectType } from "types";
import { NavigateFunction } from "react-router-dom";

const createRedirect = (history: NavigateFunction) => {
  return (): RedirectType => ({
    not_found: () => {
      history(Paths.not_found);
    },
    error: () => {
      history(Paths.error);
    },
    data: () => {
      history(Paths.data);
    },
    connecting: () => {
      history(Paths.connecting);
    },
    individualBook: () => {
      history(Paths.individualBook);
    },
    books: () => {
      history(Paths.books);
    },
    search: () => {
      history(Paths.search);
    },
    no_page:()=>{history(Paths.no_page)},
  });
};

export default createRedirect;
