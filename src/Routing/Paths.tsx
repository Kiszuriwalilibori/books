import { PathKeys } from "types";

const Paths: { [key in PathKeys]: string } = {
    not_found: "/not_found",
    error: "/error",
    data: "/results",
    connecting: "/connecting",
    individualBook: "/individual_book",
    books: "/books",
    search: "/search",
    load: "/load_page",
    landing: "/",
    no_page: "*",
};

export default Paths;
