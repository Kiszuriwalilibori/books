import React, { useCallback } from "react";
import { connect } from "react-redux";
import { TableCellWithButtons } from "./TableCellWithButtons";
import { TableCellRegular } from "./TableCellRegular";
import PropTypes from "prop-types";
import { removeBook } from "../../redux/booksReducer";
import debounce from "lodash/debounce";

const fifthElement = (i, ar) => (i === ar.length - 5 ? true : false);
const lastElement = (i, ar) => (i === ar.length - 1 ? true : false);
const createTableRow = (c, i, ar) => (fifthElement(i, ar) ? TableCellWithButtons(c, i, ar) : lastElement(i, ar) ? null : TableCellRegular(i, c));
const createRows = content => content.map((row, index) => <tr key={index}>{row.map(createTableRow)}</tr>);
const deleteButtonPressed = e => {
  return e.target.closest("button") && e.target.closest("button").getAttribute("itemprop") === "delete-button";
};

let TableBody = props => {
  const { pageContent, remove } = props;

  const debouncedRemove = useCallback(
    debounce(target => {
      const button = target.closest("button");
      remove(JSON.parse(button.dataset.content));
    }, 1000),
    [remove]
  );

  if (pageContent) {
    return (
      <tbody
        onClick={e => {
          if (deleteButtonPressed(e)) debouncedRemove(e.target);
        }}
      >
        {createRows(pageContent)}
      </tbody>
    );
  }
};

const mapStateToProps = state => ({
  pageContent: state.books.currentPageBooksData,
});

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(removeBook(item)),
});

const BooksTableBody = connect(mapStateToProps, mapDispatchToProps)(TableBody);
export default BooksTableBody;

TableBody.propTypes = {
  pageContent: PropTypes.arrayOf(PropTypes.array).isRequired,
};
