export const sourceGoogleFields = ["inauthor", "intitle", "subject"];
export const ITEMS_PER_PAGE = 5;
export const GOOGLE_API = "https://www.googleapis.com/books/v1/volumes/";

export const DETAILS_FIELDS =
    "?fields = volumeInfo/title, volumeInfo/imageLinks/smallThumbnail/linkToCover,volumeInfo/authors, volumeInfo/publisher, volumeInfo/publishedDate, volumeInfo/language,volumeInfo/pageCount, volumeInfo/categories,volumeInfo/description, volumeInfo/industryIdentifiers, volumeInfo/printType, saleInfo/saleability, saleInfo/isEbook, saleInfo/listPrice, saleInfo/retailPrice, saleInfo/buyLink, accessInfo/webReaderLink, accessInfo/textToSpeechPermission";
export const BOOK_FIELDS = "&fields= items(id, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle )";
export const FAVORITE_FIELDS = "?fields= id,kind, volumeInfo/title, volumeInfo/authors, volumeInfo/publishedDate, volumeInfo/language, volumeInfo/categories,volumeInfo/subtitle";

export const FAVORITE_BOOK_IDENTIFIER = "books#volume";

export const MAX_RESULTS = 40;
