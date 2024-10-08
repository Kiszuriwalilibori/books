import fp from "lodash/fp";
import join from "lodash/join";
import { SearchFormValues } from "./model";
import { BOOK_FIELDS } from "config";

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
const PATH = "https://www.googleapis.com/books/v1/volumes?q=";
const MAX_RESULTS = "&maxResults=40";
const START_INDEX = "&startIndex=";

const buildURL = {
    keyword: (fields: SearchFormValues) => PATH + fields.keyword + MAX_RESULTS + BOOK_FIELDS + START_INDEX,
    fields: (fields: SearchFormValues) => {
        const searchKeys = { inauthor: fields.authors, intitle: fields.title, subject: fields.subject };

        const stringifyKeys = fp.flow(
            fp.toPairs,
            fp.filter(element => !(element[1] === "")),
            fp.map(element => {
                return join(element, ":");
            }),
            fp.join("+")
        );

        return PATH + stringifyKeys(searchKeys) + MAX_RESULTS + BOOK_FIELDS + START_INDEX;
    },
};

const createBooksURL = (fields: SearchFormValues): string => {
    return fields.keyword ? buildURL["keyword"](fields) : buildURL["fields"](fields);
};

export default createBooksURL;
