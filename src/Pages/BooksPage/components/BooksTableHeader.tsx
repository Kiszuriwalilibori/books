import * as React from "react";
import uuid from "react-uuid";
import debounce from "lodash/debounce";
import { shallowEqual } from "react-redux";

import { columns } from "models";
import { Tooltip } from "components";
import { useTypedSelector, useDispatchAction } from "hooks";

const createMarker = (isSortOrderDescending: boolean) => (isSortOrderDescending ? " \u2193" : " \u2191");

const BooksTableHeader = () => {
    const isSortOrderDescending = useTypedSelector(state => state.books.sort.isSortOrderDescending, shallowEqual);
    const sortColumn = useTypedSelector(state => state.books.sort.currentSortColumn, shallowEqual);
    const { sortBooks } = useDispatchAction();

    const handleSortClicked = React.useCallback(
        debounce(e => {
            const payload = columns.sourceFields[e.target.cellIndex];
            sortBooks(payload);
        }, 200),
        []
    );
    return (
        <tr onClick={handleSortClicked}>
            {columns.headers.map((item, index) => (
                <Tooltip title={"Sortuj po " + item} key={uuid()} placement="top-start">
                    <th role="columnheader" className={`header__cell ${columns.classes[index]}`}>
                        {sortColumn === columns.sourceFields[index] ? " " + item + createMarker(isSortOrderDescending) + " " : " " + item + " "}
                    </th>
                </Tooltip>
            ))}
        </tr>
    );
};

export default BooksTableHeader;
