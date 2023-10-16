import { BookSearchPattern } from "./createURL";
import { SearchFormValues } from "./model";

/**
 * builds object with fields named as required by GoogleBooks API and only those.
 * @param fields -  object with keys that further forms part of that link
 * @returns GoogleBooks API search link for certain book
 */
const createSearchKeys = (fields: SearchFormValues): BookSearchPattern => {
    return { inauthor: fields.authors, intitle: fields.title, subject: fields.subject };
};

export default createSearchKeys;
