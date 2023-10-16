import { BooksState } from "types";
import { ITEMS_PER_PAGE } from "config";

/**
 * calculates number of pages which is later applied in pagination
 * @param ary
 * @returns number of pages as integer
 */
export const getNumberOfPages = (ary: BooksState["books"]): number => {
    return Math.ceil(ary.length / ITEMS_PER_PAGE);
};

export default getNumberOfPages;
