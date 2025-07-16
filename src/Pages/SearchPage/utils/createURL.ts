import fp from "lodash/fp";
import join from "lodash/join";
import { SearchFormValues } from "./model";
import { BOOK_FIELDS } from "config";

interface BookSearchPattern {
    inauthor: string;
    intitle: string;
    subject: string;
}

/**
 * builds full GoogleBooks API search link for certain book
 * @param searchKeys -  object with keys that further forms part of that link
 * @returns GoogleBooks API search link for certain book
 */

export const createURL = (fields: SearchFormValues): string => {
    const PATH = "https://www.googleapis.com/books/v1/volumes?q=";
    const MAX_RESULTS = "&maxResults=40";
    const START_INDEX = "&startIndex=";
    const searchKeys = { inauthor: fields.authors, intitle: fields.title, subject: fields.subject, keyword: fields.keyword };

    const stringifyKeys = fp.flow(
        fp.toPairs,
        fp.filter(([, value]) => value !== ""),
        fp.map(([key, value]) => join([key, value], ":")),
        fp.join("+")
    );

    return PATH + stringifyKeys(searchKeys) + MAX_RESULTS + BOOK_FIELDS + START_INDEX;
};
