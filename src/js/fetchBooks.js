import formatFetchedBooks from "./formatFetchedBooks";
import { store } from "../index";
const fetchBooks = (path, redirect) => {
  let startIndex = 0;
  const indexStep = 40; // defined by resource owner
  let temporaryStorage = [];
  var result = { error: false };

  async function recursiveSingleFetch() {
    const fullPath = path + startIndex.toString();
   
    const x = await fetch(fullPath).catch((error) => {
      result.error = true;
      result.errorMessage = error.message;
      //store.dispatch({ type: "BOOKS_FETCH", payload: result });
      store.dispatch({type:"ERROR_SHOW", payload: result})
      redirect.error();
    });
    if (x) {
      const resp = await x.json();
      if (resp.items) {
        startIndex += indexStep;
        temporaryStorage = temporaryStorage.concat(resp.items);
        
        recursiveSingleFetch();
      } else {
        if (temporaryStorage.length === 0) redirect.not_found();
        else {
          result.input = formatFetchedBooks(temporaryStorage);
          store.dispatch({ type: "BOOKS_FETCH", payload: result });
          redirect.books();
        }
      }
    }
  }
  recursiveSingleFetch();
};
export default fetchBooks;
