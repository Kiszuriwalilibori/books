import { useCallback } from "react";
import debounce from "lodash/debounce";

/**
 * Custom hook that returns a debounced version of a callback function.
 *
 * @param callback - The function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns {Function} The debounced callback function
 */
function useDebounce(callback: Function, delay: number): Function {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay]
  );

  return debouncedFn;
}

export default useDebounce;
