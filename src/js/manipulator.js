import { getNumberOfPages, sliceSinglePageData, sort, remove, filtrate } from "../redux/functions";

export var Manipulator = class {
  constructor(state) {
    this.state = state;
  }

  remove(payload) {
    console.log(payload);
    let booksAfterRemoval = remove([...this.state.data], payload);
    const temporaryResult = sort(filtrate(booksAfterRemoval, this.state.filter), this.state.isSortOrderDescending, this.state.currentSortColumn);
    this.state.data = booksAfterRemoval;
    this.state.currentPageBooksData = sliceSinglePageData(this.state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
    this.state.numberOfPages = getNumberOfPages(temporaryResult);
  }

  filter(payload) {
    let temporaryResult = sort(filtrate([...this.state.data], payload), this.state.isSortOrderDescending, this.state.currentSortColumn);
    this.state.filter = payload;
    this.state.currentPageBooksData = sliceSinglePageData(this.state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
    this.state.numberOfPages = getNumberOfPages(temporaryResult);
  }
  sort(payload) {
    let temporaryResult = [];
    let order = false;
    if ((this.state.currentSortColumn || this.state.currentSortColumn === 0) && this.state.currentSortColumn === payload) order = !this.state.isSortOrderDescending;
    if (Array.isArray(this.state.data)) {
      temporaryResult = sort(filtrate([...this.state.data], this.state.filter), order, payload);
    }
    this.state.currentSortColumn = payload;
    this.state.isSortOrderDescending = order;
    this.state.currentPageBooksData = sliceSinglePageData(this.state.currentPageNUmber, temporaryResult, getNumberOfPages(temporaryResult));
  }
  changePage(payload) {
    const temporaryResult = sort(filtrate([...this.state.data], this.state.filter), this.state.isSortOrderDescending, this.state.currentSortColumn);
    this.state.currentPageNUmber = payload;
    this.state.currentPageBooksData = sliceSinglePageData(payload, temporaryResult, getNumberOfPages(temporaryResult));
  }
  fetchBooks(payload) {
    this.state.data = payload.input;
    this.state.books = payload.input;
    this.state.numberOfPages = getNumberOfPages(payload.input);
    this.state.currentPageBooksData = sliceSinglePageData(1, payload.input, getNumberOfPages(payload.input));
  }
};

export default Manipulator;
