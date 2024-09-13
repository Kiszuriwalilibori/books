import fp from "lodash/fp";
import join from "lodash/join";
import { SearchFormValues } from "./model";

export interface BookSearchPattern {
    inauthor: string;
    intitle: string;
    subject: string;
}

/**
 * builds full GoogleBooks API search link for certain book
 * @param searchKeys -  object with keys that further forms part of that link
 * @returns GoogleBooks API search link for certain book
 */

const createTotalNumberURL = (fields: SearchFormValues): string => {
    const PATH = "https://www.googleapis.com/books/v1/volumes?q=";
    const MAX_RESULTS = "&maxResults=1";
    const searchKeys = { inauthor: fields.authors, intitle: fields.title, subject: fields.subject };

    const stringifyKeys = fp.flow(
        fp.toPairs,
        fp.filter(element => !(element[1] === "")),
        fp.map(element => {
            return join(element, ":");
        }),
        fp.join("+")
    );

    return fields.keyword ? PATH + fields.keyword + MAX_RESULTS : PATH + stringifyKeys(searchKeys) + MAX_RESULTS;
};

export default createTotalNumberURL;
