import { useNavigate } from "react-router-dom";
import useDispatchAction from "./useDispatchAction";
import useMessage from "./useMessage";
import { FetchSummary } from "types/types";
import Paths from "routing/Paths";
import { getValue } from "js/utils";
import { useMemo } from "react";

const INITIAL_FETCH_SUMMARY: FetchSummary = { isError: false, errorMessage: "", data: [] };

export const useGetTotalNumberOfBooks = () => {
    const showMessage = useMessage();
    const { showError } = useDispatchAction();
    let fetchSummary = INITIAL_FETCH_SUMMARY;

    const navigate = useNavigate();

    async function getTotalNumberOfBooks(path: string, controller: AbortController) {
        let result;
        const handleNotFound = () => {
            fetchSummary.isError = true;
            fetchSummary.errorMessage = "Nie znaleziono książek spełniających podane kryteria";

            navigate(Paths.error);
        };
        const handleError = (response: any) => {
            const message = getValue(response, "message");
            fetchSummary.isError = true;
            fetchSummary.errorMessage = message || "nieznany błąd";
            showError(fetchSummary);

            navigate(Paths.error);
        };

        const fetchResult = await fetch(path, { signal: controller.signal }).catch(error => {
            handleError(error);
        });
        if (fetchResult) {
            const response = await fetchResult.json();

            const totalNumber = getValue(response, "totalItems");
            if (!totalNumber) {
                handleNotFound();
            } else {
                console.log(totalNumber);
                result = totalNumber;
                //i tutaj trzeba wykorzystać totalnumber do promiseAllSetled
            }
        }
    }
    return getTotalNumberOfBooks;
};
