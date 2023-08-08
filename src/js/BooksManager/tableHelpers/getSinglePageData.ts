import { BookRecordsArray } from "types";

import { itemsPerPage } from "config";

/**
 * extracts from all data a part being given page content
 * @param index index of first element to be extracted in the array
 * @param dataArray array with data
 * @param limit number of pages in the array
 * @returns array with rows being content of current page
 */
export const sliceSinglePageData = (index: number, dataArray: BookRecordsArray, limit: number): BookRecordsArray => {
  if (index > limit) index = limit;
  const first = itemsPerPage * (index - 1);
  const last = first + itemsPerPage > dataArray.length ? dataArray.length : first + itemsPerPage;

  return dataArray.slice(first, last);
};

export default sliceSinglePageData;
