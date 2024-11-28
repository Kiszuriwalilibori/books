import { BooksState, Book, ID } from "types";

/**
 * removes row from array of rows
 * @param books given array
 * @param bookID string identifying row
 * @returns  array without subject row
 */
export const remove = (books: BooksState["books"], bookID: ID) => {
    let remainingBooks = [...books];

    const comparator = (item: Book) => {
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
