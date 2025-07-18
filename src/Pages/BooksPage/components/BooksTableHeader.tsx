import uuid from "react-uuid";
import { useSelector } from "react-redux";

import { columns } from "models";
import { Tooltip } from "components";
import { useSortBooks } from "hooks/useSortBooks";
import { isSortOrderDescendingSelector, currentSortColumnSelector } from "store/selectors";

const createMarker = (isSortOrderDescending: boolean) => (isSortOrderDescending ? " \u2193" : " \u2191");

const BooksTableHeader = () => {
    const isSortOrderDescending = useSelector(isSortOrderDescendingSelector);
    const sortColumn = useSelector(currentSortColumnSelector);
    const { handleSortClicked } = useSortBooks();

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
