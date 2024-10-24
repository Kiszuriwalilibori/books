import { useMemo, useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Books, RootStateType } from "types";
import { useDispatchAction, useTypedSelector } from "hooks";
import { selectGetTableDataArgs } from "js/redux/selectors";
import { useUpdateNumberOfPages } from "./useUpdateNumberOfPages";

import getNumberOfPages from "js/BooksManager/tableHelpers/getNumberOfPages";

interface TableDataWorkerMessageEvent {
    singlePageData: Books;
    currentPageNumber: RootStateType["books"]["currentPageNumber"];
}

const useGetTableData = () => {
    const [newBooks, setNewBooks] = useState<Books>([] as Books);
    const { changePage } = useDispatchAction();

    const getTableDataWorker: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    const books = useTypedSelector(state => state.books.books, shallowEqual);

    const args = useSelector(selectGetTableDataArgs);
    useUpdateNumberOfPages(getNumberOfPages(books));
    const params = { ...args, books };

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.postMessage(params);
        }
    }, [getTableDataWorker, JSON.stringify(params)]);

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.onmessage = (e: MessageEvent<TableDataWorkerMessageEvent>) => {
                const { singlePageData, currentPageNumber } = { ...e.data };
                setNewBooks((prev: Books) => singlePageData);
                changePage(currentPageNumber);
            };
        }
    }, [getTableDataWorker]);

    return newBooks;
};

export default useGetTableData;
//todo jaka jest róxnica między window.Worker a getTableDataWorker
