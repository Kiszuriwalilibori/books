export const headers = ["Tytuł", "Autorzy", "Język", "Etykiety", "Podtytuł", "Wydano"];
export const sourceFields = ["title", "authors", "language", "categories", "subtitle", "publishedDate", "id"]; //uwaga - jest już użyte w unamofunctions nie zmieniać bo sie powali
export const sourcePlaceholders = ["Autor", "Tytuł", "Etykiety"];
export const sourceArrayOfSearchFieldNames = ["authors", "title", "subject"];
export const sourceGoogleFields = ["inauthor", "intitle", "subject"];
export const itemsPerPage = 5;
export const sourceFieldsNew = ["volumeInfo.title", "volumeInfo.authors", "volumeInfo.language", "volumeInfo.categories", "volumeInfo.subtitle", "volumeInfo.publishedDate"];
export const googleAPI = "https://www.googleapis.com/books/v1/volumes/";
export const paths = {
  not_found: "/not_found",
  error: "/error",
  data: "./results",
  connecting: "./connecting",
  singleBook: "/single_book",
  books: "/books",
  search: "./search",
};

export const snackBarTexts = {
  booksFetched: "Poprawnie pobrano dane, łącznie pobrano książek: ",
  addedToFavorites: "Poprawnie dodano do ulubionych następującą książkę: ",
};
