import { BooksState, FlatBookRecord, ID } from "types";

/**
 * removes row from array of rows
 * @param books given array
 * @param bookID string identifying row
 * @returns  array without subject row
 */
export const remove = (books: BooksState["data"], bookID: ID) => {
    let remainingBooks = [...books];

    const comparator = (item: FlatBookRecord) => {
        return item.id !== bookID;
    };

    try {
        remainingBooks = books.filter(comparator);
    } catch (err) {
        return remainingBooks;
    } finally {
        return remainingBooks;
    }
};
export default remove;
