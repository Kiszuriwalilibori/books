// import join from "lodash/join";
// import { Book, BookRecord, KeyOfBook } from "types";

// export const formatFetchedDataAsBooks = (foundBooks: BookRecord[]) => {
//     const extractedContent = foundBooks.map((item: BookRecord) => {
//         const id = item.id;
//         const { title, authors, subtitle, publishedDate, language, categories } = item.volumeInfo;

//         return { authors, categories, id, language, publishedDate, subtitle, title } as Book;
//     });

//     extractedContent.forEach(item => {
//         for (let property in item) {
//             if (!item[property as KeyOfBook]) {
//                 (item as any)[property as KeyOfBook] = " ";
//             }
//             if (Array.isArray(item[property as KeyOfBook])) {
//                 (item as any)[property as KeyOfBook] = join(item[property as KeyOfBook], ", ");
//             }
//         }
//     });
//     return extractedContent;
// };

// export default formatFetchedDataAsBooks;

import join from "lodash/join";
import { Book, BookRecord, KeyOfBook } from "types";

export const formatFetchedDataAsBooks = (foundBooks: BookRecord[]): Book[] => {
    const extractedContent = foundBooks.map((item: BookRecord) => {
        const id = item.id;
        const { title, authors, subtitle, publishedDate, language, categories } = item.volumeInfo;

        return { authors, categories, id, language, publishedDate, subtitle, title } as Book;
    });

    extractedContent.forEach(item => {
        (Object.keys(item) as KeyOfBook[]).forEach(property => {
            // Handle falsy values for non-array properties
            if (!item[property] && property !== "authors" && property !== "categories") {
                item[property] = " " as string;
            }
            // Handle array properties (authors and categories)
            if (property === "authors" || property === "categories") {
                const value = item[property] as (string | { [key: string]: string })[] | undefined;
                if (Array.isArray(value) && value.length > 0) {
                    // Normalize array elements to strings
                    item[property] = value.map(element => (typeof element === "string" ? element : Object.values(element)[0] || "")) as (string | { [key: string]: string })[];
                } else {
                    item[property] = []; // Use empty array instead of undefined
                }
            }
        });
    });

    return extractedContent;
};

export default formatFetchedDataAsBooks;
