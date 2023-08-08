import * as React from "react";
import uuid from "react-uuid";
import { useDispatch, shallowEqual } from "react-redux";

import { columns } from "models";
import { Tooltip } from "components";
import { useTypedSelector } from "hooks";

const marker = (isDescending: boolean) => (isDescending ? " \u2191" : " \u2193");

const BooksTableHeader = () => {
    const dispatch = useDispatch();
    const isSortOrderDescending = useTypedSelector(state => state.books.isSortOrderDescending, shallowEqual);
    const sortColumn = useTypedSelector(state => state.books.currentSortColumn, shallowEqual);

    const sortBooks = React.useCallback(e => {
        dispatch({ type: "THROTTLED_SORT", payload: e.target.cellIndex });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <tr onClick={sortBooks}>
            {columns.headers.map((item, index) => (
                <Tooltip title="Kliknij, aby posortować" key={uuid()} placement="top-start">
                    <th role="columnheader" className={`header__cell ${columns.classes[index]}`}>
                        {sortColumn === index ? " " + item + marker(isSortOrderDescending) + " " : " " + item + " "}
                    </th>
                </Tooltip>
            ))}
        </tr>
    );
};

export default BooksTableHeader;
