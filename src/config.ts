export const sourceGoogleFields = ["inauthor", "intitle", "subject"];
export const ITEMS_PER_PAGE = 5;
export const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes/";

export const DETAILS_FIELDS = "";
export const BOOK_FIELDS = "&fields= items(id, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle )";
export const FAVORITE_FIELDS = "?fields= id,kind, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle";
