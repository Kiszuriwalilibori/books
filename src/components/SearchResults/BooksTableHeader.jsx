import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { headers } from "../../fixtures/fixtures";
import { connect } from "react-redux";
import MyTooltip from "../common/Tooltip";
import PropTypes from "prop-types";

const getCellClass = index => {
  return index === 0 || index === 1 ? "header__cell header__cell-large" : " header__cell header__cell-small";
};

const marker = isDescending => (isDescending ? " \u2191" : " \u2193");

const Header = props => {
  const dispatch = useDispatch();
  const { sortColumn, isSortOrderDescending } = props;
  let tableRow = useRef(null);

  useEffect(() => {
    const throttledSort = e => dispatch({ type: "THROTTLED_SORT", payload: e.target.cellIndex });
    tableRow.current.addEventListener("click", throttledSort);
    return function cleanup() {
      tableRow.current.removeEventListener("click", throttledSort);
    };
  }, [dispatch]);

  return (
    <tr ref={tableRow}>
      {headers.map((item, index) => (
        <MyTooltip title="Kliknij, aby posortować" key={item} placement="top-start">
          <th className={getCellClass(index)}>{sortColumn === index ? " " + item + marker(isSortOrderDescending) + " " : " " + item + " "}</th>
        </MyTooltip>
      ))}
    </tr>
  );
};

const mapStateToProps = state => ({
  sortColumn: state.books.currentSortColumn,
  isSortOrderDescending: state.books.isSortOrderDescending,
});

const BooksTableHeader = connect(mapStateToProps, null)(Header);

export default BooksTableHeader;

Header.propTypes = {
  sortColumn: PropTypes.number,
  isSortDescending: PropTypes.bool,
};
