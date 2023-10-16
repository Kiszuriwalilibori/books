import { PathKeys } from "types";

const Paths: { [key in PathKeys]: string } = {
    not_found: "/not_found",
    error: "/error",
    data: "/results",
    details: "/details",
    books: "/books",
    search: "/search",
    load: "/load_page",
    landing: "/",
    no_page: "*",
};

export default Paths;
