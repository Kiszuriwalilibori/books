import { BookRecordsArray, FiltrationObject } from "types";

export const initialState = {
    data: [] as BookRecordsArray,
    errorMessage: "",
    books: [] as BookRecordsArray,
    filter: {} as FiltrationObject,
    currentPageNumber: 1,
    currentSortColumn: null as unknown as number,
    isSortOrderDescending: false,
    numberOfPages: 0,
    currentPageBooksData: [] as BookRecordsArray,
    singleBookData: [] as BookRecordsArray,
    test: [],
    sort: null,
};
