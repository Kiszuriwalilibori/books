import { Books, Book, BooksState, ID } from "types";

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
            return item[item.length - 1] !== bookID;
        };

        remainingBooks = books.filter(comparator);
    } catch (err) {
        return remainingBooks;
    } finally {
        return remainingBooks;
    }
};
export default remove;
