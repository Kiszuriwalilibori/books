import { useCallback } from "react";
import debounce from "lodash/debounce";

interface Obj {
  [key: string]: any;
}
export const useCreateDebouncedCallback = (fn: Function, obj = {} as Obj) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
