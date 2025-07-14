import { useMemo } from "react";

export const useGetMemoizedFetchBooksWorker = () => {
    const getMemoizedFetchBooksWorker: Worker = useMemo(() => new Worker(new URL("./fetchBooksWorker.ts", import.meta.url)), []);
    return getMemoizedFetchBooksWorker;
};

export default useGetMemoizedFetchBooksWorker;
