import { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Books, RootStateType } from "types";
import { useDispatchAction, useTypedSelector } from "hooks";
import { selectGetTableDataArgs } from "js/redux/selectors";
import useGetMemoizedWorker from "./useGetWorker";

interface TableDataWorkerMessageEvent {
    singlePageData: Books;
    currentPageNumber: RootStateType["books"]["currentPageNumber"];
    numberOfPages: RootStateType["books"]["numberOfPages"];
}

const useGetTableData = () => {
    const [newBooks, setNewBooks] = useState<Books>([] as Books);
    const { changePage, setNumberOfPages } = useDispatchAction();
    const getTableDataWorker = useGetMemoizedWorker();
    const books = useTypedSelector(state => state.books.books, shallowEqual);
    const args = useSelector(selectGetTableDataArgs, shallowEqual);

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

export default useGetTableData;
//todo jaka jest róxnica między window.Worker a getTableDataWorker
// ujednolicić w stanie poczatkowym wersje kiedy coś jest niezddefiniowane, np filter
