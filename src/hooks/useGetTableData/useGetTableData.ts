import { useMemo, useState, useEffect } from "react";
import { GetTableData, FlatBookRecord } from "types";

const useGetTableData = (params: GetTableData) => {
    const getBooks: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    const [newBooks, setNewBooks] = useState<FlatBookRecord[]>([] as FlatBookRecord[]);

    useEffect(() => {
        if (window.Worker) {
            getBooks.postMessage(params);
        }
    }, [getBooks, JSON.stringify(params)]);

    useEffect(() => {
        if (window.Worker) {
            getBooks.onmessage = (e: MessageEvent<FlatBookRecord[]>) => {
                setNewBooks((prev: any) => e.data);
            };
        }
    }, [getBooks]);

    return newBooks;
};

export default useGetTableData;
