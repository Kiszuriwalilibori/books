import { FlatBookRecord } from "types";

interface GetTableData {
    books: FlatBookRecord[];
    numberOfPages: number;
    pageNumber: number;
}

export { default } from "./useGetTableData";
