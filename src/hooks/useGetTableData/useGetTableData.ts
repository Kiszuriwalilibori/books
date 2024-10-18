import { useMemo, useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { FlatBookRecord } from "types";

import { useTypedSelector } from "hooks/useTypedSelector";
import { selectGetTableDataArgs } from "js/redux/selectors";

const useGetTableData = () => {
    const [newBooks, setNewBooks] = useState<FlatBookRecord[]>([] as FlatBookRecord[]);

    const getTableDataWorker: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    const books = useTypedSelector(state => state.books.books, shallowEqual);
    const args = useSelector(selectGetTableDataArgs);

    const params = { ...args, books };

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.postMessage(params);
        }
    }, [getTableDataWorker, JSON.stringify(params)]);

    useEffect(() => {
        if (window.Worker) {
            getTableDataWorker.onmessage = (e: MessageEvent<FlatBookRecord[]>) => {
                setNewBooks((prev: any) => e.data);
            };
        }
    }, [getTableDataWorker]);

    return newBooks;
};

export default useGetTableData;
//todo jaka jest róxnica między window.Worker a getTableDataWorker
