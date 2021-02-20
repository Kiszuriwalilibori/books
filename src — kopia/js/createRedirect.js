import { paths } from "../fixtures/fixtures";

const createRedirect = hist => {
  return () => ({
    not_found: () => {
      hist.push(paths.not_found);
    },
    error: () => {
      hist.push(paths.error);
    },
    data: () => {
      hist.push(paths.data);
    },
    connecting: () => {
      hist.push(paths.connecting);
    },
    singleBook: () => {
      hist.push(paths.singleBook);
    },
    books: () => {
      hist.push(paths.books);
    },
    search: () => {
      hist.push(paths.search);
    },
  });
};

export default createRedirect;
