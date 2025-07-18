import { useMemo } from "react";

export const useGetMemoizedWorker = () => {
    const getTableDataWorker: Worker = useMemo(() => new Worker(new URL("./getTableDataWorker.ts", import.meta.url)), []);
    return getTableDataWorker;
};

export default useGetMemoizedWorker;
