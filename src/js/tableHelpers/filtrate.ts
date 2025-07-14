// import { isEmpty } from "lodash";

// import { BooksState, FilteringCondition, Book, KeyOfBook } from "types";

// function compare(filter: FilteringCondition, data: Book) {
//     let reducedData = {} as any;
//     let result = true;
//     for (const property in filter) {
//         reducedData[property] = data[property as KeyOfBook];
//     }
//     console.log("reducedData", reducedData);
//     for (const property in reducedData) {
//         if (!reducedData[property].toLowerCase().includes(filter[property as KeyOfBook]!.toLowerCase())) {
//             result = false;
//         }
//     }
//     return result;
// }

// //todo chodzi o to, że reducedData[property] potrafi być array apotrafi string

// export const filtrate = (data: BooksState["books"], filtr: BooksState["filter"] | undefined) => {
//     if (filtr === undefined) return data;
//     let filtrateResult: typeof data = [];

//     if (!isEmpty(filtr)) {
//         const temporaryData = [...data];
//         filtrateResult = temporaryData.filter(row => compare(filtr, row));
//         return filtrateResult;
//     } else {
//         return data;
//     }
// };

// export default filtrate;
import { isEmpty } from "lodash";
import { BooksState, FilteringCondition, Book, KeyOfBook } from "types";

function compare(filter: FilteringCondition, data: Book): boolean {
    try {
        for (const property in filter) {
            const filterValue = filter[property as KeyOfBook];
            const bookValue = data[property as KeyOfBook];

            // Skip empty filter values
            if (!filterValue || !filterValue.trim()) continue;

            // Return false if book doesn't have the property
            if (!bookValue) return false;

            // Handle arrays (authors, categories)
            if (Array.isArray(bookValue)) {
                const found = bookValue.some(item => {
                    if (typeof item === "string") {
                        return item.toLowerCase().includes(filterValue.toLowerCase());
                    }
                    if (typeof item === "object" && item !== null) {
                        return Object.values(item).some(val => val.toString().toLowerCase().includes(filterValue.toLowerCase()));
                    }
                    return false;
                });
                if (!found) return false;
            } else {
                // Handle strings (title, language, publishedDate, etc.)
                const bookValueStr = bookValue.toString().toLowerCase();
                const filterValueStr = filterValue.toLowerCase();

                if (!bookValueStr.includes(filterValueStr)) {
                    return false;
                }
            }
        }
        return true;
    } catch (error) {
        console.error("Error in compare function:", error);
        return false;
    }
}

export const filtrate = (data: BooksState["books"], filtr: BooksState["filter"] | undefined) => {
    if (!filtr || isEmpty(filtr) || !data?.length) {
        return data;
    }

    try {
        return data.filter(book => compare(filtr, book));
    } catch (error) {
        console.error("Error in filtrate function:", error);
        return data; // Return original data if filtering fails
    }
};

export default filtrate;
