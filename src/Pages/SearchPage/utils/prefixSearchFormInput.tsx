import { BookSearchPattern } from "./createFullPathToAPI";
import { SearchFormValues } from "./model";

/**
 * builds object with fields named as required by GoogleBooks API and only those.
 * @param fields -  object with keys that further forms part of that link
 * @returns GoogleBooks API search link for certain book
 */
const prefixSearchFormInput = (fields: SearchFormValues): BookSearchPattern => {
    return { inauthor: fields.authors, intitle: fields.title, subject: fields.subject };
};

export default prefixSearchFormInput;
