import { isEmpty } from "lodash";

import { BooksState, FilteringCondition, Book, KeyOfBook } from "types";

function compare(filter: FilteringCondition, data: Book) {
    let reducedData = {} as any;
    let result = true;
    for (const property in filter) {
        reducedData[property] = data[property as KeyOfBook];
    }
    for (const property in reducedData) {
        if (!reducedData[property].toLowerCase().includes(filter[property as KeyOfBook]!.toLowerCase())) {
            result = false;
        }
    }
    return result;
}

export const filtrate = (data: BooksState["books"], filtr: BooksState["filter"] | undefined) => {
    if (filtr === undefined) return data;
    let filtrateResult: typeof data = [];

    if (!isEmpty(filtr)) {
        const temporaryData = [...data];
        filtrateResult = temporaryData.filter(row => compare(filtr, row));
        return filtrateResult;
    } else {
        return data;
    }
};

export default filtrate;
