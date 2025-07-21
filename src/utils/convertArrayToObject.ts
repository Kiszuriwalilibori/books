import { columns } from "models";
import { Book } from "types";

export const convertArrayToObject = (book: string[] | Book) => {
    if (Array.isArray(book)) {
        const obj = {} as Book;
        const fields = [...columns.sourceFields];

        book.forEach((item: any, index: number) => {
            obj[fields[index]] = item;
        });
        return obj;
    } else {
        return book;
    }
};
export default convertArrayToObject;
