import { useCallback } from "react";
import debounce from "lodash/debounce";

export const useCreateDebouncedCallback = (fn, obj = {}) => {
  const result = useCallback(
    debounce(target => {
      const id = target?.closest("button")?.dataset?.content;
      let args = obj;
      args.id = id;
      fn(args);
    }, 200),
    [fn]
  );
  return result;
};
