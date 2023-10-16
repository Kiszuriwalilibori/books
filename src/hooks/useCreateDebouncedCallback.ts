import { useCallback } from "react";
import debounce from "lodash/debounce";

interface Args {
    [key: string]: any;
}
export const useCreateDebouncedCallback = (callback: Function, args = {} as Args) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedCallback = useCallback(
        debounce(() => {
            callback(args);
        }, 200),
        [callback]
    );

    return debouncedCallback;
};
