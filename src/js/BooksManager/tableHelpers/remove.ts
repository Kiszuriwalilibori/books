import { BookRecordsArray, BookRecord } from "types";

/**
 * removes row from array of rows
 * @param dataArray given array
 * @param id string identifying row
 * @returns  array without subject row
 */
export const remove = (dataArray: BookRecordsArray, id: string) => {
    let remainingArray = [...dataArray];
    try {
        if (!Array.isArray(dataArray)) {
            throw new Error("Argument array in function remove is not actual array or is empty");
        }

        const comparator = (item: BookRecord) => {
            return item[item.length - 1] !== id;
        };

        remainingArray = dataArray.filter(comparator);
    } catch (err) {
    } finally {
        return remainingArray;
    }
};
export default remove;
