import useDispatchAction from "hooks/useDispatchAction";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { RootStateType } from "types/index";

export const useUpdateNumberOfPages = (newNumberOfPages: RootStateType["books"]["numberOfPages"]) => {
    const oldNumberOfPages = useTypedSelector(state => state.books.numberOfPages, shallowEqual);
    const { setNumberOfPages } = useDispatchAction();
    useEffect(() => {
        if (oldNumberOfPages !== newNumberOfPages) {
            setNumberOfPages(newNumberOfPages);
        }
    }, [oldNumberOfPages, newNumberOfPages]);
};
