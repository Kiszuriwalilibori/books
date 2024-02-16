import { BooksState } from "types";
import { columns } from "models";
/**
 * compares two items in a specific way
 * @param pattern
 * @param val
 * @returns boolean representing result of comparision
 */
const comparator = (pattern: string | number | undefined, val: string | number) => !!(String(val).toLowerCase().includes(String(pattern).toLowerCase()) || pattern === "" || pattern === undefined);
/**
 * filters data  with filtr
 * @param data: content of data array
 * @param filtr
 * @returns filtered data
 */
export const filtrate = (data: BooksState["data"], filtr: BooksState["filter"]) => {
    let filtrationResult: typeof data = [];

    const filterNotEmpty = !!(filtr && Object.getOwnPropertyNames(filtr).length);

    if (filterNotEmpty) {
        const temporaryData = [...data];
        console.log("data", data, "filtr", filtr);
        const pattern = columns.headers.map(element => {
            return filtr.hasOwnProperty(element) ? filtr[element] : "";
        });

        /**
         * compares two arrays in a special way
         * @param patternArray
         * @param apiArray
         * @returns boolean representing result of comparision
         */
        const compareRows = (patternArray: (string | number | undefined)[], apiArray: string[]) => {
            let result = true;

            if (patternArray.length === apiArray.length - 1) {
                result = patternArray.every((element, index) => {
                    return comparator(element, apiArray[index]) === false ? false : true;
                });
            } else {
                result = false;
            }

            return result;
        };

        filtrationResult = temporaryData.filter(row => compareRows(pattern, row));
    }

    return filterNotEmpty ? filtrationResult : data;
};

export default filtrate;
