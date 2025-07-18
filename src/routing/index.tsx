import { PathKeys } from "types";

const Paths: { [key in PathKeys]: string } = {
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
