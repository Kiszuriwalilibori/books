import { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Books, RootStateType } from "types";
import { useDispatchAction} from "hooks";
import { booksSelector, getTableDataArgsSelector } from "store/selectors";
import useGetMemoizedWorker from "./useGetWorker";

/**
 * Message event data structure for the table data Web Worker.
 */
interface TableDataWorkerMessageEvent {
    singlePageData: Books;
    currentPageNumber: RootStateType["books"]["currentPageNumber"];
    numberOfPages: RootStateType["books"]["numberOfPages"];
}

/**
 * React hook to fetch and manage paginated book table data using a Web Worker.
 *
 * - Listens to changes in book data and table arguments (filter, sort, page).
 * - Offloads heavy table data computation to a Web Worker for performance.
 * - Updates Redux state for current page and number of pages.
 *
 * @returns {Books} The current page of books for the table view.
 */
const useBookTableData = (): Books => {
    const [newBooks, setNewBooks] = useState<Books>([] as Books);
    const { changePage, setNumberOfPages } = useDispatchAction();
    const getTableDataWorker = useGetMemoizedWorker();
    const books = useSelector(booksSelector, shallowEqual);
    const args = useSelector(getTableDataArgsSelector, shallowEqual);

    useEffect(() => {

        if (window.Worker) {
            getTableDataWorker.postMessage({ args, books });
            getTableDataWorker.onmessage = (e: MessageEvent<TableDataWorkerMessageEvent>) => {
                const { singlePageData, currentPageNumber, numberOfPages } = { ...e.data };
                setNewBooks((prev: Books) => singlePageData);
                changePage(currentPageNumber);
                setNumberOfPages(numberOfPages);
            };
        }
    }, [getTableDataWorker, args, books]);

    return newBooks;
};

export default useBookTableData;
//todo jaka jest róxnica między window.Worker a getTableDataWorker
// ujednolicić w stanie poczatkowym wersje kiedy coś jest niezddefiniowane, np filter
