/* eslint-disable no-restricted-globals */

import { getNumberOfPages, getSinglePageData, filtrate, sorting } from "js/tableHelpers";
import { GetTableDataParams } from "types";
import { isEmpty } from "lodash/fp";

self.onmessage = (e: MessageEvent<GetTableDataParams>) => {
    const { filter, sort, pageNumber } = { ...e.data.args };
    const books = e.data.books;

    const filteredBooks = filter && !isEmpty(filter) ? filtrate(books, filter) : books;
    const sortedBooks = sort.currentSortColumn ? sorting(filteredBooks, sort.isSortOrderDescending, sort.currentSortColumn) : filteredBooks;
    const singlePageData = getSinglePageData(pageNumber, sortedBooks);
    const numberOfPages = getNumberOfPages(sortedBooks);
    const currentPageNumber = pageNumber > numberOfPages ? numberOfPages : pageNumber;
    const data = { singlePageData, currentPageNumber, numberOfPages };

    self.postMessage(data);
};

export {};
