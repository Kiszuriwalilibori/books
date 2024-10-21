/* eslint-disable no-restricted-globals */

import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";
import sort from "js/BooksManager/tableHelpers/sort";
import { GetTableDataParams } from "types";

self.onmessage = (e: MessageEvent<GetTableDataParams>) => {
    const sortedBooks = e.data.currentSortColumn ? sort(e.data.books, e.data.isSortOrderDescending, e.data.currentSortColumn) : e.data.books;
    const data = getSinglePageData(e.data.pageNumber, sortedBooks);

    self.postMessage(data);
};

export {};
