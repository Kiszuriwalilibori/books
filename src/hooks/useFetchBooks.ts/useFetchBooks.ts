import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatchAction, useMessage } from "hooks";
import { formatFetchedDataAsBooks } from "js/utils";
import { filtrate } from "js/tableHelpers";
import { FilteringCondition } from "types";

import Paths from "routing";
import useGetWorker from "./useGetWorker";

export const useFetchBooks = (arrayOfEndpoints: string[], controller: AbortController, filter: FilteringCondition | undefined) => {
    // let controller = new AbortController();
    const memoizedController: AbortController = useMemo(() => controller, []);
    const navigate = useNavigate();

    const { setIsLoading, setIsFromNetwork, storeBooks } = useDispatchAction();
    const worker = useGetWorker();
    const showMessage = useMessage();

    useEffect(() => {
        if (window.Worker && arrayOfEndpoints && arrayOfEndpoints.length && controller) {
            setIsLoading(true);
            worker.postMessage({ arrayOfEndpoints /*, controller*/ });
            worker.onerror = function (e) {
                showMessage.error("fetchBooksWorker wywołał błąd: " + e.message);
            };
            worker.onmessage = (e: MessageEvent<any>) => {
                if (e.data.errors) {
                    showMessage.error("Podczas pobierania conajmniej jednej książki wystąpił błąd:" + e.data.errors[0] + " Łącznie błędów: " + e.data.errors.length);
                }
                if (e.data.books) {
                    const formattedBooks = filtrate(formatFetchedDataAsBooks([...e.data.books]), filter);
                    storeBooks(formattedBooks);
                    setIsFromNetwork(true);
                    showMessage.success(`Poprawnie pobrano ${formattedBooks.length.toString()} książek`);
                    navigate(Paths.books);
                }
                if (!e.data.books && !e.data.errors.length) {
                    showMessage.warning("Nie znaleziono książek spełniających podane kryteria"); //świadomie rezygnuję z przekierowania do strony paths.error
                }

                controller?.abort();
                setIsLoading(false);
            };
        } else {
        }
        return () => controller?.abort();
    }, [worker, arrayOfEndpoints, memoizedController, filter]);
};

export default useFetchBooks;
