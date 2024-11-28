import { RootStateType } from ".";

export interface BookDetails {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks: {
            smallThumbnail: { linkToCover: string; label: string };
            thumbnail: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };
        authors: (string | { [key: string]: string })[];
        publisher: string;
        publishedDate: string;
        language: string;
        pageCount: number;
        categories: (string | { [key: string]: string })[];
        industryIdentifiers: { type: string; identifier: string }[];
        description: string;
        printType: string;
        subtitle?: string;
    };
    saleInfo: {
        isEbook: boolean;
        saleability: string;
        listPrice: { amount: number; currencyCode: string };
        retailPrice: { amount: number; currencyCode: string };
        buyLink: string;
    };
    accessInfo: {
        textToSpeechPermission: string;
        webReaderLink: string;
    };
}
export type ID = BookDetails["id"];

export interface BookRecord {
    id: BookDetails["id"];
    volumeInfo: Pick<BookDetails["volumeInfo"], "title" | "authors" | "subtitle" | "publishedDate" | "language" | "categories">;
}

export interface Book extends Pick<BookDetails["volumeInfo"], "title" | "authors" | "subtitle" | "publishedDate" | "language" | "categories"> {
    id: BookDetails["id"];
}
export type Books = Book[];

export type KeyOfBook = keyof Book;

export interface FavoriteRecord extends Book {
    kind: string;
}

export type ColumnHeaders = "Tytuł" | "Autorzy" | "Język" | "Etykiety" | "Podtytuł" | "Wydano" | "";

export enum SearchableFields {
    authors = "authors",
    title = "title",
    subject = "subject",
}

export enum NotSearchableFields {
    language = "language",
    categories = "categories",
    subtitle = "subtitle",
    publishedDate = "publishedDate",
    id = "id",
}

export type AllFields = SearchableFields | NotSearchableFields;

export type FilteringCondition = {
    [Item in KeyOfBook]?: string;
};

export type PathKeys = "not_found" | "error" | "data" | "details" | "books" | "search" | "load" | "landing" | "no_page";

export type FilterObject = Partial<Record<ColumnHeaders, string>>;

export type RoundButtons = "removeBook" | "addToFavorites" | "showFullInfo" | "removeBookFromFavorites" | "goToShop" | "test";

export type BookID = { id: ID };

export interface BooksState {
    books: Books;
    currentPageNumber: number;
    errorMessage: string;
    filter: FilteringCondition;
    sort: { isSortOrderDescending: boolean; currentSortColumn: KeyOfBook | undefined };
    numberOfPages: number;
}

export interface GetTableDataParams {
    books: RootStateType["books"]["books"];
    args: GetTableDataArgs;
    old: GetTableDataArgs;
}

export interface GetTableDataArgs {
    pageNumber: RootStateType["books"]["currentPageNumber"];
    filter: FilteringCondition;
    sort: { isSortOrderDescending: boolean; currentSortColumn: KeyOfBook | undefined };
}
