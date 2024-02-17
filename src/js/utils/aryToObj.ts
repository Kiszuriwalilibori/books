import { columns } from "models/columns";
import { FlatBookRecord } from "types";

export const aryToObj = (book: string[] | FlatBookRecord) => {
    if (Array.isArray(book)) {
        const obj = {} as FlatBookRecord;
        const fields = [...columns.sourceFields];

        book.forEach((item: any, index: number) => {
            obj[fields[index]] = item;
        });
        return obj;
    } else {
        return book;
    }
};
export default aryToObj;
