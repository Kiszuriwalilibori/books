import tableHelpers from "./tableHelpers";
import { BookRecordsArray, FiltrationObject } from "types";

interface BooksStateInterface {
    data: BookRecordsArray;
    errorMessage: string;
    books: BookRecordsArray;
    filter: FiltrationObject;
    currentPageNumber: number;
    currentSortColumn: number;
    isSortOrderDescending: boolean;
    numberOfPages: number;
    currentPageBooksData: BookRecordsArray;
    singleBookData: BookRecordsArray;
    sort: null;
}

interface FetchFavoritesPayload {
    data: BookRecordsArray;
}

abstract class Manager {
    protected abstract _remove(id: string): typeof this;
    protected abstract _filter(payload?: FiltrationObject): typeof this;
    protected abstract _sort(column?: number): typeof this;
    protected abstract _changePage(newPage?: number): typeof this;
    protected abstract _setNumberOfPages(): typeof this;
    protected abstract _fetchFavoriteBooks(payload: FetchFavoritesPayload): void;

    Remove(payload: string) {
        this._remove(payload)._filter()._sort()._changePage()._setNumberOfPages();
    }
    Filter(payload: FiltrationObject) {
        this._filter(payload)._sort()._changePage()._setNumberOfPages();
    }
    Sort(payload: number) {
        this._filter()._sort(payload)._changePage()._setNumberOfPages();
    }
    ChangePage(payload: number) {
        this._filter()._sort()._changePage(payload);
    }

    FetchFavoriteBooks(payload: FetchFavoritesPayload) {
        this._fetchFavoriteBooks(payload);
    }
}
export class BooksManager extends Manager {
    state: BooksStateInterface;
    helpers: typeof tableHelpers;

    constructor(state: BooksStateInterface) {
        super();
        this.state = state;
        this.helpers = tableHelpers;
    }

    protected _remove(id: string) {
        this.state.data = this.helpers.remove([...this.state.data], id);

        return this;
    }

    protected _sort(column?: number) {
        if (column || column === 0) {
            if ((this.state.currentSortColumn || this.state.currentSortColumn === 0) && this.state.currentSortColumn === column) this.state.isSortOrderDescending = !this.state.isSortOrderDescending;
            this.state.currentSortColumn = column;
        }
        if (Array.isArray(this.state.data) && this.state.data.length) {
            this.state.data = this.helpers.sort(this.state.data, this.state.isSortOrderDescending, this.state.currentSortColumn);
        }

        return this;
    }
    protected _filter(payload?: FiltrationObject) {
        if (payload) this.state.filter = payload;
        this.state.data = this.helpers.filtrate([...this.state.data], this.state.filter);

        return this;
    }
    protected _changePage(newPage?: number) {
        if (newPage) this.state.currentPageNumber = newPage;
        this.state.currentPageBooksData = this.helpers.getSinglePageData(this.state.currentPageNumber, this.state.data, this.helpers.getNumberOfPages(this.state.data));

        return this;
    }
    protected _setNumberOfPages() {
        this.state.numberOfPages = this.helpers.getNumberOfPages(this.state.data);

        return this;
    }

    protected _fetchFavoriteBooks(payload: FetchFavoritesPayload) {
        const { data } = payload;
        this.state.data = data;
        this.state.books = data;
        this.state.numberOfPages = this.helpers.getNumberOfPages(data);
        this.state.currentPageBooksData = this.helpers.getSinglePageData(1, data, this.helpers.getNumberOfPages(data));
    }
}
