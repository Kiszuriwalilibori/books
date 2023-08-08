import { HeaderItems } from "../models/Columns";

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
export type SourceFieldsArray = Array<SearchableFields | NotSearchableFields>;

export type Headers = Partial<Record<SearchableFields | NotSearchableFields, any>>;

export type FormattedFetchedRecord = Partial<Record<SearchableFields | NotSearchableFields, string>>;

export type BookRecord = string[];

export type BookRecordsArray = BookRecord[];

export type FiltrationObject = {
    [Item in HeaderItems]?: string;
};

export type PathKeys = "not_found" | "error" | "data" | "connecting" | "individualBook" | "books" | "search" | "load" | "landing" | "no_page";

export type FilterObject = Partial<Record<HeaderItems, string>>;

type HistoryCall = () => void;

export type RedirectType = Record<Exclude<PathKeys, "load" | "landing">, HistoryCall>;

export type ApiResponse = Object;

export type TemporaryStorageContent = ApiResponse[];
export interface FetchResult {
    error?: boolean;
    data?: TemporaryStorageContent;
    errorMessage?: string;
}

export type RoundButtons = "removeBook" | "addToFavorites" | "showFullInfo" | "removeBookFromFavorites" | "goToShop" | "test";

export interface BookDetailsContent {
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
        authors: string[];
        publisher: string;
        publishedDate: string;
        language: string;
        pageCount: number;
        categories: string[];
        industryIdentifiers: { type: string; identifier: string }[];
        description: string;
        printType: string;
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
export interface BookDetails {
    bookData: BookDetailsContent;
}
