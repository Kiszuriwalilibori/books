import { BookRecordsArray } from "types";

import { columns, ContentCategoryEnum } from "../../../models/Columns";

export type TrimFunctions = {
  [key in ContentCategoryEnum]: Function;
};

type FunctionObject = { [key: string]: Function };

const trimFunctions: TrimFunctions = {
  /**
   * trims other then number-like strings
   * @param str given string
   * @returns trimmed string
   */
  [ContentCategoryEnum.string]: (str: string) => {
    while (str.charCodeAt(0) <= 64 && str.length > 1) {
      str = str.slice(1);
    }
    return str;
  },
  /**
   * trims number-like strings
   * @param str given string
   * @returns trimmed string
   */
  [ContentCategoryEnum.numericalString]: (str: string) => {
    while (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
      str = str.slice(1);
    }

    return str;
  },
};

const sorts: FunctionObject = {
  /**
   * performs sort on strings - general and number-like
   * @param sortable
   * @param order
   * @param key
   * @param trim
   */

  general: (sortable: BookRecordsArray, order: boolean, key: number, trim: Function) => {
    sortable.sort((leftHand, rightHand) => {
      const trimmedLeftHand = trim(leftHand[key]);
      const trimmedRightHand = trim(rightHand[key]);

      if (order) {
        if (trimmedLeftHand < trimmedRightHand) {
          return 1;
        }
        if (trimmedLeftHand > trimmedRightHand) {
          return -1;
        }

        return 0;
      }
      if (trimmedLeftHand < trimmedRightHand) {
        return -1;
      }
      if (trimmedLeftHand > trimmedRightHand) {
        return 1;
      }

      return 0;
    });
  },
};

/**
 * Sorts table
 * @param table array to be sorted.It is array of string arrays
 * @param order indicates order of sorting (true: decrasing false: increasing)
 * @param key index by which array will be sorted
 * @returns sorted array or same array in case of errors
 */
export const sort = (sortable: BookRecordsArray, order: boolean, key: number) => {
  try {
    if (!Array.isArray(sortable)) {
      throw new Error("Attempt to call sort function with not an array as argument");
    }
    if (!sortable.length) {
      throw new Error("Attempt to sort an empty table");
    }
    if (key || key === 0) {
      const trim = trimFunctions[columns.contentCategories[key] as ContentCategoryEnum];
      sorts.general(sortable, order, key, trim);
    }
  } catch (err) {
    const error = err as {
      message: string;
    };
  } finally {
    return sortable;
  }
};

export default sort;
