import join from "lodash/join";
import { Book, BookRecord, KeyOfBook } from "types";

export const formatFetchedDataAsBooks = (foundBooks: BookRecord[]) => {
    const extractedContent = foundBooks.map((item: BookRecord) => {
        const id = item.id;
        const { title, authors, subtitle, publishedDate, language, categories } = item.volumeInfo;

        return { authors, categories, id, language, publishedDate, subtitle, title } as Book;
    });

    extractedContent.forEach(item => {
        for (let property in item) {
            if (!item[property as KeyOfBook]) {
                (item as any)[property as KeyOfBook] = " ";
            }
            if (Array.isArray(item[property as KeyOfBook])) {
                (item as any)[property as KeyOfBook] = join(item[property as KeyOfBook], ", ");
            }
        }
    });
    return extractedContent;
};

export default formatFetchedDataAsBooks;
