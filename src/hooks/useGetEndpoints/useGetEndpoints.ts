import { useEffect, useState } from "react";
import useGetWorker from "./useGetWorker";

import { useDispatchAction, useMessage } from "hooks";

export const useGetEndpoints = (countURL: string, booksURL: string) => {
    const showMessage = useMessage();
    const { setIsLoading } = useDispatchAction();
    const [endpoints, setEndpoints] = useState<string[]>([]);
    const worker = useGetWorker();
    useEffect(() => {
        if (window.Worker && countURL) {
            setIsLoading(true);
            worker.postMessage({ countURL, booksURL });
            worker.onerror = function (e) {
                showMessage.error("GetEndpointsWorker wywołał błąd: " + e.message);
            };
            worker.onmessage = (e: MessageEvent<any>) => {
                if (e.data.notFound) {
                    setIsLoading(false);
                    showMessage.warning("Nie znaleziono książek spełniających podane kryteria");
                }
                if (e.data.error) {
                    showMessage.error(e.data.error);
                } else {
                    if (e.data.endpoints && e.data.endpoints.length) {
                        setEndpoints([...e.data.endpoints]);
                    } else {
                        showMessage.warning("Nie znaleziono książek spełniających podane kryteria");
                    }
                }
            };
        }
    }, [worker, countURL]);

    useEffect(() => {}, [endpoints]);

    return endpoints;
};
export default useGetEndpoints;
