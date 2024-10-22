import { useDispatchAction } from "hooks";
import { useEffect } from "react";
import { RootStateType } from "types";

export const useUpdateCurrentPageNumber = (pageNumber: RootStateType["books"]["currentPageNumber"], limit: RootStateType["books"]["currentPageNumber"]) => {
    const { changePage } = useDispatchAction();
    useEffect(() => {
        if (pageNumber > limit) {
            pageNumber = limit;
            changePage(pageNumber);
        }
    }, [limit, pageNumber]);
};
