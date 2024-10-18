/* eslint-disable no-restricted-globals */

import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";

import { GetTableData } from "types";

self.onmessage = (e: MessageEvent<GetTableData>) => {
    // const result = e.data * 2;
    const data = getSinglePageData(e.data.pageNumber, e.data.books, e.data.numberOfPages);
    // postMessage(result);
    self.postMessage(data);
};

export {};
