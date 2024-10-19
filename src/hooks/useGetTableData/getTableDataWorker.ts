/* eslint-disable no-restricted-globals */

import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";

import { GetTableDataParams } from "types";

self.onmessage = (e: MessageEvent<GetTableDataParams>) => {
    const data = getSinglePageData(e.data.pageNumber, e.data.books);

    self.postMessage(data);
};

export {};
