import join from "lodash/join";

import { columns } from "models";
import { Books, SearchableFields, NotSearchableFields, BookRecord, FlatBookRecord } from "types";

type Headers = Partial<Record<SearchableFields | NotSearchableFields, any>>;
type FormattedFetchedRecord = Partial<Record<SearchableFields | NotSearchableFields, string>>;

class FormatFetchedBooks {
    private static fields = columns.sourceFields;
    /**
     * Iterates any nested or simple object to find field with given key
     * @param obj object
     * @param key key being subject of iteration
     * @returns field with given key
     * zasadniczo jest to to samo co getValue ale z typowaniem
     */
    protected static iterate(obj: { [key: string]: any }, key: string): Object | undefined {
        let result;
        for (let property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (property === key) {
                    return obj[key];
                } else if (typeof obj[property] === "object") {
                    result = FormatFetchedBooks.iterate(obj[property], key);
                    if (typeof result !== "undefined") {
                        return result;
                    }
                }
            }
        }
    }

    /**
     * creates record with keys taken from given array and values from given object(API data record)
     * @param record API data record
     * @returns object with keys from given array and values from API data record
     */
    private static createBookDataRecord(record: BookRecord) {
        let bookData = { ...record };
        const bookDataRecord = {} as any;
        this.fields.forEach(field => {
            bookDataRecord[field] = this.iterate(bookData, field);
        });
        return bookDataRecord as FlatBookRecord;
    }

    /**
     * Function checks and corrects if needed values of given record. If field has been undefined originally, it receives value of single space. If it was empty string, it is replaced by single space. If array it is flattened.
     * @param bookData object with keys from given table and values from API record
     * @returns corrected record object
     */
    private static formatBookData(bookData: Headers): FormattedFetchedRecord {
        const formattedBookData = { ...bookData };
        this.fields.forEach(field => {
            if (typeof formattedBookData[field] === "undefined" || formattedBookData[field] === "") {
                formattedBookData[field] = " ";
            }
            if (Array.isArray(bookData[field])) {
                formattedBookData[field] = join(formattedBookData[field], ", ");
            }
        });

        return formattedBookData;
    }
    /**
     * maps object values to array/ tricky - in the future the flow in .Run will finish with object. So this is temporary solution to have it inline with rest of app
     * @param bookDataRecord
     * @returns array of strings ordered accordingly to array fields
     */
    private static createBookDataArray(bookDataRecord: FormattedFetchedRecord) {
        const bookDataArray: string[] = [];
        this.fields.forEach(field => {
            bookDataArray.push(bookDataRecord[field]!);
        });

        return bookDataArray;
    }
    static Run(books: BookRecord[]): Books {
        let result = books.map(record => {
            return this.createBookDataArray(this.formatBookData(this.createBookDataRecord(record)));
        });
        return result;
    }
}

export default FormatFetchedBooks;

export const formatBooks = (foundBooks: BookRecord[]) => {
    const y = foundBooks.map((item: any) => {
        const id = item.id;
        const { volumeInfo, title, authors, subtitle, publishedDate, language, categories } = item.volumeInfo;

        return { id, volumeInfo, title, authors, subtitle, publishedDate, language, categories } as FlatBookRecord;
    });

    y.forEach(item => {
        for (let property in item) {
            if (!(item as any)[property]) {
                (item as any)[property] = " ";
            }
            if (Array.isArray((item as any)[property])) {
                (item as any)[property] = join((item as any)[property], ", ");
            }
        }
    });
    return y;
};
