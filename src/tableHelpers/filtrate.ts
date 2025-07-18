import { isEmpty } from "lodash";
import { BooksState, FilteringCondition, Book, KeyOfBook } from "types";

function compare(filter: FilteringCondition, data: Book): boolean {
    try {
        for (const property in filter) {
            const filterValue = filter[property as KeyOfBook];
            const bookValue = data[property as KeyOfBook];

            if (!filterValue || !filterValue.trim()) continue;

            if (!bookValue) return false;

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
