import { store } from "../index";

const showDetailedInfo = (item, redirect) => {
  const id = item[item.length - 1];

  if (id && (typeof id === "string" || id instanceof String)) {
  
    const path =  "https://books.google.pl/books?id=" +id;

    try{
      window.open(path, "_blank")
    }
    catch(err){
      let result ={error: true, errorMessage:err.message}
      store.dispatch({ type: "BOOKS_FETCH", payload: result });
      redirect.error();

    }
  }
};


export default showDetailedInfo;







// const x = await fetch(fullPath).catch((error) => {
//   result.error = true;
//   result.errorMessage = error.message;
//   store.dispatch({ type: "RECEIVE_BOOKS", payload: result });
//   redirect.error();
// });
