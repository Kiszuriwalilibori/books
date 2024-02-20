import join from "lodash/join";
import { BookRecord, FlatBookRecord, FlatBookRecordKey } from "types/index";

export const formatFetchedDataAsBooks = (foundBooks: BookRecord[]) => {
    const extractedContent = foundBooks.map((item: BookRecord) => {
        const id = item.id;
        const { /*volumeInfo,*/ title, authors, subtitle, publishedDate, language, categories } = item.volumeInfo;

        return { authors, categories, id, language, publishedDate, subtitle, /* volumeInfo, */ title } as FlatBookRecord;
    });

    extractedContent.forEach(item => {
        for (let property in item) {
            if (!item[property as FlatBookRecordKey]) {
                (item as any)[property as FlatBookRecordKey] = " ";
            }
            if (Array.isArray(item[property as FlatBookRecordKey])) {
                (item as any)[property as FlatBookRecordKey] = join(item[property as FlatBookRecordKey], ", ");
            }
        }
    });
    return extractedContent;
};

export default formatFetchedDataAsBooks;
