import { useMemo, useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Books } from "types";

import { useTypedSelector } from "hooks";

import { selectGetTableDataArgs } from "js/redux/selectors";
import getNumberOfPages from "js/BooksManager/tableHelpers/getNumberOfPages";

import { useUpdateCurrentPageNumber } from "./useUpdateCurrentPageNumber";
import { useUpdateNumberOfPages } from "./useUpdateNumberOfPages";

const useGetTableData = () => {
    const [newBooks, setNewBooks] = useState<Books>([] as Books);

    const getTableDataWorker: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    const books = useTypedSelector(state => state.books.books, shallowEqual);

    const args = useSelector(selectGetTableDataArgs);

    useUpdateCurrentPageNumber(args.pageNumber, getNumberOfPages(books)); //todo prawdopodobnie już ni trzeba w getnumberofopages tego modyfikowac
    useUpdateNumberOfPages(getNumberOfPages(books));
    const params = { ...args, books };

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.postMessage(params);
        }
    }, [getTableDataWorker, JSON.stringify(params)]);

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.onmessage = (e: MessageEvent<Books>) => {
                setNewBooks((prev: any) => e.data);
            };
        }
    }, [getTableDataWorker]);

    return newBooks;
};

export default useGetTableData;
//todo jaka jest róxnica między window.Worker a getTableDataWorker
