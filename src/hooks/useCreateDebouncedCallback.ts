import { useCallback } from "react";
import debounce from "lodash/debounce";

interface Args {
    [key: string]: any;
}
/**
 * Custom hook that returns a debounced callback for a given function and arguments.
 *
 * @param callback - The function to debounce
 * @param args - Arguments to pass to the callback
 * @returns {Function} The debounced callback function
 */
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
export default useCreateDebouncedCallback;
