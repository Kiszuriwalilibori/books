import tableHelpers from "./tableHelpers";
import { BooksState, ID } from "types";

abstract class Manager {
    protected abstract _remove(id: ID): typeof this;
    protected abstract _filter(payload?: BooksState["filter"]): typeof this;
    protected abstract _sort(column?: NonNullable<BooksState["currentSortColumn"]>): typeof this;
    protected abstract _changePage(newPage?: BooksState["currentPageNumber"]): typeof this;
    protected abstract _setNumberOfPages(): typeof this;
    protected abstract _storeBooks(payload: BooksState["data"]): void;

    Remove(payload: ID) {
        this._remove(payload)._filter()._sort()._changePage()._setNumberOfPages();
    }
    Filter(payload: BooksState["filter"]) {
        this._filter(payload)._sort()._changePage()._setNumberOfPages();
    }
    Sort(payload: NonNullable<BooksState["currentSortColumn"]>) {
        this._filter()._sort(payload)._changePage()._setNumberOfPages();
    }
    ChangePage(payload: BooksState["currentPageNumber"]) {
        this._filter()._sort()._changePage(payload);
    }
    StoreBooks(payload: BooksState["data"]) {
        this._storeBooks(payload);
    }
}
export class BooksManager extends Manager {
    state: BooksState;
    helpers: typeof tableHelpers;

    constructor(state: BooksState) {
        super();
        this.state = state;
        this.helpers = tableHelpers;
    }

    protected _remove(id: ID) {
        this.state.data = this.helpers.remove([...this.state.data], id);

        return this;
    }

    protected _sort(column?: NonNullable<BooksState["currentSortColumn"]>) {
        if (column) {
            if (this.state.currentSortColumn && this.state.currentSortColumn === column) this.state.isSortOrderDescending = !this.state.isSortOrderDescending;
            this.state.currentSortColumn = column;
        }
        if (Array.isArray(this.state.data) && this.state.data.length) {
            this.state.data = this.helpers.sort(this.state.data, this.state.isSortOrderDescending, this.state.currentSortColumn as NonNullable<BooksState["currentSortColumn"]>);
        }

        return this;
    }
    protected _filter(payload?: BooksState["filter"]) {
        if (payload) this.state.filter = payload;
        this.state.data = this.helpers.filtrate([...this.state.data], this.state.filter);

        return this;
    }
    protected _changePage(newPage?: BooksState["currentPageNumber"]) {
        if (newPage) this.state.currentPageNumber = newPage;
        this.state.currentPageBooksData = this.helpers.getSinglePageData(this.state.currentPageNumber, this.state.data, this.helpers.getNumberOfPages(this.state.data));

        return this;
    }
    protected _setNumberOfPages() {
        this.state.numberOfPages = this.helpers.getNumberOfPages(this.state.data);

        return this;
    }

    protected _storeBooks(payload: BooksState["data"]) {
        const data = payload;
        this.state.data = data;
        this.state.books = data;
        this.state.numberOfPages = this.helpers.getNumberOfPages(data);
        this.state.currentPageBooksData = this.helpers.getSinglePageData(1, data, this.helpers.getNumberOfPages(data));
    }
}
