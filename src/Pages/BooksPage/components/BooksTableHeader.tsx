import * as React from "react";
import uuid from "react-uuid";
import debounce from "lodash/debounce";
import { useDispatch, shallowEqual } from "react-redux";

import { columns } from "models";
import { Tooltip } from "components";
import { useTypedSelector } from "hooks";

const createMarker = (isSortOrderDescending: boolean) => (isSortOrderDescending ? " \u2193" : " \u2191");

const BooksTableHeader = () => {
    const dispatch = useDispatch();
    const isSortOrderDescending = useTypedSelector(state => state.books.isSortOrderDescending, shallowEqual);
    const sortColumn = useTypedSelector(state => state.books.currentSortColumn, shallowEqual);

    const sortBooks = React.useCallback(
        debounce(e => {
            dispatch({ type: "THROTTLED_SORT", payload: e.target.cellIndex });
        }, 200),
        [dispatch]
    );

    return (
        <tr onClick={sortBooks}>
            {columns.headers.map((item, index) => (
                <Tooltip title={"Sortuj po " + item} key={uuid()} placement="top-start">
                    <th role="columnheader" className={`header__cell ${columns.classes[index]}`}>
                        {sortColumn === index ? " " + item + createMarker(isSortOrderDescending) + " " : " " + item + " "}
                    </th>
                </Tooltip>
            ))}
        </tr>
    );
};

export default BooksTableHeader;