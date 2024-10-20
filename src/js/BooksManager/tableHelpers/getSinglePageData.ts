import { BooksState } from "types";
import { ITEMS_PER_PAGE } from "config";
import getNumberOfPages from "./getNumberOfPages";

/**
 * extracts from all data a part being given page content
 * @param index index of first element to be extracted in the array
 * @param dataArray array with data
 * @returns array with rows being content of current page
 */
export const getSinglePageData = (index: number, dataArray: BooksState["books"]): BooksState["books"] => {
    const limit = getNumberOfPages(dataArray);
    if (index > limit) index = limit;
    const first = ITEMS_PER_PAGE * (index - 1);
    const last = first + ITEMS_PER_PAGE > dataArray.length ? dataArray.length : first + ITEMS_PER_PAGE;

    return dataArray.slice(first, last);
};

export default getSinglePageData;
