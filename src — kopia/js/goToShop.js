import { store } from "../index";

const goToShop = ({ redirect, id }) => {
  if (id && (typeof id === "string" || id instanceof String)) {
    const path = "https://books.google.pl/books?id=" + id;

    try {
      window.open(path, "_blank");
    } catch (err) {
      let result = { error: true, errorMessage: err.message };
      store.dispatch({ type: "BOOKS_FETCH", payload: result });
      redirect.error();
    }
  }
};

export default goToShop;
