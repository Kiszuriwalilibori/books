import { aryToObj } from "js/utils";
import { Book, BooksState, ID } from "types";

/**
 * removes row from array of rows
 * @param books given array
 * @param bookID string identifying row
 * @returns  array without subject row
 */
export const remove = (books: BooksState["data"], bookID: ID) => {
    let remainingBooks = [...books];
    try {
        const comparator = (item: Book) => {
            const obj = aryToObj(item); // wystarczy tu usunąć
            return obj.id !== bookID;
        };

        remainingBooks = books.filter(comparator);
    } catch (err) {
        return remainingBooks;
    } finally {
        return remainingBooks;
    }
};
export default remove;
