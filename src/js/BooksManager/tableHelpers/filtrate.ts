import { isEmpty } from "lodash";

import { BooksState, FilteringCondition, FlatBookRecord, FlatBookRecordKey } from "types";

function compare(filter: FilteringCondition, data: FlatBookRecord) {
    let reducedData = {} as any;
    let result = true;
    for (const property in filter) {
        reducedData[property] = data[property as FlatBookRecordKey];
    }
    for (const property in reducedData) {
        if (!reducedData[property].toLowerCase().includes(filter[property as FlatBookRecordKey]!.toLowerCase())) {
            result = false;
        }
    }
    return result;
}

export const filtrate = (data: BooksState["data"], filtr: BooksState["filter"] | undefined) => {
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
