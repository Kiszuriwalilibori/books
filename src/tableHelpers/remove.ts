import { BooksState, Book, ID } from "types";

/**
 * removes row from array of rows
 * @param books given array
 * @param bookID string identifying row
 * @returns  array without subject row
 */
export const remove = (books: BooksState["books"], bookID: ID) => {
    const comparator = (item: Book) => {
        return item && item.id !== bookID;
    };

    return books.filter(comparator);
};
export default remove;
