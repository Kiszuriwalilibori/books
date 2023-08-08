import { BookRecordsArray } from "types";
import { itemsPerPage } from "config";

/**
 * calculates number of pages which is later applied in pagination
 * @param ary
 * @returns number of pages as integer
 */
export const getNumberOfPages = (ary: BookRecordsArray): number => {
  return Math.ceil(ary.length / itemsPerPage);
};

export default getNumberOfPages;
