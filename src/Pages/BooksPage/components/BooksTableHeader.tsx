import * as React from "react";
import uuid from "react-uuid";
import debounce from "lodash/debounce";
import { useSelector } from "react-redux";

import { columns } from "models";
import { Tooltip } from "components";
import { useDispatchAction } from "hooks";
import { isSortOrderDescendingSelector, currentSortColumnSelector } from "js/redux/reducers/booksReducer";

const createMarker = (isSortOrderDescending: boolean) => (isSortOrderDescending ? " \u2193" : " \u2191");

const BooksTableHeader = () => {
    const isSortOrderDescending = useSelector(isSortOrderDescendingSelector);
    const sortColumn = useSelector(currentSortColumnSelector);
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
