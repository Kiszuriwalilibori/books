import formatFetchedBooks from "./formatFetchedBooks";
import worker from './fetchworker';
import WebWorker from './workerSetup';
import { store } from "../index";
const fetchBooksWithWebWorker = (path, redirect) => {


var fetchWorker = new WebWorker(worker);

fetchWorker.onmessage = e => {
  const result = e.data;
  if (result.errorMessage) {
    console.log('result', result);
    store.dispatch({type:"ERROR_SHOW", payload: result})
    redirect.error();
   
  } else {

    if (result.length === 0) {redirect.not_found()}else{
    
    result.input = formatFetchedBooks(result);
          store.dispatch({ type: "BOOKS_FETCH", payload: result });
          redirect.books();
    }
  }
};
fetchWorker.postMessage(path);
}

export default fetchBooksWithWebWorker;

