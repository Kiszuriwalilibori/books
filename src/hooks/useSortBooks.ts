import * as React from "react";
import debounce from "lodash/debounce";
import { Book } from "types";
import { useDispatchAction } from "hooks";
import { columns } from "models";

/**
 * Custom hook for handling book table sorting logic.
 *
 * - Provides a debounced handler for sorting books by table column.
 * - Integrates with Redux to dispatch sorting actions.
 *
 * @returns {Object} An object with handleSortClicked for table row sorting.
 */
export const useSortBooks = () => {
    const { sortBooks } = useDispatchAction();

    const debouncedSortBooks = React.useMemo(() => debounce((payload: NonNullable<keyof Book>) => sortBooks(payload), 200), [sortBooks]);

    const handleSortClicked = React.useCallback(
        (e: React.MouseEvent<HTMLTableRowElement>) => {
            const cellIndex = (e.target as HTMLTableCellElement).cellIndex;
            const payload = columns.sourceFields[cellIndex] as NonNullable<keyof Book>;
            debouncedSortBooks(payload);
        },
        [debouncedSortBooks]
    );

    return { handleSortClicked };
};
export default useSortBooks;
