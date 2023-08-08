import { useCallback } from "react";
import debounce from "lodash/debounce";

function useDebounce(callback: Function, delay: number): Function {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFn = useCallback(
    debounce((...args) => callback(...args), delay),
    [delay]
  );

  return debouncedFn;
}

export default useDebounce;
