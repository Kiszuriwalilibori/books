import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import createRedirect from "../../js/createRedirect";
import createTableCell from "./cells/CreateTableCell";
import PropTypes from "prop-types";
import { fetchSingleBook, removeBook } from "../../redux/booksReducer";
import goToShop from "../../js/goToShop";
import buttonDescriptions from "../../js/buttonDescriptions";
import debounce from "lodash/debounce";
import { useCreateDebouncedCallback } from "../../js/createDebouncedCallback";

const createRows = content => content.map((row, index) => <tr key={index}>{row.map(createTableCell)}</tr>);

let TableBody = props => {
  const { pageContent, fetchSingleBook, remove } = props;
  const history = useHistory();
  const redirect = useMemo(createRedirect(history));
  let tableBody = useRef(null);

  const debouncedGoToShop = useCreateDebouncedCallback(goToShop, { redirect: redirect });
  const debouncedAddToFavorites = useCreateDebouncedCallback(fetchSingleBook, { redirect: redirect, toStore: false });
  const debouncedFetchSingleBook = useCreateDebouncedCallback(fetchSingleBook, { redirect: redirect, toStore: true });
  const debouncedRemove = useCreateDebouncedCallback(remove);
  const debouncedRemoveFromFavorites = useCallback(
    debounce(target => {
      const id = target?.closest("button")?.dataset?.content;
      if (id) {
        window.Storage.local.remove(id);
        remove({ id: id });
      }
    }, 200),
    [remove]
  );

  useEffect(() => {
    function clickHandler(e) {
      const itemprop = e.target.closest("button").getAttribute("itemprop");
      if (itemprop && buttonDescriptions.hasItemProp(itemprop)) {
        switch (itemprop) {
          case "delete-button":
            debouncedRemove(e.target);
            break;
          case "favorites-button":
            debouncedAddToFavorites(e.target);
            break;
          case "fullinfo-button":
            debouncedFetchSingleBook(e.target);
            break;
          case "remove-from-favorites-button":
            debouncedRemoveFromFavorites(e.target);
            break;
          case "go-to-shop-button":
            debouncedGoToShop(e.target);
            break;
          default:
        }
      }
    }

    tableBody.current.addEventListener("click", clickHandler);
    return function cleanup() {
      tableBody.current.removeEventListener("click", clickHandler);
    };
  }, [debouncedAddToFavorites, debouncedFetchSingleBook, debouncedGoToShop, debouncedRemove, debouncedRemoveFromFavorites]);

  if (pageContent) {
    return <tbody ref={tableBody}>{createRows(pageContent)}</tbody>;
  }
};

const mapStateToProps = state => ({
  pageContent: state.books.currentPageBooksData,
});

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(removeBook(item)),
  fetchSingleBook: (a, b, c) => dispatch(fetchSingleBook(a, b, c)),
});

const BooksTableBody = connect(mapStateToProps, mapDispatchToProps)(TableBody);
export default BooksTableBody;

TableBody.propTypes = {
  pageContent: PropTypes.arrayOf(PropTypes.array).isRequired,
};
