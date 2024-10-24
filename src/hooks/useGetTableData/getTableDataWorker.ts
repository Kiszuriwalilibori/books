/* eslint-disable no-restricted-globals */

import getNumberOfPages from "js/BooksManager/tableHelpers/getNumberOfPages";
import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";
import sort from "js/BooksManager/tableHelpers/sort";
import { GetTableDataParams } from "types";

self.onmessage = (e: MessageEvent<GetTableDataParams>) => {
    const sortedBooks = e.data.currentSortColumn ? sort(e.data.books, e.data.isSortOrderDescending, e.data.currentSortColumn) : e.data.books;
    const singlePageData = getSinglePageData(e.data.pageNumber, sortedBooks);
    const numberOfPages = getNumberOfPages(sortedBooks);
    const currentPageNumber = e.data.pageNumber > numberOfPages ? numberOfPages : e.data.pageNumber;
    const data = { singlePageData, currentPageNumber };

    self.postMessage(data);
};

export {};
