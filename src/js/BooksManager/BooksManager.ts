import tableHelpers from "./tableHelpers";
import { BooksState, ID } from "types";

abstract class Manager {
    protected abstract _remove(id: ID): typeof this;
    protected abstract _filter(payload?: BooksState["filter"]): typeof this;
    protected abstract _storeBooks(payload: BooksState["data"]): void;

    Remove(payload: ID) {
        this._remove(payload)._filter() /*._changePage()*/;
    }
    Filter(payload: BooksState["filter"]) {
        this._filter(payload);
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

    protected _filter(payload?: BooksState["filter"]) {
        if (payload) this.state.filter = payload;
        this.state.books = this.helpers.filtrate([...this.state.data], this.state.filter);

        return this;
    }

    // protected _setNumberOfPages() {
    //     this.state.numberOfPages = this.helpers.getNumberOfPages(this.state.books);

    //     return this;
    // }

    protected _storeBooks(payload: BooksState["data"]) {
        const data = payload;
        this.state.data = data;
        this.state.books = data;
        this.state.numberOfPages = this.helpers.getNumberOfPages(data);
        this.state.currentPageNumber = 1;
    }
}
