import fp from "lodash/fp";
import join from "lodash/join";
export const createFullPathToAPI = Book => {
  const path = "https://www.googleapis.com/books/v1/volumes?q=";
  const maxResults = "&maxResults=40";
  const startIndex = "&startIndex=";
  const searchInputTransformation = fp.flow(
    fp.toPairs,
    fp.filter(element => !(element[1] === "")),
    fp.map(element => {
      const temp = join(element, ":");
      return temp;
    }),
    fp.join("+")
  );

  return path + searchInputTransformation(Book) + maxResults + startIndex;
};
