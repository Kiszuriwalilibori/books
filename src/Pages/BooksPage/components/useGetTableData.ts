import { useMemo, useState, useEffect } from "react";

const useGetTableData = () => {
    const getBooks: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    const [newBooks, setNewBooks] = useState<number>(0);

    useEffect(() => {
        if (window.Worker) {
            getBooks.postMessage(2);
        }
    }, [getBooks]);

    useEffect(() => {
        if (window.Worker) {
            getBooks.onmessage = (e: MessageEvent<number>) => {
                setNewBooks((prev: any) => e.data);
            };
        }
    }, [getBooks]);

    return newBooks;
    //  useEffect(() => {
    //      console.log("newBooks", newBooks);
    //  }, [newBooks]);
};

export default useGetTableData;
