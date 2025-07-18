import { useCallback, useRef } from "react";
import debounce from "lodash/debounce";

/**
 * useDebouncedEvent - Returns a debounced callback that can accept arguments at call time.
 * @param fn - The function to debounce. Receives the same arguments as the debounced callback.
 * @param delay - Debounce delay in ms (default: 200)
 * @returns A debounced function with the same signature as fn.
 */
export function useDebouncedEvent<T extends (...args: any[]) => any>(
  fn: T,
  delay = 200
): (...args: Parameters<T>) => void {
  // useRef to persist the debounced function identity across renders
  const debouncedFn = useRef(
    debounce((...args: Parameters<T>) => fn(...args), delay)
  );

  // If fn or delay changes, update the debounced function
  // (rarely needed, but ensures latest fn is used)
  useCallback(() => {
    debouncedFn.current = debounce((...args: Parameters<T>) => fn(...args), delay);
  }, [fn, delay]);

  return useCallback((...args: Parameters<T>) => {
    debouncedFn.current(...args);
  }, []);
}

export default useDebouncedEvent;
