import fp from "lodash/fp";
import join from "lodash/join";

export interface BookSearchPattern {
  inauthor: string;
  intitle: string;
  subject: string;
}
/**
 * builds full GoogleBooks API search link for certain book
 * @param keysObject -  object with keys that further forms part of that link
 * @returns GoogleBooks API search link for certain book
 */
const createFullPathToAPI = (keysObject: BookSearchPattern): string => {
  const path = "https://www.googleapis.com/books/v1/volumes?q=";
  const maxResults = "&maxResults=40";
  const startIndex = "&startIndex=";
  const searchInputTransformation = fp.flow(
    fp.toPairs,
    fp.filter(element => !(element[1] === "")),
    fp.map(element => {
      return join(element, ":");
    }),
    fp.join("+")
  );

  return path + searchInputTransformation(keysObject) + maxResults + startIndex;
};

export default createFullPathToAPI;
