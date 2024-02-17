import { isEmpty } from "lodash";

import { BooksState } from "types";

import { aryToObj } from "js/utils";

interface Args {
    [key: string]: any;
}

function compare(filter: Args, data: Args) {
    let reducedData = {} as Args;
    let result = true;
    for (const property in filter) {
        reducedData[property] = data[property];
    }
    for (const property in reducedData) {
        if (!reducedData[property].toLowerCase().includes(filter[property].toLowerCase())) {
            result = false;
        }
    }
    return result;
}

export const filtrate = (data: BooksState["data"], filtr: BooksState["filter"]) => {
    let filtrationResult: typeof data = [];

    if (!isEmpty(filtr)) {
        const temporaryData = [...data];
        filtrationResult = temporaryData.filter(row => compare(filtr, aryToObj(row))); // będzie wystarczało wyrzucić arytoobj w tym miejscu
        return filtrationResult;
    } else {
        return data;
    }
};

export default filtrate;
